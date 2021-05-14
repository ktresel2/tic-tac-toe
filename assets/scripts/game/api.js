'use strict'

const config = require('./../config')
const store = require('./../store')

const indexGames = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const showGame = function (gameId) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/' + gameId,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const createGame = function (data) {
  return $.ajax({
    method: 'POST',
    data: '{}',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}
// LOST HERE!!
const updateGame = function (index, value, over, gameId) {
  return $.ajax({
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: index,
          value: value
        },
        over: over
      }
    },
    url: config.apiUrl + '/games/' + gameId,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  indexGames,
  showGame,
  createGame,
  updateGame
}
