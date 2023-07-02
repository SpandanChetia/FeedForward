import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";

const Inventory = () => {
  const { loggedIn } = useContext(AuthContext);
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemCost, setItemCost] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const inventoryData = {
      itemName,
      itemQuantity,
      itemCost,
      itemExpiryDate,
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

      console.log("Item added successfully:", response.data);

      // Clear the form fields
      setItemName("");
      setItemQuantity("");
      setItemCost("");
      setItemExpiryDate("");
    } catch (error) {
      console.error("Error adding item:", error);
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
                  placeholder="Item Quantity"
                  onChange={(e) => setItemQuantity(e.target.value)}
                />
              
              
                <input
                  type="number"
                  value={itemCost}
                  placeholder="Item Cost"
                  onChange={(e) => setItemCost(e.target.value)}
                />
              
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

            {/* <h2>Inventory Table</h2> */}
            <table>
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Item Quantity</th>
                  <th>Item Cost</th>
                  <th>Item Expiry Date</th>
                </tr>
              </thead>
              <tbody>
                {inventoryData.map((item) => (
                  <tr key={item._id}>
                    <td>{item.itemName}</td>
                    <td>{item.itemQuantity}</td>
                    <td>{item.itemCost}</td>
                    <td>{item.itemExpiryDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p>Please log in to view the inventory.</p>
      )}
    </div>
  );
};

export default Inventory;
