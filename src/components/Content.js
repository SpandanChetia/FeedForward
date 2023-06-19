import React from "react";
import BCKVID from "../assets/backgroundVideo.mp4"


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
        <a className="signup-button" href="#">
          <span className="highlight2">SIGN UP TO SAVE</span>
        </a>
      </div>
    </div>
    </>
  );
};

export default Content;
