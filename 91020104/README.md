## 浅谈Normalize.css
> reset 太暴力了，这个 normalize 相对要温柔很多

```
Normalize.css只是一个很小的css文件，
但它在默认的HTML元素样式上提供了跨浏览器的高度一致性。
相比于传统的css reset，Normalize.css是一种现代的，为HTML5准备的优质替代方案。
Normalize.css现在已经被用于Twitter Bootstrap，HTML5 Boilerplate，GOV.UK，Rdio，
CSS Tricks以及许许多多其他的框架，工具和网站上。
```


### 目的
    1.保护有用的浏览器默认样式而不是完全去掉它们
    2.一般化的样式：为大部分HTML元素提供
    3.修复浏览器自身的bug并保证各浏览器的一致性
    4.优化CSS可用性：用一些小技巧
    5.解释代码：用注释和详细的文档来
    
    
###优势
###### Normalize.css保护了有价值的默认值
###### Normalize.css修复了浏览器的bug
###### Normalize.css不会让你的调试工具变得杂乱
###### Normalize.css是模块化的
###### Normalize.css拥有详细的文档
###### 如何使用Normalize.css
```
首先，安装或从Github下载Normalize.css，接下来有两种主要途径去使用它。
-策略一：将Normalize.css作为你自己项目的基础CSS，自定义样式值以满足设计师的需求。
-策略二：引入Normalize.css源码并在从基础上构建，在必要的时候用到你自己写的CSS覆盖默认值
```

         


