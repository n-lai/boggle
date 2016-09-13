const Die = require('./die');
const React = require('react');

const Board = React.createClass({
  render() {
    const board = this.props.board;

    return (
      <div id='board'>
        {this.renderRows()}
      </div>
    );
  },

  renderRows() {
    const board = this.props.board;
    return board.grid.map( (row, i) => {
      return (
        <div className="row" key={`row-${i}`}>
          {this.renderDice(row, i)}
        </div>
      );
    });
  },

  renderDice(row, i) {
    const board = this.props.board;
    return row.map( (die, j) => {
      return (
        <Die
          die={die}
          updateGame={this.props.updateGame}
          key={i * board.gridSize + j} />
      );
    });
  }
});

module.exports = Board;
