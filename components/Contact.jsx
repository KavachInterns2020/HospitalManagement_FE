import React, { Component } from 'react'
import { FacebookLoginButton,TwitterLoginButton,InstagramLoginButton,LinkedInLoginButton } from "react-social-login-buttons";
import { Container,InputGroup,FormControl,DropdownButton,Dropdown,Form,Button,Card } from 'react-bootstrap';
import './Contact.css';

export default class Contact extends Component {
    render() {
        return (
          <div Class="base2">
            <div>
                <Container>
               <h1 Class="contactheader">Thanks for contacting Clinikey</h1>
               <h3>Clinikey always love to hear from you!</h3>
               <>


<InputGroup>
  <FormControl
    placeholder="search"
    aria-label="Recipient's username"
    aria-describedby="basic-addon2"
  />

<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
   If u want to resolve any issue
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</InputGroup>
</>
<p>Or Explain your querry</p>
<Form>
  <Form.Group controlId="formBasicEmail">
  <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your name" />
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Details</Form.Label>
    <Form.Control type="text" placeholder="Enter yor problem details" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<div Class="flexy">
    <div>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="assets\photo-of-medical-professionals-doing-a-surgery-on-a-patient-4483334.jpg" />
  <Card.Body>
  <Card.Title>Chat box</Card.Title>
    <Card.Text>
    If your issue is not solved feel free to chat with us
    </Card.Text>
    <Button variant="primary">Chat With Us</Button>
  </Card.Body>
</Card>
</div>
<div>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="assets\faceless-doctor-with-pills-in-hands-4021811.jpg" />
  <Card.Body>
    <Card.Title>Meet Us At any moment</Card.Title>
    <Card.Text>
    phone:11111111<br/>
    email:jehddeduh@gmail.com<br/>

    </Card.Text>
    <Button variant="primary">Meet us</Button>
  </Card.Body>
</Card>
</div>
<div>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="assets\faceless-doctor-with-pills-in-hands-4021811.jpg" />
  <Card.Body>
    <Card.Title>We are here to help</Card.Title>
    <Card.Text>
 We try to respond to all request within 24 hours
    </Card.Text>
    <Button variant="primary">Ping us</Button>
  </Card.Body>
</Card>
</div>
</div>
               </Container>
             <p>Thanks for Contacting Clinikey</p>
            </div>
            </div>
            
        )
    }
}
