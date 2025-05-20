// src/components/Footer.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => (
  <footer style={{ backgroundColor: '#007bff', color: 'white', padding: '1rem 0', marginTop: '3rem' }}>
    <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center">
      <div>&copy; {new Date().getFullYear()} Suhaib Jahagirdar. All rights reserved.</div>
      <div>
        <a
          href="https://www.linkedin.com/in/suhaibjahagirdar3700"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white', marginRight: '1rem' }}
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://www.instagram.com/its_suhaib.001"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white', marginRight: '1rem' }}
          aria-label="Instagram"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://github.com/code-suhaib"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white' }}
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </Container>
  </footer>
);

export default Footer;
