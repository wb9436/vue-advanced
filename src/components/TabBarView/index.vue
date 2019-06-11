<template>
  <div class="page">
    <!--页面内容-->
    <div class="tab-bar-view scroll-container" :style="{height: `${contentHeight}px`}">
      <slot></slot>
    </div>
    <!--底部导航栏-->
    <div class="tab-bar-container" :style="{height: `${tabBarHeight}px`}">
      <tab-bar :current-index="currentIndex" />
    </div>
  </div>
</template>

<script>
  import TabBar from '../../components/TabBar/index'

  export default {
    name: 'TabBarView',
    components: {
      TabBar
    },
    props: {
      currentIndex: {
        type: Number,
        default: 0
      }
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./index";
</style>
