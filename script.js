$(document).ready(function(){

	createGrid(40);

	$(".grid").hover(function(){
    	$(this).css("background-color", "#101010");
    	}, function(){
    	$(this).css("background-color", "#404040");
	});

	

}); 
	

function createGrid(gridSize) {   
    
    var container = $(".container").html("");
	for (var row = 0; row < gridSize; row++) {
		for (var column = 0; column < gridSize; column++) {
			container.append( $("<div class='grid'></div>").height(600/gridSize).width(600/gridSize))
			
		}
	
	}

	
	$(".grid").hover(function(){
    	$(this).css("background-color", "#101010");
    	}, function(){
    	$(this).css("background-color", "#404040");
	});
}
   	
	


function clearGrid() {
	var gridSize = prompt("Number of rows/columns?");
	createGrid(gridSize);


}