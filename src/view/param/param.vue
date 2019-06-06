<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
  export default {
    name: 'Param',
    data () {
      return {
        msg: '测试Vue Param传递参数'
      }
    },
    created () {
      this.getParams()
    },
    methods: {
      getParams () {
        console.log('测试Vue Param传递参数', this.$route.params)
      }
    }
  }
</script>

<style scoped>

</style>
