import React, { useContext, useEffect,useState } from "react";
import { AuthContext } from "../AuthContext";
import L from 'leaflet';
import axios from "axios";

const Donation = () => {
  const { loggedIn } = useContext(AuthContext);

  const [donationData, setDonationData] = useState({
    name: "",
    email: "",
    amount: "",
    donationDate:new Date(),
    location: "",
    city: ""
  });


  const [donationMessage,setDonationMessage]=useState("");
  const handleDonationSubmit = async (e) => {
    // Make an API request to submit the donation data
    e.preventDefault();
    try{
      const token=localStorage.getItem("token");
      if(!token)
      {
        throw new Error("No token found");
      }
      const response=await axios.post("http://localhost:5000/donate",
      donationData,
      {
        headers: {
          Authorization: token,
        },
      }
      );
      const data=response.data;
      // console.log(data);
      setDonationMessage("Donation Made Successfully");
    }catch(error){
      if (error.response && error.response.data.error) {
        setDonationMessage(error.response.data.error);
      } else {
        setDonationMessage("Something went wrong");
      }
      console.log(error);
    }
  };
  

 
  
  useEffect(() => {
    // Function to initialize the map and enable auto-fill functionality
    const initializeMap = () => {
      const map = L.map('map').setView([40.7128, -74.0060], 12); // Set the initial map view

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(map);

      const marker = L.marker([40.7128, -74.0060], { draggable: true }).addTo(map); // Add a draggable marker

      // Update the address and city inputs when the marker is dragged
      marker.on('dragend', function (event) {
        const latlng = event.target.getLatLng();

        // Perform reverse geocoding to get the address based on marker's location
        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latlng.lat}&lon=${latlng.lng}&format=json`)
          .then((response) => response.json())
          .then((data) => {
            setDonationData((prevData) => ({
              ...prevData,
              location: data.display_name,
              city: data.address.city || ''
            }));
          });
      });
    };

    initializeMap();
  }, []);

  return (
    <div className="donation-body">
      <div className="head-description">
        <h1>Donate Food with <span className="site-name">fEEDfORWARD</span></h1>
        <p>"Food donation is not just about filling empty stomachs; it's about nourishing hope, 
        <br />
          feeding compassion, and cultivating a brighter future for all."</p>
      </div>
      <div className="main-container">
        <div className="donateform-container">
          <h1>DONATE FOOD</h1>
          <form>
            <div className="name-id">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name or Business Name"
                value={donationData.name}
  onChange={(e) =>
    setDonationData({ ...donationData, name: e.target.value })
  }
                required
              />
            </div>
            <div className="password">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={donationData.email}
  onChange={(e) =>
    setDonationData({ ...donationData, email: e.target.value })
  }
                required
              />
            </div>
            <div className="amount">
              <input
                type="number"
                id="amount"
                name="amount"
                placeholder="Estimated Amount"
                value={donationData.amount}
  onChange={(e) =>
    setDonationData({ ...donationData, amount: e.target.value })
  }
                required
              />
            </div>
            <div className="location">
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Address"
                value={donationData.location}
  onChange={(e) =>
    setDonationData({ ...donationData, location: e.target.value })
  }
                required
              />
            </div>
            <div className="city">
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                value={donationData.city}
  onChange={(e) =>
    setDonationData({ ...donationData, city: e.target.value })
  }
                required
              />
            </div>
          </form>
          {loggedIn ? (
            <button type="button" className="donate-btn" onClick={handleDonationSubmit}>
              DONATE
            </button>
          ) : (
            <button type="button" className="donate-btn" disabled>
              LOG IN TO DONATE
            </button>
            
          )}
          {donationMessage && (
              <p
                className={`message ${
                  donationMessage
                    ? donationMessage === "Donation Made Successfully"
                      ? "success"
                      : "error"
                    : ""
                }`}
              >
                {donationMessage}
              </p>
            )}
        </div>
        <div
          className="map-container"
          id="map"
          style={{ width: "50%", height: "510px" }}
        ></div>
      </div>
    </div>
  );
};

export default Donation;
