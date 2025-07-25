import React from "react";
import "./Home.css";
import logo from "../../assets/Eutopia-logo 1.png";
import timeIcon from "../../assets/Group 1171277296.png";
import solutionIcon from "../../assets/Group 1171277297.png";
import fileIcon from "../../assets/Group 1171277298.png";
import coinIcon from "../../assets/Group 1171277299.png";
import whiteArrow from "../../assets/Group 1171277294.png";

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
            <p className="banner-heading">
              Eutopia school manage ment system—the only software you'll need
            </p>
            <p className="banner-subheading">
              Source, screen, and place top talent faster with automation that
              works like your best recruiter.
            </p>
            <div className="banner-buttons">
              <button>Get Early Access</button>
              <button>Request a Demo</button>
            </div>
          </div>
        </div>
      </div>
      <div className="uni-container">
        <div className="platform-helps">
          <p className="platform-help-heading">The Ways Our Platform Helps</p>
          <p className="platform-help-subheading">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <div className="platform-cards">
            <div className="platform-card-div platform-div1">
              <img src={timeIcon} alt="" />
              <p className="platform-card-div-heading">Save Time</p>
              <p>Lorem Ipsum is simply dummy text of the printing</p>
              <img className="arrow" src={whiteArrow} alt="" />
            </div>
            <div className="platform-card-div platform-div2">
              <img src={solutionIcon} alt="" />
              <p className="platform-card-div-heading">
                Your-one-stop-solution
              </p>
              <p>Lorem Ipsum is simply dummy text of the printing</p>
              <img className="arrow" src={whiteArrow} alt="" />
            </div>
            <div className="platform-card-div platform-div3">
              <img src={fileIcon} alt="" />
              <p className="platform-card-div-heading">Enhance workflow</p>
              <p>Lorem Ipsum is simply dummy text of the printing</p>
              <img className="arrow" src={whiteArrow} alt="" />
            </div>
            <div className="platform-card-div platform-div3">
              <img src={coinIcon} alt="" />
              <p className="platform-card-div-heading">Increase Your Revenue</p>
              <p>Lorem Ipsum is simply dummy text of the printing</p>
              <img className="arrow" src={whiteArrow} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="uni-container">
          <p className="footer-header">Get A Free Demo</p>
          <p className="footer-small-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <div className="footer-search">
            <input type="text" placeholder="Your work email" />
            <div>Get Early Access</div>
          </div>
          <div className="footer-links-wrapper">
            <div className="quick-links">
              <p>Quick Links</p>
              <p>Home</p>
              <p>About Us</p>
              <p>Pricing</p>
            </div>
            <div className="quick-links">
              <p>Product</p>
              <p>Home</p>
              <p>About Us</p>
              <p>Pricing</p>
            </div>
            <div className="quick-links">
              <p>Contact Us</p>
              <p>Home</p>
              <p>About Us</p>
              <p>Pricing</p>
            </div>
            <div className="quick-links">
              <p>Resources</p>
              <p>Home</p>
              <p>About Us</p>
              <p>Pricing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
