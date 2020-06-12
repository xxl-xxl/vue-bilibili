import axios from 'axios'
import router from './src/router/index'
import Vue from 'vue'
const http = axios.create({
  baseURL: 'http://112.74.99.5:3000/web/api'
})
// 拦截器
http.interceptors.request.use(config => {
  config.headers.Authorization =
    'Bearer ' + window.localStorage.getItem('token')
  return config
})
http.interceptors.response.use(response => {
  return response
}, error => {
  console.dir(error)
  if (error.response.status === 401 || error.response.status === 500) {
    router.push('/login')
    Vue.prototype.$msg.fail('请重新登录')
  }
  return Promise.reject(error)
})
export default http
