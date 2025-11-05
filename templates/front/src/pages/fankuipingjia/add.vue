<template>
	<div class="add-update-preview">
		<el-form
			class="add-update-form"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="180px"
			>
			<el-form-item class="add-item" label="报修编号" prop="bianhao">
				<el-input v-model="ruleForm.bianhao" 
					placeholder="报修编号" clearable :disabled=" false  ||ro.bianhao"></el-input>
			</el-form-item>
			<el-form-item class="add-item" label="设备名称" prop="shebeiming">
				<el-input v-model="ruleForm.shebeiming" 
					placeholder="设备名称" clearable :disabled=" false  ||ro.shebeiming"></el-input>
			</el-form-item>
			<el-form-item class="add-item" label="设备类型" prop="shebeileixing">
				<el-input v-model="ruleForm.shebeileixing" 
					placeholder="设备类型" clearable :disabled=" false  ||ro.shebeileixing"></el-input>
			</el-form-item>
			<el-form-item class="add-item" label="社区账号" prop="shequzhanghao">
				<el-input v-model="ruleForm.shequzhanghao" 
					placeholder="社区账号" clearable :disabled=" false  ||ro.shequzhanghao"></el-input>
			</el-form-item>
			<el-form-item class="add-item" label="人员姓名" prop="renyuanming">
				<el-input v-model="ruleForm.renyuanming" 
					placeholder="人员姓名" clearable :disabled=" false  ||ro.renyuanming"></el-input>
			</el-form-item>
			<el-form-item class="add-item" label="反馈图片" v-if="type!='cross' || (type=='cross' && !ro.fankuitupian)" prop="fankuitupian">
				<file-upload
					tip="点击上传反馈图片"
					action="file/upload"
					:limit="3"
					:multiple="true"
					:fileUrls="ruleForm.fankuitupian?ruleForm.fankuitupian:''"
					@change="fankuitupianUploadChange"
					></file-upload>
			</el-form-item>
			<el-form-item class="add-item" v-else label="反馈图片" prop="fankuitupian">
				<img v-if="ruleForm.fankuitupian.substring(0,4)=='http'" class="upload-img" v-bind:key="index" :src="ruleForm.fankuitupian.split(',')[0]">
				<img v-else class="upload-img" v-bind:key="index" v-for="(item,index) in ruleForm.fankuitupian.split(',')" :src="baseUrl+item">
			</el-form-item>
			<el-form-item class="add-item" label="维修时长\小时" prop="weixiushichang">
				<el-input v-model.number="ruleForm.weixiushichang" 
					placeholder="维修时长\小时" clearable :disabled=" false  ||ro.weixiushichang"></el-input>
			</el-form-item>
			<el-form-item class="add-item"  label="满意度" prop="score">
				<el-select v-model="ruleForm.score" placeholder="请选择满意度" :disabled=" false  ||ro.score" >
					<el-option
						v-for="(item,index) in scoreOptions"
						:key="index"
						:label="item"
						:value="item">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item class="add-item" label="评价" prop="evaluate">
				<el-input v-model="ruleForm.evaluate" 
					placeholder="评价" clearable :disabled=" false  ||ro.evaluate"></el-input>
			</el-form-item>
			<el-form-item class="add-item"  label="处理结果" prop="chulijieguo">
				<el-select v-model="ruleForm.chulijieguo" placeholder="请选择处理结果" :disabled=" false  ||ro.chulijieguo" >
					<el-option
						v-for="(item,index) in chulijieguoOptions"
						:key="index"
						:label="item"
						:value="item">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item class="add-item" label="账号" prop="zhanghao">
				<el-input v-model="ruleForm.zhanghao" 
					placeholder="账号" clearable :disabled=" false  ||ro.zhanghao"></el-input>
			</el-form-item>
			<el-form-item class="add-item" label="住户" prop="fullname">
				<el-input v-model="ruleForm.fullname" 
					placeholder="住户" clearable :disabled=" false  ||ro.fullname"></el-input>
			</el-form-item>

			<el-form-item class="add-btn-item">
				<el-button class="submitBtn"  type="primary" @click="onSubmit">
					<span class="icon iconfont "></span>
					<span class="text">提交</span>
				</el-button>
				<el-button class="closeBtn" @click="back()">
					<span class="icon iconfont "></span>
					<span class="text">取消</span>
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
				baseUrl: '',
				ro:{
					bianhao : false,
					shebeiming : false,
					shebeileixing : false,
					shequzhanghao : false,
					renyuanming : false,
					fankuitupian : false,
					weixiushichang : false,
					score : false,
					evaluate : false,
					chulijieguo : false,
					zhanghao : false,
					fullname : false,
				},
				type: '',
				userTableName: localStorage.getItem('UserTableName'),
				ruleForm: {
					bianhao: '',
					shebeiming: '',
					shebeileixing: '',
					shequzhanghao: '',
					renyuanming: '',
					fankuitupian: '',
					weixiushichang: '',
					score: '',
					evaluate: '',
					chulijieguo: '',
					zhanghao: '',
					fullname: '',
				},
				scoreOptions: [],
				chulijieguoOptions: [],


				rules: {
					bianhao: [
					],
					shebeiming: [
					],
					shebeileixing: [
					],
					shequzhanghao: [
					],
					renyuanming: [
					],
					fankuitupian: [
					],
					weixiushichang: [
						{ validator: this.$validate.isIntNumer, trigger: 'blur' },
					],
					score: [
					],
					evaluate: [
					],
					chulijieguo: [
					],
					zhanghao: [
					],
					fullname: [
					],
				},
				centerType: false,
			};
		},
		computed: {



		},
		components: {
		},
		created() {
			if(this.$route.query.centerType){
				this.centerType = true
			}
			//this.bg();
			let type = this.$route.query.type ? this.$route.query.type : '';
			this.init(type);
			this.baseUrl = this.$config.baseUrl;
		},
		methods: {
			getMakeZero(s) {
				return s < 10 ? '0' + s : s;
			},
			// 下载
			download(file){
				window.open(`${file}`)
			},
			// 初始化
			init(type) {
				this.type = type;
				if(type=='cross'){
					var obj = JSON.parse(localStorage.getItem('crossObj'));
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
						if(o=='shequzhanghao'){
							this.ruleForm.shequzhanghao = obj[o];
							this.ro.shequzhanghao = true;
							continue;
						}
						if(o=='renyuanming'){
							this.ruleForm.renyuanming = obj[o];
							this.ro.renyuanming = true;
							continue;
						}
						if(o=='fankuitupian'){
							this.ruleForm.fankuitupian = obj[o].split(",")[0];
							this.ro.fankuitupian = true;
							continue;
						}
						if(o=='weixiushichang'){
							this.ruleForm.weixiushichang = obj[o];
							this.ro.weixiushichang = true;
							continue;
						}
						if(o=='score'){
							this.ruleForm.score = obj[o];
							this.ro.score = true;
							continue;
						}
						if(o=='evaluate'){
							this.ruleForm.evaluate = obj[o];
							this.ro.evaluate = true;
							continue;
						}
						if(o=='chulijieguo'){
							this.ruleForm.chulijieguo = obj[o];
							this.ro.chulijieguo = true;
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
					}
				}else if(type=='edit'){
					this.info()
				}
				// 获取用户信息
				this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
					if (res.data.code == 0) {
						var json = res.data.data;
						if((json.zhanghao!=''&&json.zhanghao) || json.zhanghao==0){
							this.ruleForm.zhanghao = json.zhanghao;
							this.ro.zhanghao = true;
						}
						if((json.fullname!=''&&json.fullname) || json.fullname==0){
							this.ruleForm.fullname = json.fullname;
							this.ro.fullname = true;
						}
					}
				});
				this.scoreOptions = "满意,一般,不满意".split(',')
				this.chulijieguoOptions = "已解决,未解决".split(',')

				if (localStorage.getItem('raffleType') && localStorage.getItem('raffleType') != null) {
					localStorage.removeItem('raffleType')
					setTimeout(() => {
						this.onSubmit()
					}, 300)
				}
			},

			// 多级联动参数
			// 多级联动参数
			info() {
				this.$http.get(`fankuipingjia/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
					if (res.data.code == 0) {
						this.ruleForm = res.data.data;
					}
				});
			},
			// 提交
			async onSubmit() {
				if(!this.ruleForm.id) {
					delete this.ruleForm.userid
				}
				await this.$refs["ruleForm"].validate(async valid => {
					if(valid) {
						if(this.type=='cross'){
							var statusColumnName = localStorage.getItem('statusColumnName');
							var statusColumnValue = localStorage.getItem('statusColumnValue');
							if(statusColumnName && statusColumnName!='') {
								var obj = JSON.parse(localStorage.getItem('crossObj'));
								if(!statusColumnName.startsWith("[")) {
									for (var o in obj){
										if(o==statusColumnName){
											obj[o] = statusColumnValue;
										}
									}
									var table = localStorage.getItem('crossTable');
									await this.$http.post(table+'/update', obj).then(res => {});
								}
							}
						}


						await this.$http.post(`fankuipingjia/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(async res => {
							if (res.data.code == 0) {
								this.$message({
									message: '操作成功',
									type: 'success',
									duration: 1500,
									onClose: () => {
										this.$router.go(-1);
										
									}
								});
							} else {
								this.$message({
									message: res.data.msg,
									type: 'error',
									duration: 1500
								});
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
				this.$router.go(-1);
			},
			fankuitupianUploadChange(fileUrls) {
				this.ruleForm.fankuitupian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
			},
		}
	};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.add-update-preview {
		padding: 0 0 20px;
		margin: 0px auto;
		color: #666;
		background: #f6f6f6;
		width: 1200px;
		font-size: 16px;
		position: relative;
		.add-update-form {
			border: 0px solid #fcbb78;
			padding: 20px;
			margin: 20px 0;
			background: #fff;
			width: 100%;
			position: relative;
			.add-item.el-form-item {
				border-radius: 0px;
				padding: 6px 0 0;
				margin: 0 0 20px 0;
				background: none;
				border-color: #475a8310;
				border-width:  0 0 0px;
				border-style: solid;
				/deep/ .el-form-item__label {
					padding: 0 10px 0 0;
					color: #666;
					font-weight: 500;
					width: 180px;
					font-size: inherit;
					line-height: 40px;
					text-align: right;
				}
				/deep/ .el-form-item__content {
					margin-left: 180px;
				}
				.el-input {
					width: auto;
				}
				.el-input /deep/ .el-input__inner {
					border: 1px solid #ddd;
					border-radius: 4px;
					padding: 0 12px;
					box-shadow: none;
					color: inherit;
					width: auto;
					font-size: 16px;
					height: 40px;
				}
				.el-input /deep/ .el-input__inner[readonly="readonly"] {
					border: 0;
					cursor: not-allowed;
					border-radius: 0px;
					padding: 0 12px;
					box-shadow: none;
					color: rgba(85, 85, 127, 1.0);
					background: none;
					width: auto;
					font-size: 16px;
					height: 40px;
				}
				.el-input-number /deep/ .el-input__inner {
					text-align: left;
					border: 1px solid #ddd;
					border-radius: 4px;
					padding: 0 12px;
					box-shadow: none;
					color: inherit;
					width: auto;
					font-size: 16px;
					height: 40px;
				}
				.el-input-number /deep/ .is-disabled .el-input__inner {
					text-align: left;
					border: 0;
					cursor: not-allowed;
					border-radius: 0px;
					padding: 0 12px;
					box-shadow: none;
					color: rgba(85, 85, 127, 1.0);
					background: none;
					width: auto;
					font-size: 16px;
					height: 40px;
				}
				.el-input-number /deep/ .el-input-number__decrease {
					display: none;
				}
				.el-input-number /deep/ .el-input-number__increase {
					display: none;
				}
				.el-select {
					width: auto;
				}
				.el-select /deep/ .el-input__inner {
					border: 1px solid #ddd;
					border-radius: 4px;
					padding: 0 10px;
					color: inherit;
					width: 100%;
					font-size: 16px;
					min-width: inherit !important;
					height: 40px;
				}
				.el-select /deep/ .is-disabled .el-input__inner {
					border: 0;
					cursor: not-allowed;
					border-radius: 0px;
					padding: 0 10px;
					box-shadow: none;
					color: inherit;
					background: none;
					width: 100%;
					font-size: 16px;
					height: 40px;
				}
				.el-date-editor {
					width: auto;
				}
				.el-date-editor /deep/ .el-input__inner {
					border: 1px solid #ddd;
					border-radius: 4px;
					padding: 0 10px 0 30px;
					box-shadow: none;
					color: inherit;
					width: auto;
					font-size: 16px;
					height: 40px;
				}
				.el-date-editor /deep/ .el-input__inner[readonly="readonly"] {
					border: 0;
					cursor: not-allowed;
					border-radius: 0px;
					padding: 0 10px 0 30px;
					box-shadow: none;
					color: inherit;
					background: none;
					width: auto;
					font-size: 16px;
					height: 40px;
				}
				/deep/ .el-upload--picture-card {
					background: transparent;
					border: 0;
					border-radius: 0;
					width: auto;
					height: auto;
					line-height: initial;
					vertical-align: middle;
				}
				/deep/ .upload .upload-img {
					border: 1px solid #ddd;
					cursor: pointer;
					border-radius: 4px;
					color: #999;
					background: #fff;
					width: 80px;
					font-size: 26px;
					line-height: 60px;
					text-align: center;
					height: 60px;
				}
				/deep/ .el-upload-list .el-upload-list__item {
					border: 1px solid #ddd;
					cursor: pointer;
					border-radius: 4px;
					color: #999;
					background: #fff;
					width: 80px;
					font-size: 26px;
					line-height: 60px;
					text-align: center;
					height: 60px;
					font-size: 14px;
					line-height: 1.8;
				}
				/deep/ .el-upload .el-icon-plus {
					border: 1px solid #ddd;
					cursor: pointer;
					border-radius: 4px;
					color: #999;
					background: #fff;
					width: 80px;
					font-size: 26px;
					line-height: 60px;
					text-align: center;
					height: 60px;
				}
				/deep/ .el-upload__tip {
					color: #888;
					font-size: 16px;
				}
				.el-textarea /deep/ .el-textarea__inner {
					border: 1px solid #ddd;
					border-radius: 4px;
					padding: 12px;
					box-shadow: none;
					color: inherit;
					width: auto;
					font-size: 16px;
					min-height: 150px;
					min-width: 48%;
					height: auto;
				}
				.el-textarea /deep/ .el-textarea__inner[readonly="readonly"] {
					border: 0px solid #ddd;
					cursor: not-allowed;
					border-radius: 0px;
					padding: 12px;
					box-shadow: none;
					color: inherit;
					background: none;
					width: auto;
					font-size: 16px;
					min-height: 150px;
					min-width: 50%;
					height: auto;
				}
				/deep/ .el-input__inner::placeholder {
					color: inherit;
					font-size: inherit;
				}
				/deep/ textarea::placeholder {
					color: inherit;
					font-size: inherit;
				}
				.editor {
					background-color: #fff;
					border-radius: 0;
					padding: 0;
					box-shadow: none;
					margin: 0;
					width: 100%;
					min-height: 350px;
					border-color: #ccc;
					border-width: 1px;
					border-style: solid;
					height: auto;
				}
				.upload-img {
					object-fit: cover;
					width: 100px;
					height: 100px;
				}
				.viewBtn {
					border: 0;
					cursor: pointer;
					border-radius: 4px;
					padding: 0 20px;
					margin: 0;
					color: #fff;
					background: #848c7460;
					display: inline-block;
					width: auto;
					font-size: 14px;
					line-height: 34px;
					height: 34px;
				}
				.viewBtn:hover {
				}
				.unviewBtn {
					border: 0;
					cursor: pointer;
					padding: 0 20px;
					margin: 0;
					color: #333;
					display: inline-block;
					font-size: 14px;
					line-height: 34px;
					border-radius: 4px;
					outline: none;
					background: #eee;
					width: auto;
					height: 34px;
				}
				.unviewBtn:hover {
				}
			}
			.add-btn-item {
				padding: 0;
				margin: 20px 0;
				.submitBtn {
					border: 0;
					cursor: pointer;
					padding: 0 24px;
					margin: 0 20px 0 0;
					display: inline-block;
					font-size: 16px;
					line-height: 42px;
					border-radius: 4px;
					background: #848c74;
					width: auto;
					text-align: center;
					min-width: 120px;
					height: 42px;
					.icon {
						color: #fff;
					}
					.text {
						color: #fff;
					}
				}
				.submitBtn:hover {
					.icon {
					}
					.text {
					}
				}
				.closeBtn {
					border: 0px solid #ddd;
					cursor: pointer;
					padding: 0 24px;
					margin: 0 20px 0 0;
					color: #fff;
					display: inline-block;
					font-size: 16px;
					line-height: 42px;
					border-radius: 4px;
					background: #858585;
					width: auto;
					text-align: center;
					min-width: 120px;
					height: 42px;
					.icon {
						color: #fff;
					}
					.text {
						color: #fff;
					}
				}
				.closeBtn:hover {
					.icon {
					}
					.text {
					}
				}
			}
		}
	}
	.el-date-editor.el-input {
		width: auto;
	}
</style>
