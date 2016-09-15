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
}

Die.prototype.randomize = function(possibleLetters) {
  const randomIdx = Math.floor(Math.random() * 6);
  return possibleLetters.split("")[randomIdx];
}

Die.DELTAS = [
  [-1, -1], [-1,  0], [-1,  1], [0, -1],
  [0,  1], [1, -1], [1,  0], [1,  1]
];

Die.prototype.neighbors = function() {
  const adjacentCoords = [];
  Die.DELTAS.forEach(delta => {
    const newPos = [delta[0] + this.pos[0], delta[1] + this.pos[1]];
    if (this.board.onBoard(newPos)) {
      adjacentCoords.push(newPos);
    }
  });

  return adjacentCoords.map(coord => this.board.grid[coord[0]][coord[1]]);
};

function Board(gridSize) {
  this.gridSize = gridSize;
  this.grid = [];
  this.generateBoard();
}

Board.prototype.generateBoard = function() {
  for (let i = 0; i < this.gridSize; i++) {
    this.grid.push([]);
    for (let j = 0; j < this.gridSize; j++) {
      this.grid[i].push(new Die(BOGGLE_DICE[i][j], this, [i, j]))
    }
  }
}

Board.prototype.onBoard = function(pos) {
  return (
    pos[0] >= 0 && pos[0] < this.gridSize &&
    pos[1] >= 0 && pos[1] < this.gridSize
  );
};

Board.prototype.calculateScore = function(word) {
  debugger
  const wordLength = word.length;
  let score;

  switch(wordLength) {
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

  return score;
}

module.exports = {
  Board,
  Die
};
