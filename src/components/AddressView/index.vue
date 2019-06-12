<template>
  <div :class="isOpened ? 'address-layout':'address-layout address-layout--closed'">
    <div class='address-layout__overlay' @click="handleCancel" />
    <div class='address-layout__container'>
      <div class='layout-header'>
        <div class='cancel' @click="handleCancel">取消</div>
        <div class='title'>选择任务地址</div>
        <div class='confirm' @click="handleConfirm">确定</div>
      </div>
      <div class='layout-body'>
        <div class='address-scroll'>
          <div class='area-box' @touchmove="handleTouchMove"></div>
          <div class='area-container' id="pro"  @scroll="onProScroll" @touchmove="handleTouchMove" @touchstart="onTouchStart('pro')">
            <div class='area-list'>
              <div :key="index" class='area-item' v-for="(item, index) in pro.district">{{item}}</div>
            </div>
          </div>
          <div class='area-container' id="city" @scroll="onCityScroll" @touchmove="handleTouchMove" @touchstart="onTouchStart('city')">
            <div class='area-list'>
              <div :key="index" class='area-item' v-for="(item, index) in city.district">{{item}}</div>
            </div>
          </div>
          <div class='area-container' id="area" @scroll="onAreaScroll" @touchmove="handleTouchMove" @touchstart="onTouchStart('area')">
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
        // e.preventDefault()
      },
      handleInitData (address) {
        const addArr = address.split(/\s+/)
        const proInfo = DistrictsUtils.province(addArr[0])
        const cityInfo = DistrictsUtils.city(addArr[1], proInfo.ids[proInfo.index])
        const areaInfo = DistrictsUtils.area(addArr[2], proInfo.ids[proInfo.index], cityInfo.ids[cityInfo.index])

        this.pro = proInfo
        this.city = cityInfo
        this.area = areaInfo

        this.$nextTick(() => {
          const proView = this.$el.querySelector('#pro')
          if (proView) {
            proView.scrollTop = proInfo.index * 40
          }
          const cityView = this.$el.querySelector('#city')
          if (cityView) {
            cityView.scrollTop = cityInfo.index * 40
          }
          const areaView = this.$el.querySelector('#area')
          if (areaView) {
            areaView.scrollTop = areaInfo.index * 40
          }
        })
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
        this.onScroll('pro', e.target.scrollTop)
      },
      onCityScroll (e) {
        this.onScroll('city', e.target.scrollTop)
      },
      onAreaScroll (e) {
        this.onScroll('area', e.target.scrollTop)
      },
      onScroll (type, scrollTop) {
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

              this.$nextTick(() => {
                const cityView = this.$el.querySelector('#city')
                if (cityView) {
                  cityView.scrollTop = tempCity.index * 40
                }
                const areaView = this.$el.querySelector('#area')
                if (areaView) {
                  areaView.scrollTop = tempArea.index * 40
                }
              })
            }
            break
          case 'city'://市带动区变化
            if (index !== this.city.index) {
              this.city.index = index
              let pid = this.pro.ids[this.pro.index]
              let cid = this.city.ids[index]
              let tempArea1 = DistrictsUtils.area(null, pid, cid)

              this.area = tempArea1

              this.$nextTick(() => {
                const areaView = this.$el.querySelector('#area')
                if (areaView) {
                  areaView.scrollTop = tempArea1.index * 40
                }
              })
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
        let address = `${this.pro.district[this.pro.index]} ` +
          `${this.city.district[this.city.index]} ` +
          `${this.area.district[this.area.index]}`
        this.$emit('onConfirm', address)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./index";
</style>
