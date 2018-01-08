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
import SoftwareCreate from '@/components/software/create'
import SoftwareDetail from '@/components/software/detail'
import Compatibility from '@/components/compatibility/index'
import CompatibilityCreate from '@/components/compatibility/create'
import CompatibilityDetail from '@/components/compatibility/detail'
import CompatibilityEdit from '@/components/compatibility/edit'

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
			{
				path: 'rd/compatibility/create',
      			name: '创建兼容表',
				component: CompatibilityCreate,
				meta: { requireAuth: true }
			},
			{
				path: 'rd/compatibility/detail',
      			name: '兼容表详情',
				component: CompatibilityDetail,
				meta: { requireAuth: true }
			},
			{
				path: 'rd/compatibility/edit',
      			name: '编辑兼容表',
				component: CompatibilityEdit,
				meta: { requireAuth: true }
			},
			{
				path: 'rd/software/create',
      			name: '添加软件',
				component: SoftwareCreate,
				meta: { requireAuth: true }
			},
			{
				path: 'rd/software/detail',
      			name: '软件详情',
				component: SoftwareDetail,
				meta: { requireAuth: true }
			},
      ]
    },
  ]
})
