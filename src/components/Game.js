import React from "react";
import Keyboard from "./Keyboard/KeyBoard";
import GuessBoard from "./GuessBoard/GuessBoard";
export const WORDLEN = 5
export const TRIES = 6

const Game = () => {
  const [guess, setGuess] = React.useState(null)
  const [pos, usePos] = React.useState(0)
  return (
    <div className="game">
      <GuessBoard guessed={guess} pos={pos} />
      <Keyboard addChar={setGuess} incPos={usePos} />
    </div>
  )
}

export default Game;
//https://www.npmjs.com/package/check-word
//https://www.npmjs.com/package/random-words