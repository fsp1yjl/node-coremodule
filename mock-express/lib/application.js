
var router = require("./router")
const http = require("http")

var app = function() {
    this._router = new router()
}


app.prototype.get =  function(path, handler) {
    this._router.add("GET", path, handler)
}

app.prototype.listen = function(port,cb) {

    var self = this;
    var server = http.createServer((req,res) => {
        console.log("http.createServer")
        console.log("req.path:", req.url)
        console.log("req.method:", req.method)

        if(!res.send) {
            res.send = function(body) {
                res.writeHead(200, {
                    'Content-Type': 'text/plain'
                });
                res.end(body);
            };
        }

        if (!self._router.handle(req, res)) {
            res.send("router not found")
        }
    })

    return server.listen.apply(server, arguments)
}

module.exports = app

// 第2次迭代
// https://segmentfault.com/a/1190000011090124#articleHeader3