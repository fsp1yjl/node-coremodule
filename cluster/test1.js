var cluster = require('cluster');

var numCPUs = require('os').cpus().length;

console.log("cpu number:" + numCPUs);

var http = require('http');
console.log('hhh');
if(cluster.isMaster) {
    console.log('master start ....');

    for(var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('listening',function(worker,address) {
        console.log('listening:worker' + worker.process.pid +',address: ' + address.address + ':' + address.port);
    });
} else {
    http.createServer(function(req,res) {
        res.writeHead(200);
	res.end('worker' + cluster.worker.id + ',pid:' + process.pid);
	//res.end('hello');
    }).listen(0);
}


