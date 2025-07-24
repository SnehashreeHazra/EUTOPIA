import React from "react";
import "./Home.css";
import logo from "../../assets/Eutopia-logo 1.png"

const Home = () => {
  return (
    <div className="home">
      <div className="home-banner">
        <div className="uni-container">
          <div className="header">
            <img src={logo} alt="" />
            <div className="navbar">
              <p>Home</p>
              <p>About Us</p>
              <p>Pricing</p>
            </div>
            <button className="header-btn">Get Free Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
