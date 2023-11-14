import React, { useState } from 'react'
import "../styles/legacy.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Accordian from "./Accordion"
import { Link } from 'react-router-dom';

const Legacy = () => {


  return (
    <div className='legacy'>

    <div className='legacy-content'>
        <h1>-OUR WORK</h1>
        <h3>OUR LEGACY.</h3>
        <p>Our dedicated and hardworking team is adept at delivering projects on time, ensuring impeccable quality, and tailoring design solutions to fit your specific budget.</p>
        <button className='btn'><Link to="/contactpage"> Contact Us</Link></button>
    </div>
    </div>
  )
}

export default Legacy