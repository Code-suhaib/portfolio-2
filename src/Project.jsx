import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const projects = [
  {
    title: 'Spotify Clone',
    description: 'Built a music player UI using HTML, CSS, and basic JavaScript.',
  },
  {
    title: 'Nike Landing Page',
    description: 'Responsive landing page built using modern CSS techniques.',
  },
  {
    title: 'Travel website',
    description: 'Full-stack project using MERN stack and Bootstrap.',
  },
];

const Projects = () => (
  <Container id="projects" className="my-5">
    <h2 className="text-center mb-4">Projects</h2>
    <Row>
      {projects.map((project, index) => (
        <Col md={4} key={index} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Projects;
