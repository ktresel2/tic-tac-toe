'use strict'

const store = require('./../store')

let myTurn = true

// const showGames = function (res) {
//   console.log(res)
// }

const onGameOver = function (winner) {
  $('.box').off('click')
  store.game.over = true
  if (winner === undefined) {
    $('h1').text('Tie game!')
  } else {
    $('h1').text(`${winner} wins!`)
  }
}

// const onMoveFail = function () {
//   $('h1').text("Can't move here!")
// }

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
  if (res.game.over !== true) {
    $('h1').text('Have fun!')
    $('h2').text('')
  }

  store.game = res.game
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
  // onMoveFail,
  play,
  // showGames,
  myTurn,
  onGameOver
}
