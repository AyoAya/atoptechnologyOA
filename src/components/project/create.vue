<template>
	<div class="ProjectCreate">
		<div class="fl-card">
			<div class="fl-card-header">
				<div class="fl-card-hl">
					<el-breadcrumb separator="/">
						<el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
						<el-breadcrumb-item :to="{ path: '/dashboard/rd/project' }">项目管理</el-breadcrumb-item>
						<el-breadcrumb-item>创建项目</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
			</div>
		</div>
		<div class="fl-card">
			<div class="fl-card-body">
				<el-steps :active="currentStep" simple style="margin-bottom: 35px;">
					<el-step title="创建项目信息" icon="el-icon-edit"></el-step>
					<el-step title="创建项目计划信息" icon="el-icon-upload"></el-step>
					<el-step title="创建完成" icon="el-icon-upload"></el-step>
				</el-steps>
				<el-form ref="projectData" :model="projectData" label-width="150px" label-position="right" style="margin-left: 20px;">
					<div v-show="currentStep == 0">
						<div style="width: 80%;">
							<el-form-item label="项目编号" prop="pj_num" :rules="[
							    { required: true, message: '项目编号不能为空', trigger: 'blur' }
							]">
								<el-input v-model="projectData.pj_num" placeholder="请输入项目编号，例：Plan-Test-001"></el-input>
							</el-form-item>
							<el-form-item label="项目名称" prop="pj_name" :rules="[
							    { required: true, message: '项目名称不能为空', trigger: 'blur' }
							]">
								<el-input v-model="projectData.pj_name" placeholder="请输入项目名称，例：CSFP+ 项目开发"></el-input>
							</el-form-item>
							<el-form-item label="立项时间" prop="pj_add_pro_time" :rules="[
							    { required: true, message: '立项时间不能为空', trigger: 'blur' }
							]">
								<el-date-picker v-model="projectData.pj_add_pro_time" :editable="false" type="date" placeholder="选择日期"></el-date-picker>
							</el-form-item>
							<el-form-item label="产品类型" prop="pj_family" :rules="[
							    { required: true, message: '产品类型不能为空', trigger: 'blur' }
							]">
								<el-input v-model="projectData.pj_family" placeholder="例：CSFP+(SFP 、XFP、AOC、DAC， etc)"></el-input>
							</el-form-item>
							<el-form-item label="项目类型" prop="pj_type" :rules="[
							    { required: true, message: '项目类型不能为空', trigger: 'blur' }
							]">
								<el-input v-model="projectData.pj_type" placeholder="例：新设计(新设计？新功能？降低成本？etc)"></el-input>
							</el-form-item>
							<el-form-item label="标准品名" prop="pj_standard_name" :rules="[
							    { required: true, message: '标准品名不能为空', trigger: 'blur' }
							]">
								<el-input v-model="projectData.pj_standard_name" placeholder="请输入标准品名，如有多个用 ' , ' （英文下的逗号）分割"></el-input>
							</el-form-item>
							<el-form-item label="平台" prop="pj_platform" :rules="[
							    { required: true, message: '平台不能为空', trigger: 'blur' }
							]">
								<el-input v-model="projectData.pj_platform" placeholder="例：DS4834+Max24016"></el-input>
							</el-form-item>
							<el-form-item label="潜在市场需求" prop="pj_market_demand" :rules="[
							    { required: true, message: '潜在市场需求不能为空', trigger: 'blur' }
							]">
								<el-input v-model="projectData.pj_market_demand" placeholder="请输入市场潜在需求(2年)，由市场部提供"></el-input>
							</el-form-item>
							<el-form-item label="目标客户" prop="pj_target_customer" :rules="[
							    { required: true, message: '目标客户不能为空', trigger: 'blur' }
							]">
								<el-input v-model="projectData.pj_target_customer" placeholder="例：华为（市场部提供）"></el-input>
							</el-form-item>
							<el-form-item label="目标成本" prop="pj_target_cost" :rules="[
							    { required: true, message: '目标成本不能为空', trigger: 'blur' }
							]">
								<el-input v-model="projectData.pj_target_cost" placeholder="请输入目标成本"></el-input>
							</el-form-item>
							<el-form-item label="项目负责人" prop="pj_responsible" :rules="[
							    { required: true, message: '项目负责人不能为空', trigger: 'change' }
							]">
								<el-select v-model="projectData.pj_responsible" placeholder="项目负责人">
									<el-option label="Elise" value="Elise"></el-option>
									<el-option label="Kog'Maw" value="Kog'Maw"></el-option>
									<el-option label="Driven" value="Driven"></el-option>
									<el-option label="Vampire" value="Vampire"></el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="硬件设计" prop="pj_design" :rules="[
							    { required: true, message: '硬件设计不能为空', trigger: 'change' }
							]">
								<el-select v-model="projectData.pj_design" placeholder="硬件设计">
									<el-option label="Elise" value="Elise"></el-option>
									<el-option label="Kog'Maw" value="Kog'Maw"></el-option>
									<el-option label="Driven" value="Driven"></el-option>
									<el-option label="Vampire" value="Vampire"></el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="FW开发" prop="pj_fw_development" :rules="[
							    { required: true, message: 'FW开发不能为空', trigger: 'change' }
							]">
								<el-select v-model="projectData.pj_fw_development" placeholder="FW开发">
									<el-option label="Elise" value="Elise"></el-option>
									<el-option label="Kog'Maw" value="Kog'Maw"></el-option>
									<el-option label="Driven" value="Driven"></el-option>
									<el-option label="Vampire" value="Vampire"></el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="结构件设计" prop="pj_structure_design" :rules="[
							    { required: true, message: '结构件设计不能为空', trigger: 'change' }
							]">
								<el-select v-model="projectData.pj_structure_design" placeholder="结构件设计">
									<el-option label="Elise" value="Elise"></el-option>
									<el-option label="Kog'Maw" value="Kog'Maw"></el-option>
									<el-option label="Driven" value="Driven"></el-option>
									<el-option label="Vampire" value="Vampire"></el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="光器件设计" prop="pj_light_design" :rules="[
							    { required: true, message: '光器件设计不能为空', trigger: 'change' }
							]">
								<el-select v-model="projectData.pj_light_design" placeholder="光器件设计">
									<el-option label="Elise" value="Elise"></el-option>
									<el-option label="Kog'Maw" value="Kog'Maw"></el-option>
									<el-option label="Driven" value="Driven"></el-option>
									<el-option label="Vampire" value="Vampire"></el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="ATE设计" prop="pj_ate_design" :rules="[
							    { required: true, message: 'ATE设计不能为空', trigger: 'change' }
							]">
								<el-select v-model="projectData.pj_ate_design" placeholder="ATE设计">
									<el-option label="Elise" value="Elise"></el-option>
									<el-option label="Kog'Maw" value="Kog'Maw"></el-option>
									<el-option label="Driven" value="Driven"></el-option>
									<el-option label="Vampire" value="Vampire"></el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="DVT测试" prop="pj_dvt_test" :rules="[
							    { required: true, message: 'DVT测试不能为空', trigger: 'change' }
							]">
								<el-select v-model="projectData.pj_dvt_test" placeholder="DVT测试">
									<el-option label="Elise" value="Elise"></el-option>
									<el-option label="Kog'Maw" value="Kog'Maw"></el-option>
									<el-option label="Driven" value="Driven"></el-option>
									<el-option label="Vampire" value="Vampire"></el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="市场部" prop="pj_market" :rules="[
							    { required: true, message: '市场部不能为空', trigger: 'change' }
							]">
								<el-select v-model="projectData.pj_market" placeholder="市场部">
									<el-option label="Elise" value="Elise"></el-option>
									<el-option label="Kog'Maw" value="Kog'Maw"></el-option>
									<el-option label="Driven" value="Driven"></el-option>
									<el-option label="Vampire" value="Vampire"></el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="项目描述" prop="pj_describe" :rules="[
							    { required: true, message: '项目描述不能为空', trigger: 'blur' }
							]">
								<el-input type="textarea" v-model="projectData.pj_describe" placeholder="项目描述"></el-input>
							</el-form-item>
							<el-form-item label="是否显示">
								<el-switch v-model="projectData.pj_show"></el-switch>
							</el-form-item>
							<el-form-item>
								<el-button @click="switchSteps('next')">下一步</el-button>
							</el-form-item>
						</div>
					</div>
					<div v-show="currentStep == 1">
						<div class="remove-form-label-margin">
							<div v-for="(item, key) in projectData.plans" :key="key">
								<el-row :gutter="20">
									<el-col :span="4">
										<el-form-item :prop="'plans.' + key + '.gate'" :rules="[
											{ required: true, message: 'Gate不能为空', trigger: 'blur' }
										]">
											<el-input v-model="item.gate" style="width: 100%;">
												<template slot="prepend">Gate</template>
											</el-input>
										</el-form-item>
									</el-col>
									<el-col :span="6">
										<el-form-item :prop="'plans.' + key + '.mile_stone'" :rules="[
											{ required: true, message: '里程碑不能为空', trigger: 'blur' }
										]">
											<el-input v-model="item.mile_stone" style="width: 100%;" placeholder="里程碑"></el-input>
										</el-form-item>
									</el-col>
									<el-col :span="5">
										<el-form-item :prop="'plans.' + key + '.items'" :rules="[
											{ required: true, message: '节点不能为空', trigger: 'blur' }
										]">
											<el-input v-model="item.items" style="width: 100%;" placeholder="节点"></el-input>
										</el-form-item>
									</el-col>
									<el-col :span="4">
										<el-form-item :prop="'plans.' + key + '.plan_start_time'" :rules="[
											{ required: true, message: '开始时间不能为空', trigger: 'blur' }
										]">
											<el-date-picker
													v-model="item.plan_start_time"
													type="date"
													:editable="false"
													style="width: 100%;"
													placeholder="开始时间">
											</el-date-picker>
										</el-form-item>
									</el-col>
									<el-col :span="4">
										<el-form-item :prop="'plans.' + key + '.plan_stop_time'" :rules="[
											{ required: true, message: '结束时间不能为空', trigger: 'blur' }
										]">
											<el-date-picker
													v-model="item.plan_stop_time"
													type="date"
													:editable="false"
													style="width: 100%;"
													placeholder="结束时间">
											</el-date-picker>
										</el-form-item>
									</el-col>
									<el-col :span="1">
										<el-tooltip class="item" effect="dark" content="删除行" placement="top">
											<el-button type="text" size="small" style="font-size: 20px;" @click="deletePlan(key)"><i class="el-icon-delete"></i></el-button>
										</el-tooltip>
									</el-col>
								</el-row>
							</div>
							<el-form-item>
								<el-button @click="switchSteps('prev')">上一步</el-button>
								<el-button @click="addNewRowPlan">新增行</el-button>
								<el-button type="primary" @click="submitSave('projectData')">保存</el-button>
							</el-form-item>
						</div>
					</div>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
    import { Loading } from 'element-ui'
	export default {
		data() {
			return {
                currentStep: 0,
                projectData: {
					pj_num: '',
					pj_name: '',
					pj_responsible: '',
					pj_management: '',
					pj_fw_development: '',
					pj_design: '',
					pj_structure_design: '',
					pj_dvt_test: '',
					pj_light_design: '',
					pj_ate_design: '',
					pj_market: '',
					pj_family: '',
					pj_type: '',
					pj_standard_name: '',
					pj_platform: '',
					pj_market_demand: '',
					pj_target_customer: '',
					pj_target_cost: '',
					pj_describe: '',
					pj_create_person: '',
					pj_add_pro_time: '',
					pj_show: true,
					pj_child: 0,
					pj_belong: 0,
					plans: [
						{
						    gate: 1,
							mile_stone: '',
							items: '',
							plan_start_time: '',
							plan_stop_time: ''
						}
					]
				}
			}
		},
		methods: {
            onSubmit() {
                console.log('submit')
			},
			switchSteps(action) {
				action == 'next' ? this.currentStep++ : this.currentStep--;
			},
            addNewRowPlan() {
				this.projectData.plans.push({
                    gate: '',
                    mile_stone: '',
                    items: '',
                    plan_start_time: '',
                    plan_stop_time: ''
				})
			},
            deletePlan(key) {
                this.projectData.plans.splice(key, 1)
			},
            submitSave(formName) {
                // 验证表单
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let loadingInstance = Loading.service({
							fullscreen: true,
                            text: '提交数据中'
						})
						// code...
                    } else {
                        this.$message.warning('请检查表单字段填写是否正确')
                        return false
                    }
                });
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
.el-textarea
	textarea
		min-height: 200px

</style>