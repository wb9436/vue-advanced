<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
  export default {
    name: 'Query',
    data () {
      return {
        msg: '测试Vue Query传递参数'
      }
    },
    created () {
      this.getParams()
    },
    methods: {
      getParams () {
        console.log('测试Vue Param传递参数', this.$route.query)
      }
    }
  }
</script>

<style scoped>

</style>
