$(document).ready(function(){

	for (var i = 1; i <=(16*16); i++ ) {
		$('#meatcenter').append('<div id="boxes" class='+i+'></div>')
	}

$('#meatcenter').find('div').each(function(){
	if($(this).attr('class')%16===0)
		{$(this).next().addClass('wakka')}
});
});