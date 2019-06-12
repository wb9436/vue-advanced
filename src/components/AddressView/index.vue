<template>
  <div :class="isOpened ? 'address-layout':'address-layout address-layout--closed'" @touchmove="handleTouchMove">
    <div class='address-layout__overlay' @click="handleCancel"/>
    <div class='address-layout__container'>
      <div class='layout-header'>
        <div class='cancel' @click="handleCancel">取消</div>
        <div class='title'>选择任务地址</div>
        <div class='confirm' @click="handleConfirm">确定</div>
      </div>
      <div class='layout-body'>
        <div class='address-scroll'>
          <div class='area-box'></div>
          <div class='area-container' @scroll="onProScroll" @touchstart="onTouchStart('pro')">
            <div class='area-list'>
              <div :key="index" class='area-item' v-for="(item, index) in pro.district">{{item}}</div>
            </div>
          </div>
          <div class='area-container' @scroll="onCityScroll" @touchstart="onTouchStart('city')">
            <div class='area-list'>
              <div :key="index" class='area-item' v-for="(item, index) in city.district">{{item}}</div>
            </div>
          </div>
          <div class='area-container' @scroll="onAreaScroll" @touchstart="onTouchStart('area')">
            <div class='area-list'>
              <div :key="index" class='area-item' v-for="(item, index) in area.district">{{item}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as DistrictsUtils from './districtInfo'

  export default {
    name: 'AddressView',
    props: {
      isOpened: {
        type: Boolean,
        default: false
      },
      address: {
        type: String,
        default: '上海市 上海市 浦东新区'
      },
      onCancel: {
        type: Function
      },
      onConfirm: {
        type: Function
      }
    },
    data () {
      return {
        pro: {
          district: [],
          ids: [],
          index: 0
        },
        city: {
          district: [],
          ids: [],
          index: 0
        },
        area: {
          district: [],
          ids: [],
          index: 0
        },
        proMove: false,
        cityMove: false,
        areaMove: false
      }
    },
    created () {
      this.handleInitData(this.address)
    },
    watch: {
      address: function (newVal, oldVal) {
        if (newVal && newVal !== oldVal) {
          this.handleInitData(newVal)
        }
      }
    },
    methods: {
      handleTouchMove (e) {
        e.stopPropagation()
        e.preventDefault()
      },
      handleInitData (address) {
        const addArr = address.split(/\s+/)
        const proInfo = DistrictsUtils.province(addArr[0])
        const cityInfo = DistrictsUtils.city(addArr[1], proInfo.ids[proInfo.index])
        const areaInfo = DistrictsUtils.area(addArr[2], proInfo.ids[proInfo.index], cityInfo.ids[cityInfo.index])

        this.pro = proInfo
        this.city = cityInfo
        this.area = areaInfo
      },
      onTouchStart (type) {
        if (type === 'pro') {
          this.proMove = true
          this.cityMove = false
          this.areaMove = false
        } else if (type === 'city') {
          this.proMove = false
          this.cityMove = true
          this.areaMove = false
        } else if (type === 'area') {
          this.proMove = false
          this.cityMove = false
          this.areaMove = true
        }
      },
      onProScroll (e) {
        const scrollTop = e.target.scrollTop
        this.onScroll('pro', scrollTop)
      },
      onCityScroll (e) {
        const scrollTop = e.target.scrollTop
        this.onScroll('city', scrollTop)
      },
      onAreaScroll (e) {
        const scrollTop = e.target.scrollTop
        this.onScroll('area', scrollTop)
      },
      onScroll (type, scrollTop) {
        console.log(this.proMove)
        console.log(this.cityMove)
        console.log(this.areaMove)
        let canScroll = false
        if (type === 'pro' && this.proMove) {
          canScroll = true
        } else if (type === 'city' && this.cityMove) {
          canScroll = true
        } else if (type === 'area' && this.areaMove) {
          canScroll = true
        }
        if (canScroll) {
          let top = scrollTop
          let dis = top % 40
          let target
          if (dis > 20) { //超过一半，向下滚
            target = top + (40 - dis)
          } else { //否则滚回去
            target = top - dis
          }
          let index = target / 40 //  当前选中的序号
          this.onAreaChange(type, index)
        }
      },
      onAreaChange (type, index) {
        switch (type) {
          case 'pro': //省带动市区变化
            if (index !== this.pro.index) {
              this.pro.index = index
              let pid = this.pro.ids[index]
              let tempCity = DistrictsUtils.city(null, pid)
              let cid = tempCity.ids[tempCity.index]
              let tempArea = DistrictsUtils.area(null, pid, cid)

              this.city = tempCity
              this.area = tempArea
            }
            break
          case 'city'://市带动区变化
            if (index !== this.city.index) {
              this.city.index = index
              let pid = this.pro.ids[this.pro.index]
              let cid = this.city.ids[index]
              let tempArea1 = DistrictsUtils.area(null, pid, cid)

              this.area = tempArea1
            }
            break
          case 'area':
            if (index !== this.area.index) {
              this.area.index = index
            }
            break
        }
      },
      handleCancel () {
        this.$emit('onCancel')
      },
      handleConfirm () {

      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./index";
</style>
