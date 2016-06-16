 // 函数原型的prototype对象内含有一个不可枚举的constructor属性，该属性指向原型函数本身 function F(){};  则 F.prototype.constructor = F
 // 实例对象的constructor指向函数原型 function F(){}; instance_f = new F() ; 则 instance_f.constructor = F, instance_f.__proto__ = F.prototype
 var util = require('util');

 console.log(util.inherits.toString());

// * 打印的util.inherits()函数
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



