import React from "react";
import { TRIES } from "../Game";
import BoardRow from "./BoardRow";

const GuessBoard = ({ guessed }) => {
  const boards = []
  for (let i = 0; i < TRIES; i++) {
    boards.push(<BoardRow key={i} guessed={guessed[i]} />)
  }
  return (
    <React.Fragment>
      {boards}

    </React.Fragment>
  )
}

export default GuessBoard;