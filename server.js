var http = require('http');
var url = require('url');

function iniciar(route, handle) {
	function onRequest(request, response) {
		var postData = '';
		var pathname = url.parse(request.url).pathname;
		console.log(`Request a ${pathname} recibido.`);

		request.setEncoding('utf8');
		request.addListener('data', function (datos) {
			postData += datos;
			console.log(`POST recibido ${datos}.`);
		})

		request.addListener('end', function(){
			route(pathname, handle, response, postData);
		});
		
	}
	
	http.createServer(onRequest).listen(8080);
	
	console.log('Sevidor iniciado');
}

exports.iniciar = iniciar;


