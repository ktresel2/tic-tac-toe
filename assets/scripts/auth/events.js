'use strict'

const getFormFields = require('./../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onSignIn = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)

  api.signIn(data).then(ui.signInSuccess).catch(ui.signInFailure)
}

const onSignUp = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)

  api.signUp(data).then(ui.signUpSuccess).catch(ui.signUpFailure)
}

const onChangePassword = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)

  api.changePassword(data).then(ui.changePasswordSuccess).catch(ui.changePasswordFailure)
}

const onSignOut = function (e) {
  e.preventDefault()

  api.signOut().then(ui.signOutSuccess).catch(ui.signOutFailure)
}

const onSignBackIn = function () {
  ui.signBackIn()
}

module.exports = {
  onSignIn,
  onSignUp,
  onChangePassword,
  onSignOut,
  onSignBackIn
}
