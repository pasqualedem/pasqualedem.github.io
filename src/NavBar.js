import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './NavBar.scss'

const socials = [
  {'name': 'instagram', 'link': "https://www.instagram.com/pasquale.demarinis/"},
  {'name': "facebook" , 'link': "https://www.facebook.com/Pasquale.De.Marinis.LOL"},
  {'name': "linkedin" , 'link': "https://www.linkedin.com/in/pasquale-de-marinis-2873071a2/"},
  {'name': "github"   , 'link': "https://github.com/pasqualedem"},
  {'name': "twitter"  , 'link': "https://twitter.com/MarinisPasquale"}
]


export default function NavBar() {
const [color, setColor] = useState(true)
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
