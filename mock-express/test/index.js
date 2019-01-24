
var e = require("../")

var app = e()

app.get("/test", function(req, res) {
    console.log("enter get method")

    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    res.send('method get here\n');
})

console.log(app._router)

app.listen(3000)
