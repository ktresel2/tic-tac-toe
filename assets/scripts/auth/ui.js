'use strict'

const store = require('./../store')

const signUpSuccess = function (res) {
  $('#sign-up').addClass('hide')
  $('#sign-up').trigger('reset')
  $('h1').text('Welcome')
  $('h2').text('Signed up successfully')
}

const signUpFailure = function () {
  $('h1').text('Sign-in Failure.')
  $('h2').text("The username already exists, or your passwords don't match. Try again.")
}

const signInSuccess = function (res) {
  $('#sign-in').trigger('reset')
  $('h1').text('Welcome')
  $('h2').text('Signed in. Click below to get started')
  $('#unAuth').addClass('hide')
  $('#change-password').removeClass('hide')
  $('#sign-out').removeClass('hide')
  $('#start-btn-area').removeClass('hide')

  console.log(res)
  store.user = res.user
}

const signInFailure = function () {
  $('h1').text('Unsuccessful')
  $('h2').text('Username or password incorrect')
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
  $('.box').removeClass('x')
  $('.box').removeClass('o')

  // setTimeout(() => {
  //
  // })
}

const signOutFailure = function (err) {
  $('h2').text('Failed with error ' + err)
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
