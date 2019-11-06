import React from "react";
import { Nav } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { FaFootballBall} from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faYoutube, faFacebook, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";
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
          <Nav.Link className="topitems">Beat-the-Spread<FaFootballBall/></Nav.Link>
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
    <div>
   <a
    href="https://www.youtube.com/beat-the-spread"
    className="youtube social"
 >YouTube
    <FontAwesomeIcon icon={faYoutube} size="2x" />
 </a>
 <a
  href="https://www.facebook.com/beat-the-spread"
  className="facebook social"
>Facebook
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="https://www.twitter.com/beat-the-spread" className="twitter social">
  Twitter <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a
  href="https://www.instagram.com/beat-the-spread"
  className="instagram social"
>Instagram
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
    </div>

      </Nav>
    );
  }

  export default Navme;
