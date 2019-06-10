<template>
  <div class="tab-bar-page">
    <div class="tab-content" :style="{height: `${contentHeight}px`}">

    </div>
    <div class="tab-bar" :style="{height: `${tabBarHeight}px`}">
      <tab-bar :current-index="1" />
    </div>
  </div>
</template>

<script>
  import TabBar from '../../components/tabbar/index'

  export default {
    name: 'Mine',
    components: {
      TabBar
    },
    data () {
      const clientHeight = document.documentElement.clientHeight
      const barHeight = 53
      return {
        contentHeight: clientHeight - barHeight,
        tabBarHeight: barHeight
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
  @import "index";
</style>
