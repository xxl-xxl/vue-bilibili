<template>
  <div>
    <LoginTop middleTop="注册bilibili">
      <div
        slot="right"
        @click="$router.push('/login')"
        style="font-size: 3.333vw;"
      >
        用户登录
      </div>
    </LoginTop>
    <LoginText
      label="姓名"
      style="margin: 4.167vw 0;"
      placeholder="请输入姓名"
      rule="^.{6,16}$"
      @inputChange="res => (this.model.name = res)"
    ></LoginText>
    <LoginText
      label="账号"
      placeholder="请输入账号"
      rule="^.{6,16}$"
      @inputChange="res => (this.model.username = res)"
    ></LoginText>
    <LoginText
      label="密码"
      type="password"
      placeholder="请输入密码"
      rule="^.{6,16}$"
      @inputChange="res => (this.model.password = res)"
    ></LoginText>
    <LoginBtn btntext="注册" @registerSubmit="registerSubmit"></LoginBtn>
  </div>
</template>

<script>
import LoginTop from '@/components/common/LoginTop.vue'
import LoginText from '@/components/common/LoginText.vue'
import LoginBtn from '@/components/common/LoginBtn.vue'
export default {
  data() {
    return {
      // 注册信息
      model: {
        name: '',
        username: '',
        password: ''
      }
    }
  },

  created() {},

  methods: {
    async registerSubmit() {
      const rulg = /^.{6,16}$/
      if (
        rulg.test(this.model.name.trim()) &&
        rulg.test(this.model.username.trim()) &&
        rulg.test(this.model.password.trim())
      ) {
        const { data: res } = await this.$http.post('/register', this.model)
        if (res.code !== 200) return this.$msg.fail(res.msg)
        window.localStorage.setItem('token', res.objtoken)
        window.localStorage.setItem('id', res.id)
        this.$msg.success(res.msg)
        setTimeout(() => this.$router.push('/userinfo'), 1000)
      } else {
        this.$msg.fail('格式错误，请重新输入')
      }
    }
  },
  components: {
    LoginTop,
    LoginText,
    LoginBtn
  }
}
</script>
<style lang="less" scoped></style>
