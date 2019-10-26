import React from "react";
import Navme from "../../components/Nav";

import { Form, Button, Container, Row, Col, Dropdown, Image } from 'react-bootstrap';

//import DropdownButton from 'react-bootstrap/DropdownButton'

import "./style.css";

function SignUp() {
    return (
     <div className="SignUp">
       <Navme />
       
       <Container>
           <Row>
           <Col md={{ span: 4, offset: 2 }}>
            <h1> Create a New Account</h1>
            <p style={{ color: 'blue' }}>Sign up for a user account to start making a game bet!</p>
       <Form>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>  
            <Form.Control type="text" placeholder="Enter a username" />
                
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter an email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Confirm your password</Form.Label>
            <Form.Control type="password" placeholder="Re-type your password" />
            </Form.Group>
            

            

            

            

           

            <Button variant="primary" type="submit">
                Sign Up
            </Button>
            <Form.Row>
               <h3>Already have an account?</h3>
               <Button variant="primary" type="submit">
                Log In
                </Button>
            </Form.Row>

            <Form.Row>
               <h3>Forgot Password?</h3>
               <Button variant="primary" type="submit">
                Reset your password
                </Button>
            </Form.Row>
        </Form>
        </Col>
        </Row>
      

        
        <Row>
        <Col md={{ span: 4, offset: 1 }}>
            <Image src="holder.js/171x180" roundedCircle />
            <Button variant="light" type="submit">
                Upload Avatar Photo
            </Button>
            <br></br>
            <h3>Select your Favorite Home Team (Optional)</h3>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-light">
                    Select
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Team1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Team2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Team3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Col>
        </Row>
    </Container>
     
      </div>
    
    );

    





}
export default SignUp;