## css计算操作
> Window.getComputedStyle()方法返回一个对象，该对象在应用活动样式表并解析这些值可能包含的任何基本计算后报告元素的所有CSS属性的值。
  独的CSS属性值可以通过对象提供的API或通过简单地使用CSS属性名称进行索引来访问
  
```
  <style>
   #elem-container{
     position: absolute;
     left:     100px;
     top:      200px;
     height:   100px;
   }
  </style>

  <div id="elem-container">dummy</div>
  <div id="output"></div>  

  <script>
    function getTheStyle(){
      let elem = document.getElementById("elem-container");
      let theCSSprop = window.getComputedStyle(elem,null).getPropertyValue("height");
      document.getElementById("output").innerHTML = theCSSprop;
     }
    getTheStyle();
  </script>
```
