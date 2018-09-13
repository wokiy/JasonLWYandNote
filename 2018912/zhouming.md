## 面经

1. 负责系统的前端框架的代码管理以及网站HTML,js css开发
2. 解决终端浏览器之间的兼容性问题
3. 维护优化产品前端页面的性能，不断的实现更好的交互体验

### 要求

```
任职要求：

1、计算机相关专业大专以上学历，三年以上前端工作经验。

2、精通HTML、CSS、JS、jQuery等技术，熟悉页面架构和布局。

3、熟练使用Vue2框架,了解Angular、React等前端主流MVC/MVVM框架。

4、熟悉webpack等前端自动化构建工具。

5、有良好的代码编写习惯，有良好的自学能力，独立分析和解决问题的能力。

```

#### html5 css js jquery  页面架构和布局

###### html5 十个问题
1. Doctype作用？标准模式与兼容模式各有什么区别?
```
    1.<!DOCTYPE>声明位于位于HTML文档中的第一行，处于<html> 标签之前。告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现

    2. 标准模式的排版和JS运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作
```

2. 行内元素有哪些？块级元素有哪些？空(void)元素有那些？
```
    CSS规范规定，每个元素都有display属性，确定该元素的类型，每个元素都有默认的display值，如div的display默认值为“block”，则为“块级”元素；span默认display属性值为“inline”，是“行内”元素

    1. 行内元素： span img input select Strong 
    2. 块级元素： ol h1-h6 form div p 
    空元素： br hr img link 
```

3. 页面导入样式时，使用link和@import有什么区别？
```
    1. link属于XHTML标签，除了加载CSS外，还能用于定义RSS,定义rel连接属性等作用；而@import是CSS提供的，只能用于加载CSS;
    2. 页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;
    3. import是CSS2.1 提出的，只在IE5以上才能被识别，而link是XHTML标签，无兼容问题
```

4. 介绍一下你对浏览器内核的理解？
```
    渲染引擎-js引擎

    渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核

    js引擎：  解析和执行javascript来实现网页的动态效果。
    最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎。
```

5. 常见的浏览器内核有哪些
```
    Trident内核：IE,MaxThon,TT,The World,360,搜狗浏览器等。[又称MSHTML]

    Gecko内核：Netscape6及以上版本，FF,MozillaSuite/SeaMonkey等

    Presto内核：Opera7及以上。     [Opera内核原为：Presto，现为：Blink;]

    Webkit内核：Safari,Chrome等。   [ Chrome的：Blink（WebKit的分支）]
```

6. html5有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分HTML 和HTML5？

```
     HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。

      绘画 canvas;

      用于媒介回放的 video 和 audio 元素;

      本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失;

     sessionStorage 的数据在浏览器关闭后自动删除;

      语意化更好的内容元素，比如 article、footer、header、nav、section;

      表单控件，calendar、date、time、email、url、search;

      新的技术webworker, websocket, Geolocation;


    IE8/IE7/IE6支持通过document.createElement方法产生的标签，

     可以利用这一特性让这些浏览器支持HTML5新标签，

     浏览器支持新标签后，还需要添加标签默认的样式。
```

7. 简述一下你对HTML语义化的理解
```
    用正确的标签做正确的事情。

    html语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析;

    即使在没有样式CSS情况下也以一种文档格式显示，并且是容易阅读的;

    搜索引擎的爬虫也依赖于HTML标记来确定上下文和各个关键字的权重，利于SEO;

    使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解
```

8. HTML5的离线储存怎么使用，工作原理能不能解释一下？
```
    在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件。

    原理：HTML5的离线存储是基于一个新建的.appcache文件的缓存机制(不是存储技术)，通过这个文件上的解析清单离线存储资源，这些资源就会像cookie一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示
```

9. 请描述一下cookies，sessionStorage和localStorage 的区别？
```
    cookie是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。

cookie数据始终在同源的http请求中携带（即使不需要），记会在浏览器和服务器间来回传递。
sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。
存储大小：
    cookie数据大小不能超过4k。
   sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。

有期时间：
   localStorage    存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；

   sessionStorage  数据在当前浏览器窗口关闭后自动删除。

   cookie          设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭
```

10. 如何实现浏览器内多个标签页之间的通信?
```
WebSocket、SharedWorker；

也可以调用localstorge、cookies等本地存储方式；

localstorge另一个浏览上下文里被添加、修改或删除时，它都会触发一个事件，

我们通过监听事件，控制它的值来进行页面信息通信；

注意quirks：Safari 在无痕模式下设置localstorge值时会抛出QuotaExceededError 的异常；
```


##### css3 十个问题
1. 盒模型
```
    box-sizing: border-box;
    box-sizing: content-box;

    content-box:这是默认样式指定CSS标准。测量width和height属性只包括的内容，但不是border, margin, 或者 padding。
    padding-box:width和height属性包括padding的大小，不包括border和margin
    border-box:width和height属性包括padding和border，但不是margin。这是盒模型的文档时，Internet Explorer使用Quirks模式。
    content-box不包含padding，border-box包含padding。所以如果你设置的大小是一样的，content-box看起来，会比border-box大
```

2. 清除浮动的方法
```
    3、父级div定义伪类：after和zoom
      .clearfloat:after{
            display:block;
            clear:both;
            content:"";
            visibility:hidden;
            height:0
        }
       .clearfloat{zoom:1}
       原理：IE8以上和非IE浏览器才支持:after，原理和方法2有点类似，zoom(IE转有属性)可解决ie6,ie7浮动问题
```

