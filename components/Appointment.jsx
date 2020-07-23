import React, { Component } from 'react'
import { Container,ListGroup,Button } from 'react-bootstrap';
import './Appointment.css';

export default class Appointment extends Component {
    render() {
        return (
            <div>
              
              
                <h1 Class="appointmentheader">Appointment </h1>
                <Container>
                <ListGroup>
  <ListGroup.Item>PATIENT NAME        :</ListGroup.Item>

  <ListGroup.Item>DOCTER NAME          :</ListGroup.Item>
  <ListGroup.Item>APPOINTMENT DATE      :</ListGroup.Item>
  <ListGroup.Item>APPOINTMENT TIME     :</ListGroup.Item>
</ListGroup>
<div>
  <Button variant="primary" size="lg" block>
    TAKE APPOINTMENT
  </Button>
 
</div>
</Container>

            </div>
        )
    }
}
