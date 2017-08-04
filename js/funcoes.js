Object.prototype.montar = function(){

	var t = document.getElementById('tabela_main');

	var s = '';
	
	for(var i = 0; i < Object.keys(this).length; i++){

		s += '<tr>';

		for(var j = 0; j < this[i].length; j++){
			s += '<td>';
			s += this[i][j];
			s += '</td>';
		}

		s += '</tr>';
	}
	
	//t.innerHTML = s;
	
}