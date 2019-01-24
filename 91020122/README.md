# js 九个方法实践
1.async/await
```
JavaScript 极速发展的今天，回调地狱所产生的问题已不复存在。
实际开发过程中我们应当尽量避免使用回调函数，除非为了遵守代码库规则或是维护性能。
而解决回调地狱的一个常用方法为 Promise，但在代码量较多时使用会适得其反。
于是提出了 async / await，使代码结构更加清晰明了，便于阅读和维护。
一般而言，可以 await 任何 Promise 以防止正使用的库的返回值为 Promise 
也就是说 async/await 是 Promise 的语法糖，而且使用方法也十分简单：在函数前加 async。下面是一个简单的例子

async function demo(){
    const result = await axios.get('http://www.jasonlwy/service');
    const data = result.data;
    console.log('数据'+data);
    return data; 
}
//async/await 是 ES2017 中引入的，使用时请进行转换
```

2. 异步控制流

``` 
    假设页面上要展示 Pokemon 数据，可以通过 axios 获取它们的详细信息，
    我们所期望的是在得到返回值时立即更新页面中的所有数据，而不是等所有调用完成后才进行更新。
    我们可以使用 for...of 解决上述问题。 首先循环遍历数组，并在每个循环内执行异步代码，当所有调用都成功时跳出循环。
    需要注意的是，这种方法虽然会对性能产生一些影响，但也不乏是一个很好的方法。
    
    
import axios from 'axios'

let myData = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]

async function fetchData(dataSet) {
    for (entry of dataSet) {
        const result = await axios.get(`https://ironhack-pokeapi.herokuapp.com/pokemon/${entry.id}`)
        const newData = result.data
        updateData(newData)
        console.log(myData)
    }
}
function updateData(newData) {
    myData = myData.map(el => {
        if (el.id === newData.id) return newData
        return el
    })
}
fetchData(myData)

```

3.Promise.all

```
    如果想要并行获取所有的 Pokemon，我们可以使用 Promise.all 方法来 await 所有 Promise
    
    
import axios from 'axios'
  
let myData = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]
async function fetchData(dataSet) {
    const pokemonPromises = dataSet.map(entry => {
        return axios.get(`https://ironhack-pokeapi.herokuapp.com/pokemon/${entry.id}`)
    })
    const results = await Promise.all(pokemonPromises)
    results.forEach(result => {
        updateData(result.data)
    })
    console.log(myData)
}
function updateData(newData) {
    myData = myData.map(el => {
        if (el.id === newData.id) return newData
        return el
    })
}
fetchData(myData) 

```

4. 解构赋值 & 默认值

```
    
    const result = axios.get(`https://ironhack-pokeapi.herokuapp.com/pokemon/${entry.id}`)
    const data = result.data
    
    现在有一种更简单的方法来实现它：通过解构赋值的方式从对象或数组中获取一个或多个值：
        const { data } = await axios.get(...)
    重命名变量：
        const { data: newData } = await axios.get(...)
    另一种方法是在解构赋值时指定默认值，这样做可以确保代码不会出现 undefined，也避免手动检查变量的麻烦
    const { id = 5 } = {}
    console.log(id) // 5
    这些方法也可以用于函数参数，例如：
    
    function calculate({ operands = [1, 2], type = 'addition' } = {}) {
        return operands.reduce((acc, val) => {
            switch (type) {
                case 'addition':
                    return acc + val
                case 'subtraction':
                    return acc - val
                case 'multiplication':
                    return acc * val
                case 'division':
                    return acc / val
            }
        }, ['addition', 'subtraction'].includes(type) ? 0 : 1)
    }
    console.log(calculate()) // 3 
    console.log(calculate({ type: 'division' })) // 0.5 
    console.log(calculate({ operands: [2, 3, 4], type: 'multiplication' })) // 24 
    
    

```

















