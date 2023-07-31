import React from 'react';

import OverBuying from "../assets/Problems.jpeg";

const Problems = () => {
  return (
    <div id="problems">
      <div class="the-problems">
        <div class="problems-section1">
            <h1 id="heading-problems">Why Was FeedForward Created ?</h1>
            <div class="cards">
                <div class="card1"><h1>Wasted Money</h1>
                    <p>Food waste results in significant financial losses. Around the world, 
                        it is estimated that we collectively waste [insert estimated amount] of dollars each year on discarded food. 
                        By reducing waste, we can save money and support businesses.</p></div>
                <div class="card2"><h1>Environmental Impact</h1>
                    <p>Food waste has a considerable environmental footprint. Each year, it is estimated that wasted food contributes 
                        [insert estimated amount] of global CO2 emissions. 
                        By minimizing waste, we can significantly reduce our carbon footprint and help protect our environment.</p></div>
                <div class="card3"><h1>Fighting Hunger</h1><p>While we throw away food, many people in our neighborhood and beyond face hunger and food insecurity. 
                    By reducing waste, we can help ensure that everyone has access to nourishing meals and contribute to a more food-secure community.</p></div>
                <div class="card1"><h1>Efficient Resource Use</h1>
                    <p>Wasting food means wasting valuable resources like water, energy, and land. By being mindful of our consumption and minimizing waste, 
                        we can make the most of these resources and create a sustainable neighborhood.</p></div>
                <div class="card1"><h1>Community Responsibility</h1>
                    <p>As a close-knit neighborhood, we have a responsibility to each other and the planet. By reducing food waste, 
                        we show care for our community, demonstrate good stewardship of resources, and set a positive example for others.</p></div>
                <div class="card1"><h1>Building a Sustainable Future</h1>
                    <p> Food waste highlights inefficiencies in our food system. By addressing this issue, 
                        we can contribute to a more efficient and resilient food system that benefits everyone in our neighborhood. 
                        Together, we can create a sustainable future.</p></div>    
            </div>
        </div>
        <div class="collage">
            <img id="background-image" src={OverBuying} alt="Background Image"/>
        </div>
    </div>
    </div>
  );
};

export default Problems;
