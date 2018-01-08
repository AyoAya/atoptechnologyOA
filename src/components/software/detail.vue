<template>
	<div class="CompatibilityDetail">

		<div class="fl-card">
			<div class="fl-card-header">
				<div class="fl-card-hl">
					<el-breadcrumb separator="/">
						<el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
						<el-breadcrumb-item :to="{ path: '/dashboard/rd/software'}">软件管理</el-breadcrumb-item>
						<el-breadcrumb-item>软件详情</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
			</div>
		</div>

		<div class="xk-card">
			
			<div class="xk-card-left">
				<div class="box-card-item">
					<div><span class="xk-span">版本：</span><span>V5.2 </span></div>
					<div><span class="xk-span">附件：</span><span>
							<a href="##">
								<img src="../../assets/icon_rar.png" style="width:16px;height:16px;display:inline-block;position:relative;top:2px;margin-right:5px;" />APS31123IDL20
							</a>
						</span></div>
					<div><span class="xk-span">发布人：</span><span>何松文</span></div>
					<div><span class="xk-span">发布时间：</span><span>2017-06-28</span></div>
					<div><span class="xk-span" style="display:inline-block;">发布内容：</span><span style="display:inline-block;">1.在之前的版本上增加__DATE__ __TIME__。<br>2.在之前的版本上增加__DATE__ __TIME__。<br>3.在之前的版本上增加__DATE__ __TIME__。</span></div>
				</div>
				<div class="box-card-item">
					<div><span class="xk-span">版本：</span><span>V5.2 </span></div>
					<div><span class="xk-span">附件：</span><span>
							<a href="##">
								<img src="../../assets/icon_rar.png" style="width:16px;height:16px;display:inline-block;position:relative;top:2px;margin-right:5px;" />APS31123IDL20
							</a>
						</span></div>
					<div><span class="xk-span">发布人：</span><span>何松文</span></div>
					<div><span class="xk-span">发布时间：</span><span>2017-06-28</span></div>
					<div><span class="xk-span" style="display:inline-block;">发布内容：</span><span style="display:inline-block;">1.在之前的版本上增加__DATE__ __TIME__。<br>2.在之前的版本上增加__DATE__ __TIME__。<br>3.在之前的版本上增加__DATE__ __TIME__。</span></div>
				</div>
				<div class="box-card-item">
					<div><span class="xk-span">版本：</span><span>V5.2 </span></div>
					<div><span class="xk-span">附件：</span><span>
							<a href="##">
								<img src="../../assets/icon_rar.png" style="width:16px;height:16px;display:inline-block;position:relative;top:2px;margin-right:5px;" />APS31123IDL20
							</a>
						</span></div>
					<div><span class="xk-span">发布人：</span><span>何松文</span></div>
					<div><span class="xk-span">发布时间：</span><span>2017-06-28</span></div>
					<div><span class="xk-span" style="display:inline-block;">发布内容：</span><span style="display:inline-block;">1.在之前的版本上增加__DATE__ __TIME__。<br>2.在之前的版本上增加__DATE__ __TIME__。<br>3.在之前的版本上增加__DATE__ __TIME__。</span></div>
				</div>
			</div>
			
			<div class="xk-card-right">
				<div class="right-fix">
					<div><span class="xk-span">项目类型：</span><span>firmware</span></div>
					<div><span class="xk-span">项目编号：</span><span>FIRM_0010</span></div>
					<div><span class="xk-span">项目名称：</span><span>SFP+ ZR_GN2010E</span></div>
					<div><span class="xk-span">主控MCU：</span><span>ADUC7023</span></div>
					<div><span class="xk-span">版本号：</span><span>V5.2</span></div>
					<div><span class="xk-span">最后更新时间：</span><span>2017-06-28</span></div>
					<div><span class="xk-span">软件说明：</span><span>SFP+ ZR_GN2010E 项目方案固件</span></div>
				</div>
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
.CompatibilityDetail
	.fl-card
		.fl-card-body
			.content-box
				.left-box
					background: red
					width: 100%
					height: 200px
	



.box-card {
	width: 80%;
	margin-bottom:10px;	
}

</style>