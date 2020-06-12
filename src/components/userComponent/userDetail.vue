<template>
  <div class="userdetail">
    <div>
      <div class="userimg">
        <img v-if="userinfo.user_img" :src="userinfo.user_img" alt="" />
        <img v-else src="@/assets/default_img.jpg" alt="" />
      </div>
      <div class="useredit">
        <div>
          <p>
            <span>0</span>
            <span>粉丝</span>
          </p>
          <p>
            <span>54</span>
            <span>关注</span>
          </p>
          <p>
            <span>0</span>
            <span>获赞</span>
          </p>
        </div>
        <div @click="$router.push('/edit')">
          <div>编辑资料</div>
        </div>
      </div>
    </div>
    <div>
      <h2>{{ userinfo.name }}</h2>
      <p v-if="userinfo.user_desc">{{ userinfo.user_desc }}</p>
      <p v-else>这个人很神秘，什么都没写。</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['userinfo'],
  data() {
    return {}
  },

  created() {},

  methods: {}
}
</script>
<style lang="less" scoped>
.userdetail {
  background-color: white;
  padding: 3.333vw;
  > div:nth-child(1) {
    display: flex;
    .userimg {
      margin-right: 20.002px;
      img {
        height: 85px;
        width: 85px;
        border-radius: 50%;
      }
    }
    .useredit {
      flex: 1;
      div:nth-child(1) {
        display: flex;
        p {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          font-size: 13px;
        }
        p:nth-child(2) {
          border-left: 1.001px solid #ccc;
          border-right: 1.001px solid #ccc;
        }
      }
      div:nth-child(2) {
        padding: 15.001px;
        > div {
          padding: 5px;
          color: #fb7a9f;
          border: 1.001px solid #fb7a9f;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 2.999px;
        }
      }
    }
  }
  > div:nth-child(2) {
    h2 {
      margin: 2.778vw 0;
      font-weight: 400;
    }
    p {
      padding: 1.389vw 0;
      color: #999;
    }
  }
}
</style>
