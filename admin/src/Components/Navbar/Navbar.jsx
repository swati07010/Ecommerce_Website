//import React from "react";
import navlogo from "../../assets/nav-logo.svg";
import navprofile from "../../assets/nav-profile.svg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} alt="" className="nav-logo" />
      <img src={navprofile} alt="" className="navprofile" />
    </div>
  );
};

export default Navbar;
