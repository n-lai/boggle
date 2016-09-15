const Die = require('./die');
const React = require('react');

const Board = React.createClass({
  handleClick(e) {
    let letter = e.target.dataset.letter;
    let pos = e.target.dataset.pos.split(',').map(Number);

    this.props.updateLetters(pos, letter, e.target);
  },

  render() {
    const board = this.props.board;

    return (
      <div className='board' onClick={this.handleClick} id='board'>
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
    const selectedDice = this.props.selectedDice;
    const checkIfEqual = this.props.checkEqualDie;

    return row.map( (die, j) => {

      return (
        <Die
          die={die}
          updateGame={this.props.updateGame}
          key={i * board.gridSize + j}
        />
      );
    });
  }
});

module.exports = Board;
