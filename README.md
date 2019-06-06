# Vue 进阶学习

## 一、vue的生命周期
```
beforeCreate （创建前）vue实例的挂载元素$el和数据对象 data都是undefined, 还未初始化
created (创建后) 完成了 data数据初始化, el还未初始化
beforeMount (载入前) vue实例的$el和data都初始化了, 相关的render函数首次被调用。
    实例已完成以下的配置：编译模板，把data里面的数据和模板生成html。
    注意此时还没有挂载html到页面上。
mounted (载入后) 在el 被新创建的 vm.$el替换，并挂载到实例上去之后调用。
    实例已完成以下的配置：用上面编译好的html内容替换el属性指向的DOM对象。
    完成模板中的html渲染到html页面中。此过程中进行ajax交互
beforeUpdate (更新前) 在数据更新之前调用，发生在虚拟DOM重新渲染和打补丁之前。
    可以在该钩子中进一步地更改状态，不会触发附加的重渲染过程。
updated （更新后） 在由于数据更改导致的虚拟DOM重新渲染和打补丁之后调用。
    调用时，组件DOM已经更新，所以可以执行依赖于DOM的操作。
    然而在大多数情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环。
    该钩子在服务器端渲染期间不被调用。
beforeDestroy  (销毁前） 在实例销毁之前调用。实例仍然完全可用。
destroyed (销毁后） 在实例销毁之后调用。
    调用后，所有的事件监听器会被移除，所有的子实例也会被销毁。
    该钩子在服务器端渲染期间不被调用。
```

## 二、vue2.x使用scss开发入门
#### 1.安装依赖
```
npm install node-sass sass-loader --save-dev

npm install style-loader css-loader --save-dev

npm install cssnano css-loader --save-dev
```
#### 2.optimize-css-assets-webpack-plugin版本降至2.0.0
```
npm i optimize-css-assets-webpack-plugin@2 --save
```

## 三、页面设置title
```
const router = new Router({
  mode: 'history', // history 模式时，URL 就像正常的 url
  routes: [
    {
      path: '/',
      name: 'Hello World',
      component: HelloWorld
    },
    {
      path: '/index',
      name: '首页',
      component: Index
    },
    {
      path: '/lifeCycle',
      name: '测试vue生命周期',
      component: LifeCycle
    }
  ]
})
// 设置页面标题
router.beforeEach((to, from, next) => { // beforeEach是router的钩子函数，在进入路由前执行
  if (to.name) { // 判断是否有标题
    document.title = to.name
  }
  next() // 执行进入路由，如果不写就不会进入目标页
})
```

## 四、Vue的methods对象里面如果使用箭头函数会导致this指向的不是vue实例

## 五、this.$router传递参数方式
#### 1.第一种 query要用path来引入,接收参数都是this.$route.query.name。query类似于ajax中get传参，即在浏览器地址栏中显示参数。
```
传递参数  -- this.$router.push({path: ' 路由 ', query: {key: value}})

参数取值  -- this.$route.query.key
``` 
#### 2.第二种 params要用name来引入，接收参数都是this.$route.params.name。params则类似于post，即在浏览器地址栏中不显示参数。
```
传递参数  -- this.$router.push({name: ' 路由的name ', params: {key: value}})

参数取值  -- this.$route.params.key
```
#### 3.第三种 类似rest方式传参,接收参数都是this.$route.params.name。
```
路由配置  -- { path: '/describe/:key', name: 'Describe', component: Describe }

传递参数  -- this.$router.push({path: ` 路由 ${key}`})

参数取值  -- this.$route.params.key
```

## 六、Vue尺寸自适应屏幕尺寸
#### 1.添加postcss-pxtorem依赖 `npm install postcss-pxtorem --save-dev`
#### 2.添加.postcssrc.js配置
```
module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    // 添加postcss-pxtorem配置
    "postcss-pxtorem": {
      rootValue: 32, // 根元素字体大小 对应16px 适配移动端750px宽度
      unitPrecision: 5, // 允许REM单位增长的十进制数
      propList: ['*'], // 可以从px更改为rem的属性
      selectorBlackList: [], // 要忽略的选择器并保留为px
      replace: true, // 替换包含rems的规则，而不是添加回退
      mediaQuery: false, // 允许在媒体查询中转换px
      minPixelValue: 0 // 设置要替换的最小像素值
    }
  }
}
```
#### 3.main.js中添加监听屏幕尺寸变化,并调整根元素字体大小
```
//全局宽度适配调整
const baseSize = 32
function setRem () {
  const scale = document.documentElement.clientWidth / 750
  document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
}
setRem()
window.onresize = function () { // onresize 事件会在窗口或框架被调整大小时发生。
  setRem()
}
```
#### 4.Css使用calc函数计算尺寸
```
@mixin calcHeight($h) { //计算高度
  height: calc(100vh - #{$h});
}
```

## 七、容器Scroll相关
#### 1.获取滚动距离
```
@scroll="onScroll"

onScroll (e) {
  console.log(e.target.scrollTop)
}
```
#### 2.设置滚动距离
```
this.$el.querySelector('.content').scrollTop = 0
```

## 八、动态Css设置
```
方式一：
  :class="hasFooter ? 'content scroll-container' : 'content content-all scroll-container' "
方式二：
  :class="{'footer': hasFooter, 'hidden': !hasFooter}"
```
