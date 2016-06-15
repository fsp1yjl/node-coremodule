// EeventEmitter���ʵ������
//1.event.addListener(msg,handler)  Ϊһ��event��������һ��������Ϣmsg��ָ���¼�������handler   
//2.event.on(msg,handler)  Ϊָ���¼�msgָ��һ��������handler
// 3.event.once(msg,handler)   Ϊָ���¼�msgָ��һ��������handler,���Ǹ��¼����ֻ�ᴥ��һ��
// 4.event.removeListener(msg,handler) �Ƴ�������msg�¼��ϵĴ�����handler
// 5.event.removeAllListeners(msg)   �Ƴ�������msg�¼��ϵ����д�������msgΪ��ѡ��������������Ƴ�event��ȫ���¼�

//6.event.listeners(msg)   �г�������msg�¼��ϵĴ���������
//7.event.setMaxListeners(n)  Ĭ������£�һ��msg�¼��ļ�������������10���ͻᱨ���棬ͨ�����������õ���msg�¼��������������
// 8. event.emit(msg,[arg1],[arg2],[...])  ����һ������msg�¼��ĵ���Ϣ

var EventEmitter = require('events').EventEmitter;

//ʵ����һ��һ����������
var event1 = new EventEmitter();

// ����һ��������Ϣ
event1.on('first msg',function(){
    console.log('get the first message');
});

event1.on('first msg',function() {
    console.log('one event can with mutiple handler');
});


var event2 = new EventEmitter();

event2.addListener('msg2',function(){console.log('added msg2 reached');});

//��ʱ3��󷢳�һ��event��Ϣ
setTimeout(function(){
    event1.emit('first msg');
},3000);

setTimeout(function(){
    event2.emit('msg2');
},1000);


console.log(event1.listeners('first msg').toString());


//�෽��  listenerCount(eventInstance,msg)  �鿴ĳ��eventʵ����ĳ���¼��Ĵ���������
var eventCounter = require('events').EventEmitter.listenerCount(event1,'first msg');

console.log(eventCounter);
