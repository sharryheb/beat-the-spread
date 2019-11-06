


import React from "react";

import Navme from "../../components/Nav";

import { Form, Button, Row, Col } from 'react-bootstrap';

import authAPI from "../../utils/authAPI";

import "./style.css";


// MATT:
// I have no idea if the following method (onSubmit) works, but this should be how you
// login a user - should call "loginUser" on the "authAPI" client-side file,
// which in turn will make an axios call to our server. look at the signUp to
// see what I mean - I fixed that one up to be how it should work. Let me know if ??? -sharry
const onSubmit = (e) => {
    e.preventDefault();
    authAPI.loginUser();
}

function SignIn() {
  return (

      <div className="SignIn">
       <Navme />
       <h2 id="sign">Sign In</h2>
       <Form onSubmit={onSubmit} style={{ width: '18rem' }}>
            <Form.Group controlId="formBasicEmail">

                <Form.Control type="text" placeholder="Username" />

            </Form.Group>

            <Form.Group controlId="formBasicPassword">

                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Row>
                <Col>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>
                </Col>
                <Col>
                <Button href="/Profile" variant="warning" type="submit">
                 Log In
                 </Button>
                </Col>


                <Col md={10}>
                <h5>Forgot your password?</h5>
                <Button variant="warning" type="submit">
                 Reset Password
                 </Button>
                 </Col>
            </Row>
            <p>---------------------OR--------------------</p>
            <Row>

            </Row>
            <Row>
            
                <Col md={8}>
                <h5>First Time? </h5>
                <Button variant="warning" href="/SignUp">
                Create an account
                 </Button>
                 </Col>
            
                
            </Row>
       </Form>


      </div>

  );
}

export default SignIn;
