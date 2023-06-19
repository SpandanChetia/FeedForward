import React from "react";
import BCKVID from "../assets/backgroundVideo.mp4"
import { Link } from "react-router-dom";


const Content = () => {
  return (
    <>
    <div className="video-background">
      <video autoPlay loop muted>
        <source src={BCKVID} type="video/mp4"/>
      </video>
    </div>
    <div className="content">
      <h1>
        Reduce Food Waste
        <br />
        One Meal at a Time
      </h1>
      <p>
        <span className="highlight">
          Feed Forward's technology allows businesses & people to revolutionize{" "}
          <br />
          food donation, empower communities, and foster sustainable solutions.
        </span>
      </p>
      <div className="signup-container">
        <Link className="signup-button" to='/signup'>
          <span className="highlight2">SIGN UP TO SAVE</span>
        </Link>
      </div>
    </div>
    </>
  );
};

export default Content;
