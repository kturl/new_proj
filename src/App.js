import React from "react";
import Scoreboard from "./Scoreboard/Scoreboard";
import Gameboard from "./Gameboard/Gameboard";
import Wordlist from "./Wordlist/Wordlist";
import "./index.css";

let words = [];
let usedWords = [];
let dictionary = require("./Wordlist.json");

function genWordList() {
  words = [];
  let currentWord = {};
  // let prevWord = {}

  for (let i = 0; i < 25; i++) {
    let x = Math.floor(Math.random() * (dictionary.length - 1));
    currentWord = {
      text: dictionary[x],
      color: false,
      listID: x,
    };
    if (usedWords.length === dictionary.length) {
      console.log("all outta words!");
      usedWords = [];
    } else if (usedWords.includes(currentWord.text)) {
      // const oldWords = []
      // oldWords.push(currentWord.text)
      usedWords.push(currentWord.text);
      console.log(currentWord.text + " was replaced");
      i--;
    } else {
      words.push(currentWord);
      usedWords.push(currentWord.text);
      // console.log(words); // for debugging
    }
  }
  console.log(usedWords); // for debugging
  // return usedWords
}

function App() {
  genWordList();
  // console.log(words)
  return (
    <div className="application">
      <span className="title">CODENAMES</span>
      <Scoreboard newGame={genWordList} />
      <Gameboard currentList={words} />
      <Wordlist currentList={words} />
    </div>
  );
}
export default App;
