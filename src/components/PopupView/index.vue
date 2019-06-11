<template>
  <div :class="isOpened ? 'popup-view' : 'popup-view popup-view--closed'" @touchmove="handleTouchMove">
    <div class='popup-view__container'>
      <div class='popup-view__body'>
        <div class='popup-view__content'>
          <slot></slot>
        </div>
        <div class='popup-view__btn-close'>
          <img class='popup-view__btn-close--icon' src="../../assets/images/public/close-btn.png" @click="handleClose"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PopupView',
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
  @import "./index";
</style>
