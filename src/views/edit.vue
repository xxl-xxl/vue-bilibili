<template>
  <div class="editViews">
    <div style="margin-bottom: 10px;">
      <Navbar :userimg="model.user_img"></Navbar>
    </div>
    <div class="uploadfile">
      <van-uploader
        :after-read="afterRead"
        class="uploadimg"
        preview-size="100vw"
      />
      <EditBanner left="头像">
        <div slot="right">
          <img v-if="model.user_img" :src="model.user_img" alt="" />
          <img v-else src="@/assets/default_img.jpg" alt="" />
        </div>
      </EditBanner>
    </div>
    <EditBanner left="昵称" @bannerClick="showname = true">
      <div slot="right">{{ model.name }}</div>
    </EditBanner>
    <EditBanner left="UID">
      <div slot="right">{{ model.id }}</div>
    </EditBanner>
    <EditBanner left="性别" @bannerClick="showgender = true">
      <div slot="right">
        <p v-if="model.gender === '女'">女</p>
        <p v-else>男</p>
      </div>
    </EditBanner>
    <EditBanner left="个性签名" @bannerClick="showdesc = true">
      <div slot="right">
        <p v-if="model.user_desc">{{ model.user_desc }}</p>
        <p v-else>这个人很神秘，什么都没写</p>
      </div>
    </EditBanner>
    <div class="editback" @click="$router.back()">返回个人中心</div>
    <!-- 修改个性签名对话框 -->
    <van-dialog
      v-model="showdesc"
      title="修改个性签名"
      show-cancel-button
      @confirm="confirmClick"
      @cancel="showdesc = false"
    >
      <van-field v-model="model.user_desc" autofocus />
    </van-dialog>
    <!-- 修改昵称 -->
    <van-dialog
      v-model="showname"
      title="修改昵称"
      show-cancel-button
      @confirm="confirmClick"
      @cancel="showname = false"
    >
      <van-field v-model="model.name" autofocus />
    </van-dialog>
    <!-- 修改性别 -->
    <van-action-sheet
      v-model="showgender"
      cancel-text="取消"
      :actions="actions"
      @select="onSelect"
      @cancel="cancel"
    />
  </div>
</template>

<script>
import Navbar from '@/components/common/Navbar.vue'
import EditBanner from '@/components/common/EditBanner.vue'
export default {
  data() {
    return {
      model: {},
      showdesc: false,
      showname: false,
      showgender: false,
      actions: [{ name: '男' }, { name: '女' }]
    }
  },

  created() {
    this.selectUser()
  },

  methods: {
    async selectUser() {
      const { data: res } = await this.$http.get(
        `/user/${window.localStorage.getItem('id')}`
      )
      this.model = res[0]
    },
    async afterRead(file) {
      const fromdata = new FormData()
      fromdata.append('file', file.file)
      const { data: res } = await this.$http.post('/upload', fromdata)
      this.model.user_img = res.url
      this.userupdate()
    },
    async userupdate() {
      const { data: res } = await this.$http.post(
        `/update/${window.localStorage.getItem('id')}`,
        this.model
      )
      if (res.code !== 200) return this.$msg.fail('修改失败')
      this.$msg.success('修改成功')
    },
    confirmClick() {
      this.userupdate()
      this.showdesc = false
      this.showname = false
    },
    onSelect(item) {
      this.model.gender = item.name
      this.userupdate()
      this.showgender = false
    },
    cancel() {
      this.showgender = false
    }
  },
  components: {
    Navbar,
    EditBanner
  }
}
</script>
<style lang="less" scoped>
.editViews img {
  height: 12.778vw;
  width: 12.778vw;
  border-radius: 50%;
}
.uploadfile {
  position: relative;
  overflow: hidden;
  .uploadimg {
    position: absolute;
    opacity: 0;
  }
}
.editback {
  margin-top: 5.556vw;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  color: #999;
  padding: 4.167vw 0;
  font-size: 4vw;
}
</style>
