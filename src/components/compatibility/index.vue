<template>
	<div class="CompatibilityIndex">

		<div class="fl-card">
			<div class="fl-card-header">
				<div class="fl-card-hl">
					<el-breadcrumb separator="/">
						<el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
						<el-breadcrumb-item>兼容表</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
				<div class="fl-card-hr">
					<el-button type="text" @click="handleCreate">添加兼容记录</el-button>
					<el-input v-model="search" placeholder="搜索" size="small">
						<i slot="prefix" class="el-input__icon el-icon-search"></i>
					</el-input>
				</div>
			</div>
		</div>

		<div class="fl-card">
			<div class="fl-card-body">
				<el-table :data="projects" style="width: 100%">
					<el-table-column prop="projectNo" label="产品型号" :show-overflow-tooltip="true"></el-table-column>
					<el-table-column prop="projectName" label="设备品牌" :show-overflow-tooltip="true"></el-table-column>
					<el-table-column prop="modelNo" label="设备型号" :show-overflow-tooltip="true"></el-table-column>
					<el-table-column prop="state" label="状态" :show-overflow-tooltip="true"></el-table-column>
					<el-table-column prop="version" label="版本" :show-overflow-tooltip="true"></el-table-column>
					<el-table-column prop="soruce" label="原厂型号" :show-overflow-tooltip="true"></el-table-column>
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
				search : '',
				projects: [
					{
						projectNo: 'APS31123IDL20',
						projectName: 'Arista',
						modelNo: 'DCS-7050SX-64-F',
						state: '完全兼容' ,
						version: '4.15.4F',
						soruce: 'AOC-Q-Q-40G-20M' ,
					},
				]
			}
		
		},
		methods: {
			handleView() {
				this.$router.push('/dashboard/rd/compatibility/detail')
			},
	        handleEdit() {
			    this.$router.push('/dashboard/rd/compatibility/edit')
			},
	        handleCreate() {
			    this.$router.push('/dashboard/rd/compatibility/create')
			},
	        handleDelete() {
			  	 this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		          this.$message({
		            type: 'success',
		            message: '删除成功!'
		          });
		        }).catch(() => {
		                    
		        });
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
// 引入样式变量文件
@import '../../assets/stylus/variable.styl'

.top
	width: 100%
	height: 10%
	position: fixed
	

</style>