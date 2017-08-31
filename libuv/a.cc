#include <node.h>
#include <iostream>
using namespace std;
using namespace v8;





// test func return imediately
void test(const v8::FunctionCallbackInfo<v8::Value>& args) {

  v8::Isolate* isolate = args.GetIsolate();
  auto rtn = v8::String::NewFromUtf8(isolate,"func test rtn");
  args.GetReturnValue().Set(rtn);

}

// 单个入参，根据不同入参类型，返回不同值
void test_one_param(const v8::FunctionCallbackInfo<v8::Value>& args) {
  v8::Isolate* isolate = args.GetIsolate();

  if (args[0]->IsNumber()){   // 处理数字类型入参并返回数字类型
        double a = args[0]->NumberValue();  //获取数字入参的方法
        Local<Number> return_val =  v8::Number::New(isolate,a+1);
        //Set the return value (using the passed in FunctionCallbackInfo<Value>&)
        args.GetReturnValue().Set(return_val);
        return;
    } else if (args[0]->IsBoolean()){ //处理布尔类型入参数，并返回布尔类型
      bool a = args[0]->BooleanValue();  // 获取布尔类型入参的方法
      Local<Boolean> return_val = v8::Boolean::New(isolate,!a);
      args.GetReturnValue().Set(return_val);
      return;
  } else if (args[0]->IsString()){  //处理字符串类型对象并返回字符串对象
      Local<String> add_str = v8::String::NewFromUtf8(isolate,"eric");
      add_str = v8::String::Concat(args[0]->ToString(),add_str);  // 获取字符入参的方法
      args.GetReturnValue().Set(add_str);
      return;
  } else {
        isolate->ThrowException(Exception::TypeError(
        String::NewFromUtf8(isolate, "Wrong  argument type")));
    return;
  }

  

  

}

//传入函数，并返回函数 。
void method(const FunctionCallbackInfo<Value> &args){
    Isolate * isolate = args.GetIsolate();
 
    if(args[0]->IsFunction()){
        Local<Function> js_fn = Local<Function>::Cast(args[0]);  //处理函数类型入参
        for(int i=0;i<11;i++){
            printf("%d\n", i);
        }
        js_fn->Call(v8::Null(isolate),0,NULL);   // 执行js脚本传入的函数
        args.GetReturnValue().Set(js_fn);
    }
}




  //传入对象类型，并返回一个js对象
  void process_obj(const FunctionCallbackInfo<Value>& args ) {
    v8::Isolate * isolate = args.GetIsolate();
    
    Local<Object> ret_obj = Object::New(isolate); //定义一个对象用于返回
    // 返回对象增加一个name属性，属性值为"process_obj"
    ret_obj->Set(v8::String::NewFromUtf8(isolate,"name"),v8::String::NewFromUtf8(isolate,"process_obj"));
    
    //处理传入的对象，获取对象属性列表存入数组，并作为返回对象的input_pros对象返回
    if(args[0]->IsObject()) {
      Local<Object> input_obj = args[0]->ToObject();
      Local<Array> keys = input_obj->GetOwnPropertyNames();
      ret_obj->Set(v8::String::NewFromUtf8(isolate,"input_pros"),keys);
    }
    args.GetReturnValue().Set(ret_obj);
  }

  void cb(const FunctionCallbackInfo<v8::Value>& args) {
    Isolate * isolate = args.GetIsolate();
    Local<String> a = args[0]->ToString();

    args.GetReturnValue().Set(v8::String::Concat(String::NewFromUtf8(isolate, ",hello"),a));
  }

  void rtn_func(const FunctionCallbackInfo<Value>& args) {
      Isolate* isolate = args.GetIsolate();

      Local<FunctionTemplate> tpl = FunctionTemplate::New(isolate, cb);
      Local<Function> fn = tpl->GetFunction();

      // omit this to make it anonymous
      fn->SetName(String::NewFromUtf8(isolate, "theFunction"));

      args.GetReturnValue().Set(fn);
  }


 

void Initialize(v8::Local<v8::Object> exports) {  
  NODE_SET_METHOD(exports, "test", test);
  NODE_SET_METHOD(exports, "test_one_param", test_one_param);
  NODE_SET_METHOD(exports, "process_obj", process_obj);
   NODE_SET_METHOD(exports, "rtn_func", rtn_func);

}

NODE_MODULE(module_name, Initialize)