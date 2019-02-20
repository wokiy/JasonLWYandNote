# 代码千万行 注释第一行 代码不规范 同事两行泪

> 遍历  [ {"a": '1212',......} , {.......}] //{}是json格式 的方法
```
    <script type="text/javascript">
      var json = [
    	 {
    	  "a": "2018-09-07T20:00:00",
    	  "b": 1265.3,
    	  "v": 123432432.9,
    	  "w": "a",
    	  "radius7_quad": {
    	    "nbedddd": 2540,
    	    "sqeff": 3150,
    	    "swww": 3150,
    	    "ndwd": 1350
    	  }, 
    ]
    function jsonlwy( data ) {
    	//遍历数组的每个对	
    	for(var i = 0; i < data.length; i++){
    		//遍历json对象
    		var json1 = data[i];
    		//遍历json对象
    		for(var p in json1){
    		var json2 = json1[p];
    		//打印显示
    		document.write(p + ": "+ json1[p] +'</br>')
      		console.log(p + " " + json1[p]);
    
      			//判断是否是对象 再遍历
    	  		if (typeof json1[p] === "object") {
    	  			//遍历json对象
    	  			for(var q in json2){
    	  				//打印显示
    	  				document.write(q + " : "+ json2[q]+'</br>')
    	  				console.log(q + " "+ json2[q] )	
    	  			}
    	  		}
    		}
     	}
    }
    jasonlwy(json);
     </script>

``` 