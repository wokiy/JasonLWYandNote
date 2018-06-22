## webpack性能优化
> 如今前端工程化的概念早已经深入人心，选择一款合适的编译和资源管理工具已经成为了所有前端工程中的标配，而在诸多的构建工具中，
  webpack以其丰富的功能和灵活的配置而深受业内吹捧，逐步取代了grunt和gulp成为大多数前端工程实践中的首选，
  React，Vue，Angular等诸多知名项目也都相继选用其作为官方构建工具，极受业内追捧。但是，随者工程开发的复杂程度和代码规模不断地增加，
  webpack暴露出来的各种性能问题也愈发明显，极大的影响着开发过程中的体验

![](https://sfault-image.b0.upaiyun.com/281/059/2810595339-585b9b07eef9a_articlex)

### 历经了多个web项目的实战检验，我们对webapck在构建中逐步暴露出来的性能问题归纳主要有如下几个方面：

1. 代码全量构建速度过慢，即使是很小的改动，也要等待长时间才能查看到更新与编译后的结果（引入HMR热更新后有明显改进）
2. 随着项目业务的复杂度增加，工程模块的体积也会急剧增大，构建后的模块通常要以M为单位计算；
3. 多个项目之间共用基础资源存在重复打包，基础库代码复用率不高；
4. node的单进程实现在耗cpu计算型loader中表现不佳；

> 从项目结构着手，代码组织是否合理，依赖使用是否合理；
  从webpack自身提供的优化手段着手，看看哪些api未做优化配置；
  从webpack自身的不足着手，做有针对性的扩展优化，进一步提升效率；
  
- 在这里我们推荐使用一个wepback的可视化资源分析工具：webpack-bundle-analyzer，
  在webpack构建的时候会自动帮你计算出各个模块在你的项目工程中的依赖与分布情况，方便做更精确的资源依赖和引用的分析。  
  
### 方案一、合理配置 CommonsChunkPlugin

> webpack的资源入口通常是以entry为单元进行编译提取，那么当多entry共存的时候，CommonsChunkPlugin的作用就会发挥出来
  对所有依赖的chunk进行公共部分的提取，但是在这里可能很多人会误认为抽取公共部分指的是能抽取某个代码片段，其实并非如此，它是以module为单位进行提取。
  
1. 假设我们的页面中存在entry1，entry2，entry3三个入口，这些入口中可能都会引用如utils，loadash，fetch等这些通用模块
   那么就可以考虑对这部分的共用部分机提取。通常提取方式有如下四种实现：  
   
##### 1、传入字符串参数，由chunkplugin自动计算提取
```
  new webpack.optimize.CommonsChunkPlugin('common.js')
```
- 这种做法默认会把所有入口节点的公共代码提取出来, 生成一个common.js

##### 2、有选择的提取公共代码
```
  new webpack.optimize.CommonsChunkPlugin('common.js',['entry1','entry2']);
```
- 只提取entry1节点和entry2中的共用部分模块, 生成一个common.js
##### 3、将entry下所有的模块的公共部分（可指定引用次数）提取到一个通用的chunk中
```
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendors',
    minChunks: function (module, count) {
       return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
       )
    }
});
```
- 提取所有node_modules中的模块至vendors中，也可以指定minChunks中的最小引用数；
##### 4、抽取enry中的一些lib抽取到vendors中
```
  entry = {
    vendors: ['fetch', 'loadash']
  };
  new webpack.optimize.CommonsChunkPlugin({
      name: "vendors",
      minChunks: Infinity
  });
```
- 添加一个entry名叫为vendors，并把vendors设置为所需要的资源库，CommonsChunk会自动提取指定库至vendors中。







  
