const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

// MongoDB configuration
const mongoURI = "mongodb://127.0.0.1:27017/feedforward";
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("FeedForward Account DB connected"))
  .catch((err) => {
    console.error("FeedForward Account DB connection error:", err);
    process.exit(1); // Terminate the server on connection error
  });

// Define a middleware function to verify the token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(
    token,
    "78f15b5705f3cd8d8c39ec495b9ac2f6637bf215eaf3dbf02e9f7549320a483b",
    (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ error: "Invalid token" });
      }

      req.userId = decodedToken.userId;
      next();
    }
  );
};



// Create a schema and model for the user
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  userType: String, // "household" or "business"
});

const User = mongoose.model("User", userSchema);

// Define a route to handle form submissions for signup
app.post("/signup", (req, res) => {
  const { name, email, password, phone, userType } = req.body;

  if (!name || !email || !password || !phone || !userType) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error("Failed to hash password:", err);
      return res.status(500).json({ error: "Failed to save user" });
    }

    // Create a new user instance
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      userType,
    });

    // Save the user to the database
    newUser
      .save()
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        if (err.code === 11000) {
          // Duplicate key error (email already exists)
          res.status(400).json({ error: "Email already exists" });
        } else {
          console.log(err);
          res.status(500).json({ error: "Failed to save user" });
        }
      });
  });
});

// Define a route to handle form submissions for login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Missing email or password" });
  }

  // Find the user in the database based on the provided email
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Invalid email or password" });
      }

      // Compare the provided password with the stored password
      bcrypt.compare(password, user.password).then((passwordMatch) => {
        if (!passwordMatch) {
          return res.status(401).json({ error: "Invalid email or password" });
        }

        // Create and sign a JWT token
        const token = jwt.sign(
          { userId: user._id },
          "78f15b5705f3cd8d8c39ec495b9ac2f6637bf215eaf3dbf02e9f7549320a483b"
        );

        // Return the token in the response
        res.json({ token });
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.message });
    });
});

/*Donation Server*/

// Create a schema and model for the donation in the donation database
const donationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: String,
  email: String,
  amount: Number,
  donationDate: Date,
  location: String,
  city: String,
});

const Donation = mongoose.model("Donation", donationSchema);

// Define a route to handle form submissions for donation
app.post("/donate", verifyToken, (req, res) => {
  const { name, email, amount, donationDate, location, city } = req.body;
  const userId = req.userId;
  if (!name || !email || !amount || !donationDate || !location || !city) {
    return res
      .status(400)
      .json({ error: "Missing required donation data fields" });
  }

  // Create a new donation instance
  const newDonation = new Donation({
    user: userId,
    name,
    email,
    amount,
    donationDate,
    location,
    city,
  });

  // Save the donation to the donation database
  newDonation
    .save() 
    .then((donation) => {
      res.json(donation);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to save donation" });
    });
});

app.get("/donation", verifyToken, (req, res) => {
  const userId = req.userId;

  Donation.find({ user: userId })
    .then((items) => {
      res.json(items);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to fetch donation datas" });
    });
});

/*Inventory Page */

// Create a schema and model for the inventory item
const inventorySchema = new mongoose.Schema({
  itemName: String,
  itemQuantity: Number,
  itemCost: Number,
  itemPurchaseDate: Date,
  itemExpiryDate: Date,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  consumed: { type: Boolean, default: false },
});

const InventoryItem = mongoose.model("InventoryItem", inventorySchema);

// Define a route to handle form submissions for adding an item to the inventory
app.post("/inventory", verifyToken, (req, res) => {
  const { itemName, itemQuantity, itemCost, itemPurchaseDate, itemExpiryDate } =
    req.body;
  const userId = req.userId;

  if (
    !itemName ||
    !itemQuantity ||
    !itemCost ||
    !itemPurchaseDate ||
    !itemExpiryDate
  ) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const newInventoryItem = new InventoryItem({
    itemName,
    itemQuantity,
    itemCost,
    itemPurchaseDate,
    itemExpiryDate,
    user: userId,
  });

  newInventoryItem
    .save()
    .then((item) => {
      res.json(item);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to add item to inventory" });
    });
});

// Define a route to fetch inventory items for a specific user
app.get("/inventory", verifyToken, (req, res) => {
  const userId = req.userId;

  InventoryItem.find({ user: userId })
    .then((items) => {
      res.json(items);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to fetch inventory items" });
    });
});

// Define a route to toggle the consumed status of an inventory item
app.put("/inventory/:id", verifyToken, (req, res) => {
  const itemId = req.params.id;
  const userId = req.userId;

  InventoryItem.findOne({ _id: itemId, user: userId })
    .then((item) => {
      if (!item) {
        return res.status(404).json({ error: "Inventory item not found" });
      }

      // Toggle the consumed status
      item.consumed = !item.consumed;

      item
        .save()
        .then((updatedItem) => {
          res.json(updatedItem);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ error: "Failed to update inventory item" });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to find inventory item" });
    });
});

/*Food Waste Data DB*/

//Creating Schema for Waste Data
const wasteSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  foodItem: String,
  foodQuantity: Number,
  foodReason: String,
  foodWasteDate: Date,
  foodAddTxt: String,
});

const WasteData = mongoose.model("WasteData", wasteSchema);

//Route to handle WasteData Submission
app.post("/waste", verifyToken, (req, res) => {
  const { foodItem, foodQuantity, foodReason, foodWasteDate, foodAddTxt } =
    req.body;
    const userId = req.userId;
  if (
    !foodItem ||
    !foodQuantity ||
    !foodReason ||
    !foodWasteDate ||
    !foodAddTxt
  ) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  const newWasteData = new WasteData({
    user: userId,
    foodItem,
    foodQuantity,
    foodReason,
    foodWasteDate,
    foodAddTxt,
  });

  //Save the Data
  newWasteData
    .save()
    .then((waste) => {
      res.json(waste);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to Save Waste Data" });
    });
});
// Define a route to fetch waste quantity for a specific user
app.get("/waste", verifyToken, (req, res) => {
  const userId = req.userId;

  WasteData.find({ user: userId })
    .then((items) => {
      res.json(items);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to fetch inventory items" });
    });
});