


import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';

import "./style.css";

function Navme() {
    return (
      <Nav className="topbar" defaultActiveKey="/" as="ul">
        <Nav.Item as="li">
          <Nav.Link className="topitems" >Beat-the-Spread</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="topitems" href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="topitems" href="/SignIn">Sign In</Nav.Link>
        </Nav.Item>
       
        <Nav.Item as="li">
          <Nav.Link className="topitems" href="/about">About</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
  
  export default Navme;
  
