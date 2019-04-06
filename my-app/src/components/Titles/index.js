import React from "react";
import "./style.css";

function Title(props) {
  return <div className="title">
    <h1>Canine or Cuisine?<img className='friendos' src='/img/.jpg' alt='friendos' />Clicks</h1>
    <h5>Test your memory (and vision!) Click each doge or chickem only once to win.</h5>
    Score: <span className="score">{props.score} &nbsp; &nbsp;| &nbsp; &nbsp;</span>
    Top Score: <span className="score">{props.topScore}</span>
  </div>
}

export default Title;