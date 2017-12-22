<template>
    <div class="ProjectDetail">
        <div class="fl-card">
            <div class="fl-card-header">
                <div class="fl-card-hl">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item :to="{ path: '/dashboard/rd/project' }">项目管理</el-breadcrumb-item>
                        <el-breadcrumb-item>项目详情</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </div>
        </div>
        <div class="fl-card">
            <div class="fl-card-body">
                <div class="pj-title">
                    <div class="pj-tl">
                        PLN-2017-A-023
                        <small>2.5G DWDM兼容CWDM</small>
                        <el-tag>Gate3 - 产品详细设计及工程验证阶段</el-tag>
                    </div>
                    <div class="pj-tr">
                        <span>肖晓</span><span>2017-11-30</span>
                    </div>
                </div>
                <div class="pj-desc"><p>目前随着社会发展，单方面的DWDM和CWDM的市场面逐渐减少，为了满足市场需求，本设计做了一个DWDM和CWDM的兼容，但是低温情况下， CWDM的性能会下降，所以本设计在该方面做了一定的优化，来改善模块性能，本项目采用大连藏龙的激光器和光恒的APD，自主设计PCB和固 件开发，完成客户样品认证，并发完成小批量试产，并转入量产。</p></div>
            </div>
        </div>
        <div class="fl-card">
            <div class="fl-card-body">
                <el-tabs tab-position="top">
                    <el-tab-pane label="项目概览">
                        <el-row :gutter="20">
                            <el-col :span="24">
                                <div class="list-table">
                                    <table class="tree-table" cellpadding="0" cellspacing="0">
                                        <tr>
                                            <td>项目负责人</td>
                                            <td>肖艾佑</td>
                                        </tr>
                                        <tr>
                                            <td>硬件设计</td>
                                            <td>肖艾佑</td>
                                        </tr>
                                        <tr>
                                            <td>FW开发</td>
                                            <td>何松文</td>
                                        </tr>
                                        <tr>
                                            <td>结构件设计</td>
                                            <td>陈卫</td>
                                        </tr>
                                        <tr>
                                            <td>光器件设计</td>
                                            <td>陈卫</td>
                                        </tr>
                                        <tr>
                                            <td>ATE设计</td>
                                            <td>李平</td>
                                        </tr>
                                        <tr>
                                            <td>DVT测试</td>
                                            <td>刘燕</td>
                                        </tr>
                                        <tr>
                                            <td>市场部</td>
                                            <td>唐治强</td>
                                        </tr>
                                        <tr>
                                            <td>项目管理员</td>
                                            <td>肖晓</td>
                                        </tr>
                                        <tr>
                                            <td>产品类型</td>
                                            <td>SFP+</td>
                                        </tr>
                                        <tr>
                                            <td>项目类型</td>
                                            <td>新设计</td>
                                        </tr>
                                        <tr>
                                            <td>标准品名</td>
                                            <td>APSDxx253CDL80,APSCxx253IDL80</td>
                                        </tr>
                                        <tr>
                                            <td>潜在市场需求</td>
                                            <td>0.5M</td>
                                        </tr>
                                        <tr>
                                            <td>目标客户</td>
                                            <td>待定</td>
                                        </tr>
                                        <tr>
                                            <td>平台</td>
                                            <td>EFM8LB1+GN25L95B</td>
                                        </tr>
                                        <tr>
                                            <td>目标成本</td>
                                            <td>800</td>
                                        </tr>
                                        <tr>
                                            <td>立项时间</td>
                                            <td>2017-11-02</td>
                                        </tr>
                                    </table>
                                </div>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="项目计划">项目计划</el-tab-pane>
                    <el-tab-pane label="子项目开发">子项目开发</el-tab-pane>
                    <el-tab-pane label="样品状况">样品状况</el-tab-pane>
                    <el-tab-pane label="归档文件">归档文件</el-tab-pane>
                    <el-tab-pane label="讨论区">讨论区</el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    // 引入样式变量文件
    @import '../../assets/stylus/variable.styl'
    .pj-title
        margin-bottom: 20px
        display: table
        width: 100%
        small
            margin-left: 20px
        .pj-tl, .pj-tr
            display: table-cell
            vertical-align: middle
        .pj-tl
            font-size: 20px
            text-align: left
            .el-tag
                position: relative
                top: -3px
                left: 20px
        .pj-tr
            text-align: right
            span
                margin-left: 20px
                color: secondary-text-color
    .pj-desc
        text-indent: 2em

</style>