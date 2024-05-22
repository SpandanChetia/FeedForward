import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";
import { Typography } from "@mui/material";

const Inventory = () => {
  const { loggedIn } = useContext(AuthContext);
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemCost, setItemCost] = useState("");
  const [itemPurchaseDate, setItemPurchaseDate] = useState("");
  const [itemExpiryDate, setItemExpiryDate] = useState("");
  const [inventoryData, setInventoryData] = useState([]);

  useEffect(() => {
    if (loggedIn) {
      fetchInventoryData();
    }
  }, [loggedIn]);

  const fetchInventoryData = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await axios.get("http://localhost:5000/inventory", {
        headers: {
          Authorization: token,
        },
      });
 
      const data = response.data;
      setInventoryData(data);
    } catch (error) {
      console.log("Error fetching inventory data:", error);
    }
  };

  const calculateExpiryDays = (expiryDate) => {
    const currentDate = new Date();
    const diffTime = expiryDate - currentDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getRowClassName = (expiryDays) => {
    if (expiryDays <= 0) {
      return "expiry-red";
    } else if (expiryDays <= 14) {
      return "expiry-yellow";
    } else {
      return "expiry-green";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchInventoryData();
    const inventoryData = {
      itemName,
      itemQuantity,
      itemCost,
      itemPurchaseDate,
      itemExpiryDate,
      consumed: false,
    };

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await axios.post(
        "http://localhost:5000/inventory",
        inventoryData,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log("Item added successfully:");

      // Clear the form fields
      setItemName("");
      setItemQuantity("");
      setItemCost("");
      setItemPurchaseDate("");
      setItemExpiryDate("");
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleConsumedToggle = async (itemId, consumed) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await axios.put(
        `http://localhost:5000/inventory/${itemId}`,
        { consumed },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      fetchInventoryData();
      console.log("Consumed status updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating consumed status:", error);
    }
  };

  return (
    <div className="grocery-form-body">
      {loggedIn ? (
        <div>
          <div className="inventory-heading">
            <h1>
              YOUR <span className="inventory">INVENTORY</span>
            </h1>
          </div>
          <div className="grocery-form-container">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={itemName}
                placeholder="Item Name"
                onChange={(e) => setItemName(e.target.value)}
              />
              <input
                type="number"
                value={itemQuantity}
                placeholder="Item Quantity (in g)"
                onChange={(e) => setItemQuantity(e.target.value)}
              />
              <input
                type="number"
                value={itemCost}
                placeholder="Item Cost"
                onChange={(e) => setItemCost(e.target.value)}
              />
              <label>
                Item Purchase Date:
                <input
                  type="date"
                  value={itemPurchaseDate}
                  onChange={(e) => setItemPurchaseDate(e.target.value)}
                />
              </label>
              <label>
                Item Expiry Date:
                <input
                  type="date"
                  value={itemExpiryDate}
                  onChange={(e) => setItemExpiryDate(e.target.value)}
                />
              </label>
              <br />
              <button type="submit">Add Item</button>
            </form>

            <table>
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Item Quantity</th>
                  <th>Item Cost</th>
                  <th>Item Purchase Date</th>
                  <th>Item Expiry Date</th>
                  <th>Consumed</th>
                </tr>
              </thead>
              <tbody>
                {inventoryData.map((item) => {
                  const expiryDate = new Date(item.itemExpiryDate);
                  const expiryDays = calculateExpiryDays(expiryDate);
                  const rowClassName = getRowClassName(expiryDays);

                  return (
                    <tr key={item._id} className={rowClassName}>
                      <td>{item.itemName}</td>
                      <td>{item.itemQuantity}</td>
                      <td>{item.itemCost}</td>
                      <td>{new Date(item.itemPurchaseDate).toLocaleDateString()}</td>
                      <td>{new Date(item.itemExpiryDate).toLocaleDateString()}</td>
                      <td>
                        <input
                          type="checkbox"
                          checked={item.consumed}
                          onChange={() =>
                            handleConsumedToggle(item._id, !item.consumed)
                          }
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "700",
            color: "darkSalmon",
            mt: "50px",
            height:'90vh'
          }}
        >
          Please log in to view the Inventory.
        </Typography>
      )}
    </div>
  );
};

export default Inventory;
