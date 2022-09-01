import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Skill({ skill }) {
  return (
    <p>
    <Row>
    <Col lg="4"><b>{skill.name}</b></Col>
    <Col lg="8"><ProgressBar variant="flat" now={skill.value} /></Col>
    </Row>
    </p>
    
  )
}
