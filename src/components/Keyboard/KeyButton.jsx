import React from "react";
import { CORRECTPOSITION, WRONG, WRONGPOSITION } from "../Game";


const KeyButton = ({ char, charachters, clickHandle }) => {

  let stateClass = ' '
  if (charachters.get(char) === CORRECTPOSITION) stateClass = "correct"
  else if (charachters.get(char) === WRONGPOSITION) stateClass = "wrong-pos"
  else if (charachters.get(char) === WRONG) stateClass = "wrong"
  return (
    <button className={stateClass} onClick={() => clickHandle(char)}>{char}</button>
  )
}

export default KeyButton;