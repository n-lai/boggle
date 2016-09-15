const React = require('react');

const Die = React.createClass({

  render() {
    const die = this.props.die;
    return (
      <div className="die" data-letter={die.letter} data-pos={die.pos}>{die.letter}</div>
    )
  }
});

module.exports = Die;
