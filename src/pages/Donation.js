import React from 'react'


const Donation = () => {
  return (
    <div className='Donation-body'>
    <div className="Donation-form">
        <h1>Donate Food</h1>
            <form id="donation-form">
            <label for="food-name">Food Name:</label>
            <input type="text" id="food-name" placeholder="Enter food name" required/>

            <label for="food-quantity">Quantity:</label>
            <input type="number" id="food-quantity" placeholder="Enter quantity" required/>

            <label for="expiry-date">Expiry Date:</label>
            <input type="date" id="expiry-date" required/>

            <label for="donor-name">Your Name:</label>
            <input type="text" id="donor-name" placeholder="Enter your name" required/>

            <label for="donor-email">Your Phone Number:</label>
            <input type="text" id="donor-email" placeholder="Enter your email" required/>

            <button type="submit">Donate</button>
            </form>
    </div>
    </div>
  )
}

export default Donation