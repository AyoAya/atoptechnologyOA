<template>
	<div class="CompatibilityDetail">

		<div class="fl-card">
			<div class="fl-card-header">
				<div class="fl-card-hl">
					<el-breadcrumb separator="/">
						<el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
						<el-breadcrumb-item :to="{ path: '/dashboard/rd/compatibility'}">兼容表</el-breadcrumb-item>
						<el-breadcrumb-item>兼容表详情</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
			</div>
		</div>


		<div class="xk-card">
			
			<div class="xk-card-left">
				<div class="box-card-item">
					<div><span class="xk-span">设备品牌：</span><span>Arista</span></div>
					<div><span class="xk-span">设备型号：</span><span>APS31123IDL20</span></div>
					<div><span class="xk-span">状态：</span><span>完全兼容</span></div>
					<div><span class="xk-span">版本：</span><span>V2.521</span></div>
					<div><span class="xk-span">原厂型号：</span><span>FP/PIN</span></div>
					<div><span class="xk-span">备注：</span><span>或更早的版本不支持 标签</span></div>
					<div><span class="xk-span">添加人：</span><span>Administrator</span></div>
					<div><span class="xk-span">添加时间：</span><span>2017-12-11</span></div>
				</div>
				<div class="box-card-item">
					<div><span class="xk-span">设备品牌：</span><span>Arista</span></div>
					<div><span class="xk-span">设备型号：</span><span>APS31123IDL20</span></div>
					<div><span class="xk-span">状态：</span><span>完全兼容</span></div>
					<div><span class="xk-span">版本：</span><span>V2.521</span></div>
					<div><span class="xk-span">原厂型号：</span><span>FP/PIN</span></div>
					<div><span class="xk-span">备注：</span><span>或更早的版本不支持 标签或更不支持 标签</span></div>
					<div><span class="xk-span">添加人：</span><span>Administrator</span></div>
					<div><span class="xk-span">添加时间：</span><span>2017-12-11</span></div>
				</div>
				<div class="box-card-item">
					<div><span class="xk-span">设备品牌：</span><span>Arista</span></div>
					<div><span class="xk-span">设备型号：</span><span>APS31123IDL20</span></div>
					<div><span class="xk-span">状态：</span><span>完全兼容</span></div>
					<div><span class="xk-span">版本：</span><span>V2.521</span></div>
					<div><span class="xk-span">原厂型号：</span><span>FP/PIN</span></div>
					<div><span class="xk-span">备注：</span><span>或更早的版本不支持 标签或更不支持 标签</span></div>
					<div><span class="xk-span">添加人：</span><span>Administrator</span></div>
					<div><span class="xk-span">添加时间：</span><span>2017-12-11</span></div>
				</div>
			</div>
			
			<div class="xk-card-right">
				<div class="right-fix">
					<div><span class="xk-span">封装类型：</span><span>SFP</span></div>
					<div><span class="xk-span">产品型号：</span><span>APS31123IDL20</span></div>
					<div><span class="xk-span">速率：</span><span>Up to 1.25G</span></div>
					<div><span class="xk-span">波长：</span><span>1310nm</span></div>
					<div><span class="xk-span">光组件：</span><span>FP/PIN</span></div>
					<div><span class="xk-span">发端功率：</span><span>-9~-3dBm</span></div>
					<div><span class="xk-span">接收灵敏度：</span><span>-25dBm</span></div>	
					<div><span class="xk-span">接口：</span><span>LC</span></div>
					<div><span class="xk-span">温度范围：</span><span>I</span></div>
					<div><span class="xk-span">20km：</span><span>20km</span></div>
					<div><span class="xk-span">多速率支持：</span><span>Y</span></div>
					<div><span class="xk-span">产品经理：</span><span>杨培云</span></div>
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