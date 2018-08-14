<template>
    <div id="header">
        <div class="header-wrap" :style="{height: isPc ? '90px' : '60px'}">
            <div class="header-logo" @click="toHomeFromLogo">
                    <div class="item">RabbitHole</div>
            </div>
            <header-tab v-if="isPc" :tabs="tabs" @tab-click="selectTab"></header-tab>
            <div class="toggle" v-if="!isPc" @click="toggle()">
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
        <el-collapse-transition>
            <div class="mobile-tab-wrap" v-show="!isPc && showMobileTabs">
                <div class="tab" v-for="(tab, index) in tabs" :key="index" @click="selectTab(tab)">
                    <span>{{ tab.name }}</span>
                </div>
            </div>
        </el-collapse-transition>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex';
import headerTab from "../components/headerTab.vue";
    export default {
        data() {
            return {
                isPc: true,
                tabs: [
                    {
                        name: '首页',
                        to: 'home'
                    },
                    {
                        name: '兔子洞',
                        to: 'rabbit'
                    },
                    {
                        name: '关于',
                        to: 'about'
                    },
                    {
                        name: '其它',
                        to: 'some'
                    },
                ],
                lineStyle: {
                    normalLine: [
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
                    closeLine: [
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
                        },
                    ]
                },
                toggleLineData: [],
                showMobileTabs: false
            };
        },
        watch: {
            screen (value) {
                this.isPc = true

                if (value.width <= 768) {
                    this.isPc = false
                }
            }
        },
        created () {
            this.toggleLineData = this.lineStyle.normalLine
        },
        methods: {
            ...mapActions([
            ]),
            toggle () {
                this.showMobileTabs = !this.showMobileTabs
                this.toggleLineData = this.showMobileTabs ? this.lineStyle.closeLine : this.lineStyle.normalLine
            },
            selectTab (tab) {
                this.toggle()
            },
            toHomeFromLogo () {
                window.location.href = `${window.location.origin}`
            },
        },
        computed: {
            ...mapGetters([
                'screen'
            ])
        },
        components: {
            headerTab
        }
    }
</script>

<style lang="less" scoped>
    *{
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        #header {
            position: relative;
            width: 100%;
            background-color: #f9f9f9;
            .header-wrap {
                position: relative;
                max-width: 1000px;
                padding: 0 10px;
                margin: 0 auto;
                height: 90px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                transition: height .3s;
                .header-logo {
                    position: relative;
                    height: 60px;
                    width: 150px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #2d2d34;
                    font-size: 16px;
                    font-weight: bold;
                    cursor: pointer;
                    margin: 15px;
                    .item {
                        letter-spacing: 2px;
                        z-index: 99;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        transition: 0.4s all ease;
                        box-sizing: border-box;
                        border: 2px solid #2d2d34;
                        padding: 14px;
                        position: relative;
                        &:before {
                            position: absolute;
                            content: '';
                            width: 0;
                            height: 50px;
                            transition: 0.4s all ease;
                            background: #2d2d34;
                            left: 0;
                            z-index: -1;
                        }
                        &:hover {
                            color: #fff;
                            &:before {
                                width: 100%;
                                transition: .4s all ease;
                            }
                        }
                    }
                }
                .toggle {
                    width: 24px;
                    height: 24px;
                    background-color: #f9f9f9;
                    padding: 5px;
                    cursor: pointer;
                    line-height: 0;
                    .toggle-line {
                        position: relative;
                        display: inline-block;
                        vertical-align: top;
                        width: 100%;
                        height: 2px;
                        margin-top: 4px;
                        background-color: #2d2d34;
                        &:first-child {
                            margin-top: 0px;
                        }
                    }
                }
            }
            .mobile-tab-wrap {
                width: 100%;
                transition: all .3s;
                border-top: 1px solid #eee;
                .tab {
                    position: relative;
                    font-size: 14px;
                    width: 100%;
                    line-height: 1;
                    padding: 10px 30px 10px 30px;
                }
            }
        }
    }
</style>