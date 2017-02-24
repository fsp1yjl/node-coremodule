var debug = require('debug')('call_test');
function a(a,b) {
//	this.a = 1;
	console.log('this.dd:',this.dd);
	console.log(a+b);
};
function b(a,b) {
//	this.a = 2;
	console.log(a-b);
};
debug("now is kkkkk:");

var testa = {} ,testb = {}
testa.a = a;
testb.dd = '10';
a.call(b,9,3);
