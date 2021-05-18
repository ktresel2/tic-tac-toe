'use strict'

const api = require('./api')
const ui = require('./ui')
const winEvents = require('./win-events')
const store = require('./../store')

const boxes = document.querySelectorAll('.box')

for (let i = 0; i < boxes.length; i++) {
  boxes[i].id = i
}

let over = false

const showAll = function () {
  api.indexGames().then(ui.showGames).catch(ui.dontShow)
}

const startGame = function () {
  $('.box').removeClass('x')
  $('.box').removeClass('o')
  $('.box').on('click', playMove)
  api.createGame().then(ui.onStartSuccess).catch(ui.onStartFailure)
}

const playMove = function (e) {
  const playSquare = e.target
  const playSquareId = playSquare.id
  if (!e.target.classList.contains('x') && !e.target.classList.contains('o')) {
    ui.play(playSquare)
  }
  let value
  if (e.target.classList.contains('x')) {
    value = 'x'
  } else if (e.target.classList.contains('o')) {
    value = 'o'
  }
  store.game.cells[playSquareId] = value
  over = winEvents.checkForOver()
  const data = {
    game: {
      cell: {
        index: playSquareId,
        value: value
      },
      over: `${over}`
    }
  }
  api.updateGame(data).then(ui.onMoveSuccess)
}

module.exports = {
  startGame,
  playMove,
  showAll
}
