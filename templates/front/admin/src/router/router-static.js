import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
	import shebeileixing from '@/views/modules/shebeileixing/list'
	import news from '@/views/modules/news/list'
	import baoxiuxinxi from '@/views/modules/baoxiuxinxi/list'
	import baoxiurenwu from '@/views/modules/baoxiurenwu/list'
	import shequrenyuan from '@/views/modules/shequrenyuan/list'
	import yonghu from '@/views/modules/yonghu/list'
	import fankuipingjia from '@/views/modules/fankuipingjia/list'
	import fankuipingjiaforecast from '@/views/modules/fankuipingjiaforecast/list'
	import shebeixinxi from '@/views/modules/shebeixinxi/list'
	import syslog from '@/views/modules/syslog/list'
	import config from '@/views/modules/config/list'
	import newstype from '@/views/modules/newstype/list'


//2.配置路由   注意：名字
export const routes = [{
	path: '/',
	name: '系统首页',
	component: Index,
	children: [{
		// 这里不设置值，是把main作为默认页面
		path: '/',
		name: '系统首页',
		component: Home,
		meta: {icon:'', title:'center', affix: true}
	}, {
		path: '/updatePassword',
		name: '修改密码',
		component: UpdatePassword,
		meta: {icon:'', title:'updatePassword'}
	}, {
		path: '/pay',
		name: '支付',
		component: pay,
		meta: {icon:'', title:'pay'}
	}, {
		path: '/center',
		name: '个人信息',
		component: center,
		meta: {icon:'', title:'center'}
	}
	,{
		path: '/shebeileixing',
		name: '设备类型',
		component: shebeileixing
	}
	,{
		path: '/news',
		name: '公告信息',
		component: news
	}
	,{
		path: '/baoxiuxinxi',
		name: '报修信息',
		component: baoxiuxinxi
	}
	,{
		path: '/baoxiurenwu',
		name: '报修任务',
		component: baoxiurenwu
	}
	,{
		path: '/shequrenyuan',
		name: '社区人员',
		component: shequrenyuan
	}
	,{
		path: '/yonghu',
		name: '用户',
		component: yonghu
	}
	,{
		path: '/fankuipingjia',
		name: '反馈评价',
		component: fankuipingjia
	}
	,{
		path: '/fankuipingjiaforecast',
		name: '满意度预测',
		component: fankuipingjiaforecast
	}
	,{
		path: '/shebeixinxi',
		name: '设备信息',
		component: shebeixinxi
	}
	,{
		path: '/syslog',
		name: '系统日志',
		component: syslog
	}
	,{
		path: '/config',
		name: '轮播图管理',
		component: config
	}
	,{
		path: '/newstype',
		name: '公告信息分类',
		component: newstype
	}
	]
	},
	{
		path: '/login',
		name: 'login',
		component: Login,
		meta: {icon:'', title:'login'}
	},
	{
		path: '/register',
		name: 'register',
		component: register,
		meta: {icon:'', title:'register'}
	},
	{
		path: '*',
		component: NotFound
	}
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
	mode: 'hash',
	/*hash模式改为history*/
	routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}
export default router;
