## z-index
> HTML文档中的元素却是存在于三个维度之中。除了大家熟知的平面画布中的x轴和y轴，还有控制第三维度的z轴.margin, float, offset 这些属性,控制着元素在X 和Y   轴表现.z-index 控制在Z轴上的属性

### z-index 属性
  - 当前元素的堆叠顺序
  - 当前元素是否建立新的堆叠上下文
  
> 该属性仅仅适用于定位的元素， 即relative ,absolute ,fixed ,属性的position元素.

z-index三个可能值
| 值 | 描述 |
| ---- | ---------------- |
| auto | 默认，堆叠顺序和父级相同 |
| <interger> | 设置元素的堆叠顺序 |
| inherit |规定应该从父级元素继承z-index属性的值 |
  
> 堆叠顺序是当前元素位于z轴上的值。数值越大表明元素的堆叠顺序越高，越靠近屏幕如果未指定 z-index 的属性，元素的堆叠顺序基于它所在的文档树。默认情况下，   文档中后来声明的元素具有更高的堆叠顺序。

![层级](http://www.w3cplus.com//sites/default/files/blogs/2015/1512/z-index-2.png)  
  
> 当父级的堆叠顺序被设置，这意味着，，它的的子元素堆叠顺序不能高于或低于这一顺序，（相对父级的堆叠上下文）

- .bar 的z-index 值高于 baz 。因为在堆叠上下文 1 中,.bar不能高于堆叠顺序 1 

![元素堆叠上下文](http://www.w3cplus.com//sites/default/files/blogs/2015/1512/z-index-4.png)



