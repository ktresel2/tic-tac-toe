'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const boxes = document.querySelectorAll('.box')

for (let i = 0; i < boxes.length; i++) {
  boxes[i].id = i
}

let turn = true

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
  store.winner = value
  store.game.cells[playSquareId] = value
  ui.play(playSquare)
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
  if (store.game.over) {
    ui.onGameOver()
  } else {
    turn = !turn
  }
}

module.exports = {
  startGame,
  playMove
  // showAll
}
