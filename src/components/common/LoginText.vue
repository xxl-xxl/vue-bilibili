<template>
  <div>
    <van-field
      :label="label"
      :type="type"
      :placeholder="placeholder"
      :rule="rule"
      v-model="content"
    />
  </div>
</template>

<script>
export default {
  props: ['label', 'type', 'placeholder', 'rule'],
  data() {
    return {
      content: ''
    }
  },
  watch: {
    content() {
      this.handlerulg()
    }
  },
  methods: {
    handlerulg() {
      const rule = new RegExp(this.rule)
      if (rule.test(this.content)) {
        this.$emit('inputChange', this.content)
      }
    }
  }
}
</script>
<style lang="less" scoped></style>
