<template>
  <div>
    <div class="LoginTop">
      <div></div>
      <div>{{ middleTop }}</div>
      <div>
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['middleTop'],
  data() {
    return {}
  },

  created() {},

  methods: {}
}
</script>
<style lang="less" scoped>
.LoginTop {
  display: flex;
  height: 12.5vw;
  background-color: white;
  div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4.444vw;
  }
}
</style>
