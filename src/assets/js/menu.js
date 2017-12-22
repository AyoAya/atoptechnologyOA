const Menu = [
	{
		name: '首页',
		icon: 'fa fa-tachometer',
		route: '/dashboard'
	},
	{
		name: '研发管理',
		icon: 'fa fa-cube',
		route: '/dashboard',
		childrens: [
			{
				name: '项目管理',
				route: '/dashboard/rd/project'
			},
			{
				name: '样品管理',
				route: '/dashboard/rd/sample'
			},
			{
				name: '产品管理',
				route: '/dashboard/rd/product'
			},
			{
				name: '软件管理',
				route: '/dashboard/rd/software'
			},
			{
				name: '兼容表',
				route: '/dashboard/rd/compatibility'
			},
		]
	},
	{
		name: 'PLM',
		icon: 'fa fa-folder-open',
		route: '/dashboard/plm',
		childrens: [
			{
				name: '文件管理',
				route: '/dashboard/plm/file'
			},
		]
	},
	{
		name: '文档中心',
		icon: 'fa fa-send',
		route: '/dashboard/dcc'
	},
	{
		name: '缩略词',
		icon: 'fa fa-tags',
		route: '/dashboard/acronym'
	},
	{
		name: '客诉处理',
		icon: 'fa fa-comments',
		route: '/dashboard/rma'
	},
	{
		name: 'HRA',
		icon: 'fa fa-address-book-o',
		route: '/dashboard/hra',
		childrens: [
			{
				name: '公告栏',
				route: '/dashboard/hra/file'
			},
			{
				name: '用户管理',
				route: '/dashboard/hra/user'
			},
		]
	},
	{
		name: '系统',
		icon: 'fa fa-cog',
		route: '/dashboard/system'
	},

]


export default Menu