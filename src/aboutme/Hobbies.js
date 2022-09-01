import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import Hobby from './Hobby'

export default function Hobbies({ hobbies }) {
    return (
        hobbies.map(hobby => {
            return <Hobby key={uuidv4()} hobby={hobby}/>
        })
      )
}
