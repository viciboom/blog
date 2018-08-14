<template>
  <div id="app">
    <my-header/>
    <nuxt/>
    <my-footer/>
    <transition name="slide-fade">
      <div class="to-top" @click="scrollToTarget(0)" v-show="showScrollToTop">
        <span class="top-line"
              v-for="(line, index) in lineData"
              :key="index"
              :style="{
                height: line.height,
                left: line.left,
                transform: line.transform
                }">
        </span>
      </div>
    </transition>
    <right-nav></right-nav>
  </div>
</template>

<script>
import MyFooter from '../components/Footer.vue'
import MyHeader from '../components/Header.vue'
import RightNav from '../components/rightNav.vue'

import {mapActions, mapGetters, mapMutations} from 'vuex';
import {SCREEN_CHANGE} from '../store/mutation'
import {scroll} from '~/plugins/scroll.js'

export default {
  mixins: [scroll],
  data () {
    return {
      lineData: [
        {
          height: '50%',
          left: '3px',
          transform: 'rotateZ(45deg)'
        },
        {
          height: '100%',
          top: '0px',
          transform: 'rotateZ(0deg)'
        },
        {
          height: '50%',
          left: '-3px',
          transform: 'rotateZ(-45deg)'
        }
      ],
      viewWrapWidth: '1000px',
      showScrollToTop: false
    }
  },
  watch: {
    screen (value) {
      this.setViewWrapWidth()
    }

  },
  created () {

  },
  mounted () {
    this.updateScreen()
    window.addEventListener('resize', this.updateScreen)
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateScreen, false)
    window.removeEventListener('scroll', this.scrollListener, false)
  },
  methods: {
    updateScreen () {
      this.$store.commit(SCREEN_CHANGE, {
        width: window.innerWidth,
        height: window.innerHeight
      })
    },
    setViewWrapWidth () {
      let temp = 20
      if (this.screen.width > 990) {
        temp = 340
      }
      this.viewWrapWidth = this.screen.width - temp + 'px'
    },
    scrollListener () {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop >= 60) {
        this.showScrollToTop = true
      } else {
        this.showScrollToTop = false
      }
    },
  },
  computed: {
    ...mapGetters([
      'screen'
    ])
  },
  components: {
    MyHeader,
    MyFooter,
    RightNav
  }
}
</script>

<style lang="less">
#app {
  width: 100%;
  min-height: 100%;
  min-width: 320px;
  position: absolute;
  .to-top {
    position: fixed;
    width: 24px;
    height: 24px;
    background-color: #2d2d34;
    right: 10px;
    bottom: 13px;
    z-index: 1050;
    padding: 3px 2px 3px 4px;
    cursor: pointer;
    line-height: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    .top-line {
      position: relative;
      width: 2px;
      height: 100%;
      margin-left: 4px;
      background-color: #fff;
    }
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-to {
    transform: translateY(20px);
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter-to, .fade-leave-to {
    opacity: 0;
  }

}
</style>
