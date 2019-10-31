import React from "react";

import Navme from "../../components/Nav";

import { Form, Button, Row, Col } from 'react-bootstrap';

import "./style.css";
function SignIn() {
  return (
    
     
      <div className="SignIn">
       <Navme />
       <p id="sign">Sign In</p>
       <Form style={{ width: '18rem' }}>
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
                        Sign in
                    </Button>
                </Col>
            </Row>
       </Form>
    
     
      </div>
    
  );
}

export default SignIn;