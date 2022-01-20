import React from "react";
import KeyButton from "./KeyButton";
import { CORRECT, TRIES, WORDLEN } from "../Game";

import './keyboard.css'
import { check } from "../../utils/checkCorrectness";

const ROW1 = 'qwertyuiop'.split('')
const ROW2 = 'asdfghjkl'.split('')
const ROW3 = 'zxcvbnm'.split('')

const Keyboard = ({ addChar, incPos, pos, guessed }) => {

  const handleEnter = () => {
    if (guessed[pos].length < WORDLEN) return
    const result = check(guessed[pos])
    const newGuessed = guessed.slice()
    newGuessed[pos] = newGuessed[pos].map((a, i) => [a[0], result[i]])
    console.log(result)
    addChar(newGuessed)
    if (pos === TRIES - 1) return
    incPos((pos + 1) % TRIES)
  }
  const removeHandle = () => {
    addChar(old => {
      if (old[pos] == null) {
        return null
      }
      let newVal = old.map(g => g.slice())
      newVal[pos].pop()


      return newVal

    })
  }
  return (
    <main className="keyboard">
      <div className="flex">
        {ROW1.map(c =>
          <KeyButton addChar={addChar} key={c} char={c} pos={pos} />
        )}
      </div>
      <div className="flex">
        {ROW2.map(c =>
          <KeyButton addChar={addChar} key={c} char={c} pos={pos} />
        )}
      </div>
      <div className="flex">
        <button onClick={handleEnter} >{"Enter"}</button>
        {ROW3.map(c =>
          <KeyButton addChar={addChar} key={c} char={c} pos={pos} />
        )}
        <button onClick={removeHandle}>{"<="}</button>

      </div>

    </main>
  )
}

export default Keyboard;