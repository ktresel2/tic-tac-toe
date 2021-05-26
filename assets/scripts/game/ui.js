'use strict'

const store = require('./../store')

let turn = true

// const showGames = function (res) {
//   console.log(res)
// }

const onGameOver = function () {
  if (!store.game.over) {
    $('h1').text('Tie game!')
  } else {
    $('h1').text(`${store.game.winner} wins!`)
    $('h2').text('Go again!')
  }
}

const onStartSuccess = function (res) {
  $('.box').removeClass('x')
  $('.box').removeClass('o')
  $('h1').text('Have fun!')
  $('h2').text('')
  $('#start-btn-area').addClass('hide')
  $('#gameboard').removeClass('hide')
  $('#restart').removeClass('hide')
  store.game = res.game
  $('.box').each(function (index) {
    $(this).text(res.game.cells[index])
  })
  store.game.winner = 'x'
  store.boxesCounted = 0
  turn = true
}

const onMoveSuccess = function (res) {
  if (store.game.over) {
    $('h1').text(`${store.game.winner} wins!`)
    $('h2').text('')
  } else {
    $('h1').text('Have fun!')
    $('h2').text(`It's ${turn ? 'o' : 'x'}'s turn`)
    $('.box').each(function (index) {
      $(this).text(res.game.cells[index])
    })
  }
  store.game = res.game
  turn = !turn
  return turn
}

const onMoveFailure = function () {
  // console.log('heyyy')
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
}

module.exports = {
  onStartSuccess,
  onMoveSuccess,
  play,
  // showGames,
  onMoveFailure,
  onGameOver
}
