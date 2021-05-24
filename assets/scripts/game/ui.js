'use strict'

const store = require('./../store')

let myTurn = true

// const showGames = function (res) {
//   console.log(res)
// }

const onGameOver = function (winner) {
  if (winner === null) {
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

const onMoveFailure = function () {
  // console.log('heyyy')
  if (store.game.over === true) {
    $('h2').text('Game over! No more moves allowed.')
  } else {
    $('h1').text("Can't go here!")
  }
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
}

module.exports = {
  onStartSuccess,
  onMoveSuccess,
  // onMoveFail,
  play,
  // showGames,
  onMoveFailure,
  myTurn,
  onGameOver
}
