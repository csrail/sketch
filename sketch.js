$(document).ready(function(){
event.stopProagation()
event.preventDefault()

	for (var i = 1; i <=(16*16); i++ ) {
		$('#meatcenter').append('<div id="boxes" class="'+i+' dream"></div>')
	}

	$('#meatcenter').find('div').each(function(){
		if($(this).attr('class').replace('dream', ' ')%16===0)
			{$(this).next().addClass('wakka')}
	});

	$('#meatcenter').children().each(function(){
		$(this).hover(function(){
			$(this).removeClass('dream');
			$(this).addClass('ignite');
		});
	});	

	$('#restart').on('click', function(){
		var reset = prompt ("Resetting the game? How many columns did you want?")
		// need to clear previous grid
		// need to make new loop to make new grid
		// need to take input value from prompt and trasnfer it to the equation
	})
});
