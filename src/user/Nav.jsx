import React from "react";
import { Link, useNavigate } from "react-router-dom";

const UserNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/sign"); // redirect to login
  };

  return (
    <nav
      style={{
        backgroundColor: "#ECD4EC",
        color: "#39063C",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius:"20px",
        marginTop:"5px"

      }}
    >
      {/* Left: Title */}
      <h2 style={{ margin: 0, color: "#39063C" }}>User Dashboard</h2>

      {/* Middle: Links */}
      <div style={{ display: "flex", gap: "20px", fontWeight: "bold" }}>
        <Link to="/userpage"style={{ color: "#39063C", textDecoration: "none" }}>Home</Link>
        <Link to="/appointments" style={{ color: "#39063C", textDecoration: "none" }}>Appointments</Link>
        <Link to="/reports" style={{ color: "#39063C", textDecoration: "none" }}>Reports</Link>
        <Link to="/doctorsa" style={{ color: "#39063C", textDecoration: "none" }}>Doctors Available</Link>
      </div>

      {/* Right: Logout */}
      <button
        onClick={handleLogout}
        style={{
          background: "#39063C",
          color: "#ECD4EC",
          border: "none",
          
          borderRadius: "5px",
          padding: "5px 10px",
          cursor: "pointer",
          fontWeight: "bold",
          
          
        }}
      >
        Logout
      </button>
    </nav>
  );
};

export default UserNavbar;
