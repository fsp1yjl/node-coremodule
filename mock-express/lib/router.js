
var router = function() {
    this.routes = []
}

router.prototype.add = function(method, path, handler) {
    var route = {}
    route.method = method
    route.path = path
    route.handler = handler
    this.routes.push(route)
}

router.prototype.handle = function(req, res) {
    for(let item of this.routes) {
        console.log("url:", req.url)
        console.log("path:", item.path)
        if (req.url === item.path && req.method === item.method) {
            console.log("ppppp")
            item.handler(req, res)
            return true
        }
    }
    return false
}


module.exports = router