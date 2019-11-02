
import React from "react";

import Navme from "../../components/Nav";

import { Form, Button, Row, Col } from 'react-bootstrap';

import authAPI from "../../utils/authAPI";

import "./style.css";


const onSubmit = (e) => {
    e.preventDefault();
    authAPI.loginUser();
}

function SignIn() {
  return (

      <div className="SignIn">
       <Navme />
       <p id="sign">Sign In</p>
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
                <Button href="/Profile" variant="primary" type="submit">
                 Log In
                 </Button>
                </Col>
                
             <Form.Row>
                <h5>First Time? Make an account.</h5>
                <Button href="/SignUp" variant="primary" type="submit">
                 Sign Up
                 </Button>
             </Form.Row>
            </Row>
       </Form>


      </div>

  );
}

export default SignIn;