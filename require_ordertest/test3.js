//�����Է��֣�require���ڴ���ִ�е���ʱ����أ�ͬʱ��һ��ģ����һ���ű���ֻ�ᱻ����һ�鵽�����У������requireʱ�����õ�һ��requireʱ���ص�ģ�����

// ����test3���Ѿ��ȼ�����һ��test1.js,����֮����require��test2.js��require test1.jsʱ��ֱ��ʹ�û��档****important

console.log('test3 1111');

var test1 = require('./test1.js');
console.log("test.a in test3:" + test1.a);
console.log('test3 2222');
test1.a = '234';
require('./test2.js');

console.log('test3 3333');

require('./test1.js');

console.log('test3 4444');
