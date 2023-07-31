import React from 'react'
import Navbar from '../Components/Navbar';
// import Heroimg from '../Components/Heroimg';
import Footer from '../Components/Footer';
import Heroimg2 from '../Components/Heroimg2';
// import AboutContent from '../Components/AboutContent';
import ProgressBarGraph from '../Components/ProgressBar';
import Mydetails from '../Components/Mydetails';
// import Trainings from '../Components/Trainings';


const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="SURYA VEMPARALA." text="Vijayawada,Andhra Pradesh"/>
      {/* <AboutContent/> */}
      <Mydetails/>
      <div style={{ margin: '20px 0' }}></div> {/* Line space */}
      <div style={{ margin: '20px 0' }}></div> {/* Line space */}
      
      <ProgressBarGraph/>
      {/* <Trainings/> */}
      <Footer/>
    </div>
  )
}

export default About
