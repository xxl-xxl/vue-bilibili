import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/base.css'
import Vant from 'vant'
import { Toast } from 'vant'
import 'vant/lib/index.css'
import http from '../http'
Vue.prototype.$http = http
Vue.prototype.$msg = Toast
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
