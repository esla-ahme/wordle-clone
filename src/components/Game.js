import React from "react";
import Keyboard from "./Keyboard/KeyBoard";
import GuessBoard from "./GuessBoard/GuessBoard";
import { getRandomWord } from "../utils/words";

export const WORDLEN = 5
export const TRIES = 6
export const CORRECT = getRandomWord()

export const NOTCHECKED = 0
export const CORRECTPOSITION = 1
export const WRONGPOSITION = 2
export const WRONG = -1
export const alphapet = 'qwertyuiopasdfghjklzxcvbnm'.split('')
const intializeAlph = () => {
  const charachters = new Map()
  for (const c of alphapet) {
    charachters.set(c, NOTCHECKED)
  }
  return charachters
}

const Game = () => {

  const [grid, setGrid] = React.useState(new Array(TRIES))
  const [charachters, setCharachters] = React.useState(intializeAlph())
  const [pos, usePos] = React.useState(0)
  const [message, useMessage] = React.useState("Go On")

  return (
    <div className="game">
      <GuessBoard grid={grid} charachters={charachters} />
      <Keyboard
        charachters={charachters} updateCharachters={setCharachters}
        grid={grid} updateGrid={setGrid}
        incPos={usePos} pos={pos}
        addMessage={useMessage} />
      <p>{message}</p>
    </div>
  )
}

export default Game;