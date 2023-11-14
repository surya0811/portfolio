import "./HeroimgStyles.css";
import introvideo from "../assets/loginback.mp4";
import React from 'react'
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
        <video className="intro-video" autoPlay muted loop>
    <source src={introvideo} type="video/mp4" />
    
  </video>
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
