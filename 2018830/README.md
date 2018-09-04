### 今日份笔记
##### 1Doctype
 <!DOCTYPE> 声明位于文档最前面。用处告诉浏览器使用那种文档 html xhtml 规范，重点：告诉浏览器按照何种规范解析页面。


##### 2Quirks模式， Standards模式有什么区别？（怪异，标准）
 IE6开始，引入标准standars标准模式
 标准和怪异的区别：
 总体伤会有布局，样式解析和脚本执行的区别：
1. 盒模型：在W3C中，如果设置一个元素的高度宽度在怪异模式下，IE的高度等还包含了padding border
2. 设置行内元素的高宽： 在standars标准模式下 <span> 宽高是不可以设置的 在quirks 模式行，则会生效。
3. 设置白封闭的高度： 在标准模式下，一个元的高度是包含内容来决定的，如果设置父元素没有设置百分比高度，子元素来设置百分比高度是不生效的， 
4. marging : 0 aotu; 在标准模式下生效，在桂阿姨模式下不生效，

##### 3div + css  和table布局的优缺点
1. 改版时候更方便，只修改css 文件
2. 页面的加载速度，结构更清晰，页面现实更加简洁
3. 表现与结构相分离
4. 易于优化（seo）,搜索引擎友好，排名更靠前

##### 4多个域名来储存网站资源会更有效
1. CDN缓存方便
2. 突破浏览器并发限制
3. 节约cookie带宽
4. 节约主域名的连接数，优化页面的响应速度
5. 防止不必要的安全问题

##### 5cookie sessionStorage localStorage
sessionStorage 中的数据，只有在同一个会话中的页面才能访问，并且当会话结束后数据也随之销毁，因此sessionStorage 不说一种持久化的本地存储，仅仅是会话级别的储存，，而localStorage用于持久化的本地存储，除非删除数据，否者数据是永远不会过期的。

web stoeage 和cookie 的区别
   1. cookie 大小太小，每次请求新页面cookie都会发送过去，消费了带宽，cookie指定作用域，不可跨域调用
   2. web Storage 用API方法。不i选哪个cookie需要前端自己封装setCookie .......
   3. cookie 也是不可或缺的，浏览器和服务器的HTTP无状态交流（HTTP规范的一部分）。 而erb Storage 仅仅是喂了在本地“储存” 数据而生。   

#####  6src 和 href 区别
> src 由于替换当前的元素，href 用于在当前文档和引用资源之间确定联系。

在请求source资源器指向的资源部下载并应用到文档， js 脚本  img图片 frame等元素。
<script type="text/javascript" src="aa.js"></script>
> 当浏览器解析到此元素的时候，会暂停其他资源下载处理。知道将该资源加载，编译，执行完毕，
> 这就是js 文件放html下面的。

href: 指向网络资源所在的位置，
> link href="aaa.css"/////
> 下载css 资源但是不会打断其他资源的下载，这就是建议link 来加载css 而不是@import
> css

###### 7网页的图片格式
1. png-8
2. png-24
3. jpeg
4. gif 
5. svg
6. webp : 相同的质量下： webp图片资源的大小要不JPEG小40%

###### 8大型网站多图片优化
1. 图片懒加载 ，在为可见的区域添加一个滚动事件。
2. 幻灯片，下一张预加载
3. css图片，css sprite svgsprite Base64
4. 图片过大，特殊编码的图片
5. 展示区域小于图片的大小，压缩图片

###### 9 css 选择器
1. id 
2. class
3. element
4.属性选择器
> 选择器的优先级 1 10 100 

###### 10 现实隐藏
1. display: none;
2. visibility: hidden; 
3. 设置高度为 0 设置透明度0 设置z-index:-1000;

###### 11 行内元素换和块级元素的具体区别是什么？行内元素的padding 和 margin？ 
1. 块级元素（block）特性： 总独占一行。 高宽 内边距 外边距都可以控制
2. 内联样式： 高度 宽度 边距上下不可以改变   inline-block(可以设置)

##### 12 外边距重叠
> 外边距重叠
 
 两个相邻的盒子（兄弟 父子） 的外边距可以结合为一个边距，合并的外边距重叠，折叠外边距

```
    折叠计算格式： 
    A B  A+ B+  看 A B 谁大
    A B  A- B-  看 A B 绝对值谁大
    -A B+ 反之   两数相加
```

##### 13 rgba() opacity 的透明度？
* opacity 是作用于元素，以及元素内的所有内容的透明
* rgba() 作用于元素的颜色或其背景色。 子元素不会继承透明

##### 14 css 操作文字位置
1. 垂直方向 line-height 
2. 水平方向 letter-spacing  letter-spacing 来inline-block 元素间的换行空格符问题

##### 15垂直居中浮动元素

```
    //知道高度
    #demo {
        background-color: red;
        width:200px;
        height:200px;
        position: absolute;
        top:50%;
        left:50%;
        margin-top:-100px;
        margin-left:-100px;
    }

    //未知元素的高度
    #demo{
        background-color: red;
        width:200px;
        height:200px;
        margin 0 auto;
        position: absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
    }

    //垂直居中一个 img 
    #img {
        display:table-cell;
        text-align:center;
        verical-align:middle;
    }

```
    
##### 16 sass less 是什么？ 大家为什么要使用他们
> css 预处理器，预处理被赋予了，动态语言，如变量，继承，混合 计算，函数。
> 结构清晰，便于拓展
> 可以轻松实现多重继承，
> 完全兼容css 代码，可以方便的运用到老项目中，

##### 17 display : none  与 visibility: hidden
1. display: 隐藏对应元素但不挤占该元素原来的空间。
2. visibility: 隐藏对应元素并且挤占该元素的原来空间

##### 18 css 中的link @import 的区别
link 是html的标签， 而@import是css 提供的
link 资源加载页面不会阻塞其他资源的加载，@import 会阻塞其他资源的加载
link 引入的权重大于@import 

##### 19 盒模型
1. IE盒子模型 width = content + padding border
2. 标准盒模型 width = content 
设置： box-sizing:border-box;
       box-sizing:content-box;
盒模型： 内容不够 内边距 外边距 border

##### 20 样式初始化
> 由于不同的浏览器对标签默认样式值不同，若不初始化会造成不同的浏览器 差异化

##### 20 BFC 
>（块级格式化上下文） 一个创建了新的BFC的盒子是独立布局的，盒子内元素的布局不会影响盒子外面的元素
BFC 是指浏览器中创建一个独立的渲染区域，改区域内所有元素的布局不会影响到区域元素，这个渲染区域支队块元素器作用。

##### 21 html 语义化
> 当页面样式加载失败的时候呢能够让页面城呈现清晰的结构
> 便于现实的维护和管理， 代码更具可读性 便于其他设备解析

##### 22 IE 的双边距BUG： 块级元素float 设置margin 较大
> 设置display: inline 

##### 23 html 兼容性问题
1. 双边距 BUG float 引起的， 使用display
2. IE z-index 问题，给父级添加position: relative 
3. mint-height: ！important
4. select 在ie6下遮罩，使用ireame
5. ie6 不支持PNG透明背景，解决办法： IE6下使用gif图片。

##### 24 css 属性可以继承
1. 可继承 ： font-size  font-family color 
2. 不可继承 ： border margin padding width height 

##### 25行内元素 块级元素
1. 行内元素： a b br img input label select span 
2. 块级元素： div form h1-h6 hr ol ul table 

##### 26 js 的数据类型
1. object number function boolean undefind  String 
```
    typeof null // object 
    typeof isNaN // 
    typeof [] // object 
    toString.call([]) // "[object.Array]"
```

##### 27 强制类型转换 隐士类型转换
1. 强制类型： parseInt Number()
2. 隐类型转换： (==) 1 == '1' //true null == undefined// true 

##### 28 split() join()的区别
> 前者是切割成数组的形式
> 后者是将数组转换成字符串

###### 29 事件绑定和普通事件
1. 传统的事件的绑定： onclick 
```
    div.onclick = fuhnction(){}
    // 后面的绑定会覆盖之前的绑定
    // 不支持DOM事件流 捕获-》目标元素-》冒泡

    addEventListener("click", function(){},true))
    // 多个事件分别执行，不覆盖之前的事件，
    // 支持DOM事件流
    // 进行事变绑定 不用编写 on 
```

##### 30 call apply 的区别
call 和apply 相同点 ： 都是为了让一个不属于一个对象的方法，让这个对象去执行，
toString.call([],1,2,3);
toSting.apply([],[1,2,3]);

##### 31 b 继承 a 
function b(){};
b.prototype = new a;

##### this 闭包 作用域
this 指调用上下文
闭包 : 外层作用域可以访问内的作用域
作用域： 全局作用域，函数作用域

##### 32 事件委托
符合w3c的标准，的事件绑定，addEventListener/attachEvent
让利用事件冒泡的原理，让自己所触发的事，让他的父级代替执行

##### 33 闭包？
闭包就是能够读取其他函数内部的变量的函数
闭包的特点： 滥用闭包韩式会造成内存泄漏，闭包中的引用是不会被自动释放。需要手动释放变量的引用。

##### 33阻止事件冒泡和默认事件
```
    //阻止冒泡
    e.stopPropagation();
    //阻止默认事件
    return false;
    e.preventDefault();
```

##### 34 DOM基本操作 
1. 添加 obj.appendChild();
2. 插入 obj.insertBefore();
3. obj.replaceChild()
4. obj.removeChild()

##### 35 js本地对象 内置对象 宿主对象
1. 本地对象：  obj array regexy 可以 new 实例对象
2. 内置对象： gloab Math 不可以实例化
3. 宿主对象： document window

##### 36 document.onload ,document.ready 的区别
document.onload 是结构和样式都加载完的（加载所有的资源才会触发 onload事件）
document.ready  原生中没有这个方法。在jquery $().ready(function(){})

##### 37 == ===
“==” 会自动转换类型 1 == "1" null = undefoined 
=== 完全等

##### 38 浏览器的同源策略
主机名，协议，端口号  
ajax 跨域问题出现
##### 39 数组去重
```
    function Sort(arr) {
        var result  = [];
        var newArr = [];
        for (var i=0;i<arr.length ; i++) {
            if(!result[arr]){
                newArr .push(arr);
                result[arr] = 1;
            }
        }
        return newArr;
    }
```

#### 40 数组的判断方法
1. 判断是否具有数组的API 
2. obj instanceof Array  (某些ie不正确)
3. Array.isArray
4. Object.prototype.toString.call(arr) === "[object Array]";

##### 41input 值获取
> document.getElmentById("dmoe").value;

##### 42获取所有的checkbox 
```
    var domlist = document.getElementByTagName("input");
    var checkboxList = [];
    var len = domList.length;
    while(len--) {
        if(domList[len].type == "checkbox"){
            checkBox.push(domList[len]);
        }
    }
```

##### 43 DOM 元素事件的添加
```
    // html元素中
    < button onclik = "test()"></button>
    // js  1
    dom.onclick  =  function (){
        //aaaa
    }
    // js2
    dmo.addElementListener("click", function(){

    })
    //事件流（onclick addElmentListener() 区别和）
    //捕获 目标 冒泡 
```
##### 44 undefined 
1. 变量定义了 为赋值
2. 想要获取一个对象伤不存在的属性或者方法
3. 一个数组中没有被复制的元素

##### 45  jion（数组 to 字符串）
```
    var arr = ["a","s","d"];
    console.log("join"+ arr.join(""));
```
##### 46 日期操作 （2018-11-01）
```
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    month = month <10? "0" + month : month 
    var day = d.getDate();
    day = day<10 ? "0" + day : day;
    console.log("日期"+ year+ month + day);
```

##### 47 10-100 随机数 ，数组排序
```
    var isArray = [];
    function getnumber(isStar, isEnd) {
        var isChoice = isend - isStar +1;
        return Math.floor(Math.random()+isChoice + isStar); 
    }
    for(var i=0;i<10 ;i++) {
        var result = getnumber(10,100);
        isArray.push(result);
    }
    isArray.sort();
```

##### 48 dom 操作

1. 创建节点 createDocumentFragment() //创建一个dom片段
2. createElemnt // 创建具体的元素
3. createTextNode() // 创建文本节点

1. appendChild() // 添加
2. removeChild() // 移除
3. replaceChild() // 替换
4. insertChild() //插入

1. getElementByTagName() // 通过标签名
2. getElementByName() // 元素的name 属性的值
3. getElementById() // 通过元的Id , 唯一性

##### 49 字符串操作
 abcdsfe  sfe 
 > alert("abcdsfe".substring(4));
 
##### 50 浏览器 BOM 常用对象
1. window 
2. document 
3. location 
4. screen 
5. history 
6. navigator 

##### 51 js 数据类型
1. 基本数据类型 String Boolean Number undefined null 
2. 引用数据类型 Object

##### 52函数创建方式
```
    //第一种(函数声明)
    function sum(num1,numb2) {
        return num+num2
    }
    // 函数表达式
    var fuc = function(){
        //sdsasdsa
    }
    // 匿名函数
    var sumn = new Function(){

    }
```

##### 53 js 继承
1. 原型链继承
2. 组合继承
3. 借用构造函数继承(ES6)

##### 54 iframe 的优缺点
优点：
1. 解决加载缓慢的第三方内容 如图标和广告等加载问题
2. 并行加载脚本

缺点： 
1. iframe 会阻塞主页面的onload 事件
2. 即使内容为空，加载也需要时间
3. 没有语义

##### 55 页面优化加载
1. 减少css, js  文件数量及大小，压缩css js 代码
2. 图片优化
3. 减少http 请求
4. 使用 cdn (js css)

##### 56 前端造成内存泄漏
> 内存泄漏指任何对象在不需要的时候任然存在。
> 
> seTimeout 的第一个参数使用字符串非函数的话， 会引发内存泄漏。
> 闭包 控制台日志 循环

##### 57 项目管理
1. 前期团队确定号全局的样式 编码等
2. 命名规范
3. 图片采用整个是images png  png8

##### 58 闭包 ？ 写一个简单的闭包
> 我的理解是。闭包就是能够读取其他函数内部变量的函数，在本质上，闭包就是将函数内部和函数外部链接起来的一座桥梁

```
    function outer(){
        var num =1 ;
        function inner() {
            var n =2 ;
            alert("s" n+num);
        }
        return inner;
    }
    outer()();
```

##### 59 document.write 和innerHTML
1. document.write 只能重绘整个页面
2. innerHTML 可以重绘页面的一部分

#####  60 数组的方法 pop push unshift shift 
1. push 尾部添加
2. pop 尾部删除
3. unshift 头部添加
4. shift 头部删除

##### 61 阻止冒泡函数
```
    function stopPropagation(e) {
        e = e || window.event;
        if(e.stopPropagation) { // w3c阻止冒泡
            e.stopPropagation();
        }else {
            e.cancelBubble = true; // IE阻止冒泡方法
        }
    }

    document.getElementById("demo").onclick = function (e) {
        stopPropagation(e)
    }
```
##### 62 css3新特性
1. 圆角
2. 阴影
3. 文字影
4. 线性渐变
5. transform 旋转
6. 媒体查询
7. canvas

##### 63 HTML5新特性
1. 拖拽API
2. 语义化
3. 音频 视频API
4. canvas
5. 地理api
6. 本地离线存储

##### 64 响应式设计 
> 网页制作的过程中在不同的设备中有不同的功能，响应式设计 一台代码带出运行

##### 65 css3 新增伪类
1. p:first-of-type
2. last-of-type
3. p:only-of-type 
4. nth-child(2)
5. :enabled  
6. :disabled

##### 66 ajax简介
> 通过异步模式，提升了用户体验，局部的刷新页面数据，减少带宽，提升性能。
> ajax在客户端运行承担了一部分本由服务器承担的工作，减少了大用户量的服务器负载
>   
> 最大特点是实现异步通信，实现页面的局部刷新，带来更号的用户体验，按需获取数据，节省带
> 宽资源
>  
> 缺点： ajax 不支持浏览器的back按钮
> 安全问题 ajax 暴漏客户端和服务器的交互细节
> 破坏了程序的异常机制
>  
>  post get 区别
>  get: 一般进行查询操作，url地址长度限制，请求的参数暴漏在url地址中，中文参数，需要
>  进行编码操作，安全性低
>  post: 请求主要进行提交数据，没有数据长度的限制，提交的信息数据内容存在http求情提中
>  数据不会暴漏在url地址中。

##### 67 URL页面输入到结束
1. url会有一个单独的线程来处理这个请求， 同时在远程的DNS解析，浏览器获取这个请求的对应IP
2. 浏览器和远程的服务器进行三次握手是TCP建立TCP/IP链接，
3. TCP/IP连接完成，浏览器会向服务器发送 HTTP请求
4. 此时，web服务器提供资源服务，客户端开始下载资源

##### 68 ul ，点击现实对应的index
```
    // 方法一
    var lis = document.getElementById("demo").getElemntByTagName("li");
    for(var i=0; i<3; i++) {
        lis[i].index = i;
        lis[i].onclick = function() {
            alert(this.index);
        }
    }  
    //方法二 闭包
    var lis = document.getElementById("demo").getElemntByTagName("li");
    for(var i=0;i<3;i++) {
        lis[i].index = i;
        lis[i].onclick = (function(){
            return function() {
                alert(a);
            }
        })(i)
    }
```

##### 69 对作用域上下文 和this 的理解
```
    var Foo =  {
        hotD: 1;
        getHotD: function(){
            return this.hotD;
        }
    }
    console.log(Foo.getHotD()); //1
    var func = Foo.getHotD;
    console.log(func());// undefined

    func （this）是在window 的上下文中被执行，所以访问不到count属性

    继续追问确保Foo 总能被访问，bind 方法的使用   
    var func = Foo.getHotD().bind(User);
```
##### 70 javascript 作用域链
> 理解变量和函数的访问防卫和生命周期，全局作用域与局部作用域，JavaScript没有块级作用域
> 嵌套的层次形成作用域链。

##### 71 new 操作符具体做了什么
1. 创建一个空对象，并且this 变量引用改变量，同事还继承了该函数的原型，
2. 属性和方法，加入到this 引用对象中
3. 新建的对象由this 所英气，并且最后隐的 return this

##### 71模块化
1. 浏览器端是requireJS seaJS ；
2. 服务端 nodejs ES6模块化 fis webpack 
3. grunt gulp 

##### 72 AMD CMD 
1. requireJS
2. seaJS
> 对于依赖的模块： AMD提前依赖，CMD是延迟执行，
> CMD推崇依赖就近，AMD推崇依赖前置
> AMD 的API默认一个当多个用，CMD 的API是 API严格分明

##### 73 es6 的类class 继承写法
```
    class A {
        construtor (x,y) {
            this.x = x;
            this.y = y;
        }
        toString(){
            return '('+this.x +'+this.y+'+'')';
        }
    }
```

##### 74call apply 含义和区别
> apply 的参数是数组的形式，call 的参数是单个的值，除此之外没由差别，重理解着两个函数
> 调用的this 的改变

##### 75JavaScript 中的作用域 变量声明和提升
> 理解JavaScript的预解析机制, js 的运行主要分两个阶段，js的预解析和运行，预解析阶段所有的变量声明和函数定义都会提前，但是变量的复制不贵提前
> 

##### 76javascript 对象的集中创建方式
1. 工厂模式
2. 构造函数模式
3. 混合构建函数和原型模式
4. 动态原型模式
5. 寄生构造函数模式

##### 77JavaScript继承的6中方法
1. 原型链继承
2. 借用构造函数继承
3. 组合继承
4. 原型式继承
5. 寄生式继承
6. 寄生组合式继承

##### 78 JavaScript 原型，原型链？
1. 原型对象也是普通的对象，是对象就自带隐式的 __proto__ 属性 -> 现实原型prototype，原型对象也是对象，是对象就由__proto__ 属性，直到 Object ->null
2. 原型链是由用来继承和共享属性的对象组成的对象链

##### 79 sass less
> 都是动态的样式语言，是css 与处理器，css伤 的一个抽象层。他们是一种特苏的语法/
> 语言而编译成css. 
> 
> 变量不一样，sass@ less$ 
> sass 支持条件语句，可以使用if(){}else{} for(){} 循环事件，而less不支持
> sass 是基于ruby的，是在服务端 = =
 
##### 80  jQuery 问题
1. jQuery.fn 的init 方法返回的this 指的是声明对象。this执行的init 构造函数自身，其实就是是jQuery实力对象，返回this 是为了实现jQuery的连实操作
2. jquery 中如何将数组转化为json 字符串，然后再转化 $.parseJSON('{"name": "json"}')JSON.stringify
3. jquery.extend juery.fn.extend （前者依赖拓展Jquery对象本身，jquery.fn.extend是依赖拓展Jquery实例）
4. jq Zepto  {jQ 主要用与PC端，当然有对应的JqUERYmobile用于移动端，zepto 比 jq更小巧 主要用于移动端，jquerymobile 对于zepto功能强大，但是提及更强大， zepto非常庞大}

##### 81 NODE
> 优点: node 是基于事件驱动和非阻塞的，所以非常适合处理并发请求，
> 缺点 : 新开的项目，变化大，不太稳定，缺少更多的第三方库的支持。
