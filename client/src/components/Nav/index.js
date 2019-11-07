import React from "react";
import { Nav } from 'react-bootstrap';
import { FaFootballBall } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./style.css";
import authAPI from "../../utils/authAPI";

function logOut(event) {
    event.preventDefault();
    try {
        console.log(authAPI.logOut());
        window.location.href = "/SignIn";
    }
    catch (err) {
        console.log(err);
    };
}

function Navme(props) {
    return (
        <Nav className="topbar m-0 p-0 w-100" defaultActiveKey="/" as="ul">
            <Nav.Item as="li">
                <Nav.Link className="topitems"><FaFootballBall /> Beat-the-Spread</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link className="topitems" href="/">Home</Nav.Link>
            </Nav.Item>
            {!props.user || !props.user.success ?
                (
                    <Nav.Item as="li">
                        <Nav.Link className="topitems" href="/SignIn">Log In</Nav.Link>
                    </Nav.Item>
                ) : undefined}
            {props.user && props.user.success ?
                (<Nav.Item as="li">
                    <Nav.Link className="topitems" href="/Profile">Profile</Nav.Link>
                </Nav.Item>) : undefined}
            {props.user && props.user.success ?
                (<Nav.Item as="li">
                    <Nav.Link className="topitems" onClick={logOut}>Log Out</Nav.Link>
                </Nav.Item>) : undefined}
            <Nav.Item as="li">
                <Nav.Link className="topitems" href="/about">About</Nav.Link>
            </Nav.Item>
            <div>
                <a
                    href="https://www.youtube.com/beat-the-spread"
                    className="youtube social"
                >YouTube <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a
                    href="https://www.facebook.com/beat-the-spread"
                    className="facebook social"
                >Facebook <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.twitter.com/beat-the-spread" className="twitter social">
                    Twitter <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a
                    href="https://www.instagram.com/beat-the-spread"
                    className="instagram social"
                >Instagram <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
            </div>
        </Nav>
    );
}

export default Navme;
