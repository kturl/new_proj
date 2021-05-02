import React, { Component } from "react";
import Card from "../Card/Card";
import "./Gameboard.css";

class Gameboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      word: "",
    };
  }
  //must setState to get board to refresh
  // this.setState = {
    //   word: text,
    // };
    render() {
      // populateWords(props) {
        
    // }
      // for (let i = 0; i < 25; i++) {
      //   const text = this.props.currentList[i];
      //   // console.log(text);
      //   return <Card word={text} />;
      // }
      return (
      <div className="gameBoard">
        {this.populateWords}
        <div id="row0" className="row">
          <Card colNumber="0" rowNumber="0" word={this.props.currentList[0]} />
          <Card colNumber="1" rowNumber="0" word={this.props.currentList[1]} />
          <Card colNumber="2" rowNumber="0" word={this.props.currentList[2]} />
          <Card colNumber="3" rowNumber="0" word={this.props.currentList[3]} />
          <Card colNumber="4" rowNumber="0" word={this.props.currentList[4]} />
        </div>
        <div id="row1" className="row">
          <Card colNumber="0" rowNumber="1" word={this.props.currentList[5]} />
          <Card colNumber="1" rowNumber="1" word={this.props.currentList[6]} />
          <Card colNumber="2" rowNumber="1" word={this.props.currentList[7]} />
          <Card colNumber="3" rowNumber="1" word={this.props.currentList[8]} />
          <Card colNumber="4" rowNumber="1" word={this.props.currentList[9]} />
        </div>
        <div id="row2" className="row">
          <Card colNumber="0" rowNumber="2" word={this.props.currentList[10]} />
          <Card colNumber="1" rowNumber="2" word={this.props.currentList[11]} />
          <Card colNumber="2" rowNumber="2" word={this.props.currentList[12]} />
          <Card colNumber="3" rowNumber="2" word={this.props.currentList[13]} />
          <Card colNumber="4" rowNumber="2" word={this.props.currentList[14]} />
        </div>
        <div id="row3" className="row">
          <Card colNumber="0" rowNumber="3" word={this.props.currentList[15]} />
          <Card colNumber="1" rowNumber="3" word={this.props.currentList[16]} />
          <Card colNumber="2" rowNumber="3" word={this.props.currentList[17]} />
          <Card colNumber="3" rowNumber="3" word={this.props.currentList[18]} />
          <Card colNumber="4" rowNumber="3" word={this.props.currentList[19]} />
        </div>
        <div id="row4" className="row">
          <Card colNumber="0" rowNumber="4" word={this.props.currentList[20]} />
          <Card colNumber="1" rowNumber="4" word={this.props.currentList[21]} />
          <Card colNumber="2" rowNumber="4" word={this.props.currentList[22]} />
          <Card colNumber="3" rowNumber="4" word={this.props.currentList[23]} />
          <Card colNumber="4" rowNumber="4" word={this.props.currentList[24]} />
        </div>
      </div>
    );
  }
}

export default Gameboard;
