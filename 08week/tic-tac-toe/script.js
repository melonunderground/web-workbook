'use strict';
// // We need a board
// // We need the ability to place an "X" or an "O" on the board
// // We need to check for win
// 3 columns, 3 rows
// if/else statements to  confirm winner
// 8 possible winning solutions
// 8 if/else statements
// ex-- if 0 ==='X' && 3 ==='X' && 6 === 'X'


$(document).ready(function() {
  var turn = "X";
  $('[data-cell]').on('click', function() {
    if ($(this).text() === '') {
      $(this).text(turn);
      wins();
      if (turn === "O") {
        turn = "X";
      } else {
        turn = "O";
      }
    }
  })

  function wins() {
    if ($('[data-cell = "0"]').text() === turn &&
      $('[data-cell = "3"]').text() === turn &&
      $('[data-cell = "6"]').text() === turn) {
      $("#announce-winner").html(`${turn} wins`);
    }
    if ($('[data-cell = "0"]').text() === turn &&
      $('[data-cell = "1"]').text() === turn &&
      $('[data-cell = "2"]').text() === turn) {
      $("#announce-winner").html(`${turn} wins`);
    }
    if ($('[data-cell = "1"]').text() === turn &&
      $('[data-cell = "4"]').text() === turn &&
      $('[data-cell = "7"]').text() === turn) {
      $("#announce-winner").html(`${turn} wins`);
    }
    if ($('[data-cell = "2"]').text() === turn &&
      $('[data-cell = "5"]').text() === turn &&
      $('[data-cell = "8"]').text() === turn) {
      $("#announce-winner").html(`${turn} wins`);
    }
    if ($('[data-cell = "3"]').text() === turn &&
      $('[data-cell = "4"]').text() === turn &&
      $('[data-cell = "5"]').text() === turn) {
      $("#announce-winner").html(`${turn} wins`);
    }
    if ($('[data-cell = "6"]').text() === turn &&
      $('[data-cell = "7"]').text() === turn &&
      $('[data-cell = "8"]').text() === turn) {
      $("#announce-winner").html(`${turn} wins`);
    }
    if ($('[data-cell = "0"]').text() === turn &&
      $('[data-cell = "4"]').text() === turn &&
      $('[data-cell = "8"]').text() === turn) {
      $("#announce-winner").html(`${turn} wins`);
    }
    if ($('[data-cell = "2"]').text() === turn &&
      $('[data-cell = "4"]').text() === turn &&
      $('[data-cell = "6"]').text() === turn) {
      $("#announce-winner").html(`${turn} wins`);
    }
  }
})

function clear() {

  $('#clear').on('click', function() {

    if ($('[data-cell = "0"]').text() === 'X' || 'O') {
      ($('[data-cell = "0"]').text() === '')
    }
    if ($('[data-cell = "1"]').text() === 'X' || 'O') {
      ($(this).text() === '');
    }
    if ($('[data-cell = "2"]').text() === 'X' || 'O') {
      ($(this).text() === '');
    }
    if ($('[data-cell = "3"]').text() === 'X' || 'O') {
      ($(this).text() === '');
    }
    if ($('[data-cell = "4"]').text() === 'X' || 'O') {
      ($(this).text() === '');
    }
    if ($('[data-cell = "5"]').text() === 'X' || 'O') {
      ($(this).text() === '');
    }
    if ($('[data-cell = "6"]').text() === 'X' || 'O') {
      ($(this).text() === '');
    }
    if ($('[data-cell = "7"]').text() === 'X' || 'O') {
      ($(this).text() === '');
    }
    if ($('[data-cell = "8"]').text() === 'X' || 'O') {
      ($(this).text() === '');
    }

  })
 function clear() {
   ('[data-cell]').empty()
   ('announce-winner').empty()
   turn = 'X'
 }
