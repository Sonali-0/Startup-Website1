import React from 'react';
import './App.css';
import ContactForm from './Contactform';
import Navbar from './Navbar';
import Footer from './Footer'; 
import Socialmedia from './SocialMediaDetail' ;

function App() {
  return (
    <>
      <Navbar />
      <Footer /> 
      <ContactForm />
      <Socialmedia/>
    </>
  );
}

export default App;
