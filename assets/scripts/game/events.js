'use strict'

const api = require('./api')
const ui = require('./ui')
const winEvents = require('./win-events')
const store = require('./../store')

// jQuery
const boxes = document.querySelectorAll('.box')

for (let i = 0; i < boxes.length; i++) {
  boxes[i].id = i
}

let over = false

// const showAll = function () {
//   api.indexGames().then(ui.showGames).catch(ui.dontShow)
// }

const startGame = function () {
  $('.box').removeClass('x')
  $('.box').removeClass('o')
  api.createGame().then(ui.onStartSuccess).catch(ui.onStartFailure)
}

const playMove = function (e) {
  over = winEvents.checkForOver()
  store.game.over = over
  if (store.game.over === true) {
    return ui.onMoveFailure()
  } else {
    const playSquare = e.target
    if ($(playSquare).hasClass('x') || $(playSquare).hasClass('o')) {
      return ui.onMoveFailure()
    }
    const playSquareId = playSquare.id
    if (!e.target.classList.contains('x') && !e.target.classList.contains('o') && store.over !== true) {
      ui.play(playSquare)
      store.boxesCounted++
    }
    let value
    if ($(playSquare).hasClass('x')) {
      value = 'x'
    } else if ($(playSquare).hasClass('o')) {
      value = 'o'
    }
    store.game.cells[playSquareId] = value
    // console.log(store.boxesCounted)
    // console.log(store.game)
    over = winEvents.checkForOver()
    if (over === true) {
      store.game.over = true
    }
    const data = {
      game: {
        cell: {
          index: playSquareId,
          value: value
        },
        over: over
      }
    }
    api.updateGame(data).then(ui.onMoveSuccess)
  }
}

module.exports = {
  startGame,
  playMove
  // showAll
}
