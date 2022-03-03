import Vue from 'vue'
import axios from 'axios'
import router from '../router'
import store from '../store/index'

let vuueObj = new Vue()

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
  // 状态码判断
  switch (status) {
    case 400:
      vuueObj.$message.error({showClose: true, message: '请求参数有误！', duration: 3000})
      break
    // 401: 未登录状态，跳转登录页
    case 401:
      toSignin()
      break
    // 403 token过期
    // 清除token并跳转登录页
    case 403:
      vuueObj.$message.error({showClose: true, message: '没有操作权限！', duration: 3000})
      break
    // 404请求不存在
    case 404:
      vuueObj.$message.error({showClose: true, message: '请求不存在', duration: 3000})
      break
    case 500:
      vuueObj.$message.error({showClose: true, message: '请求失败，服务器内部错误', duration: 3000})
      break
    case 504:
      vuueObj.$message.error({showClose: true, message: '与服务器连接失败！', duration: 3000})
      break
    default:
      console.log(other)
  }
}

// 创建axios实例
var instance = axios.create({timeout: 1000 * 12})
// 响应拦截器
instance.interceptors.response.use(
  response => {
    // 200响应正常，其他抛出错误
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    const {response} = error
    if (response) {
      errorHandle(response.status, response.data.msg)
      return Promise.reject(response)
    }
  }
)

export default instance
