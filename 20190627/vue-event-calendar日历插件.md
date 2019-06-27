## vue-event-calendar是一款简单小巧的事件日历组件，针对Vue2开发。样式美观，且响应式。

> 1: 依赖 vue : 2.0.0 。


### 使用方法

> 2: npm install vue-event-calendar

##### 入口Main.js

```
import 'vue-event-calendar/dist/style.css' //1.1.10之后的版本，css被放在了单独的文件中，方便替换
import vueEventCalendar from 'vue-event-calendar'
Vue.use(vueEventCalendar, {locale: 'en'}) //可以设置语言，支持中文和英文
```

```
<template>
  <vue-event-calendar :events="demoEvents" @monthChanged="" @dayChanged=""></vue-event-calendar>
</template>

<script>
export default {
  data () {
    return {
      demoEvents: [{
        date: '2016/12/15',
        title: 'eat',
        desc: 'longlonglong description'
      },{
        date: '2016/11/12',
        title: 'this is a title'
      }]
    }
  },
  methods: {
    monthChange (month) {
      console.log(month)
    },
    dayChange (day) {
      console.log(day)
    }
  }
}
</script>
```


#### 自定义事件模版（可以允许你展示更多信息）

> vue-event-calendar允许自定义事件模版，但是这个功能需要Vue 2.1.0版本以上才可以使用。原因是我试用了2.1.0以上才有的新功能作用域插槽(Scoped Slots)


```
<template>
  <vue-event-calendar :events="demoEvents">
      <template scope="props">
        <div v-for="(event, index) in props.showEvents" class="event-item">
          <!-- 这里拿到的是传入的单个event所有数据 -->
          {{event}}
        </div>
      </template>
    </vue-event-calendar>
</template>

<script>
export default {
  data () {
    return {
      demoEvents: [{
        date: '2016/12/15',
        title: 'eat',
        desc: 'longlonglong description'
      },{
        date: '2016/11/12',
        title: 'this is a title'
      }]
    }
  }
}
</script>
```

#### 组件事件

> 可以监听的事件有两个，选择了哪天和当月是哪月，当发生改变时，会触发监听函数。函数中的回调参数为改变后的日期

```
<template>
  <vue-event-calendar
    :events="demoEvents"
    @day-changed="handleDayChanged"
    @month-changed="handleMonthChanged">
  </vue-event-calendar>
</template>
```

#### Options(配置选项)

```
// 当 Vue.use时, 可以设置的参数
  {
    locale: 'en',
    color: 'black', //Set main color
    className: 'Custom className for current clicked date', // (default: 'selected-day')
    weekStartOn: 'week Start on which day'  // Can be: 1, 2, 3, 4, 5, 6, 0 (default: 0)
  }
```

#### API 

1. 下个月： this.$EventCalendar.nextMonth()
2. 上个月： this.$EventCalendar.preMonth()
3. 到指定日期： this.$EventCalendar.toDate('2016/11/12')







