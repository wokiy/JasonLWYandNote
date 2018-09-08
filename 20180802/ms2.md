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




2. 构建兼容主流浏览器的页面
3. 熟悉JavaScript（js三座大山： {原型，原型链，闭包，作用域，异步单线程}）
4. 前端性能能
5. css(预处理器： sass less)
6. 前端工程化 组件化 
7. git /svn
8. github