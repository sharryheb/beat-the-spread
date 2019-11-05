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
        email: '',
        errorOrSuccessMsg: ''
    };
    
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit = event => {
        event.preventDefault();

        authAPI.loginUser(this.state)
            .then(response => {
                let logInSuccessOrErrorMsgCookieObj = cookies.get('logInSuccessOrErrorMsg');
                console.log(logInSuccessOrErrorMsgCookieObj);
                if(response.data && logInSuccessOrErrorMsgCookieObj.success) {
                    this.setState({
                        errorOrSuccessMsg: {
                            successMsg: logInSuccessOrErrorMsgCookieObj.success.message,
                            userInfo: {
                                email: logInSuccessOrErrorMsgCookieObj.success.email,
                                screename: logInSuccessOrErrorMsgCookieObj.success.screenname,
                                avatar: logInSuccessOrErrorMsgCookieObj.success.avatar,
                                favoriteTeamCode: logInSuccessOrErrorMsgCookieObj.favoriteTeamCode
                            }
                        },
                        password: ''
                    });
                } else {
                    this.setState({
                        errorOrSuccessMsg: {
                            failMsg: logInSuccessOrErrorMsgCookieObj.fail
                        },
                        password: ''
                    });
                }
                
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        let successOrFailureMsg;
        console.log(this.state.errorOrSuccessMsg);

        if(this.state.errorOrSuccessMsg.successMsg) {
            successOrFailureMsg = <p>Success</p>;
        } else if (this.state.errorOrSuccessMsg.failMsg) {
            successOrFailureMsg = <p>Fail</p>;
        }

        return (

            <div className="SignIn">
            <Navme />
            <p id="sign">Sign In</p>
            {successOrFailureMsg}
            {(this.state.errorOrSuccessMsg.failMsg === 'undefined') && <p>{successOrFailureMsg}</p>}
            {(this.state.errorOrSuccessMsg.success === 'undefined') && <p>{successOrFailureMsg}</p>}
               
            <Form style={{ width: '18rem' }}>
                    <Form.Group controlId="formBasicEmail">

                        <Form.Control type="text" placeholder="Email" name="email" onChange={this.handleChange} />

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">

                        <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange} />
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

                    <Form.Row>
                        <h5>Forgot your password?</h5>
                        <Button variant="primary" type="submit">
                        Reset Password
                        </Button>
                    </Form.Row>

                    <p>---------------------OR--------------------</p>
                    <Row>

                    </Row>
                    <Row>
                        
                        <Col md={8}>
                        <h5>First Time? </h5>
                        <Button variant="primary" href="/SignUp">
                        Create an account
                        </Button>
                        </Col>
                    
                        
                    </Row>

                    
            </Form>


            </div>

        );        
    }
}

export default SignIn;

