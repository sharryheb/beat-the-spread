import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';

import "./style.css";

function Navme() {
    return (
      <Nav className="topbar" defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link className="topitems" href="/home">Beat-the-Spread</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="topitems" href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="topitems" href="/profile">Sign In</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="topitems" href="/signUp">Sign Up</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="topitems" eventKey="/about">About</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
  
  export default Navme;
  
