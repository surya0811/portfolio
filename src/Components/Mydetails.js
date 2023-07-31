import React from 'react'
import { useState } from 'react';
import './Mydetails.css'
import { Element } from 'react-scroll';

const Mydetails = () => {



    // const [showBirthDetails, setShowBirthDetails] = useState(false);
    const [showEducationDetails, setShowEducationDetails] = useState(false);
    const [showWorkDetails, setShowWorkDetails] = useState(false);
    
  
    // const handleToggleBirthDetails = () => {
    //   setShowBirthDetails(!showBirthDetails);
    // };
  
    const handleToggleEducationDetails = () => {
      setShowEducationDetails(!showEducationDetails);
    };
  
    const handleToggleWorkDetails = () => {
      setShowWorkDetails(!showWorkDetails);
    };
  
    
  
    return (
        <Element name='perinfo' id='perinfo'>

            
      <div className="personal-details">
      <h1>MY PERSONAL INFO</h1>
      <h2 onClick={handleToggleWorkDetails}>&#9830; Graduation</h2>
        {showWorkDetails && (
          <div className="details">
            <p>&#8594;I am currently engaged in my pursuit of a prestigious undergraduate degree at SCSVMV University, specializing in the dynamic realm of Computer Science and Engineering. I have diligently maintained an impressive Cumulative Performance Grade Average (CPGA) of 9.65.</p>
            <br></br>
           </div>
        )}
      <h2 onClick={handleToggleEducationDetails}>&#9830; Education</h2>
        {showEducationDetails && (
          <div className="details">
             <p>&#8594;I thirumphantly completed standard from Sri chaitanya junior collage in May 2020 my 12<sup>th</sup> standard studies with an academic attainment of 77.85%. </p>
            
           <br></br>
            <p>&#8594;During my formative years up until the 10th grade, I received my education at Bhashyam Higher School, located in the vibrant city of Vijayawada. I successfully completed my 10<sup>th</sup> grade in April 2018, securing with academic performance of 93.00% . </p>
            
          </div>
        )}  
        
      </div>
      </Element>
    );

}

export default Mydetails