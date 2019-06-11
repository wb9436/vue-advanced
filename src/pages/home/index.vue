<template>
  <tab-bar-view :current-index="0">
    <div class="btn" @click="onClick">点击了</div>
  </tab-bar-view>
</template>

<script>
  import TabBarView from '../../components/TabBarView/index'

  export default {
    name: 'Home',
    components: {
      TabBarView
    },
    data () {
      return {

      }
    },
    methods: {
      onClick () {
        console.log('点击了')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./index";
</style>
