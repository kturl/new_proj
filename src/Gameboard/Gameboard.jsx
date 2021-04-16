import React from 'react'
import Row from '../Row/Row'
import './Gameboard.css'

export default function Gameboard() {
  return (
    <div className='gameBoard'>
      <Row rowNumber='0'/>
      <Row rowNumber='1'/>
      <Row rowNumber='2'/>
      <Row rowNumber='3'/>
      <Row rowNumber='4'/>
    </div>
  )
}
