import React, { Component } from "react";

import Navme from "../../components/Nav";

import { Form, Button, Row, Col } from 'react-bootstrap';

import authAPI from "../../utils/authAPI";

import "./style.css";

import Cookies from 'universal-cookie';
const cookies = new Cookies();


// MATT:
// I have no idea if the following method (onSubmit) works, but this should be how you
// login a user - should call "loginUser" on the "authAPI" client-side file,
// which in turn will make an axios call to our server. look at the signUp to
// see what I mean - I fixed that one up to be how it should work. Let me know if ??? -sharry
class SignIn extends Component {
    state = {
        email: ''
    };
    
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit = event => {
        event.preventDefault();
        authAPI.loginUser();
    }

    render() {
        return (

            <div className="SignIn">
            <Navme />
            <p id="sign">Sign In</p>
            <Form style={{ width: '18rem' }}>
                    <Form.Group controlId="formBasicEmail">

                        <Form.Control type="text" placeholder="Email" name="email" />

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">

                        <Form.Control type="password" placeholder="Password" name="password" />
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember Me" />
                            </Form.Group>
                        </Col>
                        <Col>

                            <Button variant="primary" type="submit" onClick={this.onSubmit}>
                                Sign in
                            </Button>
                        </Col>
                    </Row>
            </Form>


            </div>

        );        
    }
}

export default SignIn;


// const onSubmit = (e) => {
//     e.preventDefault();
//     authAPI.loginUser();
// }

// function SignIn() {
//   return (

//       <div className="SignIn">
//        <Navme />
//        <p id="sign">Sign In</p>
//        <Form onSubmit={onSubmit} style={{ width: '18rem' }}>
//             <Form.Group controlId="formBasicEmail">

//                 <Form.Control type="text" placeholder="Email" name="email" />

//             </Form.Group>

//             <Form.Group controlId="formBasicPassword">

//                 <Form.Control type="password" placeholder="Password" name="password" />
//             </Form.Group>
//             <Row>
//                 <Col>
//                     <Form.Group controlId="formBasicCheckbox">
//                         <Form.Check type="checkbox" label="Remember Me" />
//                     </Form.Group>
//                 </Col>
//                 <Col>

//                     <Button variant="primary" type="submit">
//                         Sign in
//                     </Button>
//                 </Col>
//             </Row>
//        </Form>


//       </div>

//   );
// }
