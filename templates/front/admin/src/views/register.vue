<template>
	<div>
		<div class="register-container">
			<el-form v-if="pageFlag=='register'" ref="ruleForm" class="rgs-form animate__animated animate__backInDown" :model="ruleForm" :rules="rules">
				<div class="rgs-form2">
					<div class="title">基于django的社区设备报修住户反馈智能预测系统设计</div>
					<el-form-item class="list-item" v-if="tableName=='yonghu'">
						<div class="lable" :class="changeRules('zhanghao')?'required':''">账号：</div>
						<el-input  v-model="ruleForm.zhanghao"  autocomplete="off" placeholder="账号"  type="text"  />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='yonghu'">
						<div class="lable" :class="changeRules('mima')?'required':''">密码：</div>
						<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='yonghu'">
						<div class="lable" :class="changeRules('mima')?'required':''">确认密码：</div>
						<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='yonghu'">
						<div class="lable" :class="changeRules('fullname')?'required':''">姓名：</div>
						<el-input  v-model="ruleForm.fullname"  autocomplete="off" placeholder="姓名"  type="text"  />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='yonghu'">
						<div class="lable" :class="changeRules('xingbie')?'required':''">性别：</div>
						<el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
							<el-option
								v-for="(item,index) in yonghuxingbieOptions"
								v-bind:key="index"
								:label="item"
								:value="item">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='yonghu'">
						<div class="lable" :class="changeRules('shouji')?'required':''">手机：</div>
						<el-input  v-model="ruleForm.shouji"  autocomplete="off" placeholder="手机"  type="text"  />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='yonghu'">
						<div class="lable" :class="changeRules('touxiang')?'required':''">头像：</div>
						<file-upload
							tip="点击上传头像"
							action="file/upload"
							:limit="3"
							:multiple="true"
							:fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
							@change="yonghutouxiangUploadChange"
						></file-upload>
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='yonghu'">
						<div class="lable" :class="changeRules('zhuzhi')?'required':''">住址：</div>
						<el-input  v-model="ruleForm.zhuzhi"  autocomplete="off" placeholder="住址"  type="text"  />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='shequrenyuan'">
						<div class="lable" :class="changeRules('shequzhanghao')?'required':''">社区账号：</div>
						<el-input  v-model="ruleForm.shequzhanghao"  autocomplete="off" placeholder="社区账号"  type="text"  />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='shequrenyuan'">
						<div class="lable" :class="changeRules('mima')?'required':''">密码：</div>
						<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='shequrenyuan'">
						<div class="lable" :class="changeRules('mima')?'required':''">确认密码：</div>
						<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='shequrenyuan'">
						<div class="lable" :class="changeRules('renyuanming')?'required':''">人员姓名：</div>
						<el-input  v-model="ruleForm.renyuanming"  autocomplete="off" placeholder="人员姓名"  type="text"  />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='shequrenyuan'">
						<div class="lable" :class="changeRules('xingbie')?'required':''">性别：</div>
						<el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
							<el-option
								v-for="(item,index) in shequrenyuanxingbieOptions"
								v-bind:key="index"
								:label="item"
								:value="item">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='shequrenyuan'">
						<div class="lable" :class="changeRules('lianxidianhua')?'required':''">联系电话：</div>
						<el-input  v-model="ruleForm.lianxidianhua"  autocomplete="off" placeholder="联系电话"  type="text"  />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='shequrenyuan'">
						<div class="lable" :class="changeRules('shenfenzhenghaoma')?'required':''">身份证号码：</div>
						<el-input  v-model="ruleForm.shenfenzhenghaoma"  autocomplete="off" placeholder="身份证号码"  type="text"  />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='shequrenyuan'">
						<div class="lable" :class="changeRules('touxiang')?'required':''">头像：</div>
						<file-upload
							tip="点击上传头像"
							action="file/upload"
							:limit="3"
							:multiple="true"
							:fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
							@change="shequrenyuantouxiangUploadChange"
						></file-upload>
					</el-form-item>
					<div class="register-btn">
						<div class="register-btn1">
							<button type="button" class="r-btn" @click="login()">注册</button>
						</div>
						<div class="register-btn2">
							<div class="r-login" @click="close()">已有账号，直接登录</div>
						</div>
					</div>
				</div>
			</el-form>
		</div>
	</div>
</template>

<script>
	import 'animate.css'
export default {
	data() {
		return {
			ruleForm: {
			},
			forgetForm: {},
            pageFlag : '',
			tableName:"",
			rules: {},
            yonghuxingbieOptions: [],
            shequrenyuanxingbieOptions: [],
		};
	},
	mounted(){
		this.pageFlag = this.$route.query.pageFlag
		if(this.$route.query.pageFlag=='register'){
			
			let table = this.$storage.get("loginTable");
			this.tableName = table;
			if(this.tableName=='yonghu'){
				this.ruleForm = {
					zhanghao: '',
					mima: '',
					fullname: '',
					xingbie: '',
					shouji: '',
					touxiang: '',
					zhuzhi: '',
				}
			}
			if(this.tableName=='shequrenyuan'){
				this.ruleForm = {
					shequzhanghao: '',
					mima: '',
					renyuanming: '',
					xingbie: '',
					lianxidianhua: '',
					shenfenzhenghaoma: '',
					touxiang: '',
				}
			}
			if ('yonghu' == this.tableName) {
				this.rules.zhanghao = [{ required: true, message: '请输入账号', trigger: 'blur' }]
			}
			if ('yonghu' == this.tableName) {
				this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('yonghu' == this.tableName) {
				this.rules.shouji = [{ required: true, message: '请输入手机', trigger: 'blur' }]
			}
			if ('shequrenyuan' == this.tableName) {
				this.rules.shequzhanghao = [{ required: true, message: '请输入社区账号', trigger: 'blur' }]
			}
			if ('shequrenyuan' == this.tableName) {
				this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('shequrenyuan' == this.tableName) {
				this.rules.lianxidianhua = [{ required: true, message: '请输入联系电话', trigger: 'blur' }]
			}
			this.yonghuxingbieOptions = "男,女".split(',')
			this.shequrenyuanxingbieOptions = "男,女".split(',')
		}
	},
	created() {
	},
	destroyed() {
		  	},
	methods: {
		changeRules(name){
			if(this.rules[name]){
				return true
			}
			return false
		},
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		close(){
			this.$router.push({ path: "/login" });
		},
        yonghutouxiangUploadChange(fileUrls) {
            this.ruleForm.touxiang = fileUrls;
        },
        shequrenyuantouxiangUploadChange(fileUrls) {
            this.ruleForm.touxiang = fileUrls;
        },

        // 多级联动参数


		// 注册
		login() {
			var url=this.tableName+"/register";
			if((!this.ruleForm.zhanghao) && `yonghu` == this.tableName){
				this.$message.error(`账号不能为空`);
				return
			}
			if((!this.ruleForm.mima) && `yonghu` == this.tableName){
				this.$message.error(`密码不能为空`);
				return
			}
			if((this.ruleForm.mima!=this.ruleForm.mima2) && `yonghu` == this.tableName){
				this.$message.error(`两次密码输入不一致`);
				return
			}
			if((!this.ruleForm.shouji) && `yonghu` == this.tableName){
				this.$message.error(`手机不能为空`);
				return
			}
			if(`yonghu` == this.tableName && this.ruleForm.shouji &&(!this.$validate.isMobile(this.ruleForm.shouji))){
				this.$message.error(`手机应输入手机格式`);
				return
			}
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
			if((!this.ruleForm.shequzhanghao) && `shequrenyuan` == this.tableName){
				this.$message.error(`社区账号不能为空`);
				return
			}
			if((!this.ruleForm.mima) && `shequrenyuan` == this.tableName){
				this.$message.error(`密码不能为空`);
				return
			}
			if((this.ruleForm.mima!=this.ruleForm.mima2) && `shequrenyuan` == this.tableName){
				this.$message.error(`两次密码输入不一致`);
				return
			}
			if((!this.ruleForm.lianxidianhua) && `shequrenyuan` == this.tableName){
				this.$message.error(`联系电话不能为空`);
				return
			}
			if(`shequrenyuan` == this.tableName && this.ruleForm.lianxidianhua &&(!this.$validate.isMobile(this.ruleForm.lianxidianhua))){
				this.$message.error(`联系电话应输入手机格式`);
				return
			}
			if(`shequrenyuan` == this.tableName && this.ruleForm.shenfenzhenghaoma &&(!this.$validate.checkIdCard(this.ruleForm.shenfenzhenghaoma))){
				this.$message.error(`身份证号码应输入身份证格式`);
				return
			}
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
			this.$http({
				url: url,
				method: "post",
				data:this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "注册成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.$router.replace({ path: "/login" });
						}
					});
				} else {
					this.$message.error(data.msg);
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.register-container {
	position: relative;
	background: url(http://codegen.caihongy.cn/20240906/ebe3f0158d3145228c412d0408eea9a9.gif);
	background-repeat: no-repeat;
	background-size: cover;
	background: url(http://codegen.caihongy.cn/20240906/ebe3f0158d3145228c412d0408eea9a9.gif);
	display: flex;
	width: 100%;
	min-height: 100vh;
	justify-content: center;
	align-items: center;
	background-position: center center;
	.rgs-form {
		.rgs-form2 {
		width: 100%;
		}
		border-radius: 30px;
		box-shadow: rgb(12, 12, 21) 0px 4px 30px 0px inset, 0px 4px 8px 0px #6D6D6D;
		padding: 0 60px;
		margin: 20px 0;
		background: #141421;
		width: 552px;
		border-color: #1CE3A5;
		border-width: 10px 0 0;
		border-style: solid;
		.title {
			margin: 60px 0;
			color: #1CE3A5;
			font-weight: 500;
			width: 100%;
			font-size: 28px;
			text-align: center;
		}
		.list-item {
			background-color: rgba(22, 22, 36, 1);
			box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.30);
			padding: 0 12px;
			margin: 0 0 40px 0;
			color: #fff;
			font-size: 14px;
			/deep/ .el-form-item__content {
			}
			.lable {
				color: #9E9E9E;
				display: inline-block;
				width: 70px;
			}
			.el-input {
				width: calc(100% - 80px);
			}
			.el-input /deep/ .el-input__inner {
				border: none;
				background-color: transparent;
				padding: 0 10px;
				color: #fff;
				height: 50px;
			}
			.el-input /deep/ .el-input__inner:focus {
				border: none;
				background-color: transparent;
				padding: 0 10px;
				height: 50px;
			}
			.el-input-number {
				width: calc(100% - 80px);
			}
			.el-input-number /deep/ .el-input__inner {
				text-align: center;
				border: none;
				background-color: transparent;
				padding: 0 10px;
				color: #fff;
				height: 50px;
			}
			.el-input-number /deep/ .el-input__inner:focus {
				border: none;
				background-color: transparent;
				padding: 0 10px;
				height: 50px;
			}
			.el-input-number /deep/ .el-input-number__decrease {
				display: none;
			}
			.el-input-number /deep/ .el-input-number__increase {
				display: none;
			}
			.el-select {
				width: calc(100% - 80px);
			}
			.el-select /deep/ .el-input__inner {
				border: none;
				background-color: transparent;
				padding: 0 10px;
				color: rgba(64, 158, 255, 1);
				font-size: 14px;
				height: 50px;
			}
			.el-select /deep/ .el-input__inner:focus {
				border: none;
				background-color: transparent;
				padding: 0 10px;
				color: rgba(64, 158, 255, 1);
				font-size: 14px;
				height: 50px;
			}
			.el-date-editor {
				width: calc(100% - 80px);
			}
			.el-date-editor /deep/ .el-input__inner {
				border: none;
				background-color: transparent;
				padding: 0 10px;
				color: rgba(64, 158, 255, 1);
				font-size: 14px;
				height: 50px;
			}
			.el-date-editor /deep/ .el-input__inner:focus {
				border: none;
				background-color: transparent;
				padding: 0 10px;
				color: rgba(64, 158, 255, 1);
				font-size: 14px;
				height: 50px;
			}
			.el-date-editor.el-input {
				width: 100%;
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
				border: 1px solid #efeff7;
				cursor: pointer;
				border-radius: 8px;
				color: #999;
				background: #fff;
				width: 90px;
				font-size: 24px;
				line-height: 60px;
				text-align: center;
				height: 60px;
			}
			/deep/ .el-upload-list .el-upload-list__item {
				border: 1px solid #efeff7;
				cursor: pointer;
				border-radius: 8px;
				color: #999;
				background: #fff;
				width: 90px;
				font-size: 24px;
				line-height: 60px;
				text-align: center;
				height: 60px;
			}
			/deep/ .el-upload .el-icon-plus {
				border: 1px solid #efeff7;
				cursor: pointer;
				border-radius: 8px;
				color: #999;
				background: #fff;
				width: 90px;
				font-size: 24px;
				line-height: 60px;
				text-align: center;
				height: 60px;
			}
			/deep/ .el-upload__tip {
				color: #9E9E9E;
				font: 14px;
			}
			/deep/ .el-input__inner::placeholder {
				color: #999;
				font-size: 14px;
			}
			.required {
				position: relative;
			}
			.required::after{
				color: red;
				top: 3px;
				left: -8px;
				position: absolute;
				content: "*";
				order: -1;
			}
			.editor {
				background: #fff;
				width: 100%;
				height: auto;
			}
			.editor>.avatar-uploader {
				line-height: 0;
				height: 0;
			}
		}
		.list-item.email {
			input {
				border: none;
				background-color: transparent;
				outline: none;
				color: #fff;
				flex: 1 1 0;
				height: 50px;
			}
			input:focus {
				border: none;
				background-color: transparent;
				color: #9E9E9E;
				height: 50px;
			}
			input::placeholder {
				color: #999;
				font-size: 14px;
			}
			button {
				border: 0px solid #efeff7;
				cursor: pointer;
				border-radius: 4px;
				padding: 0;
				margin: 1px 0 0;
				color: #9E9E9E;
				background: #1C1F2F;
				width: 150px;
				font-size: 15px;
				height: 38px;
			}
			button:hover {
				opacity: 0.8;
			}
		}
		.register-btn {
			width: 100%;
		}
		.register-btn1 {
			width: 100%;
		}
		.register-btn2 {
			width: 100%;
		}
		.r-btn {
			border: 0px solid rgba(0, 0, 0, 1);
			cursor: pointer;
			border-radius: 25px;
			padding: 0 10px;
			margin: 0 0 10px;
			color: #fff;
			background: #1C1F2F;
			font-weight: 700;
			width: 100%;
			font-size: 24px;
			min-width: 68px;
			height: 50px;
		}
		.r-btn:hover {
			opacity: 0.8;
		}
		.r-login {
			cursor: pointer;
			padding: 0;
			color: #fff;
			font-size: 14px;
			line-height: 40px;
			text-align: center;
			height: 40px;
		}
		.r-login:hover {
			color: #1890ff;
			opacity: 1;
		}
	}
}
	
	::-webkit-scrollbar {
	  display: none;
	}
</style>
