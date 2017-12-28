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
                    <el-tab-pane label="项目计划">
                        <el-table
                                :data="tableData6"
                                :span-method="objectSpanMethod"
                                border
                                style="width: 100%; margin-top: 20px">
                            <el-table-column
                                    prop="id"
                                    label="ID"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="name"
                                    label="姓名">
                            </el-table-column>
                            <el-table-column
                                    prop="amount1"
                                    label="数值 1（元）">
                            </el-table-column>
                            <el-table-column
                                    prop="amount2"
                                    label="数值 2（元）">
                            </el-table-column>
                            <el-table-column
                                    prop="amount3"
                                    label="数值 3（元）">
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="子项目开发">
                        <el-table :data="childProjects" style="width: 100%">
                            <el-table-column prop="projectNo" label="项目编号" :show-overflow-tooltip="true"></el-table-column>
                            <el-table-column prop="projectName" label="项目名称" :show-overflow-tooltip="true"></el-table-column>
                            <el-table-column prop="createdAt" label="创建时间" :show-overflow-tooltip="true"></el-table-column>
                            <el-table-column prop="rps" label="负责人"></el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button-group>
                                        <el-button type="default" size="mini" @click="handleView(scope.$index, scope.row)">查看</el-button>
                                        <el-button type="default" size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                                        <el-button type="danger" size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                                    </el-button-group>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="样品状况">
                        <el-table :data="samples" :show-header="true" style="width: 100%">
                            <el-table-column prop="no" label="单号" width="200" :show-overflow-tooltip="true"></el-table-column>
                            <el-table-column prop="prono" label="品号" width="250" :show-overflow-tooltip="true"></el-table-column>
                            <el-table-column prop="sales" label="销售" :show-overflow-tooltip="true"></el-table-column>
                            <el-table-column prop="customer" label="客户"></el-table-column>
                            <el-table-column prop="brand" label="品牌"></el-table-column>
                            <el-table-column prop="model" label="型号"></el-table-column>
                            <el-table-column prop="count" label="数量"></el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button-group>
                                        <el-button type="default" size="mini" @click="handleView(scope.$index, scope.row)">查看</el-button>
                                    </el-button-group>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="归档文件">
                        <div style="margin-bottom: 40px;">
                            <div style="font-size: 16px;padding: 10px;border-left: solid 2px #409EFF;">Gate3 - 产品详细设计及工程验证</div>
                            <el-table :data="samples" :show-header="true" style="width: 100%">
                                <el-table-column prop="no" label="单号" width="200" :show-overflow-tooltip="true"></el-table-column>
                                <el-table-column prop="prono" label="品号" width="250" :show-overflow-tooltip="true"></el-table-column>
                                <el-table-column prop="sales" label="销售" :show-overflow-tooltip="true"></el-table-column>
                                <el-table-column prop="customer" label="客户"></el-table-column>
                                <el-table-column prop="brand" label="品牌"></el-table-column>
                                <el-table-column prop="model" label="型号"></el-table-column>
                                <el-table-column prop="count" label="数量"></el-table-column>
                                <el-table-column label="操作">
                                    <template slot-scope="scope">
                                        <el-button-group>
                                            <el-button type="default" size="mini" @click="handleView(scope.$index, scope.row)">查看</el-button>
                                        </el-button-group>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div>
                            <div style="font-size: 16px;padding: 10px;border-left: solid 2px #409EFF;">Gate4 - 产品详细设计及工程验证</div>
                            <el-table :data="samples" :show-header="true" style="width: 100%">
                                <el-table-column prop="no" label="单号" width="200" :show-overflow-tooltip="true"></el-table-column>
                                <el-table-column prop="prono" label="品号" width="250" :show-overflow-tooltip="true"></el-table-column>
                                <el-table-column prop="sales" label="销售" :show-overflow-tooltip="true"></el-table-column>
                                <el-table-column prop="customer" label="客户"></el-table-column>
                                <el-table-column prop="brand" label="品牌"></el-table-column>
                                <el-table-column prop="model" label="型号"></el-table-column>
                                <el-table-column prop="count" label="数量"></el-table-column>
                                <el-table-column label="操作">
                                    <template slot-scope="scope">
                                        <el-button-group>
                                            <el-button type="default" size="mini" @click="handleView(scope.$index, scope.row)">查看</el-button>
                                        </el-button-group>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="讨论区">
                        <div class="discuss">
                            <div class="discuss-l">
                                <div>
                                    <img class="avatar" src="../../assets/default_avatar.png" width="79" alt="">
                                </div>
                                <div>Administrator</div>
                            </div>
                            <div class="discuss-r">
                                <div class="context">
                                    <p>9月21日DD进度更新：</p>
                                    <ul>
                                        <li>1. QDD PCB 板长偏长，陈工模拟PCB板长还需要再缩小4mm，才能满足协议尺寸要求；</li>
                                        <li>Layout 要大改；一开始是按照板长36mm 设计（考虑超协议制作），后面经实际layout布局完成，可以满足再缩短4mm 空间位置，满足协议；</li>
                                        <li>2. Rx submont 由于之前PD chip 间距按照2.0mm设计，但是由于Mux/Demux 没有2.0mm间距的，所以更改PD chip 间距为1.9mm；Rx submont 需要重新layout；（未开始）</li>
                                        <li>3.今天陈工与郑博商讨之后会给出另外一个100G的 Tx Rx FPC 柔板外形图纸还需要重新出图；也需要重新layout；（未开始）</li>
                                        <li>4. 另外一个100G的 Rx submont 需要重新设计；（未开始）一共需要绘制的PCB 数量是 4Pcs FPC 柔板，2PCS Rx submont 硬制板，1Pcs DD 主板；</li>
                                    </ul>
                                    <div class="reply-box">
                                        <div class="reply">
                                            <div>
                                                <img class="avatar" src="../../assets/default_avatar.png" width="34" alt="">
                                            </div>
                                            <div>
                                                <router-link to="/">蒋明</router-link>：品号应该是APQPLR43CDL2， 为QSFP LX4 产品，用于单模2km以及多模OM3150m，附件说明书。
                                                需要EEPROM全部开放，并能兼容ATOP自产EVB做A0，A2所有区域的更改，注意阈值以及温度校准符合行业标准。
                                            </div>
                                        </div>
                                        <div class="reply">
                                            <div>
                                                <img class="avatar" src="../../assets/default_avatar.png" width="34" alt="">
                                            </div>
                                            <div>
                                                <router-link to="/">龚驰翔</router-link>：兼容：旦瑞电信的波分设备
                                                切记：重要客户，保证产品性能与传输稳定性，注意产品的温度问题。
                                                发光光功率：+1以上 接收-24
                                                首次样品，切记注意（注意稳定性测试）
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="footer">
                                    <div>2017-10-27 18:16:54　|　1 #  <el-button type="text" size="mini" style="margin-left: 10px;">回复</el-button></div>
                                    <div>收件人：李平 / 肖艾佑 / 马晓东 / 刘燕 / 陈卫 / 唐治强 / 肖晓 　｜　抄送人：丁征</div>
                                </div>
                            </div>
                        </div>
                        <div class="discuss">
                            <div class="discuss-l">
                                <div>
                                    <img class="avatar" src="../../assets/default_avatar.png" width="79" alt="">
                                </div>
                                <div>Administrator</div>
                            </div>
                            <div class="discuss-r">
                                <div class="context">
                                    <p>9月27日DD进度更新：</p>
                                    <ul>
                                        <li>1. 本周Rx_submont 按照AE推荐增加去耦电容，并更改原理图设计和PCB设计；完成EQ确认；待采购回复交期；</li>
                                        <li>2. Tx FPC_D 和 Rx FPC_D 按照EQ工艺更改推荐，更改原路图设计和PCB设计；完成EQ确认；待采购回复交期；</li>
                                        <li>3. DD 主板按照EQ工艺更改推荐，更改原理图设计和PCB设计，完成EQ确认；待采购回复交期；</li>
                                        <li>4. DD 座子还没找到，EVB设计还未开始；</li>
                                    </ul>
                                </div>
                                <div class="footer">
                                    <div>2017-10-27 18:16:54　|　2 #  <el-button type="text" size="mini" style="margin-left: 10px;">回复</el-button></div>
                                    <div>收件人：李平 / 肖艾佑 / 马晓东 / 刘燕 / 陈卫 / 唐治强 / 肖晓 　｜　抄送人：丁征</div>
                                </div>
                            </div>
                        </div>
                        <div class="discuss">
                            <div class="discuss-l">
                                <div>
                                    <img class="avatar" src="../../assets/default_avatar.png" width="79" alt="">
                                </div>
                                <div>Administrator</div>
                            </div>
                            <div class="discuss-r">
                                <div class="context">
                                    <p>9月21日DD进度更新：</p>
                                    <ul>
                                        <li>1. QDD PCB 板长偏长，陈工模拟PCB板长还需要再缩小4mm，才能满足协议尺寸要求；</li>
                                        <li>Layout 要大改；一开始是按照板长36mm 设计（考虑超协议制作），后面经实际layout布局完成，可以满足再缩短4mm 空间位置，满足协议；</li>
                                        <li>2. Rx submont 由于之前PD chip 间距按照2.0mm设计，但是由于Mux/Demux 没有2.0mm间距的，所以更改PD chip 间距为1.9mm；Rx submont 需要重新layout；（未开始）</li>
                                        <li>3.今天陈工与郑博商讨之后会给出另外一个100G的 Tx Rx FPC 柔板外形图纸还需要重新出图；也需要重新layout；（未开始）</li>
                                        <li>4. 另外一个100G的 Rx submont 需要重新设计；（未开始）一共需要绘制的PCB 数量是 4Pcs FPC 柔板，2PCS Rx submont 硬制板，1Pcs DD 主板；</li>
                                    </ul>
                                </div>
                                <div class="footer">
                                    <div>2017-10-27 18:16:54　|　1 #  <el-button type="text" size="mini" style="margin-left: 10px;">回复</el-button></div>
                                    <div>收件人：李平 / 肖艾佑 / 马晓东 / 刘燕 / 陈卫 / 唐治强 / 肖晓 　｜　抄送人：丁征</div>
                                </div>
                            </div>
                        </div>
                        <div class="discuss">
                            <div class="discuss-l">
                                <div>
                                    <img class="avatar" src="../../assets/default_avatar.png" width="79" alt="">
                                </div>
                                <div>Administrator</div>
                            </div>
                            <div class="discuss-r">
                                <div class="context">
                                    <p>9月27日DD进度更新：</p>
                                    <ul>
                                        <li>1. 本周Rx_submont 按照AE推荐增加去耦电容，并更改原理图设计和PCB设计；完成EQ确认；待采购回复交期；</li>
                                        <li>2. Tx FPC_D 和 Rx FPC_D 按照EQ工艺更改推荐，更改原路图设计和PCB设计；完成EQ确认；待采购回复交期；</li>
                                        <li>3. DD 主板按照EQ工艺更改推荐，更改原理图设计和PCB设计，完成EQ确认；待采购回复交期；</li>
                                        <li>4. DD 座子还没找到，EVB设计还未开始；</li>
                                    </ul>
                                </div>
                                <div class="footer">
                                    <div>2017-10-27 18:16:54　|　2 #  <el-button type="text" size="mini" style="margin-left: 10px;">回复</el-button></div>
                                    <div>收件人：李平 / 肖艾佑 / 马晓东 / 刘燕 / 陈卫 / 唐治强 / 肖晓 　｜　抄送人：丁征</div>
                                </div>
                            </div>
                        </div>
                        <div class="discuss">
                            <div class="discuss-l">
                                <div>
                                    <img class="avatar" src="../../assets/default_avatar.png" width="79" alt="">
                                </div>
                                <div>Administrator</div>
                            </div>
                            <div class="discuss-r">
                                <div class="context">
                                    <p>9月21日DD进度更新：</p>
                                    <ul>
                                        <li>1. QDD PCB 板长偏长，陈工模拟PCB板长还需要再缩小4mm，才能满足协议尺寸要求；</li>
                                        <li>Layout 要大改；一开始是按照板长36mm 设计（考虑超协议制作），后面经实际layout布局完成，可以满足再缩短4mm 空间位置，满足协议；</li>
                                        <li>2. Rx submont 由于之前PD chip 间距按照2.0mm设计，但是由于Mux/Demux 没有2.0mm间距的，所以更改PD chip 间距为1.9mm；Rx submont 需要重新layout；（未开始）</li>
                                        <li>3.今天陈工与郑博商讨之后会给出另外一个100G的 Tx Rx FPC 柔板外形图纸还需要重新出图；也需要重新layout；（未开始）</li>
                                        <li>4. 另外一个100G的 Rx submont 需要重新设计；（未开始）一共需要绘制的PCB 数量是 4Pcs FPC 柔板，2PCS Rx submont 硬制板，1Pcs DD 主板；</li>
                                    </ul>
                                </div>
                                <div class="footer">
                                    <div>2017-10-27 18:16:54　|　1 #  <el-button type="text" size="mini" style="margin-left: 10px;">回复</el-button></div>
                                    <div>收件人：李平 / 肖艾佑 / 马晓东 / 刘燕 / 陈卫 / 唐治强 / 肖晓 　｜　抄送人：丁征</div>
                                </div>
                            </div>
                        </div>
                        <div class="discuss">
                            <div class="discuss-l">
                                <div>
                                    <img class="avatar" src="../../assets/default_avatar.png" width="79" alt="">
                                </div>
                                <div>Administrator</div>
                            </div>
                            <div class="discuss-r">
                                <div class="context">
                                    <p>9月27日DD进度更新：</p>
                                    <ul>
                                        <li>1. 本周Rx_submont 按照AE推荐增加去耦电容，并更改原理图设计和PCB设计；完成EQ确认；待采购回复交期；</li>
                                        <li>2. Tx FPC_D 和 Rx FPC_D 按照EQ工艺更改推荐，更改原路图设计和PCB设计；完成EQ确认；待采购回复交期；</li>
                                        <li>3. DD 主板按照EQ工艺更改推荐，更改原理图设计和PCB设计，完成EQ确认；待采购回复交期；</li>
                                        <li>4. DD 座子还没找到，EVB设计还未开始；</li>
                                    </ul>
                                </div>
                                <div class="footer">
                                    <div>2017-10-27 18:16:54　|　2 #  <el-button type="text" size="mini" style="margin-left: 10px;">回复</el-button></div>
                                    <div>收件人：李平 / 肖艾佑 / 马晓东 / 刘燕 / 陈卫 / 唐治强 / 肖晓 　｜　抄送人：丁征</div>
                                </div>
                            </div>
                        </div>
                        <div style="padding: 5px; margin-top: 60px;">
                            <froala :tag="'textarea'" :config="config" v-model="comments"></froala>
                        </div>
                        <div style="margin-top: 10px;">
                            <el-button type="primary">发表</el-button>
                            <el-button type="text">插入附件</el-button>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script>
    import VueFroala from 'vue-froala-wysiwyg';
    export default {
        watch: {
            comments(curVal, oldVal){
                console.log(curVal)
            }
        },
        data() {
            return {
                comments: "",
                config: {
                    placeholderText: '在这里编辑您的内容!',
                    heightMin: 400,
                    heightMax: 600,
                    language: 'zh_cn',
                    toolbarButtons: [
                        'fullscreen', '|', 'insertLink', 'insertImage',
                        // 'insertVideo',
                        'insertFile', 'insertTable', '|', 'quote', 'insertHR', 'subscript', 'superscript', 'undo', 'redo',
                        '-',
                        'bold', 'italic', 'underline', 'strikeThrough', '|', 'fontFamily', 'fontSize', 'paragraphFormat', 'paragraphStyle', '|', 'color', 'emoticons',
                        // 'inlineStyle',
                        '|', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'clearFormatting'
                    ],
                    imageAllowedTypes: ['jpeg', 'jpg', 'png', 'gif'],
                    // fileUploadURL: '/upload_file',  // 文件上传路径
                    // imageUploadURL: '', // 图像上传路径
                    events: {
//                        'froalaEditor.initialized': function () {
//                            console.log('initialized')
//                        }
                    }
                },
                tableData6: [
                    {
                        id: '12987122',
                        name: '王小虎',
                        amount1: '234',
                        amount2: '3.2',
                        amount3: 10
                    },
                    {
                        id: '12987123',
                        name: '王小虎',
                        amount1: '165',
                        amount2: '4.43',
                        amount3: 12
                    },
                    {
                        id: '12987124',
                        name: '王小虎',
                        amount1: '324',
                        amount2: '1.9',
                        amount3: 9
                    },
                    {
                        id: '12987125',
                        name: '王小虎',
                        amount1: '621',
                        amount2: '2.2',
                        amount3: 17
                    },
                    {
                        id: '12987126',
                        name: '王小虎',
                        amount1: '539',
                        amount2: '4.1',
                        amount3: 15
                    }
                ],
                childProjects: [
                    {
                        projectNo: 'PLN-2017-A-023',
                        projectName: '2.5G DWDM兼容CWDM',
                        createdAt: '2017-12-12 16:57:50',
                        rps: '肖艾佑'
                    },
                    {
                        projectNo: 'PLN-2017-A-023',
                        projectName: '2.5G DWDM兼容CWDM',
                        createdAt: '2017-12-12 16:57:50',
                        rps: '肖艾佑'
                    },
                    {
                        projectNo: 'PLN-2017-A-023',
                        projectName: '2.5G DWDM兼容CWDM',
                        createdAt: '2017-12-12 16:57:50',
                        rps: '肖艾佑'
                    },
                    {
                        projectNo: 'PLN-2017-A-023',
                        projectName: '2.5G DWDM兼容CWDM',
                        createdAt: '2017-12-12 16:57:50',
                        rps: '肖艾佑'
                    }
                ],
                samples: [
                    {
                        no: 'sample041-JPC-A',
                        prono: 'APSP55HM3CDL80',
                        sales: 'bob',
                        customer: 'JPC',
                        brand: 'Cisco',
                        model: 'R920/4900',
                        count: 20
                    },
                    {
                        no: 'sample041-JPC-A',
                        prono: 'APSP55HM3CDL80',
                        sales: 'bob',
                        customer: 'JPC',
                        brand: 'Cisco',
                        model: 'R920/4900',
                        count: 20
                    }
                ],
            }
        },
        methods: {
            objectSpanMethod({ row, column, rowIndex, columnIndex }) {
                if (columnIndex === 0) {
                    if (rowIndex % 2 === 0) {
                        return {
                            rowspan: 2,
                            colspan: 1
                        };
                    } else {
                        return {
                            rowspan: 0,
                            colspan: 0
                        };
                    }
                }
            },
            handleView() {
                this.$router.push('/dashboard/rd/project/detail')
            },
            handleCreate() {
                this.$router.push('/dashboard/rd/project/create')
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