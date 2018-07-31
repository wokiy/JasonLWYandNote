## 模块化简介
1. 模块化
2. 模块
3. 定义模块的方式
4. commonjs规定
5. requires(AMD)
6. seajs(CMD)

### 模块化
> 在JavaScript发展初期就是为了实现简单的⻚⾯交互逻辑，寥寥数语即可，随着技术的发展， 
> uery等前端库层出不穷，前端代码⽇益膨胀。这时候JavaScript作为嵌⼊式的脚本语⾔的定位动
> 摇了，JavaScript却没有为组织.代码提供任何明显帮助，甚⾄没有类的概念，更不⽤说模块（ 
>  module）了，JavaScript极其简单的代码组织规.范不⾜以驾驭如此庞⼤规模的代码。JavaScr
>  ipt在设计时定位原因，没有提供类似的功能，开发者需要模拟出类.似的功能，来隔离、组织复
>  杂的JavaScript代码，我们称为模块化。
> 

### 模块
>⼀个模块就是实现特定功能的⽂件，有了模块，我们就可以更⽅便地使⽤别⼈的代码，想要什么功能，就加载
什么模块。模块开发需要遵循⼀定的规范，各⾏其是就都乱套了
模块就是实现特定功能的⼀组⽅法。
只要把不同的函数（以及记录状态的变量）简单地放在⼀起，就算是⼀个模块。

```
    function nn(){
        //
    }
    function mm(){
        //
    }
    <!-- 污染了全局变量 --> 无法保证不和其他模块的变量名冲突。而且模块成员之间看不出直接关系
```

### 对象 写法
> 解决上面的缺点，可以把模块成一个对象。所有的模块成员都放在这个对象里面

```
    var myModule = {
        d1:1,
        d2:2,
        fn1: function (){
            //
        },
        fn2: function() {
            //
        }
    }
    <!-- 避免了变量污染。只要保证模块名即可，同时模块内成员的关系,外部可以随意修改内部成员 -->
```

#### 立即执行函数
可以通过立即函数，来达到隐藏细节的目的

```
    var myModule = (function(){
        var d1 = 1;
        var d2 = 2;
        function fn1(){};
        function fn2(){};
        retrun {
            fn1: fn1,
            fn2: fn2
        };
    })()
    <!-- myModule 就是javascript 模块的基本写法 -->
```

#### 放大模式
> 如果⼀个模块很⼤，必须分成⼏个部分，或者⼀个模块需要继承另⼀个模块，这时就有必要采⽤”
> 放⼤模式”

```
    （ augmentation）。
        var module1 = (function (mod){
        mod.m3 = function () {
        //...
        };
        return mod;
    })(module1); 

```

#### 输入全局变量
> 独立性是模块的重要特点，模块内部最好不要其他程序直接交互。为了在魔魁啊内部调用全局变量
> 必须显示将其他变量输入模块

```
    var module1 = (function($){
            //......
        })(jQuery)
```

#### CommonJS 简介
> 我们先从CommonJS谈起，因为在⽹⻚端没有模块化编程只是⻚⾯JavaScript逻辑复杂，但也可
> 以⼯作下去，在服务器端却⼀定要有模块，所以虽然JavaScript在web端发展这么多年，第⼀个
> 流⾏的模块化规范却由服务器端的JavaScript应⽤带来，CommonJS规范是由NodeJS发扬光⼤，
> 这标志着JavaScript模块化编程正式登上舞台

##### CommonJS
1. 定义模块
> 根据CommonJS 规范。一个单独的文件就是一个模块。每一个模块都是一个单独的作用域。也就是
> 说，在改模块内部的变量，无法被其他模块读取，除非定义为global对象的属性。    
2. 模块输出
> 模块只有一个出口，module.exports对象，我们需要把模块输出的内容放在该对象内。

3. 加载模块
> 加载模块使用 require方法，改方法读取一个文件，并执行，返回文件的内部的 
> module.exports 对象

```
    //demo 
    var name = 'jasonlwy';
    function printName(){
    console.log(name);
    }
    function printFullName(firstName){
    console.log(firstName + name);
    }
    module.exports = {
    printName: printName,
    printFullName: printFullName
    }
    //加载模块
    var nameModule = require('./myModel.js');
    nameModule.printName(); 

```

### AMD 
> AMD 异步模块定义的意思。浏览器端模块开发的规范，由于不是JavaScript原⽣⽀持，使⽤AMD
> 规范进⾏⻚⾯开发需要⽤到对应的库函数，也就是⼤名鼎鼎RequireJS。实际上AMD,是requireJS
> 在推广过程中规范产出的。

#### requireJS
> requireJS解决了两个问题
1. 实现js文件的异步加载，避免网页失去响应
2. 管理模块之间的依赖性，便于代码的编写我维护

###### requireJS 的加载
1. 引入
```
    <script src="js/require.js" data-main=“js/main"></script>
    data-main属性的作⽤是，指定⽹⻚程序的主模块。在上例中，就是js⽬录下⾯的main.js，这个⽂件会第⼀个被
    require.js加载。由于require.js默认的⽂件后缀名是js，所以可以把main.js简写成main。

```
2. 主模块的写法
```
    main.js，我把它称为”主模块”，意思是整个⽹⻚的⼊⼝代码
    require(['moduleA', 'moduleB', 'moduleC'], function (moduleA, moduleB, moduleC){
    // some code here
    }); 

```

3. 模块加载
```
    require.config({
    baseUrl: "js/lib",
    paths: {
    "jquery": "jquery.min",
    "underscore": "underscore.min"
    }
    });

```

4. 模块的写法

``` 
    define(function (){
    var add = function (x,y){
         return x+y;
    };
    return {
        add: add
     };
    }) ; 

```

#### AMD 和 CMD的区别
> 模块定义时对依赖的处理不同
1. AMD推崇依赖前置，在定义模块的时候就要声明其依赖的模块
2. CMD推崇就近依赖，只有在⽤到某个模块的时候再去require 
