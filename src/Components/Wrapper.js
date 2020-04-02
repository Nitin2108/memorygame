import React, { Component } from "react";
import CharacterCard from "./CharacterCard";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import characters from "../Models/data.json";
import Result from "./Result";
import "../App.css";

class Wrapper extends React.Component {
  state = {
    characters,
    highScore: 0,
    currentScore: 0,
    Clicked: false,
    gameOver: 0
  };

  handleClick = id => {
    this.shuffleArray();
    this.handleScore(id);
    console.log(this.state.timesClicked);
  };
  playAgain = () => {
    this.setState({ currentScore: 0 });
    this.setState({ Clicked: true });
    this.setState({ gameOver: 0 });
    this.state.characters.forEach(element => (element.clicked = false));
  };
  handleScore = id => {
    this.state.characters.forEach(element => {
      if (id === element.id && element.clicked === false) {
        element.clicked = true;
        this.setState({ Clicked: false });
        this.handleIncrement();
      } else if (id === element.id && element.clicked === true) {
        if (this.state.currentScore > this.state.highScore) {
          this.setState({ highScore: this.state.currentScore });
        }
        this.setState({ gameOver: 1 });

        console.log(this.state.characters);
      }
    });
  };

  shuffleArray = () => {
    // Shuffle array of objects
    const shuffledArr = this.shuffle(this.state.characters);
    // Setting 'shuffledArr' as the new state
    this.setState({ shuffledArr });
  };

  // handleIncrement increments this.state.currentScore by 1
  handleIncrement = () => {
    // Using setState method to update component's state
    this.setState({ currentScore: this.state.currentScore + 1 });
  };

  // Function that takes an array as a parameter and shuffles it
  shuffle = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  render() {
    return (
      <div>
        <div className="wrapper">
         
        <Navbar
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
        />
        <Jumbotron />
        { (this.state.currentScore !== 12) && (this.state.gameOver===0) ?  this.state.characters.map(character => (
          <CharacterCard
            Clicked={this.state.Clicked}
            handleClick={this.handleClick}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            occupation={character.occupation}
          />
        ))
        :null}
        {(this.state.gameOver === 1) || (this.state.currentScore===12)  ? (
          <Result
            score={this.state.currentScore}
            playAgain={this.playAgain}
          ></Result>
        ) : null}


        
        </div>
        <p className="bottom">
          {" "}
          Developed by <br></br> Nitin Goswami
        </p>
      </div>
    );
  }
}
export default Wrapper;
