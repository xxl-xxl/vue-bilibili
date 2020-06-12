<template>
  <div class="userinfo">
    <Navbar :userimg="model.user_img"></Navbar>
    <img src="@/assets/bannerTop_new.png" alt="" class="backImg" />
    <userDetail :userinfo="model"></userDetail>
    <userArticle></userArticle>
  </div>
</template>

<script>
import Navbar from '@/components/common/Navbar.vue'
import userDetail from '@/components/userComponent/userDetail.vue'
import userArticle from '@/components/userComponent/userArticle.vue'
export default {
  data() {
    return {
      model: {}
    }
  },

  components: {
    Navbar,
    userDetail,
    userArticle
  },
  created() {
    this.userinfoData()
  },
  methods: {
    async userinfoData() {
      const { data: res } = await this.$http.get(
        `/user/${window.localStorage.getItem('id')}`
      )
      this.model = res[0]
    }
  }
}
</script>
<style lang="less" scoped>
.userinfo {
  .backImg {
    height: 91px;
    width: 100%;
  }
}
</style>
