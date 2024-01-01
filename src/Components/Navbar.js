// Navbar.js
import "./NavbarStyles.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import photo from '../assets/photo.jpg';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setcolor] = useState(false);

  const changecolor = () => {
    setcolor(window.scrollY >= 1);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setClick(false); // Close the dropdown after clicking
  };

  window.addEventListener("scroll", changecolor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <div className="logo">
          <img src={photo} alt="Logo" />
          <h1>SURYA VEMPARALA</h1>
        </div>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li onClick={scrollToTop}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={scrollToTop}>
          <Link to="/about">About</Link>
        </li>
        <li className="dropdown">
          <span to="#" className="nav-link">
            Work@info <i className="fa fa-caret-down"></i>
          </span>
          <div className="dropdown-content">
            <Link to="/project"onClick={scrollToTop}>Projects</Link>
            <Link to="/trainings" onClick={scrollToTop}>Trainings</Link>
            <Link to="/journals" onClick={scrollToTop}>Journals</Link>
          </div>
        </li>
        <li onClick={scrollToTop}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={() => setClick(!click)}>
        {click ? (<FaTimes size={20} style={{ color: "#fff" }} />) :
          (<FaBars size={20} style={{ color: "#fff" }} />)}
      </div>
    </div>
  );
}

export default Navbar;
