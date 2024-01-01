// src/routes/Trainings.js
import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Heroimg2 from '../Components/Heroimg2';
import TrainingsComponent from '../Components/Trainings'; // Renamed to avoid conflicts

const Training = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="TRAININGS." text="some of my recent Trainings" />
      <TrainingsComponent />
      <Footer />
    </div>
  );
};

export default Training;
