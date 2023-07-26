import React from "react";

const Waste = () => {
  return (
    <div>
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
            <form method="POST">
              <div className="waste-form-group">
                <input
                  type="text"
                  id="food-item"
                  name="food-item"
                  placeholder="Food Item"
                  required
                />
              </div>
              <div className="waste-form-group">
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  placeholder="Quantity Wasted (in grams)"
                  required
                />
              </div>
              <div className="waste-form-group">
                <input
                  type="text"
                  id="reason"
                  name="reason"
                  placeholder="Reason for Waste e.g., Expired, Leftovers, Overcooked, etc."
                  required
                />
              </div>
              <div className="waste-form-group">
                <input
                  type="date"
                  placeholder="Date of Waste"
                  value="yyyy-mm-dd"
                  required
                />
              </div>
              <div className="waste-form-group">
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  placeholder="Any additional details or comments about the food waste"
                ></textarea>
              </div>
            </form>
            <a href="#msg">
              <button type="button" className="enter-btn">
                ENTER
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waste;
