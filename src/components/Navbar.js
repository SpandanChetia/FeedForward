import React from "react";

const Navbar = () => {
  return (
    
      <nav className="navbar">
        <div className="logo">
          <a className="button" href="#">
            fEED
            <br />
            fORWARD
          </a>
        </div>
        <div className="reveal-text">
          <ul className="buttons">
            <li>
              <a className="button" href="#">
                The Problem
              </a>
            </li>
            <li>
              <a className="button" href="#">
                The Solutions
              </a>
            </li>
            <li>
              <a className="button" href="#">
                Donate
              </a>
            </li>
            <li>
              <a className="button" href="#">
                Inventory
              </a>
            </li>
            <li>
              <a className="button" href="#">
                Nourish Initiative
              </a>
            </li>
            <li>
              <a className="button" href="#">
                Recipes
              </a>
            </li>
            <li>
              <a className="button" href="#">
                Eco-Progress
              </a>
            </li>
          </ul>
        </div>
        <div className="join-button">
          <a className="button" href="#">
            LOG IN
          </a>
        </div>
      </nav>
    
  );
};

export default Navbar;
