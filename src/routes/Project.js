import React from 'react'
import Navbar from '../Components/Navbar';
// import Heroimg from '../Components/Heroimg';
import Footer from '../Components/Footer';
import Heroimg2 from '../Components/Heroimg2';
import Work from '../Components/Work';
import Trainings from '../Components/Trainings';


const Project = () => {
  return (
    <div>
     
      <Navbar/>
      <Heroimg2 heading="PROJECTS." text="some of my recent works"/>
      <Work/>
      <Trainings/>
      <Footer/>
      
    </div>
  )
}

export default Project
