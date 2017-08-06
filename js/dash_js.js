
$(".menu-container ul li a").on('click', function(){
	$(this)
	.parent().parent()
	.find(".clicado").removeClass('clicado');
	$(this).addClass('clicado');

	var tab_id = $(this).attr('data-tab');

	$('.menu-container ul li').removeClass('ativa');
	$('.aba').removeClass('ativa');

	
	$("#"+tab_id).addClass('ativa');
});


$(".nav-tabs li a").on('click', function(){
	$(this)
	.parent().parent()
	.find(".active").removeClass('active');
	$(this).parent().addClass('active');

	var tab_id = $(this).attr('data-tab');
	
	$('.nav-tabs ul li').removeClass('aberta');
	$('.tab-result').removeClass('aberta');

	
	$("#"+tab_id).addClass('aberta');
});



$(".btn-group-vertical button").click(function(){
	
	if( $(this).attr('class') == 'btn btn-warning' ){
		
		$(this).removeClass('btn-warning').addClass('btn-success');
		$(this).children().removeClass('glyphicon-unchecked').addClass('glyphicon-check');
	
	} else {
		$(this).removeClass('btn-success').addClass('btn-warning');
		$(this).children().removeClass('glyphicon-check').addClass('glyphicon-unchecked');
	}

	
});