import React, { useState } from "react";
import logo from "./logo.png"; 
import "./Sign.css";
import { handleGoogleLogin } from "../config";
import { handleSubmit } from "../config";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); 
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [name, setName] = useState("");



  const handleSignIn = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // Replace with backend / Firebase
    console.log("Email:", email, "Password:", password);

    if (email === "doctor@gmail.com" && password === "123" && role === "doctor") {
      navigate("/doctorpage");
    } else if (email === "admin@gmail.com" && password === "123" && role === "admin") {
      navigate("/adminpage");
    } else if (email === "user@gmail.com" && password === "123" && role === "user") {
      navigate("/userpage");
    } else {
      setError("Invalid credentials or wrong role");
    }
  };

  const handleForgotPassword = () => {
    // Navigate to password reset or call Firebase resetPassword
    alert("Redirect to Forgot Password page");
  };

  //const handleGoogleSignIn = () => {
    // Replace with Google OAuth logic
    //alert("Google Sign-In clicked 🚀");
  //};

  return (
    <div className="cb">
      <div className="box">
        <img className="img5" src={logo} alt="Description" />

        <form   className="box1" onSubmit={(e) => handleSignIn(e)}>

          <input
            type="email"
            className="u1"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="u1"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <select 
            className="u1" 
            value={role} 
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="doctor">Doctor</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit" className="u2">Sign In</button>

          <p className="forgot" onClick={handleForgotPassword}>
            Forgot Password?
          </p>

          <div className="divider">OR</div>

          <button type="button" className="google-btn"  onClick={handleGoogleLogin}>
            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="google" className="g-icon"/> 
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
