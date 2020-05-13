<template>
  <div class="wrap">
    <div class="card fade-up">
      <div class="f">
        <div class="left fade-up delay">
          <p>{{data.title}}</p>
        </div>
        <div class="right fade-up delay">
          <div style="padding: 1rem">
            <el-form ref="loginFormRef" label-width="0px" class="login_form" :model="loginForm" :rules="loginFormRules">
                <!-- 用户名 -->
                <el-form-item prop="username">
                    <el-input  prefix-icon="el-icon-user-solid" v-model="loginForm.username"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input  prefix-icon="el-icon-key" v-model="loginForm.password" type="password"></el-input>
                </el-form-item>
                <!-- 按钮区域 -->
                <el-form-item class="btns">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetForm">重置</el-button>
                </el-form-item>
            </el-form>
          </div>
        </div>
      </div>

      <div class="info fade-up" style="animation-delay: 2s;opacity:0">
        <p>{{data.info}}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card {
  height: 50vh;
  width: 50vw;
  padding: 2rem;
  background: #ecf0f1;
  box-shadow: 0.25rem 0.5125rem 1.1875rem -1rem #34495e;
  border-radius: 0.5rem;
  img {
    border-radius: 88%;
    height: 6rem;
    padding: 1rem;
    box-sizing: content-box;
    max-width: 100%;
  }
}
.f {
  overflow: hidden;
  .left {
    float: left;
    -webkit-box-reflect: below -29px -webkit-linear-gradient(
        bottom,
        rgba(255, 255, 255, 0.3) 0%,
        transparent 40%,
        transparent 100%
      );
  }
  .right {
    float: right;
  }
}
.v-mid {
  display: flex;
  align-items: center;
}
@media (max-width: 650px) {
  .card {
    width: 80vw;
  }
  .f .left,.f .right {
    float: none;
    text-align: center
  }
}

.delay {
  animation-delay: 0.2s;
  opacity: 0;
}
</style>

<script>
export default {
  props: {
    data: { require: true }
  },
  
  data () {
    return {
      // 这是登录表单的绑定对象
      loginForm: {
        username: '',
        password: ''
      },
      // 这是登录表单的校验规则
      loginFormRules: {
        // 用户名校验
        username: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        // 密码校验
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 重置表单
    resetForm () {
      this.$refs.loginFormRef.resetFields()
    },
    login () {
      this.$refs.loginFormRef.validate(async (valid) => {
        // console.log(valid)
        if (!valid) return;
        const { data: res } = await this.$http.post("login", this.loginForm);
        console.log(res)
        if (!res.user) return this.$message.error('登录失败');
        this.$message.success('登录成功');
        window.sessionStorage.setItem("token", res.token);
        this.$router.push('/home');
      })
    }
  }
};
</script>