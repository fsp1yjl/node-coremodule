//apply函数的模拟实现
Function.prototype.own_apply = function() {
	console.log(arguments);
	//let fn = this;
	let context = arguments[0];
	let params = arguments[1];
	var temp_func = Symbol();
	context[temp_func]= this;
	eval('context[temp_func](' + params.join(',') + ')');
	delete context.dddd
	
};
var obj_a = {
	name:'obj_a',
        show:function(a,b) {
                console.log('name:',this.name);
                console.log('param a:',a,'param b:',b);
        }
};

var obj_b = {
	name: "obj_b"
}

obj_a.show.own_apply(obj_b,['2','3'])
