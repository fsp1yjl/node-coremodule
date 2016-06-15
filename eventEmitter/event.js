// EeventEmitter类的实例方法
//1.event.addListener(msg,handler)  为一个event对象增加一个监听消息msg并指明事件处理函数handler   
//2.event.on(msg,handler)  为指定事件msg指定一个处理函数handler
// 3.event.once(msg,handler)   为指定事件msg指定一个处理函数handler,但是该事件最多只会触发一次
// 4.event.removeListener(msg,handler) 移除设置在msg事件上的处理函数handler
// 5.event.removeAllListeners(msg)   移除设置在msg事件上的所有处理函数，msg为可选，如果不传，则移除event的全部事件

//6.event.listeners(msg)   列出设置在msg事件上的处理函数数组
//7.event.setMaxListeners(n)  默认情况下，一个msg事件的监听处理函数超过10个就会报警告，通过本函数设置单个msg事件的最大处理函数个数
// 8. event.emit(msg,[arg1],[arg2],[...])  发送一个出发msg事件的的消息

var EventEmitter = require('events').EventEmitter;

//实例化一个一个监听对象
var event1 = new EventEmitter();

// 设置一个监听消息
event1.on('first msg',function(){
    console.log('get the first message');
});

event1.on('first msg',function() {
    console.log('one event can with mutiple handler');
});


var event2 = new EventEmitter();

event2.addListener('msg2',function(){console.log('added msg2 reached');});

//定时3秒后发出一个event消息
setTimeout(function(){
    event1.emit('first msg');
},3000);

setTimeout(function(){
    event2.emit('msg2');
},1000);


console.log(event1.listeners('first msg').toString());


//类方法  listenerCount(eventInstance,msg)  查看某个event实例的某个事件的处理函数个数
var eventCounter = require('events').EventEmitter.listenerCount(event1,'first msg');

console.log(eventCounter);
