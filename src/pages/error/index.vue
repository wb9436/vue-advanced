<template>
  <div>
    {{message}}
  </div>
</template>

<script>
  export default {
    name: 'Error',
    data: function () {
      return {
        message: '页面数据异常'
      }
    }
  }
</script>

<style scoped>

</style>
