
#include "node.h"
#include "v8.h"
#include "uv.h"
 
// #include <Windows.h>
 
using namespace v8;
uv_async_t finish_one;
/*
    // 线程共享数据的结构体
    struct ShareData
    {
        uv_work_t request;
        Isolate * isolate;
        Persistent<Function> js_callback;
    };
    
    // 耗时操作,2秒
    void worker_cb(uv_work_t * req){
        sleep(2000);
    }
    // 线程回调
    void after_worker_cb(uv_work_t * req,int status){
        ShareData * my_data = static_cast<ShareData *>(req->data);
        Isolate * isolate = my_data->isolate;
        HandleScope scope(isolate);
        Local<Function> js_callback = Local<Function>::New(isolate,my_data->js_callback);
        js_callback->Call(isolate->GetCurrentContext()->Global(),0,NULL);
        delete my_data;
    }
    
    
    void async(const FunctionCallbackInfo<Value> &args){
        Isolate * isolate = args.GetIsolate();
        HandleScope scope(isolate);
    
        ShareData * req_data = new ShareData;
        req_data->request.data = req_data;
        req_data->isolate = isolate;
        req_data->js_callback.Reset(isolate, Local<Function>::Cast(args[0]));
        uv_queue_work(uv_default_loop(),&(req_data->request),worker_cb,after_worker_cb);
    }
*/
void finish_one_func(uv_async_t * async, int status) {
    printf("get one finishe%d\n",*((int *)async->data));
}

void working(uv_work_t * request) {
    for(int i =0; i < 3; i++) {
        sleep(3);
        finish_one.data = (void*)&i;
        uv_async_send(&finish_one);
    }
}

void done(uv_work_t * request, int status) {
    printf("done!!!!");
}

void eric_async(const FunctionCallbackInfo<v8::Value>& args) {

    Isolate* isolate = args.GetIsolate();
    Local<Function> js_fn;
    if(args[0]->IsFunction()) {
        js_fn = Local<Function>::Cast(args[0]); 
    }
    uv_loop_t * loop = uv_default_loop();
    uv_work_t * request = new uv_work_t;

    uv_async_init(loop, &finish_one,(uv_async_cb)finish_one_func);
    
    uv_queue_work(loop, request, (uv_work_cb)working, (uv_after_work_cb)done);

}
 
void init(Local<Object> exports) {
    NODE_SET_METHOD(exports, "async", eric_async);
}
 
NODE_MODULE(addon, init)