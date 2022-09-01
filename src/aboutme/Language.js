import React from 'react'
import "../custom.scss"

export default function Language({ language}) {
  return (
    <>
    <span>{language.name} 
      <span class="dgrey">
        {" (" + language.level + ")"}
      </span>
    </span>
    <br></br>
    </>
  )
}
