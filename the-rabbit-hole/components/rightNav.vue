<template>
  <div id="right-nav" v-show="show" :style="{
      'width': showRightNav ? '320px' : '0px',
      'transition': 'all .3s'
    }">
    <div class="right-nav-wrap" :style="{
      'width': showRightNav ? '320px' : '0px',
      'transition': 'all .3s'
    }">
      <div class="content">
        <transition name="slide-fade">
          <div class="content-wrapper">

          </div>
        </transition>
      </div>
    </div>
    <div class="toggle" @click="toggle" @mouseover="setLineData" @mouseout="setLineData">
      <span class="toggle-line"
            v-for="(line, index) in toggleLineData"
            :key="index"
            :style="{
                width: line.width,
                top: line.top,
                transform: line.transform,
                opacity: line.opacity,
                transition: 'all .3s'
              }">
      </span>
    </div> 
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
  export default {
    data () {
      return {
        show: true,
        lineStyle: {
          normalData: [
            {
              width: '100%',
              top: '0px',
              transform: 'rotateZ(0deg)',
              opacity: '1'
            },
            {
              width: '100%',
              top: '0px',
              transform: 'rotateZ(0deg)',
              opacity: '1'
            },
            {
              width: '100%',
              top: '0px',
              transform: 'rotateZ(0deg)',
              opacity: '1'
            }
          ],
          closeData: [
            {
              width: '100%',
              top: '6px',
              transform: 'rotateZ(-45deg)',
              opacity: '1'
            },
            {
              width: '100%',
              top: '0px',
              transform: 'rotateZ(0deg)',
              opacity: '0'
            },
            {
              width: '100%',
              top: '-6px',
              transform: 'rotateZ(45deg)',
              opacity: '1'
            }
          ],
          arrowData: [
            {
              width: '50%',
              top: '3px',
              transform: 'rotateZ(-45deg)',
              opacity: '1'
            },
            {
              width: '100%',
              top: '0px',
              transform: 'rotateZ(0deg)',
              opacity: '1'
            },
            {
              width: '50%',
              top: '-3px',
              transform: 'rotateZ(45deg)',
              opacity: '1'
            }
          ]
        },
        toggleLineData: []
      }
    },
    created () {
      this.toggleLineData = this.lineStyle.normalData
    },
    watch: {
      screen (value) {
        this.show = true

        if (value.width <= 990) {
          this.show = false
        }
      }
    },
    computed: {
      ...mapGetters([
        'screen',
        'showRightNav'
      ])
    },
    methods: {
      ...mapActions([
        'setShowRightNav'
      ]),
      toggle () {
        this.setShowRightNav(!this.showRightNav)
        this.toggleLineData = this.showRightNav ? this.lineStyle.closeData : this.lineStyle.normalData
      },
      setLineData (e) {
        if (this.showRightNav) {
          return
        }
        if (e.type === 'mouseover') {
          this.toggleLineData = this.lineStyle.arrowData
        } else {
          this.toggleLineData = this.lineStyle.normalData
        }
      }
    }
  }
</script>

<style lang="less" scoped>
#right-nav {
  position: relative;
  width: 320px;
  .right-nav-wrap {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    width: 320px;
    background-color: #2d2d34;
    color: #fff;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    .content {
      position: relative;
      width: 100%;
      max-height: calc(100vh - 150px);
      overflow-y: auto;
      .content-wrapper {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
  .toggle {
    position: fixed;
    width: 24px;
    height: 24px;
    background-color: #2d2d34;
    right: 10px;
    bottom: 55px;
    padding: 3px;
    // padding: 5px;
    z-index: 1050;
    cursor: pointer;
    line-height: 0;
    .toggle-line {
      position: relative;
      display: inline-block;
      vertical-align: top;
      width: 100%;
      height: 2px;
      margin-top: 4px;
      background-color: #fff;
    }
  }
}
</style>