import "./HeroimgStyles.css";
import introImage from "../assets/contactback.jpg";
import React from 'react'
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
        <img src={introImage} alt="Background" className="background-video" />

        </div>
     <div className="content">
        <p>HI , I'M SURYA .</p>    
        <h1>WEB DEVELOPER.</h1>
        <div>
            <Link to = "/project" className="btn">Projects</Link>
            <Link to = "/contact" className="btn btn-light">Contact</Link>
        </div>
    </div> 
    </div>
    
  )
}

export default Heroimg
