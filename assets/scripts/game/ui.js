// create game
// store.game = res.game

const store = require('./../store')

const checkForWin = function () {

}

const onStartSuccess = function (res) {
  $('h1').text('Have fun!')
  $('h2').text('')
  $('#start-btn-area').addClass('hide')
  $('#gameboard').removeClass('hide')
  $('#restart').removeClass('hide')
  $('.box').removeClass('x')
  $('.box').removeClass('o')

  store.game = res.game
  // console.log(store)
}

const onMoveSuccess = function (res) {
  console.log(res)
}

module.exports = {
  checkForWin,
  onStartSuccess,
  onMoveSuccess
}
