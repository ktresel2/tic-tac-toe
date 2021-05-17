'use strict'

const api = require('./api')
const ui = require('./ui')
const winEvents = require('./win-events')
const store = require('./../store')

const boxes = document.querySelectorAll('.box')

for (let i = 0; i < boxes.length; i++) {
  boxes[i].id = [i]
}

let myTurn = true

const playX = function (square) {
  square.classList.add('x')
}

const playO = function (square) {
  square.classList.add('o')
}

const play = function (square) {
  if (myTurn === true) {
    playX(square)
  } else {
    playO(square)
  }
}

const startGame = function () {
  api.createGame().then(ui.onStartSuccess).catch(ui.onStartFailure)
}

const playMove = function (e) {
  const playSquare = e.target
  const playSquareId = playSquare.id
  if (!e.target.classList.contains('x') && !e.target.classList.contains('o')) {
    play(playSquare)
    myTurn = !myTurn
  }
  let value
  if (e.target.classList.contains('x')) {
    value = 'x'
  } else if (e.target.classList.contains('o')) {
    value = 'o'
  }
  store.game.cells[playSquareId] = value
  winEvents.checkForWin(store)
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
  // console.log(store)
  // console.log(data)
}

const restart = function () {
  api.createGame().then(ui.onStartSuccess).catch(ui.onStartFailure)

}

module.exports = {
  startGame,
  playMove,
  restart
}
