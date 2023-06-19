import React, { useState } from "react";
import { Stack } from "@mui/material";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission or validation logic here
    // You can use the entered username, email, and password values

    // Example: Logging the entered values
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const onSuccess = (googleUser) => {
    const profile = googleUser.getBasicProfile();
    const idToken = googleUser.getAuthResponse().id_token;

    // Send the user's ID token to your server for verification and further processing
    // You can use AJAX or fetch to send the token to your server-side endpoint

    // Example using fetch:
    fetch("/verifyToken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idToken: idToken }),
    })
      .then(function (response) {
        if (response.ok) {
          // User successfully signed up
          console.log("Signed up successfully!");
        } else {
          // Error occurred during sign-up
          console.log("Sign-up failed:", response.statusText);
        }
      })
      .catch(function (error) {
        console.log("Error occurred during sign-up:", error);
      });
  };

  const onFailure = (error) => {
    console.log("Sign-up failed:", error);
  };

  const renderButton = () => {
    window.gapi.load("auth2", function () {
      window.gapi.auth2
        .init({
          client_id: "YOUR_CLIENT_ID",
        })
        .then(function () {
          window.gapi.signin2.render("google-signin-container", {
            scope: "profile email",
            width: 200,
            height: 40,
            longtitle: true,
            theme: "dark",
            onsuccess: onSuccess,
            onfailure: onFailure,
          });
        })
        .catch(function (error) {
          console.log("Google sign-in initialization failed:", error);
        });
    });
  };

  return (
    <div className="signup-body">
      <Stack className="signup-container">
        <h1>Sign Up</h1>
        <form id="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <div id="google-signin-container"></div>
      </Stack>
    </div>
  );
};

export default SignUp;
