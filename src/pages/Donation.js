import React, { useEffect } from 'react';

const Donation = () => {
  useEffect(() => {
    // Function to initialize the map and enable auto-complete functionality
    function initializeMap() {
      const input = document.getElementById('location');
      const autocomplete = new window.google.maps.places.Autocomplete(input);

      autocomplete.addListener('place_changed', function () {
        const place = autocomplete.getPlace();
        if (!place.geometry) {
          window.alert("No details available for input: '" + place.name + "'");
          return;
        }

        // Fill the auto-filled address and city inputs
        document.getElementById('auto-address').value = place.formatted_address;
        document.getElementById('auto-city').value = extractCityFromAddress(place);
      });

      // Create the map and center it on a default location
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 12
      });

      // Set the map to listen for changes in the autocomplete input
      autocomplete.bindTo('bounds', map);
    }

    // Helper function to extract the city from the place address
    function extractCityFromAddress(place) {
      for (const component of place.address_components) {
        if (component.types.includes('locality')) {
          return component.long_name;
        }
      }
      return '';
    }

    // Call the initializeMap function when the component mounts
    initializeMap();
  }, []);

  return (
    <div className='donation-body'>
      <div className="head-description">
        <h1>Donate Food with <span className="site-name">fEEDfORWARD</span></h1>
        <p>"Food donation is not just about filling empty stomachs; it's about nourishing hope, feeding compassion, and cultivating a brighter future for all."</p>
      </div>
      <div className="main-container">
        <div className="donateform-container">
          <h1>Donate Food</h1>
          <form>
            <div className="name-id">
              <input type="text" id="name" name="name" placeholder="Username or Business Name" required />
            </div>
            <div className="password">
              <input type="password" id="password" name="password" placeholder="Password" required />
            </div>
            <div className="amount">
              <input type="number" id="amount" name="amount" placeholder="Estimated Amount" required />
            </div>
            <div className="location">
              <input type="text" id="location" name="location" placeholder="Auto-filled Address" required />
            </div>
            <div className="city">
              <input type="text" id="auto-city" name="auto-city" placeholder="Auto-filled City" required />
            </div>
          </form>
          <button type="button" className="donate-btn">DONATE</button>
        </div>
        <div className="map-container" id="map" style={{ width: '50%', height: '510px' }}></div>
      </div>
    </div>
  );
};

export default Donation;
