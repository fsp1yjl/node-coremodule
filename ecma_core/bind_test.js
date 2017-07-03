var obj_a = {
	name:'obj_a',
	show:function(a,b) {
		console.log('name:',this.name);
		console.log('param a:',a,'param b:',b);
	}
};
obj_a.show(22,33);
var obj_b = {
	name:'obj_b'
};

//此处返回函数dd是一个 obj_a.show同样功能的函数，但是函数的this被指定为obj_b
console.log('start bind test here:');
let dd = obj_a.show.bind(obj_b);
dd('22bind','33bind');
