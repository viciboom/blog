<template>
    <div class="header">
        <div class="header-content">
            <div class="menu">
                <el-menu :default-active="activeIndex" active-text-color="#000" background-color="#f5f5f5" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-menu-item index="2">兔子洞</el-menu-item>
                <el-menu-item index="3">消息中心</el-menu-item>
                <el-menu-item index="4">订单管理</el-menu-item>
                </el-menu>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }  
    }
</script>

<style lang="less" scoped>
    .header {
        height: 140px;
        width: 100%;
        background-color: #f5f5f5;
        .header-content {
            width: 900px;
            padding: 25px;
            margin: 0 auto;
            .menu {
                float: right;
            }
            .el-menu--horizontal {
                border: none;
            }
        }
    }
</style>