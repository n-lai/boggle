# Boggle

[Boggle live][link]

[link]: https://n-lai.github.io/boggle/

Boggle is a game built with ReactJS, JavaScript, and HTML/CSS. Make words and score points!

![image of game][game_image]

[game_image]: ./assets/boggle_screenshot.png  

## Class Breakdown
* Board
* Die

The `Board` class is responsible for populating the game grid with the appropriate amount of dice. The following code for the `Board` class checks if moves are valid:

```javascript
Board.prototype.checkValidMove = function(currentDiePos, nextDiePos) {
  const availableMoves = this.availableMoves(currentDiePos);
  let valid = false;

  availableMoves.forEach(move => {
    if (move[0] === nextDiePos[0] && move[1] === nextDiePos[1]) {
      valid = true;
    }
  });

  return valid;
}
```
The `Die` class is very simple and its only responsibility is to randomize the letters on the die:

```javascript
Die.prototype.randomize = function(possibleLetters) {
  const randomIdx = Math.floor(Math.random() * 6);
  let letter = possibleLetters.split('')[randomIdx];

  if (letter === 'Q') {
    return 'Qu';
  }

  return letter;
}
```   

## Future Directions

### Feedback

I plan to implement more feedback for this game, such as when the user makes an invalid move or if he tries to submit a word that has already been scored. This could've been easily implemented with javascript `alert`, but the styling is severely limited and I feel it would dampen user experience rather than enhance it.

Instead, I plan to utilize `sweet-alert`, a Javascript library of modals with a high degree of flexibility and configuration options.  

### Word Validation

As of right now, word submissions are based on merit and there are no measures in place to ensure the validity of the word. I plan to implement this feature by adding a `dictionary.txt` file and methods for the `Board` class to check the word with the valid words in the file.
