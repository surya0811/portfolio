import "./TrainingsStyles.css";
import React from 'react'
import TrainingsDisplay from "./TrainingsDisplay";
import TrainingsData from "./TrainingsData";


const Trainings = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">TRAININGS</h1>
      <div className="project-container">
       {TrainingsData.map((val,ind)=> {
        return (
            <TrainingsDisplay
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            duration={val.duration}
            Year={val.Year}
            
                        />
        )
       })}
      </div>
    </div>
  )
}

export default Trainings
