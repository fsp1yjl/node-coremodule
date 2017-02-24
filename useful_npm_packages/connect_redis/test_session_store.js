const express = require('express');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

var app = express();
var redis_options = {
	host:"127.0.0.1",
	port:'6379',
	prefix:'ericsession'
}
var session_options = {
	secret: 'eric',
	store:new RedisStore(redis_options),
	name:'eric_session',
	saveUninitialised:false,
	cookie:{path:'/',httpOnly:true,secure:false,maxAge:60000}
}

//console.log('eventnames:',session_options.store)
app.use(session(session_options))
//app.use(function(){var a = session_options.store.all();console.log('aLL:',a)})
app.get('/',function(req,res,next) {
	console.log('req.session:',req.session);
	console.log('req.sessionID:',req.sessionID)
	console.log('req.session.name:',req.session.name);
	// if(!req.session.name) {
	// 	console.log('dddddsfdas')
	// 	//req.session.name = 'feng'
	// }
	// req.session.name = 'feng';
	res.send('hello:'+req.session.name);
}).listen(9001);
