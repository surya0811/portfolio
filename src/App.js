// import logo from './logo.svg';
import './App.css';
import React from 'react';
import "./index.css";
import Home from './routes/Home';
import Project from './routes/Project';
import About from './routes/About';
import Contact from './routes/Contact';
import { Route , Routes } from 'react-router-dom';
import Training from './routes/Training';
import Journals from './routes/Journals';

function App() {
  return (
    <>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/project"element={<Project/>}/>
        <Route path="/about"element={<About/>}/>
        <Route path="/contact"element={<Contact/>}/>
        <Route path="/trainings" element={<Training/>}/>
        <Route path="/journals" element={<Journals/>}/>
      </Routes>
      

    </>
  );
}

export default App;
