import React from "react";
import "./Home.css";
import logo from "../../assets/Eutopia-logo 1.png";
import timeIcon from "../../assets/Group 1171277296.png";
import solutionIcon from "../../assets/Group 1171277297.png";
import fileIcon from "../../assets/Group 1171277298.png";
import coinIcon from "../../assets/Group 1171277299.png";
import whiteArrow from "../../assets/Group 1171277294.png";
import opinionCardImg1 from "../../assets/Rectangle 21.png";
import opinionCardImg2 from "../../assets/Rectangle 18.png";
import opinionCardUser from "../../assets/Ellipse 3.png";
import opinionVectorImg from "../../assets/Vector-4.svg";
import managementSoftwareImg1 from "../../assets/Group 11712773001.png";
import managementSoftwareImg2 from "../../assets/Group 1171275737.png";
import managementSoftwareImg3 from "../../assets/Group 1171277301.png";
import managementUser from "../../assets/mdi_user.png";
import laptopBackgroundImg from "../../assets/Group 1171277295.png";
import laptopImg from "../../assets/Group 1171276868.png";
import 
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="home-banner">
        <div className="uni-container">
          <div className="header">
            <img className="header-logo" src={logo} alt="" />
            <div className="navbar">
              <p className="active">Home</p>
              <p onClick={() => navigate("/about-us")}>About Us</p>
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

      <div className="uni-container">
        <div className="management-software">
          <p className="management-heading">
            Use our School Management Software
          </p>
          <div className="software-features">
            <div className="software-feature">
              <img className="management-user" src={managementUser} alt="" />
              <img
                className="feature-one"
                src={managementSoftwareImg3}
                alt=""
              />
              <div>
                <p className="feature-heading">1. Stay Updated</p>
                <p className="feature-desc">
                  Lorem Ipsum is simply dummy text of the printing and
                </p>
              </div>
            </div>
            <div className="software-feature">
              <img
                className="feature-two"
                src={managementSoftwareImg1}
                alt=""
              />
              <div>
                <p className="feature-heading">2. Attendance</p>
                <p className="feature-desc">
                  Lorem Ipsum is simply dummy text of the printing and
                </p>
              </div>
            </div>
            <div className="software-feature">
              <img
                className="feature-three"
                src={managementSoftwareImg2}
                alt=""
              />
              <div>
                <p className="feature-heading">3. Track Learning</p>
                <p className="feature-desc">
                  Lorem Ipsum is simply dummy text of the printing and
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="school-management">
      <div className="uni-container">
        <p className="management-heading">The School Management</p>
        <p className="school-management-subheading">Source, screen, and place top talent faster with automation that works like your best recruiter.</p>
        <div className="button-div">
        <button className="download-app-btn">Download This App</button>
        </div>
        <div className="animated-leptop">
          <img src={} alt="" />
        </div>
        <img src={} alt="" />
      </div>
      </div>

      <div className="laptop-image-background">
        <img src={laptopBackgroundImg} alt="" />
        <img className="laptop-img" src={laptopImg} alt="" />
      </div>

      <div className="snapshot-section">
        <img className="opinion-svg" src={opinionVectorImg} alt="" />
        <div className="uni-container">
          <p className="snapshot-heading">
            A snapshot to some of our core features that make collaboration
            easier.
          </p>
          <div className="snapshot-cards-wrapper">
            <div className="snapshot-card">
              <p className="snapshot-card-heading">
                Admin: Run your school, right from this school management
                software
              </p>
              <p className="snapshot-card-desc">
                Manage student, teacher, and parent details from one place using
                our school management software. Plan out the academic year on
                administrative calendars, get personalized course timetables for
                every grade and faculty member, organize PTAs, and more.
              </p>
            </div>
            <div className="snapshot-card">
              <p className="snapshot-card-heading">
                Admin: Run your school, right from this school management
                software
              </p>
              <p className="snapshot-card-desc">
                Manage student, teacher, and parent details from one place using
                our school management software. Plan out the academic year on
                administrative calendars, get personalized course timetables for
                every grade and faculty member, organize PTAs, and more.
              </p>
            </div>
            <div className="snapshot-card">
              <p className="snapshot-card-heading">
                Admin: Run your school, right from this school management
                software
              </p>
              <p className="snapshot-card-desc">
                Manage student, teacher, and parent details from one place using
                our school management software. Plan out the academic year on
                administrative calendars, get personalized course timetables for
                every grade and faculty member, organize PTAs, and more.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="your-opinion">
        <p className="your-opinion-heading">Your opinion is everything</p>
        <p className="opinion-subheading">
          14,000+ Educators in 1,800 schools in 12+countries
        </p>
        <div className="opinion-cards-wrapper">
          <div className="opinion-card1">
            <div className="opinion-user">
              <img className="opinion-user-img" src={opinionCardUser} alt="" />
              <div className="opinion-user-name-div">
                <p className="opinion-user-name">Name Surname</p>
                <p className="opinion-user-location">Location</p>
              </div>
            </div>
            <p className="opinion-user-desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. 
            </p>
          </div>
          <div className="opinion-card">
            <img className="opinion-card-img" src={opinionCardImg2} alt="" />
          </div>
          <div className="opinion-card1">
            <div className="opinion-user">
              <img className="opinion-user-img" src={opinionCardUser} alt="" />
              <div className="opinion-user-name-div">
                <p className="opinion-user-name">Name Surname</p>
                <p className="opinion-user-location">Location</p>
              </div>
            </div>
            <p className="opinion-user-desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. 
            </p>
          </div>
          <div className="opinion-card1">
            <div className="opinion-user">
              <img className="opinion-user-img" src={opinionCardUser} alt="" />
              <div className="opinion-user-name-div">
                <p className="opinion-user-name">Name Surname</p>
                <p className="opinion-user-location">Location</p>
              </div>
            </div>
            <p className="opinion-user-desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. 
            </p>
          </div>
          <div className="opinion-card">
            <img className="opinion-card-img" src={opinionCardImg1} alt="" />
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

export default Home;
