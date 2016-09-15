"use strict";

const Board = require('./board');
const CurrentWord = require('./current_word');
const Score = require('./score');
const React = require('react');
const Boggle = require('../boggle');

const Game = React.createClass({
  getInitialState() {
    const board = new Boggle.Board(5);
    return ({ board: board, currentWord: [], submittedWords: {} });
  },

  updateLetters(letter) {
    const newWord = this.state.currentWord;
    newWord.push(letter);
    this.setState({ currentWord: newWord });
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
