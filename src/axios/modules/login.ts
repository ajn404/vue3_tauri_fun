

import http from '../http'
import { baseUrl } from '@/base/config'

export default {

  loginMock() {
    return http.post("/login")
  },



  login(param) {
    return http.post(`${baseUrl.login}/common/login`,param)
  },

  // 按钮权限
  getAction() {
    return http.get(`${baseUrl.login}/common/login/getAction`)
  },

  // 清除token
  delete(param) {
    return http.post(`${baseUrl.login}/common/login/delete`,param)
  },

}