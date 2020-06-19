import React, { Component } from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import {Link } from 'react-router-dom';

import './Customnavbar.css';



export default class CustomNavbar extends Component {
    render() {
        return (
           
           <Navbar expand="lg">
            
                <Navbar.Brand
                    href="/">Clinikey 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
               
               <Navbar.Collapse id ="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>

                        <Nav.Link>
                         <Link to="/">Home</Link>
                        </Nav.Link>
                        </Nav.Item> 
                        <Nav.Item>
                        <Nav.Link>
                         <Link  Class ="mylinks"to="/about">About</Link>
                        </Nav.Link>
                        </Nav.Item> 
                        <Nav.Item>
                        <Nav.Link>
                         <Link  to="/login">Login/Sign Up</Link>
                        </Nav.Link>
                        </Nav.Item> 
                        <Nav.Item>
                        <Nav.Link>
                         <Link to="/hospital">Hospitals</Link>
                        </Nav.Link>
                        </Nav.Item> 
                        <Nav.Item>
                        <Nav.Link>
                         <Link to="/docter">Docters</Link>
                        </Nav.Link>
                        </Nav.Item> 
                        <Nav.Item>
                        <Nav.Link>
                         <Link to="/appointment">Appointment</Link>
                        </Nav.Link>
                        </Nav.Item> 
                        <Nav.Item>
                        <Nav.Link>
                         <Link  to="/records">records</Link>
                        </Nav.Link>
                        </Nav.Item> 
                        <Nav.Item>
                         <Nav.Link>
                         <Link to="/contact">Contact us</Link>
                        </Nav.Link>
                        </Nav.Item> 
                   
                   
                </Nav>
               
               </Navbar.Collapse>
           </Navbar>
         
        )
    }
}
