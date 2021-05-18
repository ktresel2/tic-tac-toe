// create game
// store.game = res.game

const store = require('./../store')
const winEvents = require('./win-events')

let myTurn = true

const onStartSuccess = function (res) {
  $('h1').text('Have fun!')
  $('h2').text('')
  $('#start-btn-area').addClass('hide')
  $('#gameboard').removeClass('hide')
  $('#restart').removeClass('hide')
  winEvents.boxesCounted = 0
  myTurn = true

  store.game = res.game
  console.log(store.game.over)
  console.log(res)

  // console.log(store)
}

const onMoveSuccess = function (res) {
  console.log(store.game.over)
  console.log(winEvents.boxesCounted)
  console.log(res)
}

const playX = function (square) {
  square.classList.add('x')
}

const playO = function (square) {
  square.classList.add('o')
}

const play = function (square) {
  if (myTurn === true) {
    playX(square)
    myTurn = false
  } else {
    playO(square)
    myTurn = true
  }
  winEvents.boxesCounted++
}

module.exports = {
  onStartSuccess,
  onMoveSuccess,
  playX,
  playO,
  play,
  myTurn
}
