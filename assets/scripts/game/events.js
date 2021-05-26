'use strict'

const api = require('./api')
const ui = require('./ui')
const winEvents = require('./win-events')
const store = require('./../store')

const boxes = document.querySelectorAll('.box')

for (let i = 0; i < boxes.length; i++) {
  boxes[i].id = i
}

let turn = true

// const showAll = function () {
//   api.indexGames().then(ui.showGames).catch(ui.dontShow)
// }

const startGame = function () {
  api.createGame().then(ui.onStartSuccess).catch(ui.onStartFailure)
  turn = true
}

const playMove = function (e) {
  if (store.game.over) return ui.onMoveFailure()
  if (e.target.innerText !== '') return ui.onMoveFailure()
  const playSquare = e.target
  const playSquareId = playSquare.id
  const value = turn ? 'x' : 'o'
  store.game.winner = value
  store.game.cells[playSquareId] = value
  ui.play(playSquare)
  store.game.over = winEvents.checkForOver()
  const data = {
    game: {
      cell: {
        index: playSquareId,
        value: value
      },
      over: store.game.over
    }
  }
  api.updateGame(data).then(ui.onMoveSuccess).catch(ui.onMoveFailure)
  store.boxesCounted++
  turn = !turn
}

module.exports = {
  startGame,
  playMove
  // showAll
}
