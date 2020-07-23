import React, { Component } from 'react'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import './Customnavbar.css';



export default class CustomNavbar extends Component {
    render() {
        return (    
          
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
             <Navbar.Brand href="/">Clinikey</Navbar.Brand>
             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mr-auto">
                 <NavDropdown title="Login/Sign Up" id="collasible-nav-dropdown">
                   <NavDropdown.Item href="#action/3.1">Login as Admin</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.2">Login as Doctor</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.3">Login as Patient</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.4">Login as Receptionist</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.4">Login as Cashier</NavDropdown.Item>
                 </NavDropdown>
               </Nav>
               <Nav>
                 <Nav.Link href="/about">About Us</Nav.Link>
                 <Nav.Link eventKey={2} href="/contact">
                  Contact Us
                 </Nav.Link>
               </Nav>
             </Navbar.Collapse>
           </Navbar>
        )
    }
}
