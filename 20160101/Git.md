## Git工作流
> git 只有一个主分支的情况.在上面直接协同开发(类似svn主干上开发)
 
![工作流](https://dn-coding-net-production-pp.qbox.me/feebbee4-43de-487d-bedb-cc12a1e7c91e.png)

##### 流程特点 [快速简单] 适用个人和小型团队，维护一个app博客等网站
 - 团队人数少
 - 开发不是很繁琐
 - 团队沟通方便
 - 不需要维护多个版本
 
##### 工作流 Fork-Workflow
![Fork](https://dn-coding-net-production-pp.qbox.me/0d3c05db-1ee9-430b-973e-f370ccd0b97e.png) 

开源软件的典型流模型,Github典型代表，参与者fork开源项目到自己仓库，贡献代码，在pull Request 给原项目，都维护自己的项目，pull联系之前的原项目

 - 常用于开源软件
 - 开发者有需要衍生出自己的衍生版的
 - 开发者不固定，可能是任意一个网友
 
##### Feature Branch Workflow
流程如：
> 这套流程属于 Git-Flow 的简化版，不再需要安装额外 Git 插件，基于代码托管平台提供的一些基础功能来实现，主要流程分 Feature 流程和 Bug 流程。这个流程是   适用于大多数团队人数在 5 人以上，有很多并行开发需求，切更新频繁，开发任务重的协作团队。其适用场景是

![流程图](https://dn-coding-net-production-pp.qbox.me/a60eb8f5-330d-4c2f-a347-ac47dba0e440.png)

- 开发团队相对固定，而且有一定规模
- 常常有多个功能，多个问题并行开发
- 对代码审查有较高要求
- 更注重团队效率


