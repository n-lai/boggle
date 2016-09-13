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

module.exports = {
  Board,
  Die
};
