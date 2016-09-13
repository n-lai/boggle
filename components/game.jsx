"use strict";

const Board = require('./board');
const React = require('react');
const Boggle = require('../boggle');

const Game = React.createClass({
  getInitialState() {
    const board = new Boggle.Board(5);
    debugger
    return ({ board });
  },

  updateGame() {

  },

  render() {
    return (
      <div>
        <Board board={this.state.board} updateGame={this.updateGame} />
      </div>
    );
  }
});

module.exports = Game;
