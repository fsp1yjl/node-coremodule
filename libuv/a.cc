#include <node.h>
#include <iostream>
using namespace std;
using namespace v8;

const int maxValue = 10;  
int numberOfCalls = 0;

void WhoAmI(const v8::FunctionCallbackInfo<v8::Value>& args) {  
  v8::Isolate* isolate = args.GetIsolate();
  auto message = v8::String::NewFromUtf8(isolate, "I'm a Node Hero!");
  args.GetReturnValue().Set(message);
}

void Increment(const v8::FunctionCallbackInfo<v8::Value>& args) {  
  v8::Isolate* isolate = args.GetIsolate();

  if (!args[0]->IsNumber()) {
    isolate->ThrowException(v8::Exception::TypeError(
          v8::String::NewFromUtf8(isolate, "Argument must be a number")));
    return;
  }

  double argsValue = args[0]->NumberValue();
  if (numberOfCalls + argsValue > maxValue) {
    isolate->ThrowException(v8::Exception::Error(
          v8::String::NewFromUtf8(isolate, "Counter went through the roof!")));
    return;
  }

  numberOfCalls += argsValue;

  auto currentNumberOfCalls =
    v8::Number::New(isolate, static_cast<double>(numberOfCalls));

  args.GetReturnValue().Set(currentNumberOfCalls);
}

// test func return imediately
void test(const v8::FunctionCallbackInfo<v8::Value>& args) {

  v8::Isolate* isolate = args.GetIsolate();
  auto rtn = v8::String::NewFromUtf8(isolate,"func test rtn");
  args.GetReturnValue().Set(rtn);

}

// 单个入参，根据不同入参类型，返回不同值
void test_one_param(const v8::FunctionCallbackInfo<v8::Value>& args) {
  v8::Isolate* isolate = args.GetIsolate();

  if (args[0]->IsNumber()){
        double a = args[0]->NumberValue();  //获取数字入参的方法
        Local<Number> return_val =  v8::Number::New(isolate,a+1);
        args.GetReturnValue().Set(return_val);
    };

  if (args[0]->IsBoolean()){
      bool a = args[0]->BooleanValue();  // 获取布尔类型入参的方法
      Local<Boolean> return_val = v8::Boolean::New(isolate,!a);
      args.GetReturnValue().Set(return_val);
  };

  if (args[0]->IsString()){
      Local<String> add_str = v8::String::NewFromUtf8(isolate,"eric");
      add_str = v8::String::Concat(args[0]->ToString(),add_str);  // 获取字符入参的方法
      args.GetReturnValue().Set(add_str);
  };

}

void Initialize(v8::Local<v8::Object> exports) {  
  NODE_SET_METHOD(exports, "whoami", WhoAmI);
  NODE_SET_METHOD(exports, "increment", Increment);
  NODE_SET_METHOD(exports, "test", test);
   NODE_SET_METHOD(exports, "test_one_param", test_one_param);
}

NODE_MODULE(module_name, Initialize)