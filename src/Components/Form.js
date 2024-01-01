// Form.js
import "./FormStyles.css";
import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
  const googleAppsScriptUrl = 'https://script.google.com/macros/s/AKfycbwSSu4C_Q4v2uRGUDeXgtiZ-8r1wFxCECOtwODBY7lVBe7EJBdKSzxtkGu3d2Mjy8Di/exec';
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(`${corsAnywhereUrl}/${googleAppsScriptUrl}`, formData);
      console.log(response.data);
      // Handle success
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <label>Subject</label>
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
        <label>Message</label>
        <textarea rows="6" name="message" placeholder="Type your message" value={formData.message} onChange={handleChange} />
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
