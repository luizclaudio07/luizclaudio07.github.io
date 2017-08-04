
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

