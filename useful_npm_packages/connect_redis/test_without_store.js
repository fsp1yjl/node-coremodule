const express = require('express');
const session = require('express-session');

var app = express();
var session_options = {
	secret: 'eric',
	name:'eric_session',
	saveUninitialised:false,
	cookie:{path:'/',httpOnly:true,secure:false,maxAge:60000}
}
app.use(session(session_options))
app.get('/',function(req,res,next) {
	console.log('req.session:',req.session);
	console.log('req.session.name:',req.session.name);
	if(!req.session.name) {
		console.log('dddddsfdas')
		//req.session.name = 'feng'
	}
	req.session.name = 'feng';
	res.send('hello:'+req.session.name);
}).listen(9001);
