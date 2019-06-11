<template>
  <div class="tab-bar-page">
    <!--页面内容-->
    <div class="tab-content mine-page scroll-container" :style="{height: `${contentHeight}px`}">
      <div class="scroll-float-content">
        <div class="btn" @click="onOpenPopup">打开弹窗</div>
      </div>
    </div>
    <!--底部导航栏-->
    <div class="tab-bar" :style="{height: `${tabBarHeight}px`}">
      <tab-bar :current-index="1" />
    </div>
    <!--浮动弹窗-->
    <float-view :is-opened="isOpened" @onClose="onClose">
      <div class="float-content">
        你好啊
      </div>
    </float-view>
  </div>
</template>

<script>
  import TabBar from '../../components/TabBar/index'
  import FloatView from '../../components/FloatView/index'

  export default {
    name: 'Mine',
    components: {
      TabBar,
      FloatView
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./index";
</style>
