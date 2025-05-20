import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:suhaibjahagirdar@gmail.com?subject=Contact from Portfolio&body=Name: ${e.target.name.value}%0D%0AEmail: ${e.target.email.value}%0D%0AMessage: ${e.target.message.value}`;
  };

  return (
    <Container id="contact" className="my-5">
      <h2 className="text-center mb-4">Contact Me</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" required />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" required />
        </Form.Group>

        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" required />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit">Send Email</Button>
        </div>
      </Form>

      <div className="mt-4 text-center">
        <a
          href="https://www.linkedin.com/in/suhaibjahagirdar" // ✅ Replace with your real LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          className="me-3"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://www.instagram.com/its_suhaib.001"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} />
        </a>
      </div>
    </Container>
  );
};

export default Contact;
