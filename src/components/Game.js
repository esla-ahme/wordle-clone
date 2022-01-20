import React from "react";
import Keyboard from "./Keyboard/KeyBoard";
import GuessBoard from "./GuessBoard/GuessBoard";

export const WORDLEN = 5
export const TRIES = 6
export const CORRECT = "mango"

export const NOTCHECKED = 0
export const CORRECTPOSITION = 1
export const WRONGPOSITION = 2
export const WRONG = -1
const Game = () => {
  const [guess, setGuess] = React.useState(new Array(TRIES))
  const [pos, usePos] = React.useState(0)
  return (
    <div className="game">
      <GuessBoard guessed={guess} />
      <Keyboard guessed={guess} addChar={setGuess} incPos={usePos} pos={pos} />
    </div>
  )
}

export default Game;
//https://www.npmjs.com/package/check-word
//https://www.npmjs.com/package/random-words