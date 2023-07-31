import "./WorkCardStyles.css";
import React from 'react'


const TrainingsDisplay = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="projimage"/>
    <h2 className="project-title">{props.title}</h2>
    <h2 className="project-company">{props.company}</h2>
    <div className="pro-details">
        <p>{props.text}</p>
        <p>{props.duration}</p>
        <p>{props.Year}</p>
        {/* <div className="pro-buttons">
            <NavLink to ={props.view} className="btn">View</NavLink>
            <NavLink to ={props.source} className="btn">Source</NavLink>
        </div> */}
    </div>
</div>
  )
}

export default TrainingsDisplay
