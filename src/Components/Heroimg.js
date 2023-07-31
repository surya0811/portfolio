import "./HeroimgStyles.css";
import introimage from "../assets/image2.jpg";
import React from 'react'
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
          <img className="intro-img" src={introimage} alt="introimage"/>   
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
