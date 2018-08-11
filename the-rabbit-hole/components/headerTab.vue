<template>
    <div id="header-tab">
        <div class="tab" v-for="(tab, index) in tabs" :key="index" @click="selsectTab(tab)">
            <span>{{ tab.name }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'header-tab',
        props: ['tabs'],
        methods: {
            selectTab (tab) {
                this.$emit('tab-click', tab)
            }
        }
    }
</script>

<style scoped lang="less">
#header-tab {
    position: relative;
    font-size: 14px;
    cursor: pointer;
    animation: show .5s;
    .tab {
        padding: 5px 8px;
        display: inline-block;
        cursor: pointer;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        color: #262a30;
        background-color: #f9f9f9;
        transition: all .5s;
        border-radius: 5px;
        margin-right: 5px;
        &:last-child {
            margin-right: 0px;
        }
        &:hover {
            color: #fff;
            background-color: #262a30;
        }
        .name {
            margin-left: 8px;
        }
    }
}

@keyframes show {
    from {
        margin-top: -30px;
        opacity: 0;
    }
    to {
        margin-top: 0px;
        opacity: 1;
    }
}
</style>