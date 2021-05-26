'use strict'

const store = require('./../store')

const checkForOver = function () {
  const winnerYet = checkForWin()
  if (store.boxesCounted < 9 && !winnerYet) {
    return false
  } else {
    store.game.over = true
    return true
  }
}

// Cut this in half by using whos turn it is
const checkForWin = function () {
  if ((store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2] && store.game.cells[2] !== '') ||
      (store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8] && store.game.cells[8] !== '') ||
      (store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8] && store.game.cells[8] !== '') ||
      (store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6] && store.game.cells[6] !== '') ||
      (store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7] && store.game.cells[7] !== '') ||
      (store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5] && store.game.cells[5] !== '') ||
      (store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8] && store.game.cells[8] !== '') ||
      (store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6] && store.game.cells[6] !== '')) {
    return true
  } else { return false }
}

module.exports = {
  checkForOver
}
