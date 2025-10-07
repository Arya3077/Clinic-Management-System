import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import img2 from './img2.png'

const UserPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const name = location.state?.name || "User";

  const cardStyle = {
    backgroundColor: "#ECD4EC",
    color: "#39063C",
    padding: "30px",
    borderRadius: "12px",
    textAlign: "center",
    width: "200px",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.2s",
  };

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div>
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" , display:"flex",backgroundColor:"#A987A8", height:"250px",width:"1200px", marginTop:"50px", marginLeft:"170px", borderRadius:"20px"}}>
      <img style={{height:"200px", width:"200px"}}src={img2} alt="Logo" />
      <h1 style={{ color: "#39063C", marginTop:"100px", marginLeft:"100px",}}>Welcome Back, {name}!</h1>
      </div>
      <p style={{ fontSize: "20px", color: "#39063C",  }}>
        Here is your dashboard. Choose an action below:
      </p>

      <div style={{ display: "flex", gap: "30px", marginTop: "40px" }}>
        <div
          style={cardStyle}
          onClick={() => handleCardClick("/appointments")}
          onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
        >
          Appointments
        </div>

        <div
          style={cardStyle}
          onClick={() => handleCardClick("/prescription")}
          onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
        >
          Prescription
        </div>

        <div
          style={cardStyle}
          onClick={() => handleCardClick("/doctors")}
          onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
        >
          Doctors Available
        </div>
      </div>
    </div>
  );
};

export default UserPage;

