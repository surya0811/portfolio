import React from 'react'
import Navbar from '../Components/Navbar';
import Heroimg from '../Components/Heroimg';
import Footer from '../Components/Footer';
// import Work from '../Components/Work';
// import ProgressBarGraph from '../Components/ProgressBar';
// import AboutContent from '../Components/AboutContent';
import Mydetails from '../Components/Mydetails';
// import Trainings from '../Components/Trainings';


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg/>
      {/* <AboutContent/> */}
      <Mydetails/>
      <div style={{ margin: '28px 0' }}></div> {/* Line space */}
      {/* <Work/> */}
      {/* <ProgressBarGraph/> */}
      {/* <Trainings/> */}
      <Footer/>
    </div>
  )
}

export default Home
