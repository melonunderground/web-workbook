// 'use strict';
// // We need a board
// // We need the ability to place an "X" or an "O" on the board
// // We need to check for win
//
$(document).ready(function() {
//

    var playerTurn = 'X';
    var numberOfTurns = 0;
    var isWinner = false;

    // set the board
    var board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ];

    var row = null;
    var column = null;

    $("[data-cell]").click(function() {

        if (isWinner === false) {

            // first checking to make sure the cell is blank.  If there is already a value, we cannot use that cell.
            if ($(this).text() === '') {

                $('#error').text('');

                $(this).text(playerTurn);

                // we could loop through and store values in an array with rows and columns
                var cellNumber = $(this).data('cell');

                // Based on the data cell number, assign a row and column.  And yes this is ugly but running multiple loops seemed just as silly.

                if (cellNumber === 0) {
                    row = 0;
                    column = 0;
                }
                if (cellNumber === 1) {
                    row = 0;
                    column = 1;
                }
                if (cellNumber === 2) {
                    row = 0;
                    column = 2;
                }
                if (cellNumber === 3) {
                    row = 1;
                    column = 0;
                }
                if (cellNumber === 4) {
                    row = 1;
                    column = 1;
                }
                if (cellNumber === 5) {
                    row = 1;
                    column = 2;
                }
                if (cellNumber === 6) {
                    row = 2;
                    column = 0;
                }
                if (cellNumber === 7) {
                    row = 2;
                    column = 1;
                }
                if (cellNumber === 8) {
                    row = 2;
                    column = 2;
                }

                //need to print the X or Y to the board depending on coordinates
                board[row][column] = if (playerTurn === 'X') {
                  'X'} else {
                  'O';
                  }

}               playerTurn = (playerTurn === 'X') ? 'O' : 'X';
}
});

});

//   var cellNumbers = [];
//
// // for loop through all cells populating them with blank string
// function clearBoard() {
//     for (var i = 0; i <= 8; i+= 1) {
// $('div[data-cell=' + i + ']').text(), '');
//     }
//   });
//








//   //   // Put app logic in here
//   $('[data-cell]').on('click', function(){
//
//     if(!$(this).text()){
//        $(this).text('x');
//     }else{
//       var num = $(this).text();
//       num++;
//       $(this).text(num);
//     }
//     hit25();
//   })
//
//   function hit25(){
//     var counter = 0;
//     $('[data-cell]').each(function(){
//       counter += Number($(this).text());
//       console.log(Number(counter));
//     })
//     if(counter === ){
//       $('#announce-winner').text('25!!!');
//     }
//   }
//
// })
// $(document).ready(function() {
//   // Put app logic in here
//
//   $('[data-cell]').on('click', function(){
//
//     if(!$(this).text()){
//        $(this).text('1');
//     }else{
//       var num = $(this).text();
//       num++;
//       $(this).text(num);
//     }
//
//   });
  // var player1 = 'x';
  // var player2 = 'o';
  //
  // $('[data-cell]').on('click',function() {
  //
  // for (var i = 0; i <= 8; i += 1) {
  //   if (i%2 == 0) {
  //     $(this).text('player1');
  //   }
  //   else {
  //     $(this).text('player2');
  //   }
  // }
