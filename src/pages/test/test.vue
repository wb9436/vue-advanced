<template>
  <div class="page">
    <div class="btn" @click="onOpenAddressView">{{address}}</div>

    <address-view :address="address" :is-opened="isOpened" @onCancel="onCloseAddressView" />
  </div>
</template>

<script>
  import AddressView from '../../components/AddressView/index'

  export default {
    name: 'Test',
    components: {
      AddressView
    },
    data () {
      return {
        address: '上海市 上海市 上海市',
        isOpened: false
      }
    },
    methods: {
      onOpenAddressView () {
        this.address = '四川省 宜宾市 宜宾市'
        this.isOpened = true
      },
      onCloseAddressView () {
        this.isOpened = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./index";
</style>
