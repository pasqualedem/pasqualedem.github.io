import React from 'react'

import Hobbies from './Hobbies.js'
import Language from './Language.js'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import './SideColumn.scss'

const interests = ["Artificial Intelligence", 'Deep Learning', 'Computer Vision', 'Drone Vision']

const hobbies = [
  "bicycle",
  "controller"
]

const languages = [
  {'name': 'Italian', 'level': 'Native'},
  {'name': 'English', 'level': 'Expert'},
]

const email = "pas.demarinis@gmail.com"

export default function SideColumn() {
  return (
    
    <Col lg={{ span: 4 }} md="4" sm="4">

      <Container className="pb-3">
      <Row>
        <Col xxl={{ span: 8, offset: 2 }} xl={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} sm="12">
          <Image thumbnail={true} roundedCircle={true} fluid={true} src={require("../asset/images/photo.jpg")}/>
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
        <span> <i class="bi-envelope email"></i><a href={"mailto:" + email}>{email}</a></span>
        </Col>
      </Row>
      </Container>
      
    <Container>
      <Row className="justify-content-md-center">
        <Col xl={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} sm="12">
        <div class="btop">
        <h3> Languages </h3>
          {languages.map(
            language => {
            return <Language language={language} />
            })}
        </div>
        <div class="btop">
          <h3> Interests </h3>
          {interests.map(
            interest => {
            return <p class="interests">{interest}</p>
            })}
        </div>
        <div class="btop">
          <h3 class="h3-hobbies"> Hobbies </h3>
          <Hobbies hobbies={hobbies} />
        </div>
        </Col>
      </Row>
    </Container>

  </Col>
  )
}
