<template>
  <div class="page">
    <div :class="hasFooter ? 'content scroll-container' : 'content content-all scroll-container' " @scroll="onScroll">
      <div class="scroll-content">
        <div class="page-btn" v-if="hasFooter" @click="hiddenFooter">隐藏Footer</div>
        <div class="page-btn" v-if="!hasFooter" @click="showFooter">显示Footer</div>
        <div class="page-btn-bottom" v-if="!hasFooter" @click="setScrollTop">设置滚动ScrollTop</div>
      </div>
    </div>
    <div :class="{'footer': hasFooter, 'hidden': !hasFooter}"></div>
  </div>
</template>

<script>
  export default {
    name: 'HeightLayout',
    data () {
      return {
        msg: '测试高度分块布局',
        hasFooter: true
      }
    },
    created () {
      // window.addEventListener('scroll', this.onScroll)
      console.log(document.documentElement.clientWidth, document.documentElement.clientHeight)
      console.log(this)
    },
    methods: {
      onScroll (e) {
        console.log(e.target.scrollTop)
      },
      hiddenFooter () {
        this.hasFooter = false
      },
      showFooter () {
        this.hasFooter = true
      },
      setScrollTop () {
        this.$el.querySelector('.content').scrollTop = 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./heightLayout";
</style>
