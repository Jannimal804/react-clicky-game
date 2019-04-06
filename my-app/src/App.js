import React, { Component } from "react";
import FriendoCards from "./components/FriendoCards";
import Wrapper from "./components/Wrapper";
import Titles from "./components/Titles";
import Alerts from "./components/Alerts";
import Guess from "./components/GuessLogic";
import friendos from "./friendos.json";

// eslint-disable-next-line no-extend-native
Array.prototype.shuffle = function () {
  let i = this.length, f, temp;
  while (--i > 0) {
    f = Math.floor(Math.random() * (i + 1));

    temp = this[f];
    this[f] = this[i];
    this[i] = temp;
   
  }
  return this;
}

class App extends Component {
  state = {
    friendos,
    score: 0,
    topScore: 0,
    clickedArr: [],
    alert: false
  };

  handleAlert = () => {
    this.setState({
      guess: false,
      alert: false,
      score: 0,
      clickedArr: [],
    });
  }

  handleClick = id => {
    if (this.state.clickedArr.indexOf(id) === -1) {

      this.state.clickedArr.push(id);

      this.setState(
        {
          score: this.state.score + 1,
          guess: true
        },

        // react setState callback documentation.
        () => {
          if (this.state.score > this.state.topScore) {
            this.setState({ topScore: this.state.score });
          }
          if (this.state.score === 10) {
            alert("you win");
            this.setState({
              score: 0,
              clickedArr: []
            });
          }
        }
      );
    }

    else {
      // alert("lost");
      this.setState({
        score: 0,
        clickedArr: [],
        alert: true,
        guess: false
      });
    }

    friendos.shuffle();
    // this.handleShuffle();
  };

  render() {
    return (
      <Wrapper>
        <Titles
          score={this.state.score}
          topScore={this.state.topScore}
        />

        {this.state.friendos.map(friendos => (
          <FriendoCards
            key={friendos.id}
            id={friendos.id}
            image={friendos.image}
            handleClick={this.handleClick}
          />
        ))}

        {this.state.alert ? <Alerts handleAlert={this.handleAlert} /> : console.log("nada")}
        {this.state.guess ? <Guess guessRight={this.guess} /> : console.log("incorrect")}

        
      </Wrapper>
    );
  }
}

export default App;
