import React, { useEffect } from "react";
import KeyButton from "./KeyButton";
import { alphapet, CORRECT, NOTCHECKED, TRIES, WORDLEN } from "../Game";
import './keyboard.css'
import { check } from "../../utils/checkCorrectness";
import { checkWord } from "../../utils/words";

const ROW1 = 'qwertyuiop'.split('')
const ROW2 = 'asdfghjkl'.split('')
const ROW3 = 'zxcvbnm'.split('')


const Keyboard = ({ updateGrid, incPos, pos, grid, addMessage, charachters, updateCharachters }) => {
  useEffect(
    () => {
      document.addEventListener('keydown', handleKeyPress, { capture: true })
      return () => {
        document.removeEventListener('keydown', handleKeyPress, { capture: true })
      }
    }
  )


  const handleKeyPress = (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      handleEnter()
    }
    if (e.key === 'Backspace') {
      e.preventDefault()
      removeHandle()
    }
    if (alphapet.includes(e.key)) {
      clickHandle(e.key)
    }
  }
  const clickHandle = (char) => {

    updateGrid(old => {
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

  const handleEnter = () => {
    if (!grid[pos] || grid[pos]?.length < WORDLEN) {
      addMessage("Complete the word")
      return
    }
    const guessedWord = grid[pos].map(l => l[0]).join("")
    if (!checkWord(guessedWord)) {
      addMessage("This word is not in our dict")
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
    <main className="keyboard" >
      <div className="flex">
        {ROW1.map(c =>
          <KeyButton clickHandle={clickHandle} charachters={charachters}
            key={c} char={c} />
        )}
      </div>
      <div className="flex">
        {ROW2.map(c =>
          <KeyButton clickHandle={clickHandle} charachters={charachters}
            key={c} char={c} />)}
      </div>
      <div className="flex">
        <button onClick={handleEnter} >{"Enter"}</button>
        {ROW3.map(c =>
          <KeyButton clickHandle={clickHandle} charachters={charachters}
            key={c} char={c} />)}
        <button onClick={removeHandle}>{"<="}</button>

      </div>

    </main>
  )
}

export default Keyboard;