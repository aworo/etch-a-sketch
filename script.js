$(document).ready(function(){
   /* for(i = 0; i < 16; i++) {
  	    for(j = 0; j < 16; j++) {
  		    $('#grid').append('<div id="div'+ i +'" class="box"/>');
    	}
*/
    var container = $(".container").html("");
	for (var row = 0; row < 16; row++) {
		for (var column = 0; column < 16; column++) {
			container.append( $("<div class='grid'></div>"));
		}
	
	}

    
});

