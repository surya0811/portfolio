// Footer.js
import "./FooterStyles.css";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import React from "react";
import introImage from "../assets/footerback.jpg";

const Footer = () => {
  return (
    <div className="footer">
      {/* Video element for background */}
      <img src={introImage} alt="Background" className="background-video" />


      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#000000", marginRight: "2rem" }} />
            <div>
              <p>Vijayawada</p>
              <p>Andhra Pradesh</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "#000000", marginRight: "2rem" }} />
              91-9963447781
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{ color: "#000000", marginRight: "2rem" }} />
              vemparalasurya583@gmail.com
            </h4>
          </div>
          <div className="linked-in">
            <h4>
              <FaLinkedinIn size={20} style={{ color: "#000000", marginRight: "2rem" }} />
              <a href="www.linkedin.com/in/surya-vemparala-239b85203" target="_blank" rel="noopener noreferrer">
                linkedin
              </a>
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>Digital Media</h4>
          <div className="social">
            <FaFacebook size={20} style={{ color: "#000000", marginRight: "2rem" }} />
            <FaTwitter size={20} style={{ color: "#000000", marginRight: "2rem" }} />
            <FaInstagram size={20} style={{ color: "#000000", marginRight: "2rem" }} />
            <br/><br/>
            <h4>
              <FaGithub size={20} style={{ color: "#000000", marginRight: "2rem" }} />
              <a href="https://github.com/surya0811" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </h4>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
