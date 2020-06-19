import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Docter from './components/Docter';
import Hospital from './components/Hospital';
import Navbar from './components/CustomNavbar';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/hospital" component={Hospital} />
        <Route path="/docter" component={Docter} />
        <Route path="/appointment" component={Appointment} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
