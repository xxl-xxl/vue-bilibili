<template>
  <div>
    <div class="editbanner" @click="bannerClick">
      <span>{{ left }}</span>
      <span><slot name="right"/></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['left'],
  data() {
    return {}
  },

  created() {},

  methods: {
    bannerClick() {
      this.$emit('bannerClick')
    }
  }
}
</script>
<style lang="less" scoped>
.editbanner {
  padding: 4.167vw;
  font-size: 3.889vw;
  color: #333;
  background-color: #fff;
  border-bottom: 0.278vw solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
