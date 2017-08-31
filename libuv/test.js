var addon = require('./build/Release/my_addon');
var my_async = require("./build/Release/my_async");

/*
    //测试函数立即返回值，无入参
    var ret = addon.test();
    console.log("ret here:",ret)
*/

/*
    //传入单个参数，根据参数类型返回不同类型返回值  string/number/boolean
    var ret = addon.test_one_param(1.1);
    console.log("ret here:",ret)
*/


/*
    //传入函数，在addon中执行该函数，并返回函数。
    var ret = addon.method(function() {console.log("i'm a test func as input param")});
    console.log("ret here:",ret)
    console.log(ret());
*/

/*
    //传入对象类型，并返回一个js对象
    var ret = addon.process_obj({a:'eric'});
    console.log("ret:",ret)

    console.log('async::',my_async)
*/





var ret = my_async.async(function() {console.log('dddd')});
console.log("ret:",ret)

// console.log('async::',my_async)

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