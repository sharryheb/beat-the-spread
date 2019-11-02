import React from "react";

import { Container, Row, Col/*,Image*/ } from 'react-bootstrap';
import "./style.css";


import Navme from "../../components/Nav";
//import Avatar from "../../components/Avatar"; // commenting out because it's not used and causes warnings in Dev Tools Inspector



function Profile() {
  return (


      <div className="Profile">

       <Navme />




                <h2>Profile Page</h2>



                {/* <Image src="holder.js/171x180" roundedCircle /> */}


           <Container>
           <Row>
               <Col>
                <h4>Total Points:</h4>
               </Col>
               <Col xs={5}>
               <h4>Correct Predictions:13</h4>
               </Col>
               <Col xs={5}>
               <h4>Incorrect Predictions:1</h4>
               </Col>
           </Row>
           <Row>
               <Col></Col>
               <Col xs={10}>
                   <h3>Current Ranking Status: 1 out of 200</h3>
               </Col>
           </Row>

           <Row>
               <Col></Col>
               <Col xs={10}>
                   <h3>To make a prediction, please go to Homepage</h3>
               </Col>
           </Row>
       </Container>



      </div>

  );
}

export default Profile;