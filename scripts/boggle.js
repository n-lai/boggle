const BOGGLE_DICE = [
  ['AAAFRS', 'AAEEEE', 'AAFIRS', 'ADENNN', 'AEEEEM'],
  ['AEEGMU', 'AEGMNN', 'AFIRSY', 'BJKQXZ', 'CCENST'],
  ['CEIILT', 'CEILPT', 'CEIPST', 'DDHNOT', 'DHHLOR'],
  ['DHLNOR', 'DHLNOR', 'EIIITT', 'EMOTTT', 'ENSSSU'],
  ['FIPRSY', 'GORRVW', 'IPRRRY', 'NOOTUW', 'OOOTTU']
];

function Die(possibleLetters, board, pos) {
  this.board = board;
  this.pos = pos;
  this.letter = this.randomize(possibleLetters);
};

Die.prototype.randomize = function(possibleLetters) {
  const randomIdx = Math.floor(Math.random() * 6);
  let letter = possibleLetters.split('')[randomIdx];

  if (letter === 'Q') {
    return 'Qu';
  }
  return letter;
};

Die.DELTAS = [
  [-1, -1], [-1,  0], [-1,  1], [0, -1],
  [0,  1], [1, -1], [1,  0], [1,  1]
];

function Board(gridSize) {
  this.gridSize = gridSize;
  this.grid = [];
  this.generateBoard();
};

Board.prototype.generateBoard = function() {
  for (let i = 0; i < this.gridSize; i++) {
    this.grid.push([]);
    for (let j = 0; j < this.gridSize; j++) {
      this.grid[i].push(new Die(BOGGLE_DICE[i][j], this, [i, j]))
    }
  }
};

Board.prototype.availableMoves = function(diePos) {

  return (
    Die.DELTAS.map(delta => {
      return [diePos[0] + delta[0], diePos[1] + delta[1]]
    })
  )
};

Board.prototype.checkValidMove = function(currentDiePos, nextDiePos) {
  const availableMoves = this.availableMoves(currentDiePos);
  let valid = false;

  availableMoves.forEach(move => {
    if (move[0] === nextDiePos[0] && move[1] === nextDiePos[1]) {
      valid = true;
    }
  });

  return valid;
};

Board.prototype.calculateScore = function(word) {
  const wordLength = word.length;
  let score;
  debugger
  switch(wordLength) {
    case 0:
    case 1:
    case 2:
      score = 0;
      break;
    case 3:
    case 4:
      score = 1;
      break;
    case 5:
      score = 2;
      break;
    case 6:
      score = 3;
      break;
    case 7:
      score = 5;
      break;
    default:
      score = 11;
      break;
  }
  debugger
  return score;
};

module.exports = {
  Board,
  Die
};
