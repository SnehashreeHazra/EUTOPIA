import React from "react";
import "./Home.css";
import logo from "../../assets/Eutopia-logo 1.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home-banner">
        <div className="uni-container">
          <div className="header">
            <img className="header-logo" src={logo} alt="" />
            <div className="navbar">
              <p className="active">Home</p>
              <p>About Us</p>
              <p>Pricing</p>
            </div>
            <button className="header-btn">Get Free Demo</button>
          </div>
          <div className="home-content">
            <p>
              Eutopia school manage ment system—the only software you'll need
            </p>
            <p>
              Source, screen, and place top talent faster with automation that
              works like your best recruiter.
            </p>
            <div>
              <button>Get Early Access</button>
              <button>Request a Demo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
