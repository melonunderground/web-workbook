'use strict';

// We need a board.
// We need rings on the board.
// We need the ability to move rings to another stack.
// We need to check for win.


// make area droppable
// make blocks draggable
// -revert when invalid(not in drop area)
// rules
// -no larger block on top of smaller block(if block > datastack child=invalid)
//    - $(ui.draggable).data('block')- gives value of data-block(25,50,75,100), not stack
// -one block move at a time-no code change needed
// -required to move blocks to data stack 3-included in determine winner
// -****can only pick up top block****

// determine win:
//  data-stack="3"...child() === 4
//declare winner
//  clear board-revert to original

// keep count on number of moves

$(document).ready(function() {
  // Put app logic here

  $('.draggable').draggable({
    revert: "invalid"
  });
  $('.droppable').droppable({
    drop: function(event, ui) {
      $(ui.draggable).appendTo(this).attr('style', 'position:relative');
      //removed quotes from relative
    }
  });
//
// function noLargerBlockOnSmaller() {
// return $(ui.draggable).data('block')
//
//   // > (ui.droppable).data('.dropArea').lastChild.data('block') {
//   //   revert: "invalid"
//   // }
// }

$('#dropArea1', '#dropArea2','#dropArea3').droppable ({
  drop: function(event, ui) {
    // count++;
    var drag = $(ui.draggable).data('block');
    // console.log(drag);
    var last = $(this).children().last().data('block');
    // console.log(last);
    if(drag > last){
      //illegal move
      $(ui.draggable).draggable('option','revert', true);
    } else {
      $(ui.draggable).appendTo($(this)).attr('style', 'position: relative');
    }
    checkWin();
    }
});

function checkWin() {
  if ($('[data-stack=3]').children().length == 4) {
    $('#announce-game-won').text(`Winner Winner`);

  }

}
