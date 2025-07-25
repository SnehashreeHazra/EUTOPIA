import React from "react";
import "./About.css";
import logo from "../../assets/Eutopia-logo 1.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about">
      <div className="home-banner">
        <div className="uni-container">
          <div className="header">
            <img className="header-logo" src={logo} alt="" />
            <div className="navbar">
              <p onClick={() => navigate("/")}>Home</p>
              <p className="active" onClick={() => navigate("/about-us")}>
                About Us
              </p>
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
        <div className="experience">
          <p className="experience-heading">Experience you can rely on</p>
          <div className="experience-cards-wrapper">
            <div className="experience-card">
              <p className="experience-card-heading">Trusted Partners</p>
              <p className="experience-card-subheading">
                Trusted by industry experts
              </p>
              <p className="experience-card-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="experience-card">
              <p className="experience-card-heading">Personalized Support</p>
              <p className="experience-card-subheading">1-on-1 Support</p>
              <p className="experience-card-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="experience-card">
              <p className="experience-card-heading">Global Offices</p>
              <p className="experience-card-subheading">
                Trusted by industry experts
              </p>
              <p className="experience-card-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="uni-container">
          <p className="footer-header">Get A Free Demo</p>
          <p className="footer-small-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <div className="footer-search">
            <input type="text" placeholder="Your work email" />
            <div className="get-early-btn">Get Early Access</div>
          </div>
          <div className="footer-links-wrapper">
            <div className="quick-links">
              <p className="quick-links-heading">Quick Links</p>
              <p className="footer-link">Home</p>
              <p className="footer-link">About Us</p>
              <p className="footer-link">Pricing</p>
            </div>
            <div className="quick-links">
              <p className="quick-links-heading">Product</p>
              <p className="footer-link">Scholl Management</p>
              <p className="footer-link">Online Class</p>
            </div>
            <div className="quick-links">
              <p className="quick-links-heading">Contact Us</p>
              <p className="footer-link">Email</p>
              <p className="footer-link">Twitter</p>
              <p className="footer-link">Facebook</p>
              <p className="footer-link">Instagram</p>
              <p className="footer-link">Product Hunt</p>
              <p className="footer-link">AngelList</p>
              <p className="footer-link">Youtube</p>
            </div>
            <div className="quick-links">
              <p className="quick-links-heading">Resources</p>
              <p className="footer-link">Privacy Policy</p>
              <p className="footer-link">Terms of Service</p>
              <p className="footer-link">Contact Support</p>
            </div>
          </div>

          <div className="copyright-div">
            <img src={logo} alt="" />
            <p>© 2025 EUtopia. Powered by Interview Screener.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
