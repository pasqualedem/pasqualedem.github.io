import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Education from './Education.js'
import Skills from './Skills.js'
import SideColumn from './SideColumn.js';

import './AboutMe.css';

export default function AboutMe() {

  const description = "I'm a computer scientist and AI expert."

  const education = [
      {
        "institution": "Università degli Studi di Bari 'Aldo Moro'",
        "degree": "Master Degree in Computer Science, Artificial Intelligence curriculum",
        "thesis_subject": "Computer Vision",
        "thesis_title": "Real-time Weed Mapping from multispectral drone imagery for Precision Agriculture",
        "grade": "summa cum laude and a special mention",
        "date": "2020/2022"
    },
    {
        "institution": "Università degli Studi di Bari 'Aldo Moro'",
        "degree": "Bachelor Degree in Computer Science",
        "thesis_subject": "Data Mining",
        "thesis_title": "Synthesis of an algorithm autoencoder based for the classification of remote sensed optical earth data",
        "grade": "summa cum laude",
        "date": "2017/2020"
    }
    ]
  
  const skills = [
    {'name': "Python", 'value': 97},
    {'name': "Pandas, NumPy", "value": 97},
    {'name': "TensorFlow, PyTorch, sklearn", "value": 97},
    {'name': "C, C++", "value": 80},
    {'name': "Prolog", "value": 70},
    {'name': "Haskell", "value": 70},
    {'name': "MySQL", "value": 90},
    {'name': "Oracle", "value": 90},
    {'name': "Cassandra", "value": 80},
    {'name': "Neo4J", "value": 60},
    {'name': "HTML, CSS, JavaScript", "value": 70},
  ]


  return (
    <Container className="p-3">
    <Container className="p-5 mb-4 bg-light rounded-3">
      <Row>
        <Col lg="8" md="8" sm="8">
          <h2 id="aboutme" className="header">About me</h2>
          {description}
          <Container className="p-3">
          <h3><i class="bi-mortarboard-fill h3-i"></i> Education </h3>
          <Education education={education} />
          </Container>

          <Container className="p-3">
          <h3><i class="bi-wrench h3-i"></i> Skills </h3>
          <Skills skills={skills} />
          </Container>
        </Col>
        <SideColumn/>
      </Row>
      <br></br>
    </Container>
  </Container>
  )
}
