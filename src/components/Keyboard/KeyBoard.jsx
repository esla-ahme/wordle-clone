import React from "react";
import KeyButton from "./KeyButton";
import { CORRECT, TRIES, WORDLEN } from "../Game";
import './keyboard.css'
import { check } from "../../utils/checkCorrectness";
import { checkWord } from "../../utils/words";

const ROW1 = 'qwertyuiop'.split('')
const ROW2 = 'asdfghjkl'.split('')
const ROW3 = 'zxcvbnm'.split('')


const Keyboard = ({ updateGrid, incPos, pos, grid, addMessage, charachters, updateCharachters }) => {

  const handleEnter = () => {
    if (grid[pos].length < WORDLEN) return
    const guessedWord = grid[pos].map(l => l[0]).join("")
    if (!checkWord(guessedWord)) {
      addMessage("This word is not in out dict")
      return
    } else {
      addMessage("Go On")
    }
    const result = check(guessedWord)
    let chCopy = new Map(charachters)
    let newGrid = grid.slice()
    result.forEach((r, i) => {
      chCopy.set(grid[pos][i][0], r)
      newGrid[pos][i][1] = r
    })
    updateCharachters(chCopy)
    updateGrid(newGrid)
    chCopy = null
    if (result.join("") === '11111') {
      addMessage("WINNER")
      return
    }
    if (pos === TRIES - 1) {
      addMessage("you lost the word was: " + CORRECT)
      return
    }
    incPos((pos + 1) % TRIES)
  }

  const removeHandle = () => {
    updateGrid(old => {
      if (old[pos] == null) {
        return null
      }
      let newVal = old.map(g => g.slice())
      newVal[pos].pop()


      return newVal

    })
  }
  return (
    <main className="keyboard">
      <div className="flex">
        {ROW1.map(c =>
          <KeyButton charachters={charachters}
            addChar={updateGrid} key={c} char={c} pos={pos} />
        )}
      </div>
      <div className="flex">
        {ROW2.map(c =>
          <KeyButton charachters={charachters}
            addChar={updateGrid} key={c} char={c} pos={pos} />)}
      </div>
      <div className="flex">
        <button onClick={handleEnter} >{"Enter"}</button>
        {ROW3.map(c =>
          <KeyButton charachters={charachters}
            addChar={updateGrid} key={c} char={c} pos={pos} />)}
        <button onClick={removeHandle}>{"<="}</button>

      </div>

    </main>
  )
}

export default Keyboard;