import React from "react";

import { Nav } from 'react-bootstrap';
import "./style.css";
import authAPI from "../../utils/authAPI";


function logOut(event) {
  event.preventDefault();
  authAPI.logOut();
  window.location.pathname = '/SignIn';
}

function Navme() {
    return (
      <Nav className="topbar" defaultActiveKey="/" as="ul">
        <Nav.Item as="li">
          <Nav.Link className="topitems">Beat-the-Spread</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="topitems" href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="topitems" href="/SignIn">Log In</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="topitems" href="/SignOut" onClick={logOut}>Log Out</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="topitems" href="/about">About</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }

  export default Navme;
