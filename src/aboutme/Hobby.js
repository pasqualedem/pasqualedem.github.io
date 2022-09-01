import React from 'react'

import './Hobby.css';

export default function Hobby({ hobby }) {
  return (
    <>
    <i class={"bi-" + hobby}></i>
    </>
  )
}
