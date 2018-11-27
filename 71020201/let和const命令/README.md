# let and const 命令
#### 基本用法
1. 作用域
```
    {
        let a = 11;
        var b = 1;
    }
    a //refer......a is not defined 'let'所在的代码块内有用
    b // 1
```
2. for循环
```
    for(let i = 0; i<10 ; i++){//......}
    console.log(i);
    // referen......: i is not defined
    // 在循环体外使用 报错  
```
> for 循环中同步异步 

```
    var a = [];
    for(var i= 0;i<10;i++){
        a[i] = function(){
            console.log(i);
        };
    }
    a[6]();//10
    // 同步的for循环优先执行 全局变量i 变为10  再去执行异步的function 输出是10
    var a = [];
    for(let i= 0;i<10;i++){
        a[i] = function(){
            console.log(i);
        };
    }
    a[6]();//6
```

3.
