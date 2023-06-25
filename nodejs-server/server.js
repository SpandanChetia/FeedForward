const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

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
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Terminate the server on connection error
  });

// Create a schema and model for the user
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  userType: String // "household" or "business"
});

const User = mongoose.model("User", userSchema);

// Define a route to handle form submissions
app.post("/signup", (req, res) => {
  const { name, email, password, phone, userType } = req.body;

  // Create a new user instance
  const newUser = new User({
    name,
    email,
    password,
    phone,
    userType
  });

  // Save the user to the database
  newUser
    .save()
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Failed to save user" });
    });
});

