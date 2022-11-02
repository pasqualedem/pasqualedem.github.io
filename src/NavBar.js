import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'

import './NavBar.scss'

const socials = [
  {'name': 'instagram', 'link': "https://www.instagram.com/pasquale.demarinis/"},
  {'name': "facebook" , 'link': "https://www.facebook.com/Pasquale.De.Marinis.LOL"},
  {'name': "linkedin" , 'link': "https://www.linkedin.com/in/pasquale-de-marinis-2873071a2/"},
  {'name': "github"   , 'link': "https://github.com/pasqualedem"},
  {'name': "twitter"  , 'link': "https://twitter.com/MarinisPasquale"}
]
const pdf = "https://drive.google.com/file/d/1bL-6Ig5QtOLQ8Jl6wFjCPSo3GV0XM5kJ/view?usp=sharing"

export default function NavBar() {
const [color] = useState(true)
//   const changeColor = () => {
//     if (window.scrollY >= 70) {
//       setColor(true)
//     } else {
//       setColor(false)
//     }
//   }
//   window.addEventListener('scroll', changeColor)

  return (
    <Navbar collapseOnSelect bg={color ? "flat" : 'light'} variant={color ? "flat" : 'light'} expand="md" sticky="top">
      <Container>
        <Navbar.Brand class="navItem" href="#"><span class={color ? "lightItem" : 'darkItem'}>Pasquale De Marinis</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" variant='flat'>
            <Nav.Link href="#aboutme"><span class={color ? "lightItem" : 'darkItem'}>About me</span></Nav.Link>
            <Nav.Link href="#projects"><span class={color ? "lightItem" : 'darkItem'}>Projects</span></Nav.Link>
          </Nav>
          { socials.map( social => {
            return <Nav.Link href={social.link} className="border-left pl-2 ml-auto"><i class={"bi-" + social.name + " navicon"} ></i></Nav.Link>
          })}
            <Nav className="mc-auto" variant='pills'>
            <Nav.Link href={pdf}><span class={color ? "lightItem" : 'darkItem'}><Button variant={color ? "light" : 'dark'}>PDF CV</Button></span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
