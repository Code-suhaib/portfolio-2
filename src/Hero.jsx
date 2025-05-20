
import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Hero = () => {
  const heroStyle = {
    background: 'linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)',
    color: 'white',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 20px',
  };

  return (
    <section style={heroStyle} id="home">
      <Container>
        <h1 className="display-3 fw-bold mb-3">Hi, I'm Suhaib Jahagirdar</h1>
        <p className="lead mb-4">
          A passionate MERN Stack Developer crafting modern and responsive web experiences.
        </p>
        <Button href="#about" variant="light" size="lg">
          Learn More About Me
        </Button>
      </Container>
    </section>
  );
};

export default Hero;
