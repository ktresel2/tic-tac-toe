'use strict'

const store = require('./../store')
const winEvents = require('./win-events')

let turn = true

const onGameOver = function () {
  if (store.boxesCounted === 9) {
    $('h1').text('Tie game!')
    $('h2').text('Go again!')
  } else {
    $('h1').text(`${store.winner} wins!`)
    $('h2').text('Go again!')
  }
}

const onStartSuccess = function (res) {
  $('.box').removeClass('x')
  $('.box').removeClass('o')
  $('h1').text('Have fun!')
  $('h2').text("It's X's turn")
  $('#start-btn-area').addClass('hide')
  $('#gameboard').removeClass('hide')
  $('#restart').removeClass('hide')
  store.game = res.game
  $('.box').each(function (index) {
    $(this).text(res.game.cells[index])
  })
  store.game.over = false
  store.boxesCounted = 0
  turn = true
}

const onMoveSuccess = function (res) {
  if (store.game.over) {
    $('h1').text(`${store.winner} wins!`)
    $('h2').text('')
  } else {
    $('h1').text('Have fun!')
    $('h2').text(`It's ${turn ? 'O' : 'X'}'s turn`)
    $('.box').each(function (index) {
      $(this).text(res.game.cells[index])
    })
  }
  store.game = res.game
  if (winEvents.checkForOver()) {
    onGameOver()
  }
  turn = !turn
  return turn
}

const onMoveFailure = function () {
  if (store.game.over) {
    $('h2').text('Game over! No more moves allowed.')
  } else {
    $('h1').text("Can't go here!")
  }
}

const play = function (square) {
  const playX = function (square) {
    $(square).addClass('x')
  }

  const playO = function (square) {
    $(square).addClass('o')
  }

  if (turn) {
    playX(square)
  } else {
    playO(square)
  }
  store.boxesCounted++
}

module.exports = {
  onStartSuccess,
  onMoveSuccess,
  play,
  onMoveFailure,
  onGameOver
}
