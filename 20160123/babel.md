## Babel入门
> Babel 是一个广泛使用的转码器 可以将ES6代码转为ES5代码。从而在现有环境执行，不用担心环境问题

![](http://www.ruanyifeng.com/blogimg/asset/2016/bg2016012501.png)

```
	input.map(item => item+1);
	
	//转码后
	input.map(function(){
		return item+1;
	})

```
- 上面的原始代码用了箭头函数，这个特性还没有得到广泛支持，Babel将其转为普通函数，就能在现有的JavaScript环境执行了

### 配置文件 .babelrc

Babel的配置文件是.babelrc,存放在项目的根目录下。使用babel第一步，就是配置文件。

1. 该文件的基本规则

```
 {	
	"preset": [],
	"plugins": []	
	}
```
presets字段设定转码的规则{如下}

```
# ES2015转码规则
	$ npm install --save-dev babel-preset-es2015
	
	# react转码规则
	$ npm install --save-dev babel-preset-react
	
	# ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个
	$ npm install --save-dev babel-preset-stage-0
	$ npm install --save-dev babel-preset-stage-1
	$ npm install --save-dev babel-preset-stage-2
	$ npm install --save-dev babel-preset-stage-3

```

- 然后，将这些规则加入到.babelrc文件
 
```
  {
    "presets": [
      "es2015",
      "react",
      "stage-2"
    ],
    "plugins": []
  }
```
- 注意，以下所有Babel工具和模块的使用，都必须先写好.babelrc。

### 命令行转码器




	
	
