import React from 'react';
import { Container, Row, Col, Image, Badge } from 'react-bootstrap';
import EducationTimeline from './EducationTimeline';
import profile from "./assets/profile.jpeg"; // Adjust path based on your folder structure

const About = () => (
  <Container id="about" className="my-5">
    <Row className="align-items-center">
      <Col md={4} className="text-center mb-4 mb-md-0">
        <Image src={profile} roundedCircle fluid alt="Profile" />
      </Col>
      <Col md={8}>
        <h2>About Me</h2>
        <p>
          I am a passionate web developer specializing in the MERN stack (MongoDB, Express, React, Node.js) with strong skills in React-Bootstrap and responsive design. 
          I enjoy building modern, user-friendly web applications that deliver great user experiences across devices.
        </p>
        <p>
          Beyond coding, I have a keen interest in UI/UX design principles and always strive to learn new technologies to stay updated with the fast-evolving web ecosystem.
        </p>
        <p>
          When I’m not coding, you can find me exploring photography, reading tech blogs, or experimenting with creative projects.
        </p>

        <h5>Skills:</h5>
        <div className="mb-3">
          {['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Bootstrap', 'CSS', 'HTML5', 'Git', 'REST APIs'].map(skill => (
            <Badge key={skill} bg="primary" className="me-2 mb-2">{skill}</Badge>
          ))}
        </div>

        <EducationTimeline />
      </Col>
    </Row>
  </Container>
);

export default About;
