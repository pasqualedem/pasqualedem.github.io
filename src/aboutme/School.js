import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "../custom.scss"

export default function School({ school }) {
  return (
    <p>
          <Row>
            <Col xl="10">
            <b>{school.degree}</b>
            </Col>
            <Col xl="2">
            <div class="right-text"><span class="dgrey">{school.date}</span></div>
            </Col>
          </Row>
          <span class="dgrey"> {school.institution} <br></br> </span>
          Graduated {school.grade} with a thesis in {school.thesis_subject} named: {school.thesis_title}.<br></br>
    </p>
  )
}
