import React from "react";
import { CORRECTPOSITION, WORDLEN, WRONG, WRONGPOSITION } from "../Game";

const BoardRow = ({ guessed }) => {

  const board = []

  for (let i = 0; i < WORDLEN; i++) {
    if (guessed && guessed[i]) {
      let stateClass = ""
      console.log(guessed)
      if (guessed[i][1] === CORRECTPOSITION) stateClass = "correct"
      else if (guessed[i][1] === WRONGPOSITION) stateClass = "wrong-pos"
      else if (guessed[i][1] === WRONG) stateClass = "wrong"
      board.push(<div key={i} className={`char-placeholder ${stateClass}`}>{guessed[i][0]} </div>)
    }
    else {
      board.push(<div key={i} className={`char-placeholder `}>{""} </div>)
    }
  }

  return (
    <div className="flex board-row">

      {board}

    </div>
  )
}

export default BoardRow;