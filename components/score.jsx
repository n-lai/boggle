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
        <ul>
          <li>Words</li>
            {
              words.map(word => {
                return <li key={word}>{word}</li>;
              })
            }
          <li>Total:</li>
        </ul>

        <ul>
          <li>Points</li>
            {
              words.map(word => {
                return <li key={word + currentList[word]}>{currentList[word]}</li>
              })
            }
          <li>{scores.reduce((a, b) => a + b, 0)}</li>
        </ul>
      </div>
    )

  }
});

module.exports = Score;
