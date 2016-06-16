
var http = require('http');
var url = require('url');

function start(route) {
    function onRequest(request,response) {
        var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + "received!");
	route(pathname);
	response.writeHead(200,{"Conten-Type":"text/plain"});
	response.write("hello world");
	response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("server has started on 8888");
}

//start();
module.exports.start = start;
