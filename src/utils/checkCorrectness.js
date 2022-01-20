import { CORRECT, CORRECTPOSITION, WORDLEN, WRONG, WRONGPOSITION } from "../components/Game"

export const check = (word) => {
  const state = []
  for (let i = 0; i < WORDLEN; i++) {
    const realIndex = CORRECT.indexOf(word[i][0])
    if (realIndex === -1) state.push(WRONG)
    else if (realIndex === i) state.push(CORRECTPOSITION)
    else state.push(WRONGPOSITION)
  }
  return state
}