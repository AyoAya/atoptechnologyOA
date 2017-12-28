<template>
	<div class="layout">
		<div id="header">
			<div class="dt-lf">
				<div class="logo">
					<a href="/"><img src="../../assets/logo.png"></a>
				</div>
			</div>
			<div class="dt-rt">
				<ul>
					<li>
						Administrator 
						<i class="fa fa-angle-down"></i>
						<div class="user-box">
							<dl>
								<dd>个人中心</dd>
								<dd>退出登录</dd>
							</dl>
						</div>
					</li><!-- 利用HTML注释去掉liline-block之间的空隙
					--><li><i class="fa fa-envelope-o"></i></li><!-- 利用HTML注释去掉liline-block之间的空隙
					--><el-tooltip effect="dark" content="报个bug" placement="bottom-end"><li><i class="fa fa-bug"></i></li></el-tooltip>
				</ul>
			</div>
		</div>
		<div id="main">
			<div class="sidebar" ref="sidebar">
				<el-menu
				:default-active="menuActive"
				class="el-menu-vertical-demo"
				background-color="#06060b"
				text-color="#fff"
				:router="true"
				:unique-opened="true"
				active-text-color="#409EFF">
					<el-submenu :index="menu.route" :key="key" v-for="(menu, key) in menulist" v-if="menu.childrens">
						<template slot="title">
							<i :class="menu.icon"></i>
							<span>{{ menu.name }}</span>
						</template>
						<el-menu-item :index="item.route" :key="index" v-for="(item, index) in menu.childrens">{{ item.name }}</el-menu-item>
					</el-submenu>
					<el-menu-item :key="key" :index="menu.route" v-else>
						<i :class="menu.icon"></i>
						<span slot="title">{{ menu.name }}</span>
					</el-menu-item>
				</el-menu>
			</div>
			<div class="context" ref="context">
				<router-view/>
				<div class="copy-info">
					<p>Copyright &copy; 2014-2017 Atop All Rights Reserved.</p>
					<p>Contact: developer.fulwin@outlook.com / chixiang.gong@outlook.com.</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import MenuList from '@/assets/js/menu.js'

	export default {
		created() {
			this.switchMenuActive()
		},
		data() {
			return {
                menuActive: '/dashboard',
				menulist: MenuList,
				isCollapse: false
			}
		},
		watch: {
		    "$route": "switchMenuActive"
		},
		methods: {
            switchMenuActive() {
                let fullPathArr = this.$route.fullPath.split('/')
                let currentPath = fullPathArr.length > 2 ? '/' + fullPathArr[1] + '/' + fullPathArr[2] + '/' + fullPathArr[3] : '/' + fullPathArr[1];
                this.menuActive = currentPath
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
// 引入样式变量文件
@import '../../assets/stylus/variable.styl'

#header
	width: 100%
	height: 50px
	background: #06060b
	color: #bbbbbb
	z-index: 10
	display: table	
	.dt-lf, .dt-rt
		display: table-cell
		vertical-align: top
	.dt-lf
		width: 180px
		text-align: center
		.logo
			margin-top: 12px
	.dt-rt
		text-align: right
		vertical-align: middle
		ul
			margin: 0
			padding: 0
			list-style: none
			color: #fff
			height: 50px
			&:after
				content: ''
				clear: both
			li
				height: 50px
				line-height: 50px
				padding: 0 25px
				cursor: pointer
				display: inline-block
				&:first-child
					cursor: default
					position: relative
					&:hover .user-box
						display: block
					&:before
						content: ''
						clear: both
						display: block
					.user-box
						position: absolute
						top: 50px
						left: 0
						width: 100%
						z-index: 100
						display: none
						background-color: #06060b
						dl
							margin: 0
							padding-bottom: 10px
							dd
								cursor: pointer
								text-align: left
								height: 36px
								line-height: 36px
								margin-left: 25px
								&:hover
									color: primary-color
								&:last-child:hover
									color: danger-color
#main
	position: absolute
	top: 50px
	bottom: 0
	left: 0
	right: 0
	z-index: 10
	.sidebar
		position: absolute
		left: 0
		top: 0
		bottom: 0
		width: 180px
		background: #06060b
		overflow-y: auto
		overflow-x: hidden
		z-index: 20
	.context
		position: absolute
		left: 180px
		right: 0
		top: 0
		bottom: 0
		overflow-y: scroll
		overflow-x: hidden
		background: bd-color
		padding: 20px
		z-index: 30

</style>