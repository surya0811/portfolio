import "./WorkCardStyles.css";
import React from 'react'
import { NavLink } from "react-router-dom";

const JournalDisplay = (props) => {
  return (
    <div className="project-card"style={{ backgroundColor: props.backgroundColor }}>
    {/* <img src={props.imgsrc} alt="projimage"/> */}
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
        <p>{props.text}</p>
        <p>{props.volume}</p>
        <p>{props.year}</p>
        <div className="pro-buttons">
        <a
            href={props.view}
            download="presentation.ppt"
            className="btn"
          >
            View
          </a>
            {/* <NavLink to ={props.view} className="btn">View</NavLink> */}
            <NavLink to ={props.source} className="btn">Source</NavLink>
        </div>
    </div>
</div>
  )
}

export default JournalDisplay
