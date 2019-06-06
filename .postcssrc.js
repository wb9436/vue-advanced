// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    // postcss-pxtorem
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
