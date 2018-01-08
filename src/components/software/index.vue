<template>
	<div class="SoftwareIndex">
		<div class="fl-card">
			<div class="fl-card-header">
				<div class="fl-card-hl">
					<el-breadcrumb separator="/">
						<el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
						<el-breadcrumb-item>软件管理</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
				<div class="fl-card-hr">
					<el-button type="text" @click="handleCreate">添加软件</el-button>
					<el-input v-model="search" placeholder="搜索" size="small">
						<i slot="prefix" class="el-input__icon el-icon-search"></i>
					</el-input>
				</div>

			</div>
		</div>

		<div class="fl-card">
			<div class="fl-card-body">
				<template>
					<el-tabs v-model="activeName" type="card" @tab-click="tabClick">
					    <el-tab-pane label="firmware" name="firmware">
							<template>
								<el-table :data="firmwareData" style="width: 100%">
									<el-table-column prop="type" label="项目类型" width="100"> </el-table-column>
									<el-table-column prop="number"label="项目编号" width="180"> </el-table-column>
									<el-table-column prop="name" label="项目名称"> </el-table-column>
									<el-table-column prop="mcu" label="主控MCU"> </el-table-column>
									<el-table-column prop="version" label="版本号"> </el-table-column>
									<el-table-column prop="last_time" label="最后更新时间"> </el-table-column>
									<el-table-column width="" label="操作">
										<template slot-scope="scope">
											<el-button-group>
												<el-button type="default" size="mini" @click="handleView(scope.$index, scope.row)">查看</el-button>
												<el-button type="danger" size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
											</el-button-group>
										</template>
									</el-table-column>
								</el-table>
							</template>
	   			 		</el-tab-pane>

					    <el-tab-pane label="ATE" name="ATE">
					    	<template>
								<el-table :data="ATEData" style="width: 100%">
									<el-table-column prop="type" label="项目类型"> </el-table-column>
									<el-table-column prop="number" label="项目编号"> </el-table-column>
									<el-table-column prop="name" label="项目名称"> </el-table-column>
									<el-table-column prop="mcu" label="主控MCU"> </el-table-column>
									<el-table-column prop="version" label="版本号"> </el-table-column>
									<el-table-column prop="last_time" label="最后更新时间"> </el-table-column>
									<el-table-column width="" label="操作">
										<template slot-scope="scope">
											<el-button-group>
												<el-button type="default" size="mini" @click="handleView(scope.$index, scope.row)">查看</el-button>
												<el-button type="danger" size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
											</el-button-group>
										</template>
									</el-table-column>
								</el-table>
							</template>
					    </el-tab-pane>
					</el-tabs>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				search: '', 
				activeName:'firmware',
				firmwareData: [{
					type: 'firmware',
					number: 'FIRM_0010',
					name: 'SFP+ ZR_GN2010E',
					mcu: 'ADUC7023',
					version: 'V5.2',
					last_time: '2017-06-28'
				}, {
					type: 'firmware',
					number: 'FIRM_0010',
					name: 'SFP+ ZR_GN2010E',
					mcu: 'ADUC7023',
					version: 'V5.2',
					last_time: '2017-06-28'
				}, {
					type: 'firmware',
					number: 'FIRM_0010',
					name: 'SFP+ ZR_GN2010E',
					mcu: 'ADUC7023',
					version: 'V5.2',
					last_time: '2017-06-28'
				}, {
					type: 'firmware',
					number: 'FIRM_0010',
					name: 'SFP+ ZR_GN2010E',
					mcu: 'ADUC7023',
					version: 'V5.2',
					last_time: '2017-06-28'
				}],

				ATEData: [{
					type: 'ATE',
					number: 'PATE0001',
					name: 'EVB Manual',
					mcu: '',
					version: 'V4.7.2.3',
					last_time: '2017-07-11'
				}, {
					type: 'ATE',
					number: 'PATE0001',
					name: 'EVB Manual',
					mcu: '',
					version: 'V4.7.2.3',
					last_time: '2017-07-11'
				}, {
					type: 'ATE',
					number: 'PATE0001',
					name: 'EVB Manual',
					mcu: '',
					version: 'V4.7.2.3',
					last_time: '2017-07-11'
				}, {
					type: 'ATE',
					number: 'PATE0001',
					name: 'EVB Manual',
					mcu: '',
					version: 'V4.7.2.3',
					last_time: '2017-07-11'
				}],
			}
		},
		methods: {

	        handleCreate() {
		   		this.$router.push('/dashboard/rd/software/create')
			},
	        handleView() {
		   		this.$router.push('/dashboard/rd/software/detail')
			},

			tabClick(tab, event) {
				//console.log(tab, event);
			},
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	
</style>