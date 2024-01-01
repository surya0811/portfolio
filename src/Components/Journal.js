import "./JournalStyles.css";
import React from 'react'
import JournalDisplay from "./JournalDisplay";
import JournalData from "./JournalData";


const Work = () => {
  return (
    <div className="work-container">
      {/* <h1 className="project-heading">JOURNALS</h1> */}
      <div className="project-container">
       {JournalData.map((val,ind)=> {
        return (
            <JournalDisplay
            key={ind}
            // imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            volume={val.volume}
            year={val.year}
            view={val.view}
            source={val.source}
                        />
        )
       })}
      </div>
    </div>
  )
}

export default Work
