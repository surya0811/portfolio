// src/routes/Trainings.js
import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Heroimg2 from '../Components/Heroimg2';
import JournalComponent from '../Components/Journal'; // Renamed to avoid conflicts

const Journals = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="JOURNALS." text="some of my recent Published Journals" />
      <JournalComponent />
      <Footer />
    </div>
  );
};

export default Journals;
