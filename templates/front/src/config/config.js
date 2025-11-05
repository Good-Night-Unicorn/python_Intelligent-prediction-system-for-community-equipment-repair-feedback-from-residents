export default {
	baseUrl: 'http://localhost:8080/django1pyj28qj/',
	name: '/django1pyj28qj',
	indexNav: [
		{
			name: '设备信息',
			url: '/index/shebeixinxi',
		},
		{
			name: '公告信息',
			url: '/index/news'
		},
	],
	cateList: [
		{
			name: '公告信息',
			refTable: 'newstype',
			refColumn: 'typename',
		},
	]
}
