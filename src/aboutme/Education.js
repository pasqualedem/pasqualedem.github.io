import React from 'react'
import School from './School'
import { v4 as uuidv4 } from 'uuid';

export default function Education({ education }) {
  return (
    education.map(school => {
        return <School key={uuidv4()} school={school}/>
    })
  )
}
