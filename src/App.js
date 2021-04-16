import React from 'react'
import Scoreboard from './Scoreboard/Scoreboard'
import Gameboard from './Gameboard/Gameboard'
import Wordlist from './Wordlist/Wordlist'
import './index.css'

// const [word, color] = useState(genWordList(words))
let list = require('./Wordlist.json')
const words = []

function genWordList() {
  let prevWord = 'a'
  let currentWord = ''

  for (let i = 0; i < 25; i++) {
    let x = Math.floor(Math.random() * (list.length - 1))
    // console.log(x)
    // if/else checks if the word is already in the list before pushing it to words[] or setting the for loop back one iteration
    if (prevWord === currentWord) {
      i--;
    } else {
      currentWord = { word: list[x], color: false, status: '' }
      words.push(currentWord);
    }
    // prevWord = currentWord
    // list[x].status = 'used'
  }
  console.log(words); // for debugging
}

function App() {
  // genWordList()
  return (
    <div className='application'>
      <span className="title">CODENAMES</span>
      <Scoreboard />
      <Gameboard />
      <Wordlist />
    </div>
  )
}
export default App;