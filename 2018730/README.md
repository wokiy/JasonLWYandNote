## 前端总结
#### HTML 
* HTML常见元素和理解
* HTML版本
* HTML元素分类
* HTML元素潜逃关系
* HTML元素默认样式和定制化

##### 常见元素
* meta
* title
* style 
* link 
* script
* base

```
	<!-- 布局类 -->
	div/section /acrticle/aside/header/footer

	<!-- 段落类 -->
	p 
	span/em/strong

	<!-- 表单类 -->
	table/thead/tbody/tr/td
	
	<!-- 有序无序列表 -->
	ul/ol/li/dl/dt/dd

	a

	form /input/ select /textarea/button
```

1. meta 
```
 <!--meta charset="utf-8"  -->
	
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" />		
```

## 常用布局方法
1. table 表格布局
2. float 浮动 + margin 
3. inline-block布局
4. flexbox布局

#### 盒模型
1. margin
2. border
3. padding 
4. content {width - height}

#### 定位 position
1. static 
2. absolute //脱离文档流
3. fixed // 脱离文档流
4. relative

#### flexbox布局
> 父级元素 + parent {
> 	display: flex;
> }
> 子元素 children{
> 	flex: 1;//一份
> }

#### float + margin布局
> float布局本来就是为了实现图文混排的。脱离文档流，不脱离文本流。
> float 对自身的影响
> BFC: 形成一个块(BFC).宽高自己决定
> 尽量靠上
> 尽量靠左
> 
> 对兄弟元素的影响
> .....
> 对父级元素的影响
> 从布局上消失
> 高度塌陷

###### 清除浮动
```
	让盒子负责自己的布局
	<!-- 清除浮动 -->
	//方式一
	.demo::after {
		content:'';
		clear: both;
		display: block;
		visibility: hidden;
		height:0;
	}
	//方式2
	overflow:hidden(auto)
	
```

#### 三列布局
```
	.wrap{
		width: 900px;
		height: 200px;
	}
	.left{
		background: red;
		float:left;
		widht:200px;
		height:100%;
	}
	.right {
		background: yello;
		float:right;
		widht:200px;
		height:100%;
	}
	.middle {
		margin-left: 200px;
		margin-right: 200px;
	}

	<!-- 伪代码 注意middle 中间代码位置放最后，因为浮动的元素尽量向上靠 -->
	div class="wrap"
		div class="left"
			left 
		div class= "right"
			right
		div class= "middle"
			middle
		.......		

```

#### inline-block 布局
> inline-block 像文本一样去拍块级元素

#### 响应式布局 流媒体


