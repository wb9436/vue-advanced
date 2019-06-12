<template>
  <div class="page index-page">
    <div class="page-btn" @click="clickLifeCycle(1)">测试Vue生命周期</div>
    <div class="page-btn" @click="clickParamTypeTransfer(1)">测试Vue Param传参</div>
    <div class="page-btn" @click="clickQueryTypeTransfer(1)">测试Vue Query传参</div>
    <div class="page-btn" @click="clickRestTypeTransfer(1)">测试Vue Rest传参</div>
    <div class="page-btn" @click="clickLayoutHeight(1)">测试高度分块布局</div>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    data () {
      return {
        msg: '首页'
      }
    },
    created () {
      console.log(this.$store.state.token) //获取不到值
      const { isWeiXin, logInfo, windowHeight, token } = this.$store.state.app
      console.log(isWeiXin, logInfo, windowHeight, token)
    },
    methods: {
      clickLifeCycle (id) {
        this.$router.push({ path: '/lifeCycle', query: { id: id } })
      },
      clickParamTypeTransfer (id) {
        this.$router.push({ name: 'param', params: { id: id } })
      },
      clickQueryTypeTransfer (id) {
        this.$router.push({ path: '/query', query: { id: id } })
      },
      clickRestTypeTransfer (id) {
        this.$router.push({ path: `/rest/${id}` })
      },
      clickLayoutHeight (id) {
        this.$router.push({ path: '/layout/height', query: { id: id } })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "./index";
</style>
