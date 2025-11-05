import VueRouter from 'vue-router'
//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import shequrenyuanList from '../pages/shequrenyuan/list'
import shequrenyuanDetail from '../pages/shequrenyuan/detail'
import shequrenyuanAdd from '../pages/shequrenyuan/add'
import shebeixinxiList from '../pages/shebeixinxi/list'
import shebeixinxiDetail from '../pages/shebeixinxi/detail'
import shebeixinxiAdd from '../pages/shebeixinxi/add'
import shebeileixingList from '../pages/shebeileixing/list'
import shebeileixingDetail from '../pages/shebeileixing/detail'
import shebeileixingAdd from '../pages/shebeileixing/add'
import baoxiuxinxiList from '../pages/baoxiuxinxi/list'
import baoxiuxinxiDetail from '../pages/baoxiuxinxi/detail'
import baoxiuxinxiAdd from '../pages/baoxiuxinxi/add'
import baoxiurenwuList from '../pages/baoxiurenwu/list'
import baoxiurenwuDetail from '../pages/baoxiurenwu/detail'
import baoxiurenwuAdd from '../pages/baoxiurenwu/add'
import fankuipingjiaList from '../pages/fankuipingjia/list'
import fankuipingjiaDetail from '../pages/fankuipingjia/detail'
import fankuipingjiaAdd from '../pages/fankuipingjia/add'
import fankuipingjiaforecastList from '../pages/fankuipingjiaforecast/list'
import fankuipingjiaforecastDetail from '../pages/fankuipingjiaforecast/detail'
import fankuipingjiaforecastAdd from '../pages/fankuipingjiaforecast/add'
import syslogList from '../pages/syslog/list'
import syslogDetail from '../pages/syslog/detail'
import syslogAdd from '../pages/syslog/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'shequrenyuan',
					component: shequrenyuanList
				},
				{
					path: 'shequrenyuanDetail',
					component: shequrenyuanDetail
				},
				{
					path: 'shequrenyuanAdd',
					component: shequrenyuanAdd
				},
				{
					path: 'shebeixinxi',
					component: shebeixinxiList
				},
				{
					path: 'shebeixinxiDetail',
					component: shebeixinxiDetail
				},
				{
					path: 'shebeixinxiAdd',
					component: shebeixinxiAdd
				},
				{
					path: 'shebeileixing',
					component: shebeileixingList
				},
				{
					path: 'shebeileixingDetail',
					component: shebeileixingDetail
				},
				{
					path: 'shebeileixingAdd',
					component: shebeileixingAdd
				},
				{
					path: 'baoxiuxinxi',
					component: baoxiuxinxiList
				},
				{
					path: 'baoxiuxinxiDetail',
					component: baoxiuxinxiDetail
				},
				{
					path: 'baoxiuxinxiAdd',
					component: baoxiuxinxiAdd
				},
				{
					path: 'baoxiurenwu',
					component: baoxiurenwuList
				},
				{
					path: 'baoxiurenwuDetail',
					component: baoxiurenwuDetail
				},
				{
					path: 'baoxiurenwuAdd',
					component: baoxiurenwuAdd
				},
				{
					path: 'fankuipingjia',
					component: fankuipingjiaList
				},
				{
					path: 'fankuipingjiaDetail',
					component: fankuipingjiaDetail
				},
				{
					path: 'fankuipingjiaAdd',
					component: fankuipingjiaAdd
				},
				{
					path: 'fankuipingjiaforecast',
					component: fankuipingjiaforecastList
				},
				{
					path: 'fankuipingjiaforecastDetail',
					component: fankuipingjiaforecastDetail
				},
				{
					path: 'fankuipingjiaforecastAdd',
					component: fankuipingjiaforecastAdd
				},
				{
					path: 'syslog',
					component: syslogList
				},
				{
					path: 'syslogDetail',
					component: syslogDetail
				},
				{
					path: 'syslogAdd',
					component: syslogAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
