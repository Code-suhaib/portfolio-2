// src/components/EducationTimeline.js
import React from 'react';
import './EducationTimeline.css';

const EducationTimeline = () => {
  const educationData = [
    {
      year: '2022 - 2026',
      degree: 'B.E in Computer Science',
      institution: 'Siddhant College of Engineering ',
      description: 'Specialized in full-stack development and AI/ML.',
    },
    {
      year: '2020 - 2022',
      degree: 'Higher Secondary',
      institution: 'H.B Bhosale Junior College',
      description: 'Major in Science (PCM)',
    },
    {
      year: '2011 - 2018',
      degree: 'High School',
      institution: 'Jyoti English  High School',
      description: 'Completed 10th Grade with Distinction',
    },
  ];

  return (
    <div className="timeline-container">
      <h2 className="text-center mb-4">Education</h2>
      <div className="timeline">
        {educationData.map((edu, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h5>{edu.year}</h5>
              <h6>{edu.degree}</h6>
              <p><strong>{edu.institution}</strong></p>
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
