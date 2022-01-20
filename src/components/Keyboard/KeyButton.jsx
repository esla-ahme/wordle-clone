import React from "react";
import { WORDLEN } from "../Game";


const KeyButton = ({ char, addChar }) => {
  const clickHandle = () => {
    addChar(old => {
      if (old == null) {
        return [char]
      }
      if (old.length < WORDLEN) {
        let newVal = old.slice()
        newVal.push(char)
        return newVal

      }
      return old
    })
  }
  return (
    <button onClick={clickHandle}>{char}</button>
  )
}

export default KeyButton;