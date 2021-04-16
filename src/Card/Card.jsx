import React from 'react'
import './Card.css'

//color = red, blue, black, neutral
export default function Card({ rowNumber, colNumber }) {
  let xy = colNumber + rowNumber
  // function getWord() {
  //   console.log(xy)
  // }
  // getWord()
  return (
    <div className='card'>
      <span key={xy} className="cardOverlay"><span key={xy} className="word" ></span></span>
    </div>
  )
}
