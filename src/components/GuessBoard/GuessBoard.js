import React from "react";
import { TRIES } from "../Game";
import BoardRow from "./BoardRow";

const GuessBoard = ({ grid, charachters }) => {
  const boards = []
  for (let i = 0; i < TRIES; i++) {
    boards.push(<BoardRow key={i} row={grid[i]} charachters={charachters} />)
  }
  return (
    <React.Fragment>
      {boards}

    </React.Fragment>
  )
}

export default GuessBoard;