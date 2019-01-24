
var app = require("./application")


function CreateApplication() {
    return new app()
}

exports = module.exports = CreateApplication