import React, { useEffect } from "react";
import { CORRECTPOSITION, NOTCHECKED, WORDLEN, WRONG, WRONGPOSITION } from "../Game";


const KeyButton = ({ char, addChar, pos, charachters }) => {
  useEffect(() => { }, [charachters])
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
  let stateClass = ' '
  if (charachters.get(char) === CORRECTPOSITION) stateClass = "correct"
  else if (charachters.get(char) === WRONGPOSITION) stateClass = "wrong-pos"
  else if (charachters.get(char) === WRONG) stateClass = "wrong"
  return (
    <button className={stateClass} onClick={clickHandle}>{char}</button>
  )
}

export default KeyButton;