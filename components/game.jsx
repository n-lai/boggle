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

  updateLetters(pos, letter) {
    const board = this.state.board;

    const clickedDice = this.state.clickedDice;
    const lastPair = clickedDice.slice(-1)[0];

    const newWord = this.state.currentWord;

    if (clickedDice.length > 0 && (lastPair[0] === pos[0] && lastPair[1] === pos[1])) {
      clickedDice.pop();
      newWord.pop();
    }
    else if (clickedDice.length === 0 || board.checkValidMove(lastPair, pos)) {
      clickedDice.push(pos);
      newWord.push(letter);
    } else {
      console.log('invalid move');
    }

    this.setState({ clickedDice: clickedDice, currentWord: newWord });
  },

  updateScoreBoard(word) {
    const previousWords = this.state.submittedWords;

    if (!previousWords.hasOwnProperty(word)) {
      let score = this.state.board.calculateScore(word);
      previousWords[word] = score;

      this.setState({ submittedWords: previousWords});
    }
    this.setState({ currentWord: [] });
  },

  render() {
    return (
      <div>
        <Board board={this.state.board} updateLetters={this.updateLetters} />
        <CurrentWord currentWord={this.state.currentWord} updateScoreBoard={this.updateScoreBoard}/>
        <Score currentList={this.state.submittedWords} />
      </div>
    );
  }
});

module.exports = Game;
