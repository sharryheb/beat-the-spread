import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Navme from "../../components/Nav";

import { Form, Button, Container, Row, Col, Dropdown/*, Image*/ } from 'react-bootstrap';
import authAPI from "../../utils/authAPI";  // use this to get Team data from DB

import "./style.css";
import { Component } from "react";

import Cookies from 'universal-cookie';
const cookies = new Cookies();

class SignUp extends Component {

    state = {
        screenname: '',
        email: '',
        avatar: '',
        favoriteTeamCode: 'SEA',
        errorOrSuccessMsg: ''
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmitToSaveUser = event => {
        event.preventDefault();

        authAPI.registerUser(this.state)
            .then(response => {
                if(response.data && cookies.get('registerSuccess')) {
                    this.props.history.push('/SignIn');
                } else {
                    this.setState({
                        errorOrSuccessMsg: cookies.get('registerFail')
                    });
                }
            })
            .catch(err => {
                console.log(err);
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
             {this.state.errorOrSuccessMsg && <p style={{ color: 'green' }}>{this.state.errorOrSuccessMsg}</p>}
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
                 
             <h3>List of NFL Football Team Codes</h3>
             <Dropdown>
                 <Dropdown.Toggle variant="success" id="dropdown-light">
                     Select
                 </Dropdown.Toggle>

                 <Dropdown.Menu>

                     <Dropdown.Item href="#/action-1">Arizona Cardinals (ARI)</Dropdown.Item>
                     <Dropdown.Item href="#/action-2">Atlanta Falcons (ATL)</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">Baltimore Ravens(BAL)</Dropdown.Item>
                     <Dropdown.Item href="#/action-4">Buffalo Bills(BUF)</Dropdown.Item>
                     <Dropdown.Item href="#/action-5">Carolina Panthers(CAR)</Dropdown.Item>
                     <Dropdown.Item href="#/action-6">Chicago Bears(CHI)</Dropdown.Item>
                     <Dropdown.Item href="#/action-7">Cincinnati Bengals(CIN)</Dropdown.Item>
                     <Dropdown.Item href="#/action-8">Cleveland Browns(CLE)</Dropdown.Item>
                     <Dropdown.Item href="#/action-9">Dallas Cowboys(DAL)</Dropdown.Item>                   
                     <Dropdown.Item href="#/action-10">Denver Broncos(DEN)</Dropdown.Item>
                     <Dropdown.Item href="#/action-11">Detroit Lions(DET)</Dropdown.Item>
                     <Dropdown.Item href="#/action-12">Green Bay Packers(GB)</Dropdown.Item>
                     <Dropdown.Item href="#/action-13">Houston Texans(HOU)</Dropdown.Item>
                     <Dropdown.Item href="#/action-14">Indianapolis Colts(IND)</Dropdown.Item>
                     <Dropdown.Item href="#/action-15">Jacksonville Jaguars(JAX)</Dropdown.Item>
                     <Dropdown.Item href="#/action-16">Kansas City Chiefs(KC)</Dropdown.Item>
                     <Dropdown.Item href="#/action-17">Los Angeles Chargers(LAC)</Dropdown.Item>
                     <Dropdown.Item href="#/action-18">Los Angeles Rams(LAR)</Dropdown.Item>
                     <Dropdown.Item href="#/action-19">Miami Dolphins(MIA)</Dropdown.Item>
                     <Dropdown.Item href="#/action-20">Minnesota Vikings(MIN)</Dropdown.Item>
                     <Dropdown.Item href="#/action-21">New England Patriots(NE)</Dropdown.Item>
                     <Dropdown.Item href="#/action-22">New Orleans Saints(NO)</Dropdown.Item>
                     <Dropdown.Item href="#/action-23">New York Giants(NYG)</Dropdown.Item>
                     <Dropdown.Item href="#/action-24">New York Jets (NYJ)</Dropdown.Item>
                     <Dropdown.Item href="#/action-25">Oakland Raiders(OAK)</Dropdown.Item>
                     <Dropdown.Item href="#/action-26">Philadelphia Eagles(PHI)</Dropdown.Item>
                     <Dropdown.Item href="#/action-27">Pittsburgh Steelers(PIT)</Dropdown.Item>
                     <Dropdown.Item href="#/action-28">Seattle Seahawks (SEA)</Dropdown.Item>
                     <Dropdown.Item href="#/action-29">San Francisco 49ers(SF)</Dropdown.Item>

                     <Dropdown.Item href="#/action-30">Tampa Bay Buccaneers(TB)</Dropdown.Item>
                     <Dropdown.Item href="#/action-31">Tennessee Titans(TEN)</Dropdown.Item>
                     <Dropdown.Item href="#/action-32">Washington Redskins(WAS)</Dropdown.Item>
                 </Dropdown.Menu>
             </Dropdown>
             <Form.Label>Favorite Team (Code)</Form.Label>
             <Form.Control type="text" placeholder="Favorite Team (Code)" name="favoriteTeamCode" defaultValue="SEA" />
             </Form.Group>

             <Form.Group as={Col} controlId="formGridPassword">
             <Form.Label>Password</Form.Label>
             <Form.Control type="password" placeholder="Enter your password" name="password" onChange={this.handleChange} />
             </Form.Group>

             <Form.Group as={Col} controlId="formGridPassword2">
             <Form.Label>Confirm your password</Form.Label>
             <Form.Control type="password" placeholder="Re-type your password" />
             </Form.Group>

             <Form.Label>Please verify you are a human.</Form.Label>
             <ReCAPTCHA
                sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY}
            />

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

         </Row>
     </Container>

            </div>
        );
    }

}

export default SignUp;
