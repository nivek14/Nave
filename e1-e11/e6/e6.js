// Requisição assíncrona
var xhttp = new XMLHttpRequest();

// Seta tipo de requisição e URL com os parâmetros
xhttp.open("GET", "https://viacep.com.br/ws/96020000/json/", true);

// Envia a requisição
xhttp.send();

// Cria um evento para receber o retorno.
xhttp.onreadystatechange = function() {
  // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
	if (xhttp.readyState == 4 && xhttp.status == 200) {
		var data = xhttp.responseText;
    // Retorno do xhttp
        console.log(data);
        
        var json = JSON.parse(data);
        var endereco = json.logradouro;
        var cidade = json.localidade;
        var estado = json.uf;
        var numero = json.cep;
    
        console.log(endereco);
        console.log(cidade);
        console.log(estado);
        console.log(numero);

        document.write(endereco + ',' + numero + ',' + cidade + '/' + estado);


    }

}

