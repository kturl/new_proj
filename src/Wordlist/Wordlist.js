import React from "react";
import "./Wordlist.css";

function Wordlist(props) {
  const li = props.currentList.map((word) => (
    <li key={word.listID}>{word.text}</li>
  ));
  // console.log(props.li)
  return (
    <div>
      <ul id="wordList">{li}</ul>
    </div>
  );
}
export default Wordlist;
