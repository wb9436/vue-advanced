// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  //0 = off, 1 = warn, 2 = error
  rules: {
    'generator-star-spacing': 2, // 函数定义时括号前面要不要有空格
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': [2, 'never'], // js语句结尾必须使用分号
    'key-spacing': [2, {'beforeColon': false, 'afterColon': true}],//对象字面量中冒号的前后空格
    'space-before-function-paren': [2, 'always'], //函数定义时括号前面要不要有空格
    'jsx-quotes': [2, 'prefer-single'], // 强制在 JSX 属性中一致地使用双引号或单引号
    'quotes': [2, 'single'],
    'indent': 0, //缩进校验
    'padded-blocks': [0, 'never'], //块内行首行尾是否空行
    'no-trailing-spaces': 0, //行尾空格校验
    'spaced-comment': 0, //注释风格不要有空格什么的
    'computed-property-spacing': [2, 'never'], //以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, alway
    'arrow-spacing': [2, {'before': true, 'after': true}], //=>的前/后空格
    'object-curly-spacing': [2, 'always'],//大括号内是否允许不必要的空格
    // 'vue/no-shared-component-data': 0, //// 组件的 data 属性的值必须是一个函数
    'no-multiple-empty-lines':[2, { 'max': 5}] //禁止出现多行空行
  }
}
