<template>
  <div class="home">
    <Navbar :userimg="model.user_img"></Navbar>
    <van-tabs @change="selectArticle" swipeable>
      <van-tab
        v-for="(item, index) in catelist"
        :key="index"
        :title="item.title"
      >
        <van-list
          v-model="item.loading"
          :finished="item.finished"
          finished-text="没有更多了"
          @load="onLoad(item, index)"
          :immediate-check="false"
        >
          <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->

          <div class="detailparent">
            <Detail
              class="detailitem"
              v-for="(cateitem, cateindex) in item.list"
              :key="cateindex"
              :detailitem="cateitem"
            ></Detail>
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Navbar from '@/components/common/Navbar.vue'
import Detail from '@/components/homeComponent/Detail.vue'
export default {
  data() {
    return {
      model: {},
      catelist: []
    }
  },

  created() {
    this.userinfoData()
    this.selectCategory()
  },

  methods: {
    async userinfoData() {
      const { data: res } = await this.$http.get(
        `/user/${window.localStorage.getItem('id')}`
      )
      this.model = res[0]
    },
    async selectCategory() {
      const { data: res } = await this.$http.get('/category')
      const category1 = res.map((item, index) => {
        item.list = []
        item.pagenum = 0
        item.pagesize = 10
        item.loading = false
        item.finished = false
        return item
      })
      this.catelist = category1
      this.selectArticle()
    },
    async selectArticle(i) {
      if (!i) {
        i = 0
      }
      const { data: res } = await this.$http.get(
        `/detail/${this.catelist[i]._id}`,
        {
          params: {
            page: this.catelist[i].pagenum,
            pagesize: this.catelist[i].pagesize
          }
        }
      )
      this.catelist[i].list = res
      this.catelist[i].pagenum += 1
    },
    async onLoad(item, i) {
      const { data: res } = await this.$http.get(`/detail/${item._id}`, {
        params: {
          page: item.pagenum,
          pagesize: item.pagesize
        }
      })
      if (res.length !== 0) {
        this.catelist[i].pagenum += 1
        this.catelist[i].loading = false
        this.catelist[i].list = this.catelist[i].list.concat(res)
      } else {
        this.catelist[i].finished = true
      }
    }
  },
  components: {
    Navbar,
    Detail
  }
}
</script>
<style lang="less" scoped>
.home {
  background-color: white;
}
.detailparent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .detailitem {
    margin: 1.389vw 0;
    width: 45%;
  }
}
</style>
