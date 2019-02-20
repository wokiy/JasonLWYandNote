// 新数据结构 set （存储数据的结构 计算机的某种格式和约定）
//Set 本身是一个构造函数  原来生成数据结构

const s = new Set();
[1,55144,55,24,55].forEach(x => s.add(x));//无法添加重复的值

for(let i of s) {
	console.log('下标'+i);
}

// set数据结构 ： 

const demo  = new Set([2,33,1,22,33,441,1]);

[...denmo]//解构赋值

const demo2  = new Set([3,4,1,2,44,555,6]);

demo2.size;

