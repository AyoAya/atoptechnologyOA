<template>
	<div class="CompatibilityCreate">

		<div class="fl-card">
			<div class="fl-card-header">
				<div class="fl-card-hl">
					<el-breadcrumb separator="/">
						<el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
						<el-breadcrumb-item :to="{ path: '/dashboard/rd/compatibility' }">兼容表</el-breadcrumb-item>
						<el-breadcrumb-item>编辑兼容记录</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
				
			</div>
		</div>

		<div class="fl-card">
			<div class="fl-card-body">

				<el-form ref="form" :model="form" label-width="80px">
				  <el-form-item label="产品型号">
				    <el-input v-model="form.name"></el-input>
				  </el-form-item>

				  <el-form-item label="设备厂商">
				    <el-select v-model="form.region" placeholder="请选择设备厂商" style="width:100%;">
				      <el-option label="N/A" value="N/A"></el-option>
				      <el-option label="3COM" value="3COM"></el-option>
				    </el-select>
				  </el-form-item>

				  <el-form-item label="设备型号">
				    <el-input v-model="form.name"></el-input>
				  </el-form-item>

				  <el-form-item label="状态">
				    <el-select v-model="form.state" placeholder="请选择状态" style="width:100%;">
				      <el-option label="完全兼容" value="完全兼容"></el-option>
				      <el-option label="能够使用" value="能够使用"></el-option>
				      <el-option label="不能兼容" value="不能兼容"></el-option>
				    </el-select>
				  </el-form-item>

				  <el-form-item label="版本">
				    <el-input v-model="form.version"></el-input>
				  </el-form-item>


				  <el-form-item label="原厂型号">
				    <el-input v-model="form.version"></el-input>
				  </el-form-item>

				  <el-form-item label="备注">
				    <el-input type="textarea" v-model="form.content"></el-input>
				  </el-form-item>

				  <el-form-item>
				    <el-button type="primary" @click="onSubmit">立即提交 </el-button>
				    <el-button>取消</el-button>
				  </el-form-item>
				</el-form>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				search : '',
				  form: {
			          name: '',
			          region: 'N/A',
			          delivery: false,
			          type: [],
			          state: '完全兼容',
			          resource: '',
			          version: '',
			          desc: ''
		        }

			}
		
		},
		methods: {
	        onSubmit() {
    			console.log('submit!');
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
.fl-card
	.fl-card-body
		.el-form
			width:700px
	
	

</style>