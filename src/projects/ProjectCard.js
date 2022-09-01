import React from 'react'
import Card from 'react-bootstrap/Card';

import "./ProjectCard.css"

export default function ProjectCard({ project }) {
  return (
    
    <Card style={{ margin: '1rem' }}>
    <a href={project.http}>
        <Card.Img variant="top" src={project.thumbnail} href={project.http}/>
    </a>
    <Card.Body>
      <Card.Title>{project.title}</Card.Title>
      <Card.Text>
        {project.description}
      </Card.Text>
      
    <Card.Link href={project.http}>Github</Card.Link>
    </Card.Body>
  </Card>
  )
}
