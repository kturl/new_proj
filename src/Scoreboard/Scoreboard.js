import React from "react";
import "./Scoreboard.css";

export default function Scoreboard(props) {
  // console.log(props.newGame)
  return (
    <div className="headerRow">
      <div className="team redBar">
        <div className="redHeader endTurn">End Turn</div>
        <div className="redHeader">Red Team</div>
        <div className="redHeader">0</div>
      </div>
      <button className="button" onClick={props.newGame}>
        NEW GAME
      </button>
      <div className="team blueBar">
        <div className="blueHeader">0</div>
        <div className="blueHeader">Blue Team</div>
        <div className="blueHeader endTurn">End Turn</div>
      </div>
    </div>
  );
}
