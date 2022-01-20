import React from "react";
import { WORDLEN } from "../Game";

const BoardRow = ({ guessed }) => {

  const board = []

  for (let i = 0; i < WORDLEN; i++) {
    if (guessed && guessed[i]) {
      board.push(<div key={i} className="char-placeholder">{guessed[i]} </div>)
    }
    else {
      board.push(<div key={i} className="char-placeholder">{""} </div>)
    }
  }

  return (
    <div className="flex board-row">

      {board}

    </div>
  )
}

export default BoardRow;