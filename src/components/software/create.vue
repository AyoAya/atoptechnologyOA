<template>
	<div class="CompatibilityCreate">

		<div class="fl-card">
			<div class="fl-card-header">
				<div class="fl-card-hl">
					<el-breadcrumb separator="/">
						<el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
						<el-breadcrumb-item :to="{ path: '/dashboard/rd/software' }">软件管理</el-breadcrumb-item>
						<el-breadcrumb-item>添加软件</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
				
			</div>
		</div>

		<div class="fl-card">
			<div class="fl-card-body">

				<el-form ref="form" :model="form" label-width="80px">
					<el-form-item label="软件类型">
					    <el-select v-model="form.type" placeholder="请选择软件类型" style="width:100%;">
					      <el-option label="firmware" value="firmware">firmware</el-option>
					      <el-option label="ATE" value="ATE"></el-option>
					    </el-select>
					</el-form-item>

					 <el-form-item label="项目编号">
					    <el-input v-model="form.number" placeholder="请输入项目编号"></el-input>
					 </el-form-item>


					 <el-form-item label="项目名称">
					    <el-input v-model="form.name" placeholder="请输入项目名称"></el-input>
					 </el-form-item>

					 <el-form-item label="主控MCU">
					    <el-input v-model="form.mcu" placeholder="请输入主控MCU"></el-input>
					 </el-form-item>

					 <el-form-item label="备注">
					    <el-input type="textarea" v-model="form.content" placeholder="备注信息"></el-input>
					 </el-form-item>

					 <el-form-item>
				    <el-button type="primary" @click="onSubmit">立即创建</el-button>
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
            search: "",
            form: {
                name: "",
                type: "firmware",
                number: "",
                type: "",
                state: "完全兼容",
                version: ""
            }
        };
    },
    methods: {
        onSubmit() {
            //console.log('submit!');
        }
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
// 引入样式变量文件
@import '../../assets/stylus/variable.styl';

.top {
	width: 100%;
	height: 10%;
	position: fixed;
}

.fl-card {
	.fl-card-body {
		.el-form {
			width: 700px;
		}
	}
}
</style>