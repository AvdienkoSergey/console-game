import Secret from "./Secret.js";
import Guess from "./Guess.js";
import Diff from "./Diff.js";
import DiffToString from "./DiffToString.js";
import Attempts from "./Attempts.js";
import Game from "./Game.js";

const moveInTheGame = 5;

new Game(
  new Attempts(
    new DiffToString(
      new Diff(
        new Secret(), 
        new Guess()
      )
    ),
    moveInTheGame
  )
).start()
