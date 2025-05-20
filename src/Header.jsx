import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);

  const handleClose = () => setExpanded(false);

  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top" expanded={expanded} onToggle={handleToggle}>
      <Container>
        <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about" onClick={handleClose}>About</Nav.Link>
            <Nav.Link href="#projects" onClick={handleClose}>Projects</Nav.Link>
            <Nav.Link href="#contact" onClick={handleClose}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
