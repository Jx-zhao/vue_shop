<template>
  <div class="login_container">
    <div class="login_box">
      <!--头像区域-->
      <div class="avater_box"><img src="../assets/logo.jpg" alt="" /></div>
      <!--登录表单区域-->
      <el-form
        :rules="loginFormRules"
        :model="loginForm"
        label-width="0"
        class="login_form"
        ref="loginFormRef"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            placeholder="请输入用户名"
            v-model="loginForm.username"
            clearable
            prefix-icon="el-icon-s-custom"
          >
          </el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            placeholder="请输入密码"
            v-model="loginForm.password"
            show-password
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="submitForm('loginFormRef')"
            >登录</el-button
          >
          <el-button @click="resetLoginForm('loginFormRef')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //这是登陆表单的数据绑定对象
      loginForm: {
        username: "",
        password: "",
      },
      //表单验证
      loginFormRules: {
        //验证用户名
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 5,
            max: 10,
            message: "长度在 5 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 5,
            max: 11,
            message: "长度在 5 到 11 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (!valid) return;
        const { data: res } = await this.$http.post("login", this.loginForm);
        if (res.meta.status !== 200) return this.$message.error("登录失败!");
        this.$message.success("登陆成功");
        //1. 将登录成功之后的token 保存到客户端的sessionStorage中
        //1.1 项目中除了登录之外的其他API 接口需要token
        //1.2 token 只应该在当前网站打开期间生效所以用sessionStorage
        window.sessionStorage.setItem("token", res.data.token);

        //2. 通过编程式导航跳转到后台主页,路由地址是/home;
        this.$router.push({name:'Home'});
      });
    },
    resetLoginForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.login_container {
  background-image: url("../assets/bg1.jpg");
  background-position: center center;
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 15px #fff;
  .avater_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #eee;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    overflow: hidden;
    img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
