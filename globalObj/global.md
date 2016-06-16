# node.js中的全局变量
   * node.js的全局对象是global,所有全局变量都是global对象的属性


## 全局变量列表

* __filename:表示当前正在执行的脚本的件名

* __dirname:表示当前正在执行的脚本的路径名

* setTimeout(callbackfun,ms)：规定毫秒后执行对应回调函数，只执行一次

* clearTimeout(t)：用于停止一个通过setTimeout()创建的定时器

* setInterval(callbackfun,ms): 返回一个定时器句柄，该方法会每隔规定时间执行对应回调函数

* clearInterval(t) ： 清除使用setInterval()创建的定时器

* console()   :相当于print

* process:一个用于描述当前进程状态的对象
    

    *  1	stdout 标准输出流。

    * 2	stderr 标准错误流。


    * 3	stdin 标准输入流。


    * 4	argv argv 属性返回一个数组，由命令行执行脚本时的各个参数组成。它的第一个成员总是node，第二个成员是脚本文件名，其余成员是脚本文件的参数。


    * 5	execPath返回执行当前脚本的 Node 二进制文件的绝对路径。


    * 6	execArgv返回一个数组，成员是命令行下执行脚本时，在Node可执行文件与脚本文件之间的命令行参数。


    * 7	env返回一个对象，成员为当前 shell 的环境变量


    * 8	exitCode进程退出时的代码，如果进程优通过 process.exit() 退出，不需要指定退出码。

 
    * 9	versionNode 的版本，比如v0.10.18。


    * 10	versions一个属性，包含了 node 的版本和依赖.


    * 11	config一个包含用来编译当前 node 执行文件的 javascript 配置选项的对象。它与运行 ./configure 脚本生成的 "config.gypi" 文件相同。


    * 12	pid当前进程的进程号。


    * 13	title进程名，默认值为"node"，可以自定义该值。


    * 14	arch当前 CPU 的架构：'arm'、'ia32' 或者 'x64'。


    * 15	platform运行程序所在的平台系统 'darwin', 'freebsd', 'linux', 'sunos' 或 'win32'


    * 16	mainModulerequire.main 的备选方法。不同点，如果主模块在运行时改变，require.main可能会继续返回老的模块。可以认为，这两者引用了同一个模块。
