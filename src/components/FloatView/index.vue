<template>
  <div :class="isOpened ? 'float-view' : 'float-view float-view--closed'" @touchmove="handleTouchMove">
    <div class='float-view__overlay' @click="handleClose"/>
    <div class='float-view__container'>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FloatView',
    props: {
      isOpened: {
        type: Boolean,
        default: false
      },
      onClose: {
        type: Function
      }
    },
    methods: {
      handleTouchMove (e) {
        e.stopPropagation()
        e.preventDefault()
      },
      handleClose (e) {
        e.stopPropagation()
        this.$emit('onClose')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "index";
</style>
