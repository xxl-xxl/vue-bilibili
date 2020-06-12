<template>
  <div class="navbar">
    <div class="logo">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div>
      <p>
        <span>搜索</span>
        <van-icon name="search" class="ipt-icon" />
      </p>
    </div>
    <div>
      <img v-if="userimg" :src="userimg" alt="" />
      <img v-else src="@/assets/default_img.jpg" alt="" />
      <p>下载App</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['userimg'],
  data() {
    return {}
  },

  created() {},

  methods: {}
}
</script>
<style lang="less" scoped>
.navbar {
  display: flex;
  height: 12.5vw;
  background-color: white;
  .logo {
    display: flex;
    width: 25vw;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 100%;
  }
  div:nth-child(2) {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1.389vw;
    p {
      background-color: #f4f4f4;
      height: 6.667vw;
      width: 100%;
      border-radius: 3.333vw;
      position: relative;
      color: #aaa;
      .ipt-icon {
        position: absolute;
        left: 2.778vw;
        top: 60%;
        transform: translate(0, -60%);
        color: #aaa;
      }
      span {
        position: absolute;
        font-size: 3.611vw;
        left: 8.333vw;
        top: 0.833vw;
      }
    }
  }
  div:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 6.667vw;
      height: 6.667vw;
    }
    p {
      padding: 5px 10.001px;
      margin: 0 7.999px;
      background-color: #fb7299;
      color: white;
      font-size: 3.611vw;
      border-radius: 5px;
    }
  }
}
</style>
