## 门面模式 - Facade
- facade

```
  class modeA{};
	class modeB{};
	//门面设计模式
	class Facade {
		init() {
			modeA.initialize();
			modeB.init();
		}
		run() {
			modeA.start();
			modeB.run ();
		}
	}
```
- modeA 和 modeB 是客户端运行的两个依赖系统，例子中通过 Facade 类做了简单封装，客户端便可以使用少量代码快捷启动两个子系统，
  这里的 Facade 就是两个子系统的门面，客户端跟门面而不会直接与子系统打交道


- 小喜负责的业务增加了一些社交元素，不久之后业务方给小喜提了一个需求，要求在某类文章下方增加一个赞赏按钮，用户点击按钮时
  调用 Z 平台的接口付款，然后将操作记录到后端，最后发送一个统计埋点，需要三天内上线
  
```
  async function payWithZFB() {
		request('interfacce-a');
		//....
	}
  async function addRecord() {};
	async function sendTrack() {};

	async function Zan() {
		 // 调用 Z 平台接口，进行支付操作
	    let record = await payWithZFB();
	    // 调用后端接口，记录日志
          let track = await addRecord(record);
	    // 调用埋点接口，发送埋点信息
	    await sendTrack(track);
	}
	// 小苏在进行团队代码 review 的时候，看到了这个问题，为了减少团队在这一块的开销，他让小喜使用 NodeJS 做了一层封装
      代码变动其实并不大，从客户端调用 HTTP 接口，变成了 Node 调用 HSF 接口：
      
 	class Facade {
		Zan() {
			let record = await payWithZFB();
			let track= await addRecord();
			await sendTrack(track);
		}
	}     
   	//客户端调用
	
	const facade = new Facade();
	facade.zan();

	// Facade 隔离了客户端与三个平台之间的通信，尽管客户端依然还可以跳过 Facade 与平台交流，一般情况下不会这么去做，
    但也不排除这种情况，比如客户端和 Z 平台之间的认证禁止间接进行，那么客户端的调用就会变成：
   
	const facade = new Facade();
	authZFB(function(){
		facade.zan();
	})
```

-  门面模式，要求一个子系统的外部与其内部的通讯必须通过一个统一的对象进行。门面模式提供一个高层次的接口，使得子系统更易于使用。
- 引入门面模块，可以将子系统之间的通信和相互依赖达到最小，从而降低整个系统的复杂度，也很大程度上提高了客户单使用的便捷性，
  客户端无需关系子系统的实现细节，通过门面角色便可以完成功能的调用。
- 门面模式相对复杂的使用方式是，提供抽象的门面类，然后根据配置文件生成具体的门面类，这种模式用的比较广泛，也是值得提倡的。










