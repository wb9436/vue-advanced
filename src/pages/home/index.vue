<template>
  <div class="tab-bar-page">
    <!--页面内容-->
    <div class="tab-content home-page" :style="{height: `${contentHeight}px`}">
      <div class="btn" @click="onOpenPopup">打开幕帘弹窗</div>
    </div>
    <!--底部导航栏-->
    <div class="tab-bar" :style="{height: `${tabBarHeight}px`}">
      <tab-bar :current-index="0" />
    </div>
    <!--幕帘弹窗-->
    <popup-view :is-opened="isOpened" @onClose="onClose">
      <div class="child-btn" @click="onConsoleLog">打印日志</div>
    </popup-view>
  </div>
</template>

<script>
  import TabBar from '../../components/TabBar/index'
  import PopupView from '../../components/PopupView/index'

  export default {
    name: 'Home',
    components: {
      TabBar,
      PopupView
    },
    data () {
      const clientHeight = document.documentElement.clientHeight
      const barHeight = 53
      return {
        contentHeight: clientHeight - barHeight,
        tabBarHeight: barHeight,
        isOpened: false
      }
    },
    created () {
      window.addEventListener('resize', this.resetHeight)
      this.resetHeight()
    },
    methods: {
      resetHeight () {
        this.contentHeight = document.documentElement.clientHeight - this.tabBarHeight
      },
      onOpenPopup () {
        this.isOpened = true
      },
      onClose () {
        this.isOpened = false
      },
      onConsoleLog () {
        console.log('子组件dom元素点击了')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "index";
</style>
