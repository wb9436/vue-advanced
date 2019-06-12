<template>
  <tab-bar-view :current-index="1">
  </tab-bar-view>
</template>

<script>
  import TabBarView from '../../components/TabBarView/index'

  export default {
    name: 'Mine',
    components: {
      TabBarView
    },
    data () {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  @import "./index";
</style>
