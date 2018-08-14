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
            <img class="avatar" :src="avatar">
            <p class="name">{{ name || 'TsukiKujirai' }}</p>
            <p class="info">{{ info }}</p>
            <p class="part">文章：{{ number || 0 }}</p>
            <div class="link">
              <el-button type="info" size="mini" class="btn">Github</el-button>
              <el-button type="info" size="mini" class="btn">Douban</el-button>
              <el-button type="info" size="mini" class="btn">Twitter</el-button>
            </div>
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
        name: '',
        info: '我们拾取月亮与鲸的碎块来拼凑缺失的部分',
        number: '',
        avatar: require("../assets/img/avatar.jpg"),
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
      width: 100%;
      overflow-y: auto;
      .content-wrapper {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 100px;
        .avatar {
          width: 100px;
          height: 100px;
          border: 3px solid #fff;
          border-radius: 50%;
        }
        .name {
          padding: 0 20px 0 20px 0;
          font-size: 18px;
          color: #fff;
          font-weight: bold;
        }
        .info, .part {
          padding: 20px;
          font-size: 14px;
          color: 	#8B8386;
          text-align: center;
        }
        .link {
          padding: 5px;
        }
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