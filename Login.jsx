import React, { Component } from 'react'
import {Button,Form,Container,} from 'react-bootstrap';
import {FacebookLoginButton,GoogleLoginButton} from 'react-social-login-buttons';
import './Login.css';



export default class Login extends Component {
    render() {
        return (
            <div >
                <h1 Class="loginh1">Welcome to Clinikey</h1>
                <div Class="loginpage">
                <Container>
                <Form>
                   <Form.Group controlId="formBasicEmail">
                   <Form.Label>Email address</Form.Label>
                   <Form.Control type="email" placeholder="Enter email" />
                   <Form.Text className="text-muted">
                   We'll never share your email with anyone else.
                   </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                 <Button className="btn-lg btn-dark btn-block" >Log In </Button>
                 <div className="text-center pt-3">Or Login with u r social account</div>
                 <FacebookLoginButton  className="mt-3 mb-3"/>
                 <GoogleLoginButton className="mt-3 mb-3"/>
                 <div className="text-center">
                 <a href="/sign-up">Sign up</a>
                 <spam className="p-2">|</spam>
                 <a href="/Forgetpassword">Forgot Password</a>


                 </div>
                 
                 
                 
                 </Form>
                 </Container>
                 </div>
              
                 </div>
        )
    }
}
