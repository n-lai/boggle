const React = require('react');

const Die = React.createClass({
  
  render() {
    const die = this.props.die;
    return (
      <div className="die" data-tag={die.letter}>{die.letter}</div>
    )
  }
});

module.exports = Die;
