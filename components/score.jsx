"use strict";

const React = require('react');

const Score = React.createClass({
  
  render() {
    const currentList = this.props.currentList;
    const words = currentList.keys();
    const scores = currentList.values();


  }
});

module.exports = Score;
