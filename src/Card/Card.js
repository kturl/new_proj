import React, { Component } from "react";
import "./Card.css";

//color = red, blue, black, neutral
// export default function Card(props) {
//   let xy = props.colNumber + props.rowNumber
export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "",
    };
  }
  changeWord(props) {
    this.setState({
      word: props.word,
    });
  }
  render() {
    let word;
    console.log(this.props.word.text);
    this.props.word === undefined ? (word = "") : (word = this.props.word.text);

    return (
      <div className="card">
        <span className="cardOverlay">
          <span className="word">{word}</span>
        </span>
      </div>
    );
  }
}
