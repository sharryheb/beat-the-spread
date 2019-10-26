import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch
// } from "react-router-dom";

// import { Image, Container, Row, Col } from 'react-bootstrap';

import "./style.css";


import Navme from "../../components/Nav";



function About() {
  return (
    
     
      <div className="About">

       <Navme />
       <h2> About Us</h2>
       <textarea >
        We are an online football betting site that allows fans to gather, bet and have fun!
       </textarea>
       
       
       
      </div>
    
  );
}

export default About;