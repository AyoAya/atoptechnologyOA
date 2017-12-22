<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
// 初始化及全局通用样式
@import 'assets/stylus/base.styl'

.el-menu
    border-right: none
    background: #333744
    .fa
        padding-left: 5px
        padding-right: 10px
        font-size: 18px
    .el-menu-item
        height: 46px
        line-height: 46px
    .el-menu-item, .el-submenu__title, .el-submenu .el-menu-item
        height: 48px
        line-height: 48px
    .el-submenu .el-menu-item
        text-indent: 17px
.el-form-item
    margin-bottom: 30px
.el-tabs__header
    margin-bottom: 20px
.el-textarea__inner
    min-height: 200px !important
</style>
