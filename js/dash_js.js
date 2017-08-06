
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