"use strict";

const Board = require('./board');
const CurrentWord = require('./current_word');
const Score = require('./score');
const React = require('react');
const Boggle = require('../boggle');

const Game = React.createClass({
  getInitialState() {
    const board = new Boggle.Board(5);
    return ({ board: board, currentWord: [], submittedWords: {}, clickedDice: [] });
  },

  checkIfNotClicked(pos) {
    const previousDice = this.state.clickedDice;
    let notClicked = true;

    previousDice.slice(0, -1).forEach(die => {
      if (this.checkEqualDie(die, pos)) {
        notClicked = false;
      }
    });

    return notClicked;
  },

  checkEqualDie(pos1, pos2) {
    return pos1[0] === pos2[0] && pos1[1] === pos2[1]
  },

  updateLetters(pos, letter, die) {
    const board = this.state.board;

    const previousDice = this.state.clickedDice;
    const lastPair = previousDice.slice(-1)[0];

    const newWord = this.state.currentWord;

    if (previousDice.length > 0 && this.checkEqualDie(lastPair, pos)) {
      previousDice.pop();
      newWord.pop();
      die.className = "die";
    }
    else if (previousDice.length === 0 || (board.checkValidMove(lastPair, pos) && this.checkIfNotClicked(pos))) {
      previousDice.push(pos);
      newWord.push(letter);
      die.className = "die selected";
    }
    this.setState({ clickedDice: previousDice, currentWord: newWord });
  },

  updateScoreBoard(word) {
    const previousWords = this.state.submittedWords;

    if (!previousWords.hasOwnProperty(word) && word.length > 0) {
      let score = this.state.board.calculateScore(word);
      previousWords[word] = score;

      this.setState({ submittedWords: previousWords});
    }
    this.setState({ currentWord: [], clickedDice: [] });
    $('.die').removeClass("selected");
  },

  render() {
    return (
      <div>
        <Board
          board={this.state.board}
          updateLetters={this.updateLetters}
          selectedDice={this.state.clickedDice}
          checkEqualDie={this.checkEqualDie}
        />
        <CurrentWord currentWord={this.state.currentWord} updateScoreBoard={this.updateScoreBoard}/>
        <Score currentList={this.state.submittedWords} />
      </div>
    );
  }
});

module.exports = Game;
