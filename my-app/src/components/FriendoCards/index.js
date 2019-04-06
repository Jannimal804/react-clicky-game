import React from "react";
import "./style.css";

function FriendoCards(props) {
  return (
    <div className="cards">
      <div className="card" onClick={() => props.handleClick(props.id)} >
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    </div>
  );
}

export default FriendoCards; 