<template>
  <div>
    <my-header/>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '../components/Footer.vue'
import MyHeader from '../components/Header.vue'

import {mapActions, mapGetters, mapMutations} from 'vuex';
import {SCREEN_CHANGE} from '../store/mutation'

export default {
  data () {
    return {
      viewWrapWidth: '1000px'
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
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateScreen, false)
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
  },
  computed: {
    ...mapGetters([
      'screen'
    ])
  },
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style>
.container
{
  margin: 0;
  width: 100%;
  min-height: 700px;
  padding-top: 100px;
  text-align: center;
}

.button, .button:visited
{
  display: inline-block;
  color: #3B8070;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #3B8070;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #3B8070;
}

.title
{
  color: #505153;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}
</style>
