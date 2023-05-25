import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
  const handleDashboard = () => {
    navigate("/dashboard");
  };
  const handleAdministrator = () => {
    navigate("/cars");
  };
  return (
    <div className="d-flex">
      <div
        className="px-3 py-1"
        style={{ backgroundColor: "#0D28A6", height: "600px", width: "100px" }}
      >
        <div
          style={{ width: "97%", height: "40px", backgroundColor: "#E5E5E5" }}
        ></div>
        <img src="./Assets/Home.png" alt=" " onClick={handleDashboard} />
        <img
          src="./Assets/Administrator.png"
          alt=" "
          onClick={handleAdministrator}
        />
      </div>
    </div>
  );
};
export default NavigationBar;
