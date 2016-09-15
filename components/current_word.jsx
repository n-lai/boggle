"use strict";
const React = require('react');

const CurrentWord = React.createClass({
  handleSubmit() {
    let word = this.props.currentWord.join('');

    this.props.updateScoreBoard(word);
  },

  render() {
    let word = this.props.currentWord.join('');
    return (
      <div className="current-word">
        <h2><b>Current Word</b>: {word}</h2>
        <button type="submit" onClick={this.handleSubmit}>Submit Word</button>
      </div>
    )
  }
});

module.exports = CurrentWord;
