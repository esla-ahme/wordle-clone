import { CORRECT, CORRECTPOSITION, WORDLEN, WRONG, WRONGPOSITION } from "../components/Game"

export const check = (word) => {
  const state = []
  for (let i = 0; i < WORDLEN; i++) {
    const realIndex = CORRECT.indexOf(word[i])
    if (realIndex === -1) state.push(WRONG)
    else if (word[i] === CORRECT[i]) state.push(CORRECTPOSITION)
    else state.push(WRONGPOSITION)
  }
  return state
}