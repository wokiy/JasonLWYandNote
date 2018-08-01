## 总结01
#### 前端方向和前端理解
1. 对前端感兴趣，兴趣是最好的老师，做人最紧要就是开心嘛
2. 前端前途好些，对自己而言， 小程序等
3. 理解：Html、CSS、JS。前端负责的是用户可以看到的部分，所以也是最接近用户的工程师。同时在产品研发流程中前端要同时与产品、设计、后端等很多人合作。

#### Vue双向数据绑定的实现
> vue.js则是采用数据劫持结合发布者-订阅者模式的方式，通过 Object-defineProperty()来
> 劫持各个属性的setter,getter,再数据发生变动时发布消息给订阅者（文本节点就作为订阅者）
> ，再收到消息后执行相应的更新操作。
> 
> compile 主要做的事情是解析模板指令，将模板中的变量换成数据，然后初始化渲染页面视图，
> 并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，
> 更新视图。
> 
> MVVM 作为数据绑定的入口，整合Observer, Compile 和watcher 三者，通过Observer 
> 来监听自己的model数据变化，通过Compile 来解析编译模板指令，最终利用Watcher 
> 搭起，Oberver和Compile 之间的通信桥梁，达到数据变化 -> 视图更新； 
> 视图交互变化（input） -> 数据model变更的双向数据绑定效果。
> Angular 采用的是‘脏值检查’的方式，数据发生变更后，对于所有数据和视图的绑定关系进行一
> 次检测，识别是否由数据发生了改变。
> 

#### react和vue 有哪些不同？ 不同的看法
> 都用了 Virtual dom （虚拟dom）的方式，性能都很好。 ui上都是组件化的写法，开发效率高。
> vue 是双向数据绑定，react是单项数据绑定，当工程规模很大时，双向数据绑定会很难维护
> vue适合不会持的，小型的web应用，使用vue.js能带来短期内较高的开发效率，
> 否则才哟个react

#### let and const 的区别
> let 声明的变量可以变化，值和类型都可以变化，没有限制
> const 声明的变量不得改变值

#### 平时用了es6的哪些特性，体验如何 和es5有什么不同
> let const 箭头函数 字符版串模板 class类 模块化 promise
> es5 require react.createclass 

#### weboack  gulp 了解
> webpack 是模块打包工具，他会分析模块间的依赖。然后使用loaders 处理他们，最后生成
> 一个优化并且合并的静态水资源。gulp是前端自动化工具，能够优化前端工作流，比如文件合并
> 压缩

#### wepack 打包优化
> 模块太多，chunck，优化处理  webpack 可以配置externals 
> 来将依赖的库指向全局变量，从而不打包库

####  浏览器缓存有哪些，通常缓存有哪几种方式
> 强缓存 强缓存如果命中，浏览器直接从自己的缓存中读取资源，不会发请求到服务器
> 协商缓存 当强缓存没有命中的时候，浏览器一定会发送一个请求到服务器，通过服务器端依据资
> 源的另外一些http 
> header验证这个资源是否命中协商缓存，如果协商缓存命中，服务器会将这个
> 请求返回（304），若未命中请求，则将资源返回客户端，并更新本地缓存数据（200）
> 
> HTTP头信息控制缓存

```
    <!-- 数组里面的图片顺序展示 -->
    function loadImage(imgList, callback) {
        if(!$.isArray(imgList) || isFunction(callback)) {
            var imageData = [];
            $.each(imgList, function() {
                var img = new Image();
                img.onload = function() {
                    $(imageData.shift()).appendTo('body');
                    if(!imageData.lenght ) {
                        callback();
                        return;
                    }
                    this.onload = null;
                };
                img.src = src;
                imageData.push(img);
            })
        }
    }
```

####  node, Koa有用
> Koa koa是一个相对于express来说,更小,更健壮,更富表现力的Web框架，不用写回调
> koa是从第一个中间件开始执行，遇到next进入下一个中间件，一直执行到最后一个中间件，
> 在逆序
> async await语法的支持

#### 模块化顺序
1. commonJS 同步，顺序执行
2. AMD （requireJS） 以前加载，不管是否调用该模块，先解析所有的模块资源，requireJS速度快，有可能浪费资源
3.CMD seaJS 提前加载，按需加载 ，性能比AMD差

#### 闭包，闭包常用的场景
> 闭包是值有权访问另一哥函数作用域中的变量的函数。创建闭包常见的方式，就是函数嵌套。
> 
> 应用场景： 设置私有变量和方法
> 
> 不适用的场景： 返回闭包的函数是非常大的函数
> 
> 闭包的缺点： 容易造成内存泄漏。常驻内存，增加内存的开销

#### why 出现闭包？
> 受JavaScript链式作用域结构的影响，父级变量中无法访问到子级的变量值，为了解决这个问题
> 才使用闭包这个概念

#### 作用域链,作用域链
> 每一个函数都有一个作用域，比如我们创建了一个函数，函数里面又包含了一个函数，那么现在 
> 就有三个作用域，这样就形成了一个作用域链.
> 
> 作用域的特点就是： 现在自己的变量防卫中查找，如果找不到，就会沿着作用域链往上找

#### ajax 过程的状态码
> 异步的HTTP请求
> 1. 创建XMLHttpRequst 对象。创建一个异步调用对象
> 2. 创建一个新的HTTP请求，并指定
> 3. 设置响应HTTP请求状态变化的函数.
> 4. 发送HTTP请求
> 5. 获取异步调用返回的数据.
> 6. 使用JavaScript和DOM实现局部刷新.

```

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', 'demo.php', 'true');
    xmlHttp.send();
    xmlHttp.onreadystatechange = function() {
        if(xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            ....
        }
    }
    <!--使用promise封装 json function -->
    function getJSON(url) {
        return new Promise(function(resolve, reject) {
            var XHR = new XMLHttpRequest();
            XHR.open('GET', url, true );
            XHR.send();
            XHR.onreadystatechange = functon() {
                if(XHR.readyStatus == 4){
                    if(XHR.status == 200) {
                        try{
                            var response = JSON.parse(XHR.reqsponseText);
                            resolve(response);
                        }catch(e) {
                            reject(e);
                        }
                    }else {
                        reject(new Error(XHR.statusText))
                    }
                }
            } 
        })
    }

    getJSON(url).then(res => console.log(res)); 

```

#### http (状态)
1. 404 没找到页面(not found)
2. 403 禁止访问（forbidden）
3. 500 内部服务器出错
4. 200 ok
5. 304 没有修改（服务器返回 的源文件没有被修改）

#### 3开头的状态码
1. 302/307 临时重定向
2. 301永久重定向
> 借助状态码， 用户可以知道存在的问题

#### 语义化
> html5 的新标签， header footer section 
> 等语义化。一方面，语义化的标签让计算机快速的读懂，搞笑小狐狸信息，可以搜索引擎更友好。
> 和他人一起开发让别人懂得标签代码的意思

#### 盒模型
> content-box border-box  
> content-box 是W3C的标准盒模型 元素宽 = 内容的宽
> border-box 怪异盒模型 宽  = 内容宽 + padding  + border 
>  比如有时候在元素基础上添加内距padding或border会将布局撑破 
>  但是使用border-box就可以轻松完成

#### js 点击对应 li 打印下标
```
    var lis = querySelectAll('li')
        for(var i=0;i<10;i++) {
            lis[i].onclick= (function(a) {
                return function(){
                    alert(a)
                }
                })(i)
        }
    }
```

#### 事件委托
> 利用冒泡的原理。把事件加在父级上，触发执行效果
> 1. 可以节省大量内存，减少事件注册
> 2. 可以动态添加和修改元素，不需要应为元素的改动而修改事件绑定。

```
    var  ul = document.querySelector('ul');
    var list = document.querySelectorAll('ul li');
    ul.addElementListener('click', function (ev) {
        var ev = ev || window.event;
        var target = ev.target || ev.srcElment;
        for(var i =0; len= list.length ; i++) {
            if(list[i] == target) {
                alert(i+ '----' + target.innerHTML);
            }
        }
        })
```

#### 三列布局
1. float + margin 
2. flexbox 布局
3. 定位
4. table
5. 栅格布局

#### JavaScript的内存回收机制
> 辣鸡回收机制，每隔一段时间 不在使用的内存，然后为其释放内存
> 一般使用标记清除方法，当变量进入环境标记进入环境。离开环境标记为离开环境
> 计数方法 
> 堆栈 
> stack 为自动分配内存空间，它由系统自动释放，而heap 
> 则是动态分的内存，大小补丁也不会自动释放。
> ......

#### get post 有什么不同
> get 是从服务器上获取数据，post是想服务器传送数据
> get 请求可以将查询字符串参数追加到URL的末尾。post请求应该把数据作为请求主体提交
> 
> 大小限制
> 
> 安全性
> 

#### cookie session 联系区别
> cokkie 数据存放在客户的浏览器上，session数据放在服务器上。session 比cookie 更安全
> 单个cookie保存数据不超过4K。很多浏览器限制一个站点最多保存20个 cookie.
> 一般cookie来存储 sessionid 

#### JavaScript中的this是什么，指向问题
> 全局代码中的this，是指向全局对象
> 全局代码中的this  是指向全局对象作为对象的方法调用时指向调用这个函数的对象。
> 作为构造函数指向新创建的对象使用apply和call设置this
> 

#### promise (地狱回调)
> Promise 就是一个对象。原来传递异步操作的消息，由三种状态，pending (进行中) reselove
> （已完成）。 rejected (失败) 
> 
> promise 对象，就可以异步操作作为同步操作的流程表达吹来，避免层层嵌套回调

#### 组合继承
````
    var Super = function(name)  {
        this.name = name;
    }
    Super.prototype.func = function() {
        console.log('sss');
    }
    var Sub = function(name,age ){
        Super.call(this, name);
        this.age = age;
    }
    Sub.prototype = new Super();
````

#### 判断数组
1. a instanceof Array 
2. a.constructor == Array 
3. Object,prototype.toString.call(a) == [Object Array]

#### 跨域通信方式
> JSOP  同源策略的限制，XmlHttpRequest 只允许请求当前源， script 标签没有同源策略
> 
> 通过动态 script 的 是src 指定一个跨域url ，回调函数处理JSON数据，兼容性不好， 
> 不支持 post 
> 原理： 首先在客户端注册一个callback .然后callback 
> 的名字传给服务器，此时，服务器生成一个function
> function名字就是传递上来的参数，最后将json 数据直接以入参的参数的方法。放置到
> function 中，这样就生成了一段js 语法，的文档，返回给客户端浏览器，解析script 标签
> 并执行返回的JavaScript文档，此时数据组为哦哦i蚕食，传入到了客户端，传入到了客户端预
> 先写好的callback 函数里面

````
    <script>
        var url = 'http:/sdasda';
        var script = document.createElement('script');
        script.setAttribute('src', url);//load javascript
        document.getElementTagName('head')[0].appendChild(script);

        //回调函数
        function callbackfunction() {
            var html = JSON.stringify(data, resultset);
            alert(html)
        }
     </script>
````

> cors： 通过设置Access-Control-Allow-Origin 来允许跨域cors。可以
> ajax 发起发起请求，来获取数据，但是兼容性么有jasonp 好

#### 多页面同信 哪些方案
1. localstorage 在一个标签被添加，修改或者删除，都会触发一个storage 事件。通过在一个标签页面监听storage 事件。既可以得到localstorage存储的值，实现不同标签页面的通信
2. cookie 

#### XSS 和CSRF 
1. XSS : 比如在一个论坛发帖中发布一段恶意的JavaScript代码就是脚本注入，如果这个代码内
 容有请求外部服务器，那么就叫做XSS写一个脚本将cookie发送到外部服务器这就是xss攻击但 是没有发生csrf
2. CSRF: XSRF，冒充用户发起请求（在用户不知情的情况下）,完成一些违背用户意愿的请求 如恶意发帖，删帖比如在论坛发了一个删帖的api链接 用户点击链接后把自己文章给删了 这里就是csrf攻击没有发生xss
防范：验证码 token 来源检测

#### 垂直居中

````
    块级元素
    已知高度绝对定位负边距
    未知高度transform: translateY(-50%);
    flex布局 
    display: flex;
    justify-content: center;
    align-items: center;
````

#### js 原型链 
```
    function foo() {
        foo.prototype.z = 3;
        var obj = new foo();
        obj.x =1;
        obj.y =2;
        obj.x //1;
        obj.y //2;
        obj.z//3;
    }
```
#### 输入网址后面发生的过程
1. 通过DNS 解析获取IP
2. tcp 连接
3. 客户端发送http请求
4. tcp传送报文
5. 服务器处理请求返回的http报文
6. 客户端解析渲染页面(构建 DOM树 -> 构建渲染树 -> 布局渲染树 -> 绘制渲染树)

#### 父子组件的通信
> vue: 父组件是通过props属性给子组件通信。在子组件里面 emit, 在父组件监听。
> vuex 兄弟组件
> 
> 生命周期： vue : beforecreated : el 和data未初始化/
>   create : 完成了data 数据初始化 el 没有
>   beforeMount  完成了el and data初始化
>   mounted： 完成挂在 
>   updated
>   destroyed
>   

#### 清除浮动
1. 利用clear属性进行清理
```
    .clearfix::after {
        content: '' ;
        display: block;
        visibility: hidden;
        clear:both;
        height:0;
    }
```
2. 父级元素形成 BFC
> BFC能清理浮动主要运用的是它的布局规则：
> 

#### 前端性能优化
1. 减少http请求,使用sprite图，合并js css 文件
2. 使用cdn 服务器就近原则
3. 使用缓存，缓存ajax 
4. 压缩资源
5. 代码层面 避免使用样式表达式、通配符选择器、样式放在顶部、脚本放在底部
 
#### 事件模型和事件代理
> 事件三个阶段：事件捕获，目标，事件冒泡（低版本ie不支持捕获阶段）

``` 
    w3c绑定事件target.addEventListener(event,handler,false)
    解绑target.removeEventListener(eventType, handler, false)
    ie绑定 target.attachEvent(on+event, handler)
    解绑target.detachEvent("on"+eventType, handler)
```

#### 将url的查询参数解析成字典对象

```
    function getQueryObject(url) {
        url = url == null ? window.location.href : url;
        var search = url.substring(url.lastIndexOf("?") + 1);
        var obj = {};
        var reg = /([^?&=]+)=([^?&=]*)/g;
        search.replace(reg, function (rs, $1, $2) {
            var name = decodeURIComponent($1);
            var val = decodeURIComponent($2);              
            val = String(val);
            obj[name] = val;
            return rs;
        });
        return obj;
    }
  
getQueryObject("http://www.cnblogs.com/leee/p/4456840.html?name=1&dd=ddd**")
Object {name: "1", dd: "ddd**"}

```

#### 页面的加载顺序
> html顺序加载，其中js会阻塞后续dom和资源的加载，css不会阻塞dom和资源的加载但是会阻塞j
> s的加载

#### 随机生成范围的数和排序
```
      var arr = [];
    for(var i = 0;i<10;i++){
        var num = Math.random()*30 + 20;
        num = parseInt(num, 10);
        arr.push(num);
}
　
  arr.sort(function(a,b){
    return 0.5 - Math.random();
})

```
#### 移动端兼容问题
> IOS 移动端click 事件300ms的延迟响应
> 一些情况下对非可嗲经济水元素（label span）监听click 事件。ios 下不会触发，css增加
> cursor: pointer 就搞定了。


#### boostrap 的栅格系统如何实现的
1. box-sizing: border-box 
2. container row column 设置百分比
