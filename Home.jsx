import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Container,Carousel } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
          <>
            <Container>
                    <div Class="class3">
                     <h1 Class="class1">Welcome to Clinikey</h1>
                     <h3 Class="class2">We care for yor future</h3>
                    </div>
                
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="assets\young-doctor-in-uniform-with-stethoscope-and-notebook-in-4173248.jpg"
                    alt="First slide"
                    />
                 <Carousel.Caption>
                 <h3>We care </h3>
                 <p>Clinikey always care's you</p>
                </Carousel.Caption>
                </Carousel.Item>
                 <Carousel.Item>
                  <img
                   className="d-block w-100"
                   src="assets\photo-of-medical-professionals-doing-a-surgery-on-a-patient-4483334.jpg"
                   alt="Third slide"
                   />
                 <Carousel.Caption>
                  <h3>Treat</h3>
                  <p>Clinikey always ready to treat you</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                className="d-block w-100"
                src="assets\women-in-blue-scrub-suit-4069882.jpg"
                alt="Third slide"
                />
               <Carousel.Caption>
               <h3>Love</h3>
               <p>Clinikey always Loves your lives</p>
              </Carousel.Caption>
              </Carousel.Item>
              </Carousel>
                         <div>
                         <p  Class="homepara">Clinikey Hospital Systems is a customizable, comprehensive, and integrated Hospital Management System designed to manage all hospital operations. The ideal client base for Clinikey is Healthcare facilities, multi-specialty clinics, and medical practitioners. Multi-Location functionality allows your hospitals, satellite clinics, and medical stores to be interconnected. Traditional approaches encompass paper-based information processing as well as resident work position and mobile data acquisition and presentation. The customizable alert software sends the text, IM, and email reminders and improves the quality of patient care. This hospital management software helps you to be aware of revenue streams, patient records, and other critical metrics in real-time at your fingertips. It allows electronic sharing of patient records with other providers and medical applications and manages the overall health of patients such as patients and providers can see lab results and history online, securely chat with providers, schedule the next appointment. Our EHR Software is user-friendly and with no error that is usually associated with handwriting. Pulling up server or cloud information is now quickly done with new technological computer systems, yielding optimal performance. Patients can find doctors and book online appointments based on specialty, rating, fees, and availability. Organizing doctor schedules, collating patient notes, and handling payment is effortless. Doctors and Patients can check the calendar on mobile phones and live less chaotic lives. Hospital Management System Software is available for on-premise and on-cloud installations. We developed clinikey- Hospital Management Information System based on the best practices around the world.</p>
                        <h1 Class="feature">Features of Clinikey</h1>
                        <ul Class="List">
                        <li>We have best Hospitals in your locality</li>
                        <li>We have best docter to treat You</li>
                        <li>We hvae Best laborataries to trat you</li>
                        <li>We have our best medicines to treat you</li>
                        <li>We have easy appointment and payment options</li>
                        </ul>
                        </div>
            </Container>
<p Class="end"></p>
</>                 
        )
    }
}
