


$(document).ready(function() {

  var gridSize = 16

  

  makeGrid(gridSize);

  $(".col").mouseenter(
    function() {
      $(this).addClass("black");
    });

  $( "button" ).click(function() {
      $(".col").removeClass("black");
      gridSize = prompt("Pick a size for your sketch strokes.");
      makeGrid(gridSize);

      $(".col").mouseenter(function() {
        $(this).addClass("black");
        });
      });

});
  




function makeGrid(gridSize) {
  $("#container").empty();
  for (var i = 0; i < gridSize; i++) {
      $("#container").append('<div class="row"></div>');
        
        }

  for (var j = 0; j < gridSize; j++) {
      $(".row").append('<div class="col"></div>');
    }

  var makeCells = 960 / gridSize;

    // $(".col").attr({ height: makeCells + 'px', width: makeCells + 'px' });    
    $(".col").css('height', makeCells);
    $(".col").css('width', makeCells);
    $(".row").css('height', makeCells);
    
}


   





