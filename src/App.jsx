// src/App.js
import React from 'react';
import "./App.css"
import Header from './Header';
import Projects from './Project';
import Hero from './Hero';
import About from './About';
import Contact from './Conatct';
import Footer from './Footer';
function App() {
  return (
    <>

      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
