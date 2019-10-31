import React from "react";
import Navme from "../../components/Nav";

//import TeamsDataJson from "../../data/TeamsData";
//import axios from 'axios';
import { Form, Button, Container, Row, Col, Dropdown, Image } from 'react-bootstrap';
import teamsAPI from "../../utils/teamsAPI";  // use this to get Team data from DB

import "./style.css";
import { Component } from "react";

class SignUp extends Component {

    state = {
        username: '',
        email: '',
        avatar: '',
        favoriteTeamId: 1
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmitToSaveUser = event => {
        event.preventDefault();
        console.log(this.state);
        teamsAPI.registerUser(this.state)
            .then(() => alert('User saved!'))
            .catch(err => {
                alert('Error: ', err);
            });
    }


    render() {
        return (
            <div className="SignUp">
                <Navme />
                <Container>
            <Row>
            <Col md={{ span: 5, offset: 2 }}>
             <h2> Create a New Account</h2>
             <p style={{ color: 'blue' }}>Sign up for a user account to start making a game bet!</p>
        <Form>
             <Form.Group as={Col}>
             <Form.Label>Username</Form.Label>
             <Form.Control type="text" placeholder="Enter a username" name="screenname" onChange={this.handleChange} />
             </Form.Group>

             <Form.Group as={Col} controlId="formGridEmail">
             <Form.Label>Email</Form.Label>
             <Form.Control type="email" placeholder="Enter an email" name="email" onChange={this.handleChange} />
             </Form.Group>

             <Form.Group as={Col}>
             <Form.Label>Avatar</Form.Label>
             <Form.Control type="text" placeholder="Enter an avatar link" name="avatar" onChange={this.handleChange} />
             </Form.Group>

             <Form.Group as={Col}>
             <Form.Label>Favorite Team (ID)</Form.Label>
             <Form.Control type="number" placeholder="Favorite Team (ID)" name="favoriteTeamId" defaultValue="1" />
             </Form.Group>

             <Form.Group as={Col} controlId="formGridPassword">
             <Form.Label>Password</Form.Label>
             <Form.Control type="password" placeholder="Enter your password" name="password" onChange={this.handleChange} />
             </Form.Group>

             <Form.Group as={Col} controlId="formGridPassword2">
             <Form.Label>Confirm your password</Form.Label>
             <Form.Control type="password" placeholder="Re-type your password" />
             </Form.Group>

             <Button variant="primary" type="submit" onClick={this.handleSubmitToSaveUser}>
                 Sign Up
             </Button>
             <Form.Row>
                <h5>Already have an account?</h5>
                <Button href="/SignIn" variant="primary" type="submit">
                 Log In
                 </Button>
             </Form.Row>

             <Form.Row>
                <h5>Forgot Password?</h5>
                <Button variant="primary" type="submit">
                 Reset your password
                 </Button>
             </Form.Row>
         </Form>
         </Col>





         <Col md={{ span: 4, offset: 7 }}>
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

                     <Dropdown.Item href="#/action-1">Arizona Cardinals</Dropdown.Item>
                     <Dropdown.Item href="#/action-2">Atlanta Falcons</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">Baltimore Ravens</Dropdown.Item>
                     <Dropdown.Item href="#/action-4">Buffalo Bills</Dropdown.Item>
                     <Dropdown.Item href="#/action-5">Carolina Panthers</Dropdown.Item>
                     <Dropdown.Item href="#/action-6">Chicago Bears</Dropdown.Item>
                     <Dropdown.Item href="#/action-7">Cincinnati Bengals</Dropdown.Item>
                     <Dropdown.Item href="#/action-8">Cleveland Browns</Dropdown.Item>
                     <Dropdown.Item href="#/action-9">Dallas Cowboys</Dropdown.Item>                     <Dropdown.Item href="#/action-10">Denver Broncos</Dropdown.Item>
                     <Dropdown.Item href="#/action-11">Detroit Lions</Dropdown.Item>
                     <Dropdown.Item href="#/action-12">Green Bay Packers</Dropdown.Item>
                     <Dropdown.Item href="#/action-13">Houston Texans</Dropdown.Item>
                     <Dropdown.Item href="#/action-14">Indianapolis Colts</Dropdown.Item>
                     <Dropdown.Item href="#/action-15">Jacksonville Jaguars</Dropdown.Item>
                     <Dropdown.Item href="#/action-16">Kansas City Chiefs</Dropdown.Item>
                     <Dropdown.Item href="#/action-17">Los Angeles Chargers</Dropdown.Item>
                     <Dropdown.Item href="#/action-18">Los Angeles Rams</Dropdown.Item>
                     <Dropdown.Item href="#/action-19">Miami Dolphins</Dropdown.Item>
                     <Dropdown.Item href="#/action-20">Minnesota Vikings</Dropdown.Item>
                     <Dropdown.Item href="#/action-21">New England Patriots</Dropdown.Item>
                     <Dropdown.Item href="#/action-22">New Orleans Saints</Dropdown.Item>
                     <Dropdown.Item href="#/action-23">New York Giants</Dropdown.Item>
                     <Dropdown.Item href="#/action-24">New York Jets</Dropdown.Item>
                     <Dropdown.Item href="#/action-25">Oakland Raiders</Dropdown.Item>
                     <Dropdown.Item href="#/action-26">Philadelphia Eagles</Dropdown.Item>
                     <Dropdown.Item href="#/action-27">Pittsburgh Steelers</Dropdown.Item>
                     <Dropdown.Item href="#/action-28">Seattle Seahawks</Dropdown.Item>
                     <Dropdown.Item href="#/action-29">San Francisco 49ers</Dropdown.Item>

                     <Dropdown.Item href="#/action-30">Tampa Bay Buccaneers</Dropdown.Item>
                     <Dropdown.Item href="#/action-31">Tennessee Titans</Dropdown.Item>
                     <Dropdown.Item href="#/action-32">Washington Redskins</Dropdown.Item>
                 </Dropdown.Menu>
             </Dropdown>
         </Col>
         </Row>
     </Container>

            </div>
        );
    }

}

export default SignUp;
