 // ����ԭ�͵�prototype�����ں���һ������ö�ٵ�constructor���ԣ�������ָ��ԭ�ͺ������� function F(){};  �� F.prototype.constructor = F
 // ʵ�������constructorָ����ԭ�� function F(){}; instance_f = new F() ; �� instance_f.constructor = F, instance_f.__proto__ = F.prototype
 var util = require('util');

 console.log(util.inherits.toString());

// * ��ӡ��util.inherits()����
function inherits(ctor, superCtor) {
  ctor.super_ = superCtor;
  
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
}


function Super(){
    this.super = 'super';
}

Super.prototype.showSuper = function() {
    console.log('super here');
};

function Sub(){
    this.sub = 'sub';
};

inherits(Sub,Super);

var subins = new Sub();

console.log(subins);

subins.showSuper();



