import React from "react";
import { Nav } from 'react-bootstrap';
import {FaFootballBall} from 'react-icons/fa';
import "./style.css";

function Navme() {
    return (
      <Nav className="topbar" defaultActiveKey="/" as="ul">
        <Nav.Item as="li">
          <Nav.Link className="topitems">Beat-the-Spread<FaFootballBall size={25}/></Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="topitems" href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="topitems" href="/SignIn">Log In</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="topitems" href="/about">About</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }

  export default Navme;
