'use strict';

$(document).ready(function() {

  var count = 0;
  $('.draggable').draggable({
    revert: "invalid"
  });
  $('#dropArea1,#dropArea2,#dropArea3').droppable({
    drop: function(event, ui) {
      count++;
      var drag = $(ui.draggable).data('block');
      var last = $(this).children().last().data('block');

      if (drag > last) {
        $(ui.draggable).draggable("option", "revert", true);
      } else {
        $(ui.draggable).appendTo(this).attr('style', 'position: "relative"');
      }
    }
  });
});
