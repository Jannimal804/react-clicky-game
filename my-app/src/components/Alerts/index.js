import React from "react";
import "./style.css";

function Alerts(props) {
  return <div className="alert">
    <br/><h1 className="blink"> Game Over, You Lose</h1>
    <h3> Click to Play Again</h3><br/>
    <div className="btn btn-danger replay" onClick={props.handleAlert} >Replay</div><br/><br/><br/>

    <div className="Gif">
      <img className='Alert' src='\img\VID_28961211_195716_279.gif' alt='win' />
    </div>
  </div>;
}

export default Alerts;