import "./AboutContentStyles.css";
import react1 from "../assets/react1.jpg";
import react2 from "../assets/react2.webp";
import React from 'react'
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        {/* <h1>SURYA VEMPARALA</h1> */}
         {/* <p>As a web developer, I focus in creating dynamic designs that utilize the latest versions of programming languages and tools. </p>  */}
        <Link to ="/contact">
          <button className="btn">Contact Me</button>
        </Link>
      </div>
        <div className="right">
          <div className="img-container">
            <div className="img-stack top">
              <img src={react1} className="img" alt ="true"/>
             </div>
            <div className="img-stack bottom">
            <img src={react2} className="img" alt ="true"/>
            </div>
          </div>
        
      </div>
    </div>
  )
}

export default AboutContent
