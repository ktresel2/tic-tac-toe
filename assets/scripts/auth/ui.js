'use strict'

const store = require('./../store')

const signUpSuccess = function (res) {
  $('#sign-up').addClass('hide')

  $('h2').text('Signed up successfully')
}

const signUpFailure = function (err) {
  $('h2').text('Failed with error ' + err)
}

const signInSuccess = function (res) {
  $('#unAuth').addClass('hide')

  console.log(res)
  store.user = res.user

  $('h2').text('Signed in successfully')
}

const signInFailure = function (err) {
  $('#messaging').text('Failed with error ' + err)
}

const changePasswordSuccess = function (res) {
  $('h1').text('Password Successfully Changed')
  $('h2').text('Sign in with your new password next time!')

  $('.modal').modal('hide')
}

const changePasswordFailure = function (err) {
  $('#messaging').text('Failed with error ' + err)
}

const signOutSuccess = function (res) {
  store.user = null
  $('#h2').text('Signed out Successfully')
}

const signOutFailure = function (err) {
  $('#messaging').text('Failed with error ' + err)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
