function select(q){
	alert('Sua query:' + q);
}


$("#btnExecutarQuery").click(function(){

	var $query = $("#txtQueryScript").val().trim();

	if($query == ""){
		novoLog("Consulta vazia. Digite um comando para executar.", LOG.INFO);
		return;
	}

	switch($query.split(' ')[0].toUpperCase()){

		case 'SELECT':
			select('Foi no select!');
			break;

		case 'INSERT':

			break;

		case 'UPDATE':

		case 'DELETE':

		default:
			novoLog('Erro na consulta. Por favor, verifique o comando escrito.', LOG.ERRO);
			break;

	}


});