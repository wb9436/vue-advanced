<template>
  <div class="tab-bar-container">
    <div v-bind:key="index" class="tab-bar-item" v-for="(item, index) in tabBar.list" @click="openTabPage(index, item.pagePath)">
      <img class="tab-bar-icon" v-bind:src="currentIndex === index ? item.selectedIconPath : item.iconPath"/>
      <div class="tab-bar-text" :style="{color: `${currentIndex === index ? tabBar.selectedColor : tabBar.color}`}">
        {{item.text}}
      </div>
    </div>
  </div>
</template>

<script>
  import HomeIcon from '../../assets/images/tabBar/index.png'
  import HomeSelectIcon from '../../assets/images/tabBar/index_select.png'

  import MineIcon from '../../assets/images/tabBar/mine.png'
  import MineSelectIcon from '../../assets/images/tabBar/mine_select.png'

  export default {
    name: 'TabBar',
    props: {
      currentIndex: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        tabBar: {
          color: '#929292',
          selectedColor: '#EE735D',
          backgroundColor: '#ffffff',
          list: [
            {
              pagePath: '/home',
              iconPath: HomeIcon,
              selectedIconPath: HomeSelectIcon,
              text: '首页'
            },
            {
              pagePath: '/mine',
              iconPath: MineIcon,
              selectedIconPath: MineSelectIcon,
              text: '我的'
            }
          ]
        }
      }
    },
    methods: {
      openTabPage(idx, path) {
        this.$router.push({path: path})
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./index";
</style>
