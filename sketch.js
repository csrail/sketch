$(document).ready(function(){

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
});