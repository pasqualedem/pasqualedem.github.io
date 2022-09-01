import React from 'react'
import Skill from './Skill'
import { v4 as uuidv4 } from 'uuid';

export default function Skills({ skills }) {
  return (
    skills.map(skill => {
        return <Skill key={uuidv4()} skill={skill}/>
    })
  )
}
