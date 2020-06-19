import React, { Component } from 'react'
import { Figure ,Card } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div>
                <p Class="aboutpara">The advancements in healthcare industry are not just confined to the quality medical care solutions but also to change the delivery system and patient experience as a whole. All the industries have understood the innate potential of automation and the results are quite optimistic. It is a now time for the healthcare industry transformation, in the light of emerging automation solutions in the hospital management system.
As a sector that strives to establish a healthy world, digitalization or the paperless operations system in healthcare industry is a necessity than a need. It is the first step that needs to be taken to unveil a greener world for the upcoming generation.The perks of digitalization are vast and most importantly it helps the environment. The initial steps have already been taken towards a paperless system. Still there is a lot of work that needs to be done to make the world a paperless place</p><h1>Advantages of  Hospital Management System:</h1>
<p Class="aboutpara1"><big>Access Medical Documents Remotely </big>– In this generation that is enabled by Cloud Computing, the healthcare providers will have access to medical documents from almost anywhere with just an Internet connection.
The electronic communications in a healthcare system puts the patients at the forefront of knowledge with the ease of access to their medical records at their fingertips. It not only save the time of both parties but also opens doors for the quality medical care even from the remote areas.</p>
<p Class="aboutpara1"><big>Storage and Security</big> – The most important functions in a hospital operational setup are storing the medical records and securing them. Storing the medical records in paper forms would be the most strenuous task as it is space and time consuming. The paper medical records are  easy to lose and hard to find a particular file from the pile. Electornic records save time in finding the required document as well as they are stored in an organized fashion. The best thing about the digital document management systems are that they are saved in cloud and it is almost impossible to lose them.</p>

<p Class="aboutpara1"><big>Time Saving and Efficient</big> – The hospital is a fast-paced environment and demands access to the medical files as quickly as possible. With the help of electronic medical records (EMR) you already save lot of time by simply using a few buttons on the system. Managing the bundles of hard copies has already been reduced, thanks to the EMR and EPR.

The paperless appointments, doctor notes and prescriptions save up on the time. For example, the pharmacy could access the prescription that is entered on the online database by the support staff.

This reduces lot of time and eases the process of patient flow within a hospital management system.</p>

<p class="aboutpara1"><big>Cleans Up the Clutter</big> – The disorganization of the medical records could be alleviated with the help of paperless operation systems in hospitals. As medical records tend to pile up day by day, space allocation for these files would be a real challenge. Instead, digital files will take less space and the setting up the IT infrastructure is simple, thanks to the advanced cloud computing facilities.</p>
  <div Class="aboutdiv">       
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="assets\adult-biology-chemical-chemist-356040.jpg" />
  <Card.Body>
    <Card.Title>Laborataries</Card.Title>
    <Card.Text>
     Clinikey had best laborataries and laboratory technicians for X-ray,blood check etc
    </Card.Text>
   
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="assets\faceless-doctor-with-pills-in-hands-4021811.jpg" />
  <Card.Body>
    <Card.Title>Pharmacy</Card.Title>
    <Card.Text>
     Clinikey had best medicines like pills,tubes etc
    </Card.Text>
   
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="assets\woman-in-white-coat-wearing-white-face-mask-3985163.jpg" />
  <Card.Body>
    <Card.Title>Docters</Card.Title>
    <Card.Text>
     Clinikey had best Docters,suegens and dentist to treat you
    </Card.Text>
   
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="assets\patient-looking-at-the-dentist-tablet-3952136.jpg" />
  <Card.Body>
    <Card.Title>Patient record</Card.Title>
    <Card.Text>
     Clinikey had best safe software to store every patient record
    </Card.Text>
   
  </Card.Body>
</Card>

</div>
<p Class="end"></p>
 </div>

        )
    }
}
