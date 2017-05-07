var obj_a = {
	name:'obj_a',
	show:function(a,b) {
		console.log('name:',this.name);
		console.log('param a:',a,'param b:',b);
	}
};

obj_a.show(22,33);


console.log('apply here:');

var obj_b = {
	name:'obj_b'
};


obj_a.show.apply(obj_b,['aaa','dddd']);

