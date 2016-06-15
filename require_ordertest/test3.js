//经测试发现，require会在代码执行到的时候加载，同时，一个模块在一个脚本中只会被加载一遍到缓存中，当多次require时，共用第一次require时返回的模块对象

// 有与test3中已经先加载了一次test1.js,所以之后再require的test2.js中require test1.js时，直接使用缓存。****important

console.log('test3 1111');

var test1 = require('./test1.js');
console.log("test.a in test3:" + test1.a);
console.log('test3 2222');
test1.a = '234';
require('./test2.js');

console.log('test3 3333');

require('./test1.js');

console.log('test3 4444');
