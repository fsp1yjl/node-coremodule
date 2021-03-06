//bind函数的模拟实现
Function.prototype.own_bind = function() {
	let context = arguments[0];
	let params = arguments[1];
	var temp_func = Symbol();
	context[temp_func]= this;
	return function() {
		let args = Array.prototype.slice.apply(arguments);
		return eval('context[temp_func](' + args.join(',') + ')');
	}	
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
// own_bind 测试
obj_a.show.own_bind(obj_b)('2','3')
