

function route(path, handle, response, postData){
	console.log('routeando request a '+path);
	if (typeof handle[path] === 'function') {
		return handle[path](response, postData);
	} else {
		console.log('No hay handler definido para' + path);
		response.writeHead(404, {'Content-Type': 'text/html'});
		response.write('404 No Encontrado');
		response.end();
	}
}

exports.route = route;