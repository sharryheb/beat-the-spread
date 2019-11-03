import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';

import "./style.css";

function Navme() {
    return (
      <Nav className="topbar" defaultActiveKey="/" as="ul">
        <Nav.Item as="li">
          <Nav.Link className="topitems" href="/Profile">Beat-the-Spread</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="topitems" href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="topitems" href="/SignIn">Log In</Nav.Link>
        </Nav.Item>
        {/* <Nav.Item as="li">
          <Nav.Link className="topitems" href="/SignUp">Sign Up</Nav.Link>
        </Nav.Item> */}
        <Nav.Item as="li">
          <Nav.Link className="topitems" href="/about">About</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
  
  export default Navme;
  
