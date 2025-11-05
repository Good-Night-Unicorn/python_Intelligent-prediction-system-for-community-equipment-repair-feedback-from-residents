<template>
	<div class="home-preview">




		<!-- 新闻资讯 -->
		<div id="animate_newsnews" class="news animate__animated">
			<div class="news_title_box">
				<span class="news_title">公告信息</span>
				<span class="news_subhead">{{'news'.toUpperCase()}}</span>
			</div>
			<div class="list list24 index-pv1">
				<div class="list-item">
					<img :src="baseUrl + newsList[0].picture" />
					<div class="infoBox">
						<div class="name">{{newsList[0].title}}<div class="line"></div></div>
						<div class="desc">{{newsList[0].introduction}}</div>
						<div class="more_btn" @click="toDetail('newsDetail', newsList[0])">
							<span class="icon iconfont icon-jiantou18"></span>
						</div>
					</div>
				</div>
				<div class="rightView">
					<div class="topView">
						<div class="list-item1">
							<img :src="baseUrl + newsList[1].picture" />
							<div class="infoBox">
								<div class="name">{{newsList[1].title}}<div class="line"></div></div>
								<div class="desc">{{newsList[1].introduction}}</div>
								<div class="more_btn" @click="toDetail('newsDetail', newsList[1])">
									<span class="icon iconfont icon-jiantou18"></span>
								</div>
							</div>
						</div>
						<div class="list-item2">
							<img :src="baseUrl + newsList[2].picture" />
							<div class="infoBox">
								<div class="name">{{newsList[2].title}}<div class="line"></div></div>
								<div class="desc">{{newsList[2].introduction}}</div>
								<div class="more_btn" @click="toDetail('newsDetail', newsList[2])">
									<span class="icon iconfont icon-jiantou18"></span>
								</div>
							</div>
						</div>
					</div>
					<div class="bottomView">
						<div class="list-item1">
							<img :src="baseUrl + newsList[3].picture" />
							<div class="infoBox">
								<div class="name">{{newsList[3].title}}<div class="line"></div></div>
								<div class="desc">{{newsList[3].introduction}}</div>
								<div class="more_btn" @click="toDetail('newsDetail', newsList[3])">
									<span class="icon iconfont icon-jiantou18"></span>
								</div>
							</div>
						</div>
						<div class="list-item2">
							<img :src="baseUrl + newsList[4].picture" />
							<div class="infoBox">
								<div class="name">{{newsList[4].title}}<div class="line"></div></div>
								<div class="desc">{{newsList[4].introduction}}</div>
								<div class="more_btn" @click="toDetail('newsDetail', newsList[4])">
									<span class="icon iconfont icon-jiantou18"></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="moreBtn" @click="moreBtn('news')">
				<span class="text">查看更多</span>
				<i class="icon iconfont icon-gengduo1"></i>
			</div>
		</div>
		<!-- 新闻资讯 -->
		<!-- 特价商品 -->
		<div id="animate_listshebeixinxi" class="lists animate__animated">
			<div class="list_title_box">
				<span class="list_title">设备信息展示</span>
				<span class="list_subhead">{{'shebeixinxi'.toUpperCase()}} SHOW</span>
			</div>
			<div class="list list23 index-pv1">
				<div class="list-body">
					<div class="list-body-top" v-if="shebeixinxiList.length>0">
						<div class="img">
							<img v-if="preHttp(shebeixinxiList[0].shebeitupian)" :src="shebeixinxiList[0].shebeitupian.split(',')[0]" alt="" />
							<img v-else :src="baseUrl + (shebeixinxiList[0].shebeitupian?shebeixinxiList[0].shebeitupian.split(',')[0]:'')" alt="" />
						</div>
						<div class="infoBox">
							<div class="name">{{shebeixinxiList[0].shebeiming}}</div>
							<div class="desc ql-snow ql-editor" v-html="shebeixinxiList[0].shebeixiangqing"></div>

							<div class="centerInfo">
								<div class="time_item">
									<span class="icon iconfont icon-shijian21"></span>
									<span class="label">发布时间：</span>
									<span class="text">{{shebeixinxiList[0].addtime.split(' ')[0]}}</span>
								</div>
							</div>
							<div class="bottomInfo">
								<div class="more_btn" @click="toDetail('shebeixinxiDetail', shebeixinxiList[0])">
									<span class="text">查看更多</span>
									<span class="icon iconfont icon-gengduo1"></span>
								</div>
							</div>
						</div>
					</div>
					<div class="list-body-bottom" v-if="shebeixinxiList.length>1">
						<div v-if="index>0&&index< Number(7)" class="list-item" v-for="(item,index) in shebeixinxiList" :key="index" @click="toDetail('shebeixinxiDetail', item)">
							<div class="img">
								<img v-if="preHttp(item.shebeitupian)" :src="item.shebeitupian.split(',')[0]" alt="" />
								<img v-else :src="baseUrl + (item.shebeitupian?item.shebeitupian.split(',')[0]:'')" alt="" />
							</div>
							<div class="infoBox">
								<div class="name">{{item.shebeiming}}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="moreBtn" @click="moreBtn('shebeixinxi')">
				<span class="text">查看更多</span>
				<i class="icon iconfont icon-gengduo1"></i>
			</div>
	

		</div>
		<!-- 特价商品 -->
	</div>
</template>

<script>
import 'animate.css'
import Swiper from "swiper";

	export default {
		//数据集合
		data() {
			return {
				baseUrl: '',
				newsList: [],

				shebeixinxiList: [],




			}
		},
		created() {
			this.baseUrl = this.$config.baseUrl;
			this.getNewsList();
			this.getList();
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll)
			setTimeout(()=>{
				this.handleScroll()
			},100)
			
			this.swiperChanges()
		},
		beforeDestroy() {
			window.removeEventListener('scroll', this.handleScroll)
		},
		//方法集合
		methods: {
			swiperChanges() {
				setTimeout(()=>{
				},750)
			},
			async recommendIndexClick18(index, name) {
				this['recommendIndex18' + name] = index
				await this.getList()
			},

			listIndexClick23(index, name) {
				this['listIndex23' + name] = index
				this.getList()
			},

			handleScroll() {
				let arr = [
					{id:'about',css:'animate__'},
					{id:'system',css:'animate__'},
					{id:'animate_listshebeixinxi',css:'animate__'},
					{id:'animate_newsnews',css:'animate__'},
				]
			
				for (let i in arr) {
					let doc = document.getElementById(arr[i].id)
					if (doc) {
						let top = doc.offsetTop
						let win_top = window.innerHeight + window.pageYOffset
						// console.log(top,win_top)
						if (win_top > top && doc.classList.value.indexOf(arr[i].css) < 0) {
							// console.log(doc)
							doc.classList.add(arr[i].css)
						}
					}
				}
			},
			preHttp(str) {
				return str && str.substr(0,4)=='http';
			},
			preHttp2(str) {
				return str && str.split(',w').length>1;
			},
			getNewsList() {
				let data = {
					page: 1,
					limit: 5,
					sort: 'addtime',
					order: 'desc'
				}
				this.$http.get('news/list', {params: data}).then(res => {
					if (res.data.code == 0) {
						this.newsList = res.data.data.list;
					
					}
				});
			},
			getList() {
				let autoSortUrl = "";
				let data = {}
			
				data = {
					page: 1,
					limit: 4,
				}

				this.$http.get('shebeixinxi/list', {params: data}).then(res => {
					if (res.data.code == 0) {
						this.shebeixinxiList = res.data.data.list;
					}
				});
			},
			toDetail(path, item) {
				this.$router.push({path: '/index/' + path, query: {id: item.id}});
			},
			moreBtn(path) {
				this.$router.push({path: '/index/' + path});
			}
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
		margin: 0px auto;
		flex-direction: column;
		background: none;
		display: flex;
		width: 100%;
		.news {
			padding: 0;
			margin: 0;
			background: url(http://codegen.caihongy.cn/20250114/8e7f511887714d26abfe4910f1feee65.jpg) no-repeat center top / cover;
			width: 100%;
			position: relative;
			order: 3;
			.news_title_box {
				padding: 0 calc((100% - 1200px)/2);
				margin: 20px 0 0;
				background: url(http://codegen.caihongy.cn/20250112/99761fb2e0a740c488bc04759c62d038.png) no-repeat center top;
				width: 100%;
				position: relative;
				text-align: left;
				.news_title {
					margin: 0 0 0 10px;
					color: #000;
					background: none;
					font-weight: 600;
					display: inline-block;
					width: 100%;
					font-size: 28px;
					line-height: 80px;
					text-align: left;
					height: 108px;
				}
				.news_subhead {
					margin: 0;
					color: #999;
					display: none;
					width: 100%;
					font-size: 18px;
					line-height: 40px;
					text-align: center;
				}
			}
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
			.list24 {
				margin: 40px auto;
				overflow: hidden;
				display: flex;
				width: 1200px;
				.list-item {
					cursor: pointer;
					margin: 0 20px 0 0;
					width: calc(36% - 20px);
					position: relative;
					height: 675px;
					img {
						object-fit: cover;
						width: 100%;
						height: 100%;
					}
					.infoBox {
						padding: 40px 20px;
						z-index: 20;
						top: 0;
						left: 0;
						background: rgba(0,0,0,0.5);
						width: 100%;
						position: absolute;
						opacity: 0;
						transition: 0.4s all;
						text-align: left;
						height: 100%;
						.name {
							margin: 0 0 0.9em;
							overflow: hidden;
							color: #fff;
							white-space: nowrap;
							font-weight: normal;
							width: 100%;
							font-size: 16px;
							line-height: 60px;
							position: relative;
							text-overflow: ellipsis;
							text-align: center;
							.line {
								left: 0;
								bottom: 0;
								background: url(http://codegen.caihongy.cn/20250116/595b0344958b425d88b2e644f6dd4ac9.png) no-repeat center top / 100% 100%;
								display: block;
								width: 100%;
								position: absolute;
								height: 4px;
							}
						}
						.desc {
							margin: 0 0 1.7em;
							overflow: hidden;
							color: #fff;
							font-size: 14px;
							line-height: 1.7em;
							height: 6.8em;
						}
						.more_btn {
							border: 1px solid #fff;
							cursor: pointer;
							border-radius: 50%;
							display: none;
							width: 30px;
							justify-content: center;
							align-items: center;
							height: 30px;
							.icon {
								color: #fff;
								font-size: 14px;
							}
						}
					}
				}
				.list-item:hover {
					.infoBox {
						opacity: 1;
					}
				}
				.rightView {
					width: 64%;
					position: relative;
					height: 100%;
					.topView {
						overflow: hidden;
						display: flex;
						width: 100%;
						height: 325px;
						.list-item1 {
							cursor: pointer;
							margin: 0 20px 0 0;
							width: calc(59% - 20px);
							position: relative;
							height: 100%;
							img {
								object-fit: cover;
								width: 100%;
								height: 100%;
							}
							.infoBox {
								padding: 20px 20px;
								z-index: 20;
								top: 0;
								left: 0;
								background: rgba(0,0,0,0.5);
								width: 100%;
								position: absolute;
								opacity: 0;
								transition: 0.4s all;
								text-align: left;
								height: 100%;
								.name {
									margin: 0 0 0.9em;
									overflow: hidden;
									color: #fff;
									white-space: nowrap;
									font-weight: normal;
									width: 100%;
									font-size: 16px;
									line-height: 60px;
									position: relative;
									text-overflow: ellipsis;
									text-align: center;
									.line {
										left: 0;
										bottom: 0;
										background: url(http://codegen.caihongy.cn/20250116/595b0344958b425d88b2e644f6dd4ac9.png) no-repeat center top / 100% 100%;
										display: block;
										width: 100%;
										position: absolute;
										height: 4px;
									}
								}
								.desc {
									margin: 0 0 1.7em;
									overflow: hidden;
									color: #fff;
									font-size: 14px;
									line-height: 1.7em;
									height: 6.8em;
								}
								.more_btn {
									border: 1px solid #fff;
									cursor: pointer;
									border-radius: 50%;
									display: none;
									width: 30px;
									justify-content: center;
									align-items: center;
									height: 30px;
									.icon {
										color: #fff;
										font-size: 14px;
									}
								}
							}
						}
						.list-item1:hover {
							.infoBox {
								opacity: 1;
							}
						}
						.list-item2 {
							cursor: pointer;
							width: 41%;
							position: relative;
							height: 100%;
							img {
								object-fit: cover;
								width: 100%;
								height: 100%;
							}
							.infoBox {
								padding: 20px 20px;
								z-index: 20;
								top: 0;
								left: 0;
								background: rgba(0,0,0,0.5);
								width: 100%;
								position: absolute;
								opacity: 0;
								transition: 0.4s all;
								text-align: left;
								height: 100%;
								.name {
									margin: 0 0 0.9em;
									overflow: hidden;
									color: #fff;
									white-space: nowrap;
									font-weight: normal;
									width: 100%;
									font-size: 16px;
									line-height: 60px;
									position: relative;
									text-overflow: ellipsis;
									text-align: center;
									.line {
										left: 0;
										bottom: 0;
										background: url(http://codegen.caihongy.cn/20250116/595b0344958b425d88b2e644f6dd4ac9.png) no-repeat center top / 100% 100%;
										display: block;
										width: 100%;
										position: absolute;
										height: 4px;
									}
								}
								.desc {
									margin: 0 0 1.7em;
									overflow: hidden;
									color: #fff;
									font-size: 14px;
									line-height: 1.7em;
									height: 6.8em;
								}
								.more_btn {
									border: 1px solid #fff;
									cursor: pointer;
									border-radius: 50%;
									display: none;
									width: 30px;
									justify-content: center;
									align-items: center;
									height: 30px;
									.icon {
										color: #fff;
										font-size: 14px;
									}
								}
							}
						}
						.list-item2:hover {
							.infoBox {
								opacity: 1;
							}
						}
					}
					.bottomView {
						margin: 20px 0 0;
						overflow: hidden;
						display: flex;
						width: 100%;
						height: 330px;
						.list-item1 {
							cursor: pointer;
							margin: 0 20px 0 0;
							width: calc(41% - 20px);
							position: relative;
							height: 100%;
							img {
								object-fit: cover;
								width: 100%;
								height: 100%;
							}
							.infoBox {
								padding: 20px 20px;
								z-index: 20;
								top: 0;
								left: 0;
								background: rgba(0,0,0,0.5);
								width: 100%;
								position: absolute;
								opacity: 0;
								transition: 0.4s all;
								text-align: left;
								height: 100%;
								.name {
									margin: 0 0 0.9em;
									overflow: hidden;
									color: #fff;
									white-space: nowrap;
									font-weight: normal;
									width: 100%;
									font-size: 16px;
									line-height: 60px;
									position: relative;
									text-overflow: ellipsis;
									text-align: center;
									.line {
										left: 0;
										bottom: 0;
										background: url(http://codegen.caihongy.cn/20250116/595b0344958b425d88b2e644f6dd4ac9.png) no-repeat center top / 100% 100%;
										display: block;
										width: 100%;
										position: absolute;
										height: 4px;
									}
								}
								.desc {
									margin: 0 0 1.7em;
									overflow: hidden;
									color: #fff;
									font-size: 14px;
									line-height: 1.7em;
									height: 6.8em;
								}
								.more_btn {
									border: 1px solid #fff;
									cursor: pointer;
									border-radius: 50%;
									display: none;
									width: 30px;
									justify-content: center;
									align-items: center;
									height: 30px;
									.icon {
										color: #fff;
										font-size: 14px;
									}
								}
							}
						}
						.list-item1:hover {
							.infoBox {
								opacity: 1;
							}
						}
						.list-item2 {
							cursor: pointer;
							width: 59%;
							position: relative;
							height: 100%;
							img {
								object-fit: cover;
								width: 100%;
								height: 100%;
							}
							.infoBox {
								padding: 20px 20px;
								z-index: 20;
								top: 0;
								left: 0;
								background: rgba(0,0,0,0.5);
								width: 100%;
								position: absolute;
								opacity: 0;
								transition: 0.4s all;
								text-align: left;
								height: 100%;
								.name {
									margin: 0 0 0.9em;
									overflow: hidden;
									color: #fff;
									white-space: nowrap;
									font-weight: normal;
									width: 100%;
									font-size: 16px;
									line-height: 60px;
									position: relative;
									text-overflow: ellipsis;
									text-align: center;
									.line {
										left: 0;
										bottom: 0;
										background: url(http://codegen.caihongy.cn/20250116/595b0344958b425d88b2e644f6dd4ac9.png) no-repeat center top / 100% 100%;
										display: block;
										width: 100%;
										position: absolute;
										height: 4px;
									}
								}
								.desc {
									margin: 0 0 1.7em;
									overflow: hidden;
									color: #fff;
									font-size: 14px;
									line-height: 1.7em;
									height: 6.8em;
								}
								.more_btn {
									border: 1px solid #fff;
									cursor: pointer;
									border-radius: 50%;
									display: none;
									width: 30px;
									justify-content: center;
									align-items: center;
									height: 30px;
									.icon {
										color: #fff;
										font-size: 14px;
									}
								}
							}
						}
						.list-item2:hover {
							.infoBox {
								opacity: 1;
							}
						}
					}
				}
			}
			.moreBtn {
				border: 0px solid #999;
				padding: 0 20px;
				margin: 40px 0 0;
				top: 0;
				background: url(http://codegen.caihongy.cn/20250112/55553c0e61c3471dad21215503ce8827.png) no-repeat center top / 100% 100%;
				display: block;
				width: 150px;
				line-height: 48px;
				position: absolute;
				right: calc((100% - 1200px)/2);
				text-align: center;
				order: 3;
				.text {
					color: #848c74;
					font-size: 16px;
				}
				.icon {
					color: #333;
					display: none;
					font-size: 15px;
				}
			}
		}
		.lists {
			padding: 0;
			margin: 0;
			background: url(http://codegen.caihongy.cn/20250114/8e7f511887714d26abfe4910f1feee65.jpg) no-repeat center top / cover;
			width: 100%;
			position: relative;
			order: 9;
			.list_title_box {
				padding: 0 calc((100% - 1200px)/2);
				margin: 20px 0 0;
				background: url(http://codegen.caihongy.cn/20250112/99761fb2e0a740c488bc04759c62d038.png) no-repeat center top;
				width: 100%;
				position: relative;
				text-align: left;
				.list_title {
					margin: 0 0 0 10px;
					color: #000;
					background: none;
					font-weight: 600;
					display: inline-block;
					width: 100%;
					font-size: 28px;
					line-height: 80px;
					text-align: left;
					height: 108px;
				}
				.list_subhead {
					margin: 0;
					color: #999;
					display: none;
					width: 100%;
					font-size: 18px;
					line-height: 40px;
					text-align: center;
				}
			}
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
			.list23 {
				padding: 0;
				margin: 0 auto;
				overflow: hidden;
				background: none;
				width: 1220px;
				.tab_view {
					margin: 30px 0 0;
					display: flex;
					width: calc(100% - 20px);
					justify-content: center;
					align-items: center;
					.tab {
						border: 0px solid #03abe930;
						border-radius: 5px;
						padding: 2px 10px;
						margin: 0 10px;
						background: #b1b1b1;
						display: flex;
						justify-content: center;
						align-items: center;
						transition: 0.3s;
						min-width: 96px;
						img {
							border-radius: 50%;
							margin: 0 10px 0 0;
							width: 40px;
							transition: 0.3s;
							height: 40px;
						}
						.text {
							color: #000;
							display: block;
							font-size: 16px;
							line-height: 50px;
							transition: 0.3s;
							text-align: center;
							height: 50px;
						}
					}
					.tab:hover {
						border: 0px solid #03abe9;
						cursor: pointer;
						color: #000;
						background: #848c74;
						min-width: 96px;
						img {
							border-radius: 50%;
						}
						.text {
							color: #fff;
						}
					}
					.tab.tabActive {
						border: 0px solid #03abe9;
						cursor: pointer;
						color: #000;
						background: #848c74;
						min-width: 96px;
						img {
							border-radius: 50%;
						}
						.text {
							color: #fff;
						}
					}
				}
				.list-body {
					margin: 40px 0 0;
					.list-body-top {
						margin: 0 auto;
						display: flex;
						width: calc(100% - 20px);
						justify-content: space-between;
						align-items: center;
						.img {
							overflow: hidden;
							width: 600px;
							height: 450px;
							img {
								object-fit: cover;
								width: 100%;
								transition: all 0.3s;
								height: 100%;
							}
						}
						.infoBox {
							padding: 40px 30px;
							flex: 1;
							background: #fff;
							box-sizing: border-box;
							height: 450px;
							.name {
								overflow: hidden;
								color: #848c74;
								white-space: nowrap;
								font-weight: 600;
								width: 100%;
								font-size: 16px;
								line-height: 30px;
								text-overflow: ellipsis;
							}
							.desc {
								margin: 20px 0;
								color: #666;
								width: 100%;
								font-size: 15px;
								line-height: 1.8;
								text-align: justify;
								height: auto !important;
							}
							.centerInfo {
								color: #888;
								display: flex;
								width: 100%;
								font-size: 15px;
								flex-wrap: wrap;
								.time_item {
									padding: 0 10px 0 0;
									order: 11;
									.icon {
										margin: 0 2px 0 0;
										line-height: 1.5;
									}
									.label {
										line-height: 1.5;
									}
									.text {
										line-height: 1.5;
									}
								}
								.publisher_item {
									padding: 0 10px 0 0;
									.icon {
										margin: 0 2px 0 0;
										line-height: 1.5;
									}
									.label {
										line-height: 1.5;
									}
									.text {
										line-height: 1.5;
									}
								}
								.like_item {
									padding: 0 10px 0 0;
									.icon {
										margin: 0 2px 0 0;
										line-height: 1.5;
									}
									.label {
										line-height: 1.5;
									}
									.text {
										line-height: 1.5;
									}
								}
								.collect_item {
									padding: 0 10px 0 0;
									.icon {
										margin: 0 2px 0 0;
										line-height: 1.5;
									}
									.label {
										line-height: 1.5;
									}
									.text {
										line-height: 1.5;
									}
								}
								.view_item {
									padding: 0;
									.icon {
										margin: 0 2px 0 0;
										line-height: 1.5;
									}
									.label {
										line-height: 1.5;
									}
									.text {
										line-height: 1.5;
									}
								}
							}
							.bottomInfo {
								margin: 20px 0 0;
								display: flex;
								justify-content: space-between;
								align-items: center;
								.more_btn {
									border: 0px solid #ccc;
									color: #333;
									display: flex;
									font-size: 16px;
									line-height: 48px;
									transition: 0.2s;
									border-radius: 0px;
									background: url(http://codegen.caihongy.cn/20250120/520f1242c48c4b92806eac7f0ddb9e48.png) no-repeat center / 100% 100%;
									width: 150px;
									justify-content: center;
									align-items: center;
									text-align: center;
									height: 40px;
									order: 2;
									.text {
										padding: 0 5px 0 0;
										color: #666;
										font-size: 16px;
									}
									.icon {
										color: #666;
										font-size: 12px;
									}
								}
								.more_btn:hover {
									transition: all 0s;
									.text {
									}
									.icon {
									}
								}
								.price {
									margin: 10px 0 0;
									color: #c92200;
									font-size: 16px;
									.price_text {
										color: #c92200;
										font-weight: bold;
										display: inline-block;
										font-size: 32px;
									}
								}
							}
						}
					}
					.list-body-bottom {
						margin: 29px 0 0;
						display: flex;
						flex-wrap: wrap;
						.list-item {
							padding: 0 0 5px;
							margin: 0 10px 20px;
							background: #fff;
							width: calc(33.33% - 20px);
							.img {
								overflow: hidden;
								width: 100%;
								height: 200px;
								img {
									object-fit: cover;
									width: 100%;
									transition: 0.3s;
									height: 100%;
								}
							}
							.infoBox {
								padding: 0 19px 5px;
								background: none;
								display: block;
								width: 100%;
								justify-content: space-between;
								align-items: center;
								position: relative;
								box-sizing: border-box;
								transition: 0.3s;
								height: auto;
								.name {
									overflow: hidden;
									max-width: calc(100% - 110px);
									white-space: nowrap;
									background: none;
									width: auto;
									font-size: 15px;
									line-height: 34px;
									text-overflow: ellipsis;
									transition: 0.3s;
									height: 30px;
								}
								.price {
									color: #c92200;
									white-space: nowrap;
									bottom: 0px;
									background: none;
									width: auto;
									font-size: 16px;
									position: absolute;
									right: 10px;
									transition: 0.3s;
									text-align: right;
									.price_text {
										color: #c92200;
										font-weight: bold;
										display: inline-block;
										font-size: 24px;
										transition: 0.3s;
									}
								}
							}
						}
						.list-item:hover {
							cursor: pointer;
							.img {
								img {
									transform: scale(1.1);
								}
							}
							.infoBox {
								background: none;
								transition: all 0s;
								.name {
									color: #333;
								}
								.price {
									color: #c92200;
									.price_text {
										color: #c92200;
									}
								}
							}
						}
					}
				}
			}
			.moreBtn {
				border: 0px solid #999;
				padding: 0 20px;
				margin: 40px 0 0;
				top: 0;
				background: url(http://codegen.caihongy.cn/20250112/55553c0e61c3471dad21215503ce8827.png) no-repeat center top / 100% 100%;
				display: block;
				width: 150px;
				line-height: 48px;
				position: absolute;
				right: calc((100% - 1200px)/2);
				text-align: center;
				order: 3;
				.text {
					color: #848c74;
					font-size: 16px;
				}
				.icon {
					color: #333;
					display: none;
					font-size: 15px;
				}
			}
		}
	}
</style>
