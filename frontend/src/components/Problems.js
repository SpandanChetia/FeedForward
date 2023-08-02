import React from 'react';

import OverBuying from "../assets/Problems.jpeg";
import Wastemoney from "../assets/wasted-money.jpg";
import Envimpact from "../assets/environment-impact.jpg";
import Hunger from "../assets/hunger.jpg";
import Resources from "../assets/resources.jpg";
import Community from "../assets/community.jpg";
import Sustainable from "../assets/sustainable.jpg";
import underline1 from "../assets/underline-heading.png";
import Arrow1 from "../assets/arrow1.png";
import Sun from "../assets/Highlight_05.png";
import Smallstars from "../assets/small-stars.png";
import Smallstars2 from "../assets/small-stars2.png";

const Problems = () => {
  return (
    <div id="problems">
      <div class="the-problems">
        <div class="problems-section1">
            <div class="heading-highlights">
                <img id="highlight-heading" src={Sun} alt="Sun Photo"/><h1 id="heading-problems">Why Was FeedForward <span className="created"> Created ? <img id="underline1" src ={underline1} alt = "underline"/></span></h1><img id="arrow1" src={Arrow1} alt="arrow"/>
                </div>          
            <div class="cards">
                <div class="card1">
                    <img id="WasteMoney" src={Wastemoney} alt ="Waste of Money photo"/>
                    <h1>Wasted Money</h1>
                    <p>Food waste results in significant financial losses. Around the world, 
                        it is estimated that <span id="para-highlights">we collectively waste ₹92,000 crores per annum on discarded food. </span> 
                        By reducing waste, we can save money and support businesses.</p></div>
                <div class="card2">
                    <img id="Envtimpact" src={Envimpact} alt="Environment Impact photo"/>
                    <h1>Environmental Impact</h1>
                    <p>Food waste has a considerable environmental footprint. Each year, it is estimated that wasted food contributes 
                        [insert estimated amount] of global CO2 emissions. 
                        By minimizing waste, we can significantly reduce our carbon footprint and help protect our environment.</p></div>
                <div class="card3">
                <img id="hunger" src={Hunger} alt="Poor hungry children photo"/>
                    <h1>Fighting Hunger</h1><p>While we throw away food, many people in our neighborhood and beyond face hunger and food insecurity. 
                    By reducing waste, we can help ensure that everyone has access to nourishing meals and contribute to a more food-secure community.</p></div>
                <div class="card4">
                <img id="resources" src={Resources} alt="Farming photo"/>
                    <h1>Efficient Resource Use</h1>
                    <p>Wasting food means wasting valuable resources like water, energy, and land. By being mindful of our consumption and minimizing waste, 
                        we can make the most of these resources and create a sustainable neighborhood.</p></div>
                <div class="card5">
                <img id="community" src={Community} alt="Community photo"/>
                    <h1>Community Responsibility</h1>
                    <p>As a close-knit neighborhood, we have a responsibility to each other and the planet. By reducing food waste, 
                        we show care for our community, demonstrate good stewardship of resources, and set a positive example for others.</p></div>
                <div class="card6">
                <img id="sustainable" src={Sustainable} alt="Climate Protesters"/>
                <h1>Building a Sustainable Future</h1>
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
