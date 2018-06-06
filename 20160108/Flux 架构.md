## Flux 架构入门教程
> Flux架构思想, MVC类似的东西,但是更加简单和清晰/Flux存在多种实现（至少15种)

### Flux 基本概念
 - View: 视图层
 - Action（动作): 视图层发出的消息
 - Dispatcher(派发器)： 用来接收action 执行回调函数
 - Store(仓库数据层)： 原来存放应用的状态，一旦发生变动，就提醒Views要更新界面
 
 ![](http://www.ruanyifeng.com/blogimg/asset/2016/bg2016011503.png)
 
- Flux 的最大特点，就是数据的"单向流动" 

 1. 用户访问View
 2. View 发出用户的Action
 3. Dispatcher收到Action,要求Store仓库数据更新
 4. Store仓库数据更新，发出change事件
 5. View 收到‘change’事件后，更新页面
 
- 上面过程中，数据总是"单向流动"，任何相邻的部分都不会发生数据的"双向流动"。这保证了流程的清晰
- index.jsx

```
  var React = require('react');
  var ReactDom = require('react-dom');
  var MyButtonController = require('./components/MyButtonCtronller');
  
  ReactDom.render(
   <MyButtonCtronller/>,
   document.querySelector('#example')
  );
  
  
```

   


  
