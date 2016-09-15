"use strict";

const React = require('react');

const Score = React.createClass({

  render() {
    const currentList = this.props.currentList;
    const words = Object.keys(currentList);
    const scores = words.map(word => {
      return currentList[word];
    });

    return (
      <div className='scoreboard'>
        <ul className='words'>
          <li><b>Words</b></li>
            {
              words.map(word => {
                return <li key={word}>{word.toLowerCase()}</li>;
              })
            }
          <li><b>Total:</b></li>
        </ul>

        <ul className='score'>
          <li><b>Score</b></li>
            {
              words.map(word => {
                return <li key={word + currentList[word]}>{currentList[word]}</li>
              })
            }
          <li><b>{scores.reduce((a, b) => a + b, 0)}</b></li>
        </ul>
      </div>
    )

  }
});

module.exports = Score;
