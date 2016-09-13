const React = require('react');

const Die = React.createClass({
  _handleClick() {

  },

  render() {
    const die = this.props.die;
    return (
      <div>{die.letter}</div>
    )
  }
});

module.exports = Die;
