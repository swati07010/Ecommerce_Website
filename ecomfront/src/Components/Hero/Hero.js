import React from "react";
import "./Hero.css";
import hero_imae from "../Assets/hero_image.png";
import arrow_icon from "../Assets/arrow.png";
import hand_icon from "../Assets/hand_icon.png";
function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_imae} alt="" />
      </div>
    </div>
  );
}

export default Hero;
