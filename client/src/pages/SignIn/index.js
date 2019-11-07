import React, { Component } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap';
import Cookies from 'universal-cookie';

import authAPI from "../../utils/authAPI";

import "./style.css";

const cookies = new Cookies();

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
                if(response.data && logInSuccessOrErrorMsgCookieObj.success) {
                    this.props.history.push('/');
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

        const registerSuccess =  cookies.get('registerSuccess');
        const failMsg = this.state.errorOrSuccessMsg.failMsg;
        let successOrErrorMsg;

        if(registerSuccess) {
            successOrErrorMsg = <p style={{color: 'green'}}>{registerSuccess}</p>;
        } else if(failMsg) {
            successOrErrorMsg = <p style={{color: 'green'}}>{failMsg}</p>;
        }

        return (
            <div className="m-0 p-0 w-100">
            <h2 id="sign" className="bg-white">Sign In</h2>
            <h4>{successOrErrorMsg}</h4>
            <Form style={{ width: '50vw' }}>
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

                        <Button variant="warning" type="submit" onClick={this.onSubmit}>
                            Log In
                        </Button>
                    </Col>
                    </Row>
                    <Row>
                    <Col md={6}>
                        <h5>Forgot your password?</h5>
                        <Button variant="warning" type="submit">Reset Password</Button>
                    </Col>
                    <Col md={6}>
                        <h5>First Time? </h5>
                        <Button variant="warning" href="/SignUp">Create an account</Button>
                    </Col>
                </Row>
            </Form>
            </div>
        );
    }
}

export default SignIn;
