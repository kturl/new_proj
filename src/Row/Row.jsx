import React from 'react'
import Card from '../Card/Card'
import './Row.css'

export default function Row({rowNumber}) {
  // let rowNumber = this.rowNumber
  return (
    <div className='row'>
      <Card colNumber='0' rowNumber={rowNumber}/>
      <Card colNumber='1' rowNumber={rowNumber}/>
      <Card colNumber='2' rowNumber={rowNumber}/>
      <Card colNumber='3' rowNumber={rowNumber}/>
      <Card colNumber='4' rowNumber={rowNumber}/>
    </div>
  )
}
