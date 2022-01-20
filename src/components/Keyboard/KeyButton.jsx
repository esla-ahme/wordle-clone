import React from "react";
import { NOTCHECKED, WORDLEN } from "../Game";


const KeyButton = ({ char, addChar, pos }) => {
  const clickHandle = () => {

    addChar(old => {
      if (old[pos] == null) {
        //deep copy 
        let newArr = old.map(g => g.slice())
        newArr[pos] = [[char, NOTCHECKED]]
        return newArr
      }
      if (old[pos].length < WORDLEN) {
        let newVal = old.map(g => g.slice())
        newVal[pos].push([char, NOTCHECKED])

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