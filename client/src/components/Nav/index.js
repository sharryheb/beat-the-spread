import React from "react";
import { Nav } from 'react-bootstrap';

import "./style.css";

import Cookies from 'universal-cookie';
const cookies = new Cookies();

const logInSuccessOrErrorMsgCookieObj = cookies.get('logInSuccessOrErrorMsg');
let logOutNav;

if(logInSuccessOrErrorMsgCookieObj.success) {
  logOutNav = (
    <Nav.Item as="li">
      <Nav.Link className="topitems" href="/SignOut">Log Out</Nav.Link>
    </Nav.Item>
  );
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
        {logOutNav}
        <Nav.Item as="li">
          <Nav.Link className="topitems" href="/about">About</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }

  export default Navme;
