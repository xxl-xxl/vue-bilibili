<template>
  <div class="comment">
    <p class="comment-title">
      <span>评论</span><span>({{ datalength }})</span>
    </p>
    <div class="comment-userimg">
      <img :src="userinfo.user_img" alt="" />
      <input type="text" ref="Postipt" placeholder="评论" v-model="mycomment" />
      <button @click="commentPublish">发表</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['userinfo', 'datalength'],
  data() {
    return {
      mycomment: ''
    }
  },

  created() {},

  methods: {
    commentPublish() {
      this.$emit('PostComment', this.mycomment)
      this.mycomment = ''
    },
    focusIpt() {
      this.$refs.Postipt.focus()
    }
  }
}
</script>
<style lang="less" scoped>
.comment {
  padding: 8.333vw 2.778vw 0;
  .comment-title {
    span:nth-child(2) {
      color: #aaa;
      margin-left: 2.778vw;
    }
  }
  .comment-userimg {
    padding: 2.778vw 0;
    display: flex;
    img {
      width: 8.333vw;
      height: 8.333vw;
      border-radius: 50%;
    }
    input {
      outline: none;
      border: 0;
      background-color: #f4f4f4;
      border-radius: 4.444vw;
      font-size: 3.333vw;
      padding: 0 5.556vw 0 4.167vw;
      margin-left: 2.778vw;
    }
    button {
      padding: 1.389vw 4.167vw;
      margin-left: 2.778vw;
      outline: none;
      border: 0;
      border-radius: 3.333vw;
      background-color: #fb7299;
      color: white;
      font-size: 3.889vw;
    }
  }
}
</style>
