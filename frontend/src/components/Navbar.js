import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../AuthContext";

const Navbar = () => {
  const { loggedIn, handleLogout } = useContext(AuthContext);

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
            <Link className="button" href="#problems">
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
            <Link className="button" to="/inventory">
              Inventory
            </Link>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn">Chef's Corner</button>
              <div className="dropdown-content">
                <Link className="dropdownTxt" to="/recipeSearch">Recipe Search</Link>
                <Link className="dropdownTxt" to="/nutriAnalysis">Nutrition Analysis</Link>
                <Link className="dropdownTxt" to="/wasteAnalysis">Waste Analysis</Link>
              </div>
            </div>
          </li>
          <li>
            <Link className="button" to="/ecopro">
              Kitchen Analytics
            </Link>
          </li>
        </ul>
      </div>
      {loggedIn ? (
        <div className="join-button">
          <Link className="join-button button" to="/" onClick={handleLogout}>
            LOG OUT
          </Link>
        </div>
      ) : (
        <div className="join-button">
          <Link className="join-button button" to="/login">
            LOG IN
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
