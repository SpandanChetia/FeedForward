import {React,useContext} from "react";
import BCKVID from "../assets/backgroundVideo.mp4"
import { Link } from "react-router-dom";
 import { AuthContext } from "../AuthContext";

const Content = () => {
   const {loggedIn}=useContext(AuthContext);
  //  useEffect(() => {
  //   const btn = document.querySelector(`.${styles.btn}`);

  //   const handleMouseMove = (e) => {
  //     const x = e.clientX;
  //     const y = e.clientY;

  //     btn.style.transform = `translate(${x}px, ${y}px)`;
  //   };

  //   const handleMouseLeave = () => {
  //     btn.style.transform = 'translate(0, 0)';
  //   };

  //   document.addEventListener('mousemove', handleMouseMove);
  //   document.addEventListener('mouseleave', handleMouseLeave);

  //   return () => {
  //     document.removeEventListener('mousemove', handleMouseMove);
  //     document.removeEventListener('mouseleave', handleMouseLeave);
  //   };
  // }, []);


  
  return (
    <>
    <div id="layer"></div>
    <div className="video-background">
      <video autoPlay loop muted>
        <source src={BCKVID} type="video/mp4"/>
      </video>
    </div>
    <div className="content">
    <h1>
        <div className="main-heading">
          <div className = "head-sentence1">
          <span className="quote">" </span>
            <span className = "reduce">Reduce</span> <span className = "food-waste">Food Waste</span>
          </div>
          <div className = "head-sentence2"> 
            One Meal at a Time<span className="quote"> ! "</span>
          </div>
        </div>
      </h1>
      <p className = "paragraph">
        <span className="highlight">
          Feed Forward's technology allows businesses & people to revolutionize{" "}
          <br />
          food donation, empower communities, and foster sustainable solutions.
        </span>
      </p>
      {loggedIn ? (
          <div className="logged-in-text">
            <p>Welcome Back !</p>
          </div>
        ) : (
          <div className="signup-container">
            <Link className="signup-button" to="/signup">
              <span className="highlight2">SIGN UP TO SAVE</span>
            </Link>
          </div>)};
    </div>
    </>
  );
};

export default Content;
