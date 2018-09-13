# 中检ms要求
#### html 页面的制作 
##### 假设已知高度，完成三栏布局，两边栏，定宽，中间栏自适应宽度
```
    <style>
        .left-right-center {
            height: 400px;
        }
        .layout.float .left{
            float:left;
            width:300px;
            height: 100%;
            background-color:red;
        }
        .layout.float .right{
            float:right;
            width:300px;
            height: 100%;
            background-color:blue;
        }
        .layout.float .center {
            height: 100%;
            background-color:orange;
        }
    </style>
    <!-- 假设已知高度，完成三栏布局，两边栏，定宽，中间栏自适应宽度 -->
    <section class="layout float">
        <!-- 利用浮动解决布局时，center必须在最后。 -->
        <article class="left-right-center">
            <div class="left"></div>
            <div class="right"></div>
            <div class="center">
                <h1>浮动布局</h1>
                1.这是浮动布局解决方案
                2.这是浮动布局解决方案
            </div>
        </article>
    </section>
    <!-- 浮动的缺点是造成元素脱离文档流，如果处理不好后面的元素会坍塌，但是浮动的兼容性比较好。并且容易实现，处理好周边元素的关系，浮动还是很好的选择，也是大部分采取的方案-->

    //2.绝对定位 实现三列布局
    // css
    <style>
        .layout.absolute {
            height: 100px;
        }
        .layout.absolute .left-center-right>div {
            position: absolute;
            height: 100px;
        }
        .layout.absolute .left {
            left: 0;
            width: 300px;
            background-color: red;
        }
        .layout.absolute .center {
            left: 300px;
            right: 300px;
            background-color: pink;
        }
        .layout.absolute  .right  {
            right: 0;
            width: 300px;
            background-color: yellow;
        }
    </style>

    //html dom 
    <section class="layout absolute">
    <article class="left-center-right">
            <div class="left"></div>
                <div class="center">
                    <h1>绝对定位</h1>
                    决定定位
                </div>
            <div class="right"></div>
        </article>
    </section>
     <!-- 绝对定位脱离文档流，而绝对定位以后的元素都脱离文档流，不是整个页面都脱文档流，不建议这么设计 -->
    
    //table 表格布局
    //css
    <style type="text/css">
            .layout.table {
                width: 100%;
                display: table;
            }

            .layout .left-center-right>div {
                display: table-cell;
            }

            .layout .left{
                width: 300px;
                background-color: red;
            }

            .layout .center {
                background-color: orange;
            }

            .layout .right {
                width: 300px;
                background-color: blue;
            }
        </style>
    <section class="layout table">
        <article class="left-center-right">
            <div class="left"></div>
            <div class="center">
                <h1>表格布局</h1>
                1.这是表格布局解决方案
                2.这是表格布局解决方案
            </div>
            <div class="right"></div>
        </article>
    </section>        
    <!-- 表格布局的兼容性是非常的好， 但是表格在有某一块超出设定宽的时候，其他的两块都会随着变化，一直保持着等高的状态，除非设定高度，但是有些情况下我们是不需要等高的。-->

    //flexbox 弹性盒子布局
    <style>
        .layout .left-center-right {
            height: 300px;
            display: flex;
        }
        .layout .left-center-right  .left {
            width: 300px;
            background-color: red;
            height: 100%;
        }
        .layout .left-center-right .center{
            flex: 1;
            height: 100%;
            background-color: blue;
        }
        .layout .left-center-right .right  {
            width: 300px;
            background-color: pink;
            height: 100%;
        }
    </style>
</head>
<body>
    
     <section class="layout flexbox">
        <article class="left-center-right">
            <div class="left"></div>
            <div class="center">
                <h1>flexbox</h1>
                1.这是flexbox布局解决方案
                2.这是flexbox布局解决方案
            </div>
            <div class="right"></div>
        </article>
    </section>
    <!-- flexbox 是相对来说是完美的解决方案，但是兼容性存在问题，css3是新型的布局模式，但是flexbox布局的灵活多变，可以适应不同的浏览器屏幕-->

    //网格实现
    <style>
        .layout.grid .left-center-right {
            display: grid;
            /* 最外层设置为网格模式 */
            width: 100%;
            grid-template-rows: 100px;
            /* 高度 */
            grid-template-columns: 300px auto 300px;
            /* 宽度设置 */
        }
        .layout .left {
            background-color: red;
        }
         .layout .center {
                background-color: orange;
            }

            .layout .right {
                background-color: blue;
            }
    </style>
</head>
<body>
    
    <section class="layout grid">
        <article class="left-center-right">
            <div class="left"></div>
            <div class="center">
                <h1>网格布局</h1>
                1.这是网格布局解决方案
                2.这是网格布局解决方案
            </div>
            <div class="right"></div>
        </article>
    </section>

```

#### 左侧固定右侧自适应
>常用的css布局，尤其是在后台页面当中，使用频繁。

````
    //第一种方法，浮动布局
    <style>
        #aside {
            float: left;
            width: 200px;
            background-color: red;
            height: 700px;
        }
        #content {
            margin-left: 200px;
            background-color: blue;
            height: 700px;
            
        }
    </style>
</head>
<body>
    
    <div id="aside">
        我哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇
    </div>
    <div id="content">
        wsadasdasdasdsadddddddddddddddddddasdasdasd
    </div>
    <!-- 先固定宽度的div 浮动，使其脱离文档流。 margin-left 的值等于固定div的宽度相等 -->
    
//margin 布局

    <style>
        #aside{
    float: left;
    margin-right: -200px;
    width: 200px;
    background-color: red;
}
#content{
    float: right;
}
#content .inner{
    margin-left: 200px;
    background-color: blue;
}
    </style>
</head>
<body>

    <div id="aside">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore provident dolor in voluptatum tempore non, placeat obcaecati totam ut delectus libero excepturi distinctio asperiores odit nobis soluta, esse aspernatur beatae.
</div>
<div id="content">
    <div class="inner">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia labore facere delectus quaerat expedita, tenetur recusandae tempora eos natus suscipit voluptatum necessitatibus soluta voluptates modi ullam. Ab minima similique, illum!
    </div>
</div>
<!-- 
    1. 现实固定宽度的div 脱离文档流
    2. 利用margin 负值可以使用，后面的div 可以和前面的保持同行并行
    3. 给包裹内容的div 加margin-left s可以使得左边的文字不重复
 -->
// fex
<!-- 
    1. 父级设置display: flex;
    2. 弹性的盒子 设置 flex : 1;
    3. 左侧的定宽的 设置宽度即可。
 -->

````

#### 响应式布局
> 优点： 面对不同的分辨率设备， 灵活性强，能够快捷地解决设备现实适应问题。
> 缺点： 兼容各种设备时所需工量大，效率低下，代码累赘，会隐藏无用的元素，加载时间延长，其实是一种折中性的设计方案，由于多面元素影响而达不到效果，在一定程度上改变了网站原有的设计布局结构，会出现用户的混淆。
>

##### 概念
> 响应式布局主要是通过 css3 的media 来根据，浏览器的宽度来起效对应的样式，最常用的是 
> mx-width min-width 来做媒体查询的判断条件， @madia(max-width:760px){....},由于
> 适配到移动端，header  meta name="viewport" content="width=device-width, 
> inital-scale =1". 

```
    .btn {
        width:60px; 
        display:block;
        height:30px;
    }
    @media(min-width) {
        .btn{widht:80px}
    }
    @media(min-width) {
        .btn {widht: 100px}
    }
```

* dom 渲染会增加用户的流量的消耗，推荐使用boostrap 的渲染过程。

###### css3响应式页面的设计流程
1. 确定需要兼容的设备类型，屏幕尺寸 {设备类型： 手机，pc 平板。增加手势功能 屏幕的尺寸手机 设备的等的横竖屏}
2. 制作原型
3. 测试原型
4. 视觉设计
5. 前端实现

#### 移动端布局rem布局的实现
```
    (function(){
            var styleNode = document.createElement("style");
            var width = document.documentElement.clientWidth/16;
            styleNode.innerHTML="html{font-size:"+width+"px!important}";
            document.head.appendChild(styleNode);
    })();

    //less 计算 rem
   less： @rem = 设计稿的尺寸/16rem ;
   sass: $rem: 设计稿的尺寸/16rem;
    html, body {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
```

2. 构建兼容主流浏览器的页面
> 浏览器多种多样，但是是主要: IE 内核 和非IE内核‘
> IE： 内核 360 搜狐， 腾讯
> 非IE内核： firefox opera safari chrome 
> 一般兼容： 问题是考虑在 IE6-8  Firefox5+ safari chrome     

###### 省略号设计
```
    <title>超过现实省略号</title>
    <style>
        .wrap {
            width: 100px;
            margin:0 auto;
            background-color: pink;
        }
        .wrap ul {
            width: 100%;
        }
        .wrap li {
            list-style: none;
            white-space: nowrap;
            width: 60px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    </style>
</head>
<body>
    <div class="wrap">
        <ul>
            <li>asdasdasdasdasdasdasdasdasdasdadasdsa</li>
        </ul>

    </div>
```

3. 熟悉JavaScript（js三座大山： {原型，原型链，闭包，作用域，异步单线程}）
 
4. 前端性能能


5. css(预处理器： sass less)


6. 前端工程化 组件化 


7. git /svn


8. github