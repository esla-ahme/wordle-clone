import React from "react";
import { CORRECTPOSITION, WORDLEN, WRONG, WRONGPOSITION } from "../Game";

const BoardRow = ({ row }) => {

  const board = []

  for (let i = 0; i < WORDLEN; i++) {
    let stateClass = ""
    if (row && row[i]) {

      if (row[i][1] === CORRECTPOSITION) stateClass = "correct"
      else if (row[i][1] === WRONGPOSITION) stateClass = "wrong-pos"
      else if (row[i][1] === WRONG) stateClass = "wrong"
      board.push(<div key={i} className={`char-placeholder ${stateClass}`}>{row[i][0]} </div>)
    }
    else if (row) {
      board.push(<div key={i} className={`char-placeholder active`}>{""} </div>)
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