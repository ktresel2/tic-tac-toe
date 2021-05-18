'use strict'

const store = require('./../store')
const gameApi = require('./../game/api')

const signUpSuccess = function (res) {
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('h1').text('Signed up successfully')
  $('h2').text('Log in or create another account.')
}

const signUpFailure = function () {
  $('h1').text('Sign-in Failure.')
  $('h2').text("The username already exists, or your passwords don't match. Try again.")
}

const signInSuccess = function (res) {
  $('#sign-in').trigger('reset')
  $('h1').text('Welcome')
<<<<<<< HEAD
  $('h2').text(`Signed in. You've played ${res.games.length} games.`)
=======
  // $('h2').text(`Signed in. You've played ${res} games.`)
>>>>>>> dev
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

const signInFailure = function (err) {
  $('h1').text('Unsuccessful')
  $('h2').text('Username or password incorrect: ' + err)
}

const changePasswordSuccess = function (res) {
  $('#change-password').trigger('reset')
  $('h1').text('Password Successfully Changed')
  $('h2').text('Sign in with your new password next time!')

  $('.modal').modal('hide')
}

const changePasswordFailure = function () {
  $('h2').text('Make sure your passwords match')
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
  $('h2').text('Failed with error: ' + err)
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
