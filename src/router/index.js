import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout/layout'
import Project from '@/components/project/index'
import ProjectCreate from '@/components/project/create'
import ProjectEdit from '@/components/project/edit'
import ProjectDetail from '@/components/project/detail'
import Sample from '@/components/sample/index'
import Product from '@/components/product/index'
import Software from '@/components/software/index'
import Compatibility from '@/components/compatibility/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: '首页',
      component: Layout,
      children: [
			{
				path: 'rd/project',
      			name: '项目管理',
				component: Project,
				meta: { requireAuth: true }
			},
			{
				path: 'rd/project/detail',
				name: '项目详情',
				component: ProjectDetail,
				meta: { requireAuth: true }
			},
			{
				path: 'rd/project/create',
				name: '创建项目',
				component: ProjectCreate,
				meta: { requireAuth: true }
			},
			{
				path: 'rd/project/edit/:id',
				name: '编辑项目',
				component: ProjectEdit,
				meta: { requireAuth: true }
			},
			{
				path: 'rd/sample',
      			name: '样品管理',
				component: Sample,
				meta: { requireAuth: true }
			},
			{
				path: 'rd/product',
      			name: '产品管理',
				component: Product,
				meta: { requireAuth: true }
			},
			{
				path: 'rd/software',
      			name: '软件管理',
				component: Software,
				meta: { requireAuth: true }
			},
			{
				path: 'rd/compatibility',
      			name: '兼容表',
				component: Compatibility,
				meta: { requireAuth: true }
			},
      ]
    },
  ]
})
