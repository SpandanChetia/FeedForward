import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link className="button" to="/">
          fEED
          <br />
          fORWARD
        </Link>
      </div>
      <div className="reveal-text">
        <ul className="buttons">
          <li>
            <Link className="button" href="#">
              The Problem
            </Link>
          </li>
          <li>
            <Link className="button" href="#">
              The Solutions
            </Link>
          </li>
          <li>
            <Link className="button" to="/donation">
              Donate
            </Link>
          </li>
          <li>
            <Link className="button" to='/inventory'>
              Inventory
            </Link>
          </li>
          <li>
            <Link className="button" to='/nourishinitiative'>
              Nourish Initiative
            </Link>
          </li>
          <li>
          </li>
          <li>
            <Link className="button" href="#">
              Eco-Progress
            </Link>
          </li>
        </ul>
      </div>
      <div className="join-button">
        <Link className="join-button button" to='/login'>
          LOG IN        
      </Link>
      </div>
    </nav>
  );
};

export default Navbar;
