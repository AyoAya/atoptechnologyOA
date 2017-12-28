<template>
	<div class="ProjectIndex">
		<div class="fl-card">
			<div class="fl-card-header">
				<div class="fl-card-hl">
					<el-breadcrumb separator="/">
						<el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
						<el-breadcrumb-item>项目管理</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
				<div class="fl-card-hr">
					<el-button type="text" @click="handleCreate">创建项目</el-button>
					<el-input v-model="search" placeholder="搜索" size="small">
						<i slot="prefix" class="el-input__icon el-icon-search"></i>
					</el-input>
				</div>
			</div>
		</div>
		<div class="fl-card">
			<div class="fl-card-body">
				<el-table :data="projects" style="width: 100%">
					<el-table-column prop="projectNo" label="项目编号" :show-overflow-tooltip="true"></el-table-column>
					<el-table-column prop="projectName" label="项目名称" :show-overflow-tooltip="true"></el-table-column>
					<el-table-column prop="createdAt" label="创建时间" :show-overflow-tooltip="true"></el-table-column>
					<el-table-column prop="rps" label="负责人"></el-table-column>
					<el-table-column width="190" label="操作">
						<template slot-scope="scope">
							<el-button-group>
								<el-button type="default" size="mini" @click="handleView(scope.$index, scope.row)">查看</el-button>
								<el-button type="default" size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
								<el-button type="danger" size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
							</el-button-group>
						</template>
					</el-table-column>
				</el-table>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				search: '',
				projects: [
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
					},
				]
			}
		},
		methods: {
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
	
</style>