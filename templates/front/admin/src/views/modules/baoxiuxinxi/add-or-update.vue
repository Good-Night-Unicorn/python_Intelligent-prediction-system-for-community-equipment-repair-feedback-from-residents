<template>
	<div class="addEdit-block">
		<el-form
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="100px"
		>
			<template >
				<el-form-item class="input" v-if="type!='info'" label="报修编号" prop="bianhao" >
					<el-input v-model="ruleForm.bianhao" placeholder="报修编号" readonly></el-input>
				</el-form-item>
				<el-form-item class="input" v-else-if="ruleForm.bianhao" label="报修编号" prop="bianhao" >
					<el-input v-model="ruleForm.bianhao" placeholder="报修编号" readonly></el-input>
				</el-form-item>
				<el-form-item class="input" v-if="type!='info'"  label="设备名称" prop="shebeiming" >
					<el-input v-model="ruleForm.shebeiming" placeholder="设备名称" clearable  :readonly="ro.shebeiming"></el-input>
				</el-form-item>
				<el-form-item v-else class="input" label="设备名称" prop="shebeiming" >
					<el-input v-model="ruleForm.shebeiming" placeholder="设备名称" readonly></el-input>
				</el-form-item>
				<el-form-item class="input" v-if="type!='info'"  label="设备类型" prop="shebeileixing" >
					<el-input v-model="ruleForm.shebeileixing" placeholder="设备类型" clearable  :readonly="ro.shebeileixing"></el-input>
				</el-form-item>
				<el-form-item v-else class="input" label="设备类型" prop="shebeileixing" >
					<el-input v-model="ruleForm.shebeileixing" placeholder="设备类型" readonly></el-input>
				</el-form-item>
				<el-form-item class="input" v-if="type!='info'"  label="设备位置" prop="shebeiweizhi" >
					<el-input v-model="ruleForm.shebeiweizhi" placeholder="设备位置" clearable  :readonly="ro.shebeiweizhi"></el-input>
				</el-form-item>
				<el-form-item v-else class="input" label="设备位置" prop="shebeiweizhi" >
					<el-input v-model="ruleForm.shebeiweizhi" placeholder="设备位置" readonly></el-input>
				</el-form-item>
				<el-form-item class="upload" v-if="type!='info' && !ro.guzhangzhaopian" label="故障照片" prop="guzhangzhaopian" >
					<file-upload
						tip="点击上传故障照片"
						action="file/upload"
						:limit="3"
						:multiple="true"
						:fileUrls="ruleForm.guzhangzhaopian?ruleForm.guzhangzhaopian:''"
						@change="guzhangzhaopianUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item class="upload" v-else-if="ruleForm.guzhangzhaopian" label="故障照片" prop="guzhangzhaopian" >
					<img v-if="ruleForm.guzhangzhaopian.substring(0,4)=='http'&&ruleForm.guzhangzhaopian.split(',w').length>1" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.guzhangzhaopian" width="100" height="100">
					<img v-else-if="ruleForm.guzhangzhaopian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.guzhangzhaopian.split(',')[0]" width="100" height="100">
					<img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.guzhangzhaopian.split(',')" :src="$base.url+item" width="100" height="100">
				</el-form-item>
				<el-form-item class="select" v-if="type!='info'"  label="紧急程度" prop="jinjichengdu" >
					<el-select :disabled="ro.jinjichengdu" v-model="ruleForm.jinjichengdu" placeholder="请选择紧急程度" >
						<el-option
							v-for="(item,index) in jinjichengduOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item v-else class="input" label="紧急程度" prop="jinjichengdu" >
					<el-input v-model="ruleForm.jinjichengdu"
						placeholder="紧急程度" readonly></el-input>
				</el-form-item>
				<el-form-item class="input" v-if="type!='info'"  label="账号" prop="zhanghao" >
					<el-input v-model="ruleForm.zhanghao" placeholder="账号" clearable  :readonly="ro.zhanghao"></el-input>
				</el-form-item>
				<el-form-item v-else class="input" label="账号" prop="zhanghao" >
					<el-input v-model="ruleForm.zhanghao" placeholder="账号" readonly></el-input>
				</el-form-item>
				<el-form-item class="input" v-if="type!='info'"  label="姓名" prop="fullname" >
					<el-input v-model="ruleForm.fullname" placeholder="姓名" clearable  :readonly="ro.fullname"></el-input>
				</el-form-item>
				<el-form-item v-else class="input" label="姓名" prop="fullname" >
					<el-input v-model="ruleForm.fullname" placeholder="姓名" readonly></el-input>
				</el-form-item>
				<el-form-item class="date" v-if="type!='info'" label="报修时间" prop="baoxiushijian" >
					<el-date-picker
						value-format="yyyy-MM-dd HH:mm:ss"
						v-model="ruleForm.baoxiushijian" 
						type="datetime"
						:readonly="ro.baoxiushijian"
						placeholder="报修时间"
					></el-date-picker>
				</el-form-item>
				<el-form-item class="input" v-else-if="ruleForm.baoxiushijian" label="报修时间" prop="baoxiushijian" >
					<el-input v-model="ruleForm.baoxiushijian" placeholder="报修时间" readonly></el-input>
				</el-form-item>
				<el-form-item class="select" v-if="type!='info'"  label="请求进度" prop="qingqiujindu" >
					<el-select :disabled="ro.qingqiujindu" v-model="ruleForm.qingqiujindu" placeholder="请选择请求进度" >
						<el-option
							v-for="(item,index) in qingqiujinduOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item v-else class="input" label="请求进度" prop="qingqiujindu" >
					<el-input v-model="ruleForm.qingqiujindu"
						placeholder="请求进度" readonly></el-input>
				</el-form-item>
			</template>
			<el-form-item v-if="type!='info'"  label="故障描述" prop="guzhangmiaoshu" >
				<editor 
					style="min-width: 200px; max-width: 600px;"
					v-model="ruleForm.guzhangmiaoshu" 
					class="editor"
					myQuillEditor="guzhangmiaoshu"
					action="file/upload">
				</editor>
			</el-form-item>
			<el-form-item v-else-if="ruleForm.guzhangmiaoshu" label="故障描述" prop="guzhangmiaoshu" >
				<span class="text ql-snow ql-editor" v-html="ruleForm.guzhangmiaoshu"></span>
			</el-form-item>
			<el-form-item class="btn">
				<el-button class="btn3"  v-if="type!='info'" type="success" @click="onSubmit">
					<span class="icon iconfont icon-xihuan"></span>
					提交
				</el-button>
				<el-button class="btn4" v-if="type!='info'" type="success" @click="back()">
					<span class="icon iconfont icon-xihuan"></span>
					取消
				</el-button>
				<el-button class="btn5" v-if="type=='info'" type="success" @click="back()">
					<span class="icon iconfont icon-xihuan"></span>
					返回
				</el-button>
			</el-form-item>
		</el-form>
    

	</div>
</template>
<script>
	export default {
		data() {
			return {
				id: '',
				type: '',
			
			
				ro:{
					bianhao : false,
					shebeiming : false,
					shebeileixing : false,
					shebeiweizhi : false,
					guzhangzhaopian : false,
					jinjichengdu : false,
					guzhangmiaoshu : false,
					zhanghao : false,
					fullname : false,
					baoxiushijian : false,
					qingqiujindu : false,
				},
			
				ruleForm: {
					bianhao: this.getUUID(),
					shebeiming: '',
					shebeileixing: '',
					shebeiweizhi: '',
					guzhangzhaopian: '',
					jinjichengdu: '',
					guzhangmiaoshu: '',
					zhanghao: '',
					fullname: '',
					baoxiushijian: '',
					qingqiujindu: '未处理',
				},
				jinjichengduOptions: [],
				qingqiujinduOptions: [],

				rules: {
					bianhao: [
					],
					shebeiming: [
					],
					shebeileixing: [
					],
					shebeiweizhi: [
					],
					guzhangzhaopian: [
					],
					jinjichengdu: [
					],
					guzhangmiaoshu: [
					],
					zhanghao: [
					],
					fullname: [
					],
					baoxiushijian: [
					],
					qingqiujindu: [
					],
				},
			};
		},
		props: ["parent"],
		computed: {



		},
		components: {
		},
		created() {
			this.ruleForm.baoxiushijian = this.getCurDateTime()
		},
		methods: {
			// 下载
			download(file){
				window.open(`${file}`)
			},
			// 初始化
			init(id,type) {
				if (id) {
					this.id = id;
					this.type = type;
				}
				if(this.type=='info'||this.type=='else'||this.type=='msg'){
					this.info(id);
				}else if(this.type=='logistics'){
					for(let x in this.ro) {
						this.ro[x] = true
					}
					this.logistics=false;
					this.info(id);
				}else if(this.type=='cross'){
					var obj = this.$storage.getObj('crossObj');
					for (var o in obj){
						if(o=='bianhao'){
							this.ruleForm.bianhao = obj[o];
							this.ro.bianhao = true;
							continue;
						}
						if(o=='shebeiming'){
							this.ruleForm.shebeiming = obj[o];
							this.ro.shebeiming = true;
							continue;
						}
						if(o=='shebeileixing'){
							this.ruleForm.shebeileixing = obj[o];
							this.ro.shebeileixing = true;
							continue;
						}
						if(o=='shebeiweizhi'){
							this.ruleForm.shebeiweizhi = obj[o];
							this.ro.shebeiweizhi = true;
							continue;
						}
						if(o=='guzhangzhaopian'){
							this.ruleForm.guzhangzhaopian = obj[o];
							this.ro.guzhangzhaopian = true;
							continue;
						}
						if(o=='jinjichengdu'){
							this.ruleForm.jinjichengdu = obj[o];
							this.ro.jinjichengdu = true;
							continue;
						}
						if(o=='guzhangmiaoshu'){
							this.ruleForm.guzhangmiaoshu = obj[o];
							this.ro.guzhangmiaoshu = true;
							continue;
						}
						if(o=='zhanghao'){
							this.ruleForm.zhanghao = obj[o];
							this.ro.zhanghao = true;
							continue;
						}
						if(o=='fullname'){
							this.ruleForm.fullname = obj[o];
							this.ro.fullname = true;
							continue;
						}
						if(o=='baoxiushijian'){
							this.ruleForm.baoxiushijian = obj[o];
							this.ro.baoxiushijian = true;
							continue;
						}
						if(o=='qingqiujindu'){
							this.ruleForm.qingqiujindu = obj[o];
							this.ro.qingqiujindu = true;
							continue;
						}
					}
					this.ruleForm.qingqiujindu = '未处理'; 				}
				// 获取用户信息
				this.$http({
					url: `${this.$storage.get('sessionTable')}/session`,
					method: "get"
				}).then(({ data }) => {
					if (data && data.code === 0) {
						var json = data.data;
						if(((json.zhanghao!=''&&json.zhanghao) || json.zhanghao==0) && this.$storage.get("role")!="管理员"){
							this.ruleForm.zhanghao = json.zhanghao
							this.ro.zhanghao = true;
						}
						if(((json.fullname!=''&&json.fullname) || json.fullname==0) && this.$storage.get("role")!="管理员"){
							this.ruleForm.fullname = json.fullname
							this.ro.fullname = true;
						}
						if(this.$storage.get("role")!="管理员") {
							this.ro.qingqiujindu = true;
						}
					} else {
						this.$message.error(data.msg);
					}
				});
				this.jinjichengduOptions = "★★★★★,★★★★,★★★,★★,★".split(',')
				this.qingqiujinduOptions = "已处理,未处理".split(',')
			
			},
			// 多级联动参数

			info(id) {
				this.$http({
					url: `baoxiuxinxi/info/${id}`,
					method: "get"
				}).then(({ data }) => {
					if (data && data.code === 0) {
						this.ruleForm = data.data;
						//解决前台上传图片后台不显示的问题
						let reg=new RegExp('../../../upload','g')//g代表全部
						this.ruleForm.guzhangmiaoshu = this.ruleForm.guzhangmiaoshu.replace(reg,'../../../django1pyj28qj/upload');
					} else {
						this.$message.error(data.msg);
					}
				});
			},

			// 提交
			async onSubmit() {
					if(this.ruleForm.bianhao) {
						this.ruleForm.bianhao = String(this.ruleForm.bianhao)
					}
					if(this.ruleForm.guzhangzhaopian!=null) {
						this.ruleForm.guzhangzhaopian = this.ruleForm.guzhangzhaopian.replace(new RegExp(this.$base.url,"g"),"");
					}
					var objcross = this.$storage.getObj('crossObj');
					if(!this.ruleForm.id) {
						delete this.ruleForm.userid
					}
					await this.$refs["ruleForm"].validate(async valid => {
						if (valid) {
							if(this.type=='cross'){
								var statusColumnName = this.$storage.get('statusColumnName');
								var statusColumnValue = this.$storage.get('statusColumnValue');
								if(statusColumnName!='') {
									var obj = this.$storage.getObj('crossObj');
									if(statusColumnName && !statusColumnName.startsWith("[")) {
										for (var o in obj){
											if(o==statusColumnName){
												obj[o] = statusColumnValue;
											}
										}
										var table = this.$storage.get('crossTable');
										await this.$http({
											url: `${table}/update`,
											method: "post",
											data: obj
										}).then(({ data }) => {});
									}
								}
							}
							
							await this.$http({
								url: `baoxiuxinxi/${!this.ruleForm.id ? "save" : "update"}`,
								method: "post",
								data: this.ruleForm
							}).then(async ({ data }) => {
								if (data && data.code === 0) {
									this.$message({
										message: "操作成功",
										type: "success",
										duration: 1500,
										onClose: () => {
											this.parent.showFlag = true;
											this.parent.addOrUpdateFlag = false;
											this.parent.baoxiuxinxiCrossAddOrUpdateFlag = false;
											this.parent.search();
											this.parent.contentStyleChange();
										}
									});
								} else {
									this.$message.error(data.msg);
								}
							});
						}
					});
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			// 返回
			back() {
				this.parent.showFlag = true;
				this.parent.addOrUpdateFlag = false;
				this.parent.baoxiuxinxiCrossAddOrUpdateFlag = false;
				this.parent.contentStyleChange();
			},
			guzhangzhaopianUploadChange(fileUrls) {
				this.ruleForm.guzhangzhaopian = fileUrls;
			},
		}
	};
</script>
<style lang="scss" scoped>
	.addEdit-block {
		border-radius:  0px 0px 10px 10px;
		background-color: rgba(255, 255, 255, 1);
		margin: 0;
	}
	.add-update-preview {
		padding: 50px 60px 20px 60px;
		border-color: #eee;
		border-width: 0px 0 0;
		border-style: solid;
	}
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	.add-update-preview /deep/ .el-form-item {
		border: 0px solid #eee;
		padding: 0;
		margin: 0 0 26px 0;
		display: inline-block;
		width: 100%;
	}
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
		border: 2px solid #858181;
		border-radius: 10px;
		padding: 0 10px 0 0;
		color: #666;
		font-weight: 600;
		width: 100px;
		font-size: 16px;
		line-height: 36px;
		text-align: center;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
		margin-left: 100px;
	}
	.add-update-preview .el-form-item span.text {
		padding: 0;
		margin: 0 0 0 30px;
		color: #333;
		background: none;
		font-weight: 500;
		display: inline-block;
		font-size: 14px;
		line-height: 40px;
		min-width: 50%;
	}
	
	.add-update-preview .el-input {
		margin: 0 0 0 30px;
		width: 100%;
	}
	.add-update-preview .el-input /deep/ .el-input__inner {
		border: 2px solid #858181;
		border-radius: 5px;
		padding: 0 12px;
		color: #000;
		width: 50%;
		font-size: 16px;
		height: 40px;
	}
	.add-update-preview .el-input /deep/ .el-input__inner[readonly="readonly"] {
		border: 0px solid #ccc;
		cursor: not-allowed;
		border-radius: 0px;
		padding: 0 12px;
		color: #999;
		background: none;
		width: auto;
		font-size: 16px;
		height: 40px;
	}
	.add-update-preview .el-input-number {
		text-align: left;
		margin: 0 0 0 30px;
		width: 100%;
	}
	.add-update-preview .el-input-number /deep/ .el-input__inner {
		text-align: left;
		border: 2px solid #858181;
		border-radius: 5px;
		padding: 0 12px;
		color: #000;
		width: 50%;
		font-size: 16px;
		height: 40px;
	}
	.add-update-preview .el-input-number /deep/ .is-disabled .el-input__inner {
		text-align: left;
		border: 0px solid #ccc;
		cursor: not-allowed;
		border-radius: 0px;
		padding: 0 12px;
		color: #999;
		background: none;
		width: auto;
		font-size: 16px;
		height: 40px;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__decrease {
		display: none;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__increase {
		display: none;
	}
	.add-update-preview .el-select {
		width: 50%;
	}
	.add-update-preview .el-select /deep/ .el-input__inner {
		border: 2px solid #858181;
		border-radius: 5px;
		padding: 0 10px;
		margin: 0 0 0 30px;
		color: #000;
		width: 100%;
		font-size: 16px;
		height: 40px;
	}
	.add-update-preview .el-select /deep/ .is-disabled .el-input__inner {
		border: 0;
		cursor: not-allowed;
		border-radius: 4px;
		padding: 0 10px;
		color: #999;
		background: none;
		width: auto;
		font-size: 16px;
		height: 40px;
	}
	.add-update-preview .el-date-editor {
		margin: 0px 0px 0px 30px;
		width: 100%;
	}
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
		border: 2px solid #858181;
		border-radius: 5px;
		padding: 0 10px 0 30px;
		color: #000;
		background: #fff;
		width: 50%;
		font-size: 16px;
		height: 40px;
	}
	.add-update-preview .el-date-editor /deep/ .el-input__inner[readonly="readonly"] {
		border: 0;
		cursor: not-allowed;
		border-radius: 0px;
		padding: 0 10px 0 30px;
		color: #999;
		background: none;
		width: auto;
		font-size: 16px;
		height: 40px;
	}
	.add-update-preview .viewBtn {
		border: 0px solid #ccc;
		cursor: pointer;
		border-radius: 0px;
		padding: 0;
		margin: 0 0px 0 30px;
		color: #000;
		background: #fff;
		width: auto;
		font-size: 14px;
		line-height: 34px;
		height: 34px;
		.iconfont {
			margin: 0 2px;
			color: #666;
			font-size: 16px;
			height: 34px;
		}
	}
	.add-update-preview .viewBtn:hover {
		opacity: 0.8;
	}
	.add-update-preview .downBtn {
		border: 0px solid #ccc;
		cursor: pointer;
		border-radius: 0px;
		padding: 0;
		margin: 0 0 0 30px;
		color: #000;
		background: #fff;
		width: auto;
		font-size: 14px;
		line-height: 34px;
		height: 34px;
		.iconfont {
			margin: 0 2px;
			color: #666;
			font-size: 16px;
			height: 34px;
		}
	}
	.add-update-preview .downBtn:hover {
		opacity: 0.8;
	}
	.add-update-preview .unBtn {
		border: 0;
		cursor: not-allowed;
		border-radius: 4px;
		padding: 0;
		margin: 0 0 0 30px;
		outline: none;
		color: #999;
		background: none;
		width: auto;
		font-size: 14px;
		line-height: 40px;
		height: 40px;
		.iconfont {
			margin: 0 2px;
			color: #fff;
			display: none;
			font-size: 14px;
			height: 34px;
		}
	}
	.add-update-preview .unBtn:hover {
		opacity: 0.8;
	}
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
		border: 2px solid #858181;
		cursor: pointer;
		border-radius: 5px;
		margin: 0 0 0 30px;
		color: #000;
		background: #fff;
		width: 90px;
		font-size: 24px;
		line-height: 60px;
		text-align: center;
		height: 60px;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
		border: 2px solid #858181;
		cursor: pointer;
		border-radius: 5px;
		margin: 0 0 0 30px;
		color: #000;
		background: #fff;
		width: 90px;
		font-size: 24px;
		line-height: 60px;
		text-align: center;
		height: 60px;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
		border: 2px solid #858181;
		cursor: pointer;
		border-radius: 5px;
		margin: 0 0 0 30px;
		color: #000;
		background: #fff;
		width: 90px;
		font-size: 24px;
		line-height: 60px;
		text-align: center;
		height: 60px;
	}
	.add-update-preview /deep/ .el-upload__tip {
		color: #666;
		display: none;
		font-size: 15px;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
		border: 2px solid #858181;
		border-radius: 5px;
		padding: 12px;
		margin: 0 0 0 30px;
		color: #666;
		background: none;
		width: calc(100% - 30px);
		font-size: 14px;
		min-width: 400px;
		height: 120px;
	}
	.add-update-preview .el-textarea /deep/ .el-textarea__inner[readonly="readonly"] {
				border: 0;
				cursor: not-allowed;
				border-radius: 0px;
				padding: 12px;
				margin: 0 0 0 30px;
				color: #999;
				background: none;
				width: auto;
				font-size: 14px;
				min-width: 400px;
				height: auto;
			}
	.add-update-preview .el-form-item.btn {
		padding: 0;
		margin: 20px 0 0;
		.btn1 {
			border: 0px solid #ccc;
			cursor: pointer;
			border-radius: 4px;
			padding: 0 10px;
			margin: 0 10px 0 0;
			color: #fff;
			background: #151628;
			width: auto;
			font-size: 14px;
			min-width: 130px;
			height: 40px;
			.iconfont {
				margin: 0 2px;
				color: #fff;
				display: none;
				font-size: 14px;
				height: 40px;
			}
		}
		.btn1:hover {
			opacity: 0.8;
		}
		.btn2 {
			border: 0px solid #ccc;
			cursor: pointer;
			border-radius: 4px;
			padding: 0 10px;
			margin: 0 10px 0 0;
			color: #fff;
			background: #151628;
			width: auto;
			font-size: 14px;
			min-width: 130px;
			height: 40px;
			.iconfont {
				margin: 0 2px;
				color: #fff;
				display: none;
				font-size: 14px;
				height: 34px;
			}
		}
		.btn2:hover {
			opacity: 0.8;
		}
		.btn3 {
			border: 0px solid #ccc;
			cursor: pointer;
			border-radius: 4px;
			padding: 0 10px;
			margin: 0 10px 0 0;
			color: #fff;
			background: #151628;
			width: auto;
			font-size: 14px;
			min-width: 130px;
			height: 40px;
			.iconfont {
				margin: 0 2px;
				color: #fff;
				display: none;
				font-size: 14px;
				height: 40px;
			}
		}
		.btn3:hover {
			opacity: 0.8;
		}
		.btn4 {
			border: 0px solid #ccc;
			cursor: pointer;
			border-radius: 4px;
			padding: 0 10px;
			margin: 0 10px 0 0;
			color: #fff;
			background: #151628;
			width: auto;
			font-size: 14px;
			min-width: 130px;
			height: 40px;
			.iconfont {
				margin: 0 2px;
				color: #fff;
				display: none;
				font-size: 14px;
				height: 40px;
			}
		}
		.btn4:hover {
			opacity: 0.8;
		}
		.btn5 {
			border: 0px solid #ccc;
			cursor: pointer;
			border-radius: 4px;
			padding: 0 10px;
			margin: 0 10px 0 0;
			color: #fff;
			background: #151628;
			width: auto;
			font-size: 14px;
			min-width: 130px;
			height: 40px;
			.iconfont {
				margin: 0 2px;
				color: #fff;
				display: none;
				font-size: 14px;
				height: 40px;
			}
		}
		.btn5:hover {
			opacity: 0.8;
		}
	}
</style>
