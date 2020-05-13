<template>
  <card :data='userdata'></card>
</template>

<script>
export default {
  components: { card: () => import("../components/login-card.vue") },
  data() {
    return{
      userdata: {
        title: '登陆验证页面',
        info: '这是一个私人网站，请输入账号密码进行访问。'
      }
    }
  },
  methods: {
    login() {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="sass" scoped>

</style>