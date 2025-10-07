import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import img1 from './img1.png';

const Navbar = () => {
  return (
    <div className="nav">
      {/* Logo */}
      <div className="logo">
        <img src={img1} alt="Logo" />
      </div>

      {/* Center links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/doctor">Find a Doctor</Link>
        <Link to="/feedback">Feedback</Link>
      </div>

      {/* Signup/Login button */}
      <div className="nav-button">
        <Link to="/sign">
          <button>Login/Signup</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar


