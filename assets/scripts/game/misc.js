'use strict'

const store = require('./../store')


const playedCells = store.game.cells

const xWins = function () {
  if ((store.game.cells[0] === 'x' && store.game.cells[1] === 'x' && store.game.cells[2] === 'x' &&) ||
  (store.game.cells[3] === 'x' && store.game.cells[4] === 'x' && store.game.cells[5] === 'x' &&) ||
  (store.game.cells[6] === 'x' && store.game.cells[7] === 'x' && store.game.cells[8] === 'x' &&) ||
  (store.game.cells[0] === 'x' && store.game.cells[4] === 'x' && store.game.cells[8] === 'x' &&) ||
  (store.game.cells[0] === 'x' && store.game.cells[3] === 'x' && store.game.cells[6] === 'x' &&) ||
  (store.game.cells[1] === 'x' && store.game.cells[4] === 'x' && store.game.cells[7] === 'x' &&) ||
  (store.game.cells[2] === 'x' && store.game.cells[5] === 'x' && store.game.cells[8] === 'x' &&) ||
  (store.game.cells[2] === 'x' && store.game.cells[4] === 'x' && store.game.cells[6] === 'x' &&)) {
    return true
  }
}

const oWins = function () {
  if ((store.game.cells[0] === 'o' && store.game.cells[1] === 'o' && store.game.cells[2] === 'o' &&) ||
  (store.game.cells[3] === 'o' && store.game.cells[4] === 'o' && store.game.cells[5] === 'o' &&) ||
  (store.game.cells[6] === 'o' && store.game.cells[7] === 'o' && store.game.cells[8] === 'o' &&) ||
  (store.game.cells[0] === 'o' && store.game.cells[4] === 'o' && store.game.cells[8] === 'o' &&) ||
  (store.game.cells[0] === 'o' && store.game.cells[3] === 'o' && store.game.cells[6] === 'o' &&) ||
  (store.game.cells[1] === 'o' && store.game.cells[4] === 'o' && store.game.cells[7] === 'o' &&) ||
  (store.game.cells[2] === 'o' && store.game.cells[5] === 'o' && store.game.cells[8] === 'o' &&) ||
  (store.game.cells[2] === 'o' && store.game.cells[4] === 'o' && store.game.cells[6] === 'o' &&)) {
    return true
  }
}




const winConditions = {
  const xWins = function () {
    if (store.game.cells[0])
  }
}

const checkForWin = function (storedGame) {

}

module.exports = {
  playedCells
}
