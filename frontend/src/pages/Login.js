import React, { useContext, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../AuthContext";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginMessage, setloginMessage] = useState("");
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();


  const {handleLoginSuccess}=useContext(AuthContext);
 

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        userData
      );
      const data = response.data;

      // Assuming login was successful and received a token in the response
      const token = data.token;
      // Store the token in local storage or state for future authenticated requests
      localStorage.setItem("token", token);


      setloginMessage("Login Successfully");
      // Redirect to the home page or any other desired page
      handleLoginSuccess();
      let timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      setTimeout(() => {
        clearInterval(timer);
        navigate("/");
      }, 5000);
    } catch (error) {
      if (error.response && error.response.data.error) {
        setloginMessage(error.response.data.error);
      } else {
        setloginMessage("Something went wrong");
      }
      console.log(error); // Handle the error
    }
  };

  return (
    <div className="login-body">
      <section className="login-body-container">
        <div className="login-container">
          <div className="form-container">
          <img
              src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
              alt="illustration"
              className="illustration"
            />
            <h1 className="opacity">LOGIN</h1>
            <form>
              <input
                type="email"
                placeholder="EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button className="login-button" onClick={handleLogin}>
                LOG IN
              </Button>
            </form>
            
            {loginMessage && (
              <p
                className={`message login-msg ${
                  loginMessage
                    ? loginMessage === "Login Successfully"
                      ? "success"
                      : "error"
                    : ""
                }`}
              >
                {loginMessage}
              </p>
            )}
            {loginMessage === "Login Successfully" && countdown > 0 && (
              <p className="countdown-timer login-timer">
                Redirecting in <span className="timer">{countdown}</span>{" "}
                seconds to HOME...
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
