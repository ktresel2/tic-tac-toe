'use strict'

const store = require('./../store')
const gameApi = require('./../game/api')

const signUpSuccess = function (res) {
  $('#sign-in').trigger('reset')
  $('h1').text('Signed up successfully')
  $('h2').text('Log in or create another account.')
}

const signUpFailure = function () {
  $('h1').text('Sign-in Failure.')
  $('h2').text("The username already exists, or your passwords don't match. Try again.")
}

const signInSuccess = function (res) {
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('h1').text('Welcome')
  $('#unAuth').addClass('hide')
  $('#change-password').removeClass('hide')
  $('#sign-out').removeClass('hide')
  $('#start-btn-area').removeClass('hide')

  store.user = res.user
  gameApi.indexGames().then(addGameTotal)
}

const addGameTotal = function (res) {
  $('h2').text(`You've played ${res.games.length} games`)
}

const signInFailure = function () {
  $('h1').text('Unsuccessful')
  $('h2').text('Username or password incorrect.')
}

const changePasswordSuccess = function (res) {
  $('#change-password-form').trigger('reset')
  $('h1').text('Password Successfully Changed')
  $('h2').text('Sign in with your new password next time!')

  $('.modal').modal('hide')
}

const changePasswordFailure = function () {
  $('h1').text('Unsuccessful')
  $('h2').text('Password reset failure')
}

const signOutSuccess = function (res) {
  store.user = null
  $('h1').text('Good-bye')
  $('h2').text('Signed out successfully')
  $('#gameboard').addClass('hide')
  $('#change-password').addClass('hide')
  $('#sign-out').addClass('hide')
  $('#sign-back-in').removeClass('hide')
  $('#restart').addClass('hide')
  $('#start-btn-area').addClass('hide')
  $('.box').removeClass('x')
  $('.box').removeClass('o')
}

const signOutFailure = function (err) {
  $('h2').text('Sign out error')
}

const signBackIn = function () {
  $('h1').text('Welcome')
  $('h2').text('Please start by signing in or creating a new account')
  $('#unAuth').removeClass('hide')
  $('#sign-back-in').addClass('hide')
  $('#sign-up').removeClass('hide')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  signBackIn
}
