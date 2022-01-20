import React from "react";
import KeyButton from "./KeyButton";
import { TRIES } from "../Game";

import './keyboard.css'

const ROW1 = 'qwertyuiop'.split('')
const ROW2 = 'asdfghjkl'.split('')
const ROW3 = 'zxcvbnm'.split('')

const Keyboard = ({ addChar, incPos }) => {
  const removeHandle = () => {
    addChar(old => {
      if (old == null) {
        return null
      }
      let newVal = old.slice()

      newVal.pop()
      return newVal

    })
  }
  return (
    <main className="keyboard">
      <div className="flex">
        {ROW1.map(c =>
          <KeyButton addChar={addChar} key={c} char={c} />
        )}
      </div>
      <div className="flex">
        {ROW2.map(c =>
          <KeyButton addChar={addChar} key={c} char={c} />
        )}
      </div>
      <div className="flex">
        <button onClick={() => incPos(old => (old + 1) % TRIES)} >{"Enter"}</button>
        {ROW3.map(c =>
          <KeyButton addChar={addChar} key={c} char={c} />
        )}
        <button onClick={removeHandle}>{"<="}</button>

      </div>

    </main>
  )
}

export default Keyboard;