'use strict'

const api = require('./api')
const ui = require('./ui')

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

const playMove = function (e) {
  const playSquare = e.target
  if (!e.target.classList.contains('x') && !e.target.classList.contains('o')) {
    play(playSquare)
    myTurn = !myTurn
  }
  console.log(myTurn)
}

module.exports = {
  playMove
}
