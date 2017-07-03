var addon = require('./build/Release/my_addon');

//测试函数立即返回值，无入参
// var ret = addon.test();
var ret = addon.test_one_param(1.1);
console.log(ret);


// function a(b){
//     console.log(b);
//     var b = 22;
//     console.log(b);
//     function b(){
//         console.log(b);
//     }
//     console.log(b);
// }
 
// a(11);