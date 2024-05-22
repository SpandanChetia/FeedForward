import React,{ useContext,useState } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";
import { Typography } from "@mui/material";


const Waste = () => {
  const { loggedIn } = useContext(AuthContext);
  const [foodItem, setFoodItem] = useState("");
  const [foodQuantity, setFoodQuantity] = useState("");
  const [foodReason, setFoodReason] = useState("");
  const [foodWasteDate, setFoodWasteDate] = useState("");
  const [foodAddTxt, setFoodAddTxt] = useState("");
  const [wasteMessage,setWasteMessage]=useState("");


  const handleSubmit= async (e) => {
    e.preventDefault();

    const FoodWasteData={
      foodItem,
      foodQuantity,
      foodReason,
      foodWasteDate,
      foodAddTxt,
    };
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await axios.post(
        "http://localhost:5000/waste",
        FoodWasteData,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log("Item added successfully:", response.data);
      setWasteMessage("Waste Items Added Successfully")
      // Clear the form fields
      setFoodItem("");
      setFoodQuantity("");
      setFoodReason("");
      setFoodWasteDate("");
      setFoodAddTxt("");
    } catch (error) {
      if (error.response && error.response.data.error) {
        setWasteMessage(error.response.data.error);
      } else {
        setWasteMessage("Something went wrong");
      }
      console.log(error);
    
    }
  };
  


  
  return (
    <div>
      {loggedIn?(
      <div className="foodwaste-body">
        <div className="waste-wrapper">
          <div className="waste-description">
            <h1 id="msg">
              Share the extent of your <span className="site-name">foodwaste</span>{" "}
              and provide us with the necessary details.{" "}
            </h1>
            <p>Help Us Understand Your Food Waste</p>
          </div>
        </div>
        <p className="message"></p>
        <p className="waste-countdown-timer"></p>
        <div className="waste-form-wrapper">
          <div className="waste-container">
            <h1>Food Waste Details</h1>
            <form onSubmit={handleSubmit}>
              <div className="waste-form-group">
                <input
                  type="text"
                  value={foodItem}
                  id="food-item"
                  name="food-item"
                  placeholder="Food Item"
                  onChange={(e)=>setFoodItem(e.target.value)}
                  required
                />
              </div>
              <div className="waste-form-group">
                <input
                  type="number"
                  value={foodQuantity}
                  id="quantity"
                  name="quantity"
                  placeholder="Quantity Wasted (in grams)"
                  onChange={(e)=>setFoodQuantity(e.target.value)}
                  required
                />
              </div>
              <div className="waste-form-group">
                <input
                  type="text"
                  id="reason"
                  name="reason"
                  value={foodReason}
                  placeholder="Reason for Waste e.g., Expired, Leftovers, Overcooked, etc."
                  onChange={(e)=>setFoodReason(e.target.value)}
                  required
                />
              </div>
              <div className="waste-form-group">
                <input
                  type="date"
                  placeholder="Date of Waste"
                  value={foodWasteDate}
                  onChange={(e)=>setFoodWasteDate(e.target.value)}
                  required
                />
              </div>
              <div className="waste-form-group">
                <textarea
                  value={foodAddTxt}
                  id="additionalNotes"
                  name="additionalNotes"
                  placeholder="Any additional details or comments about the food waste"
                  onChange={(e)=>setFoodAddTxt(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="enter-btn">
                ADD
              </button>
            </form>
            
              
            
          </div>
        </div>
        {wasteMessage && (
              <p
                className={`message ${
                  wasteMessage
                    ? wasteMessage === "Waste Items Added Successfully"
                      ? "success"
                      : "error"
                    : ""
                }`}
              >
                {wasteMessage}
              </p>
            )}
      </div>):(
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
        Please log in to view the Waste Analysis.
      </Typography>
      )}
    </div>
  );
};

export default Waste;
