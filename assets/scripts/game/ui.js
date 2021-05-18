// create game
// store.game = res.game

const store = require('./../store')
// const winEvents = require('./win-events')

let myTurn = true

const onStartSuccess = function (res) {
  $('h1').text('Have fun!')
  $('h2').text('')
  $('#start-btn-area').addClass('hide')
  $('#gameboard').removeClass('hide')
  $('#restart').removeClass('hide')
  store.boxesCounted = 0
  myTurn = true

  store.game = res.game
}

const onMoveSuccess = function (res) {

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
  store.boxesCounted++
}

module.exports = {
  onStartSuccess,
  onMoveSuccess,
  play,
  myTurn
}
