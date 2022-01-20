import React from "react";
import { TRIES } from "../Game";
import BoardRow from "./BoardRow";

const GuessBoard = ({ guessed, pos }) => {
  const boards = []
  for (let i = 0; i < TRIES; i++) {
    if (i === pos) {
      boards.push(<BoardRow guessed={guessed} />)
    }
    else {
      boards.push(<BoardRow guessed={null} />)
    }

  }
  return (
    <React.Fragment>
      {boards}

    </React.Fragment>
  )
}

export default GuessBoard;