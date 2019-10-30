
import React, {Component} from "react";


import Navme from "../../components/Nav";

import "./style.css";
import { Container, Col, Form,  FormGroup, Label, Row, Dropdown, Button, Image } from 'react-bootstrap'   


class SignIn extends Component {

  constructor(props){
    super(props)
    this.state = {
      currentView: "SignIn"
    }
  }

  changeView = (view) => {
    this.setState({
      currentView: view
    })
  }

  currentView = () => {
    switch(this.state.currentView) {
    
        case "SignIn":
            return (
              <form>
                <h2>Welcome Back UnderDog!</h2>
                <fieldset>
                  <legend>Log In to access your profile</legend>
                  <ul>
                    <li>
                      <label for="username">Username:</label>
                      <input type="text" id="username" required/>
                    </li>
                    <li>
                      <label for="password">Password:</label>
                      <input type="password" id="password" required/>
                    </li>
                   
                      <a onClick={ () => this.changeView("PWReset")} href="#">Forgot your Password?</a>
                  
                  </ul>
                </fieldset>
                


                <button>Login</button> 
       
            <fieldset>
            <button type="button" onClick={ () => this.changeView("PWReset")}>Forgot your password?</button>
            <button type="button" onClick={ () => this.changeView("SignUp")}>Sign Up Here</button>
            </fieldset>
              </form>
            )
        break 
        case "SignUp":
        return (
          <form>
            <h2>Sign Up!</h2>
            <fieldset>
              <legend>Create an Account</legend>
              <ul>
                <li>
                  <label for="username">Username:</label>
                  <input type="text" id="username" required/>
                </li>
                <li>
                  <label for="email">Email:</label>
                  <input type="email" id="email" required/>
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input type="password" id="password" required/>
                </li>
                
                <li>
                  <label for="password">Confirm Your Password:</label>
                  <input type="password" id="password" required/>
                </li>
              </ul>
            <button>Sign Up</button> 
            </fieldset>
            <fieldset>
            <label for="button">Already have an Account?</label> 
            <button type="button" onClick={ () => this.changeView("SignIn")}>Log in</button>
            </fieldset>
            <fieldset>
            <label for="button">    Forgot your password?</label> 
            <button type="button" onClick={ () => this.changeView("PWReset")}>Reset password</button>
            </fieldset>
          </form>
        )
        break
      case "PWReset":
        return (
          <form>
          <h2>Reset Password</h2>
          <fieldset>
            <legend>Password Reset</legend>
            <ul>
              <li>
                <em>A reset link will be sent to your inbox!</em>
              </li>
              <li>
                <label for="email">Email:</label>
                <input type="email" id="email" required/>
              </li>
            </ul>
          </fieldset>
          <button>Send Reset Link</button>
          <button type="button" onClick={ () => this.changeView("SignIn")}>Log back in</button>
        </form>
        )
      default:
        break
    }
  }


  render() {
    return (
        <div class name="SignIn">
        <Navme/>
      <section id="entry-page">
        {this.currentView()}
      </section>
      
      </div>
    )
  }
}

  
  export default SignIn;



 /* import React from "react";

import Navme from "../../components/Nav";

import { Form, Button, Row, Col } from 'react-bootstrap';

import "./style.css";
function SignIn() {
  return (
    
     
      <div className="SignIn">
       <Navme />
       
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

export default SignIn; */