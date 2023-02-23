








import axios from 'axios'
// import store from '@/store'
import router from "@/router"
import { Dialog } from 'vant'
import { configIp } from '@/base/config'

// axios默认配置
axios.defaults.timeout = 30000;   // 超时时间

axios.defaults.headers['RefererUrl'] =configIp[VUE_APP_MODE];



// 取消重复请求
const pending = {}
const timmer = 500; //限制相同请求最小时间间隔 否则取消
// const CancelToken = axios.CancelToken

function encodeUrl(config) {
  let params = ''
  if (config.method === 'get') {
    params = config.params
  } else {
    params = config.data
  }
  if (params instanceof Object) {
    return encodeURIComponent(config.url + JSON.stringify(JSON.stringify(params)))
  } else {
    return encodeURIComponent(config.url + JSON.stringify(params))
  }
}
// 终止请求
// function stopRequest(config, cancel) {
//   const key = encodeUrl(config)
//   if (pending[key]) {
//     cancel("终止:" + config.url)
//   } else {
//     pending[key] = cancel
//   }
// }
// 删除令牌
function deletPending(config) {
  const key = encodeUrl(config)
  delete pending[key]
}

// 请求拦截器
axios.interceptors.request.use(config => {
  // const token = store.getters['common/token'];


  if (token) {
    config.headers['Authorization'] = token;
  }
  // config.cancelToken = new CancelToken((c) => {
  //   stopRequest(config, c)
  // })
  return config
}, error => {
  return error.request;
})

// 响应拦截器
axios.interceptors.response.use(response => {
  setTimeout(() => {
    deletPending(response.config)
  }, timmer);
  return response
}, err => {
  if (axios.isCancel(err)) {
    return Promise.reject(err)
  }
  setTimeout(() => {
    deletPending(err.config)
  }, timmer);

  if (err && err.response) {
    vue.$toast.clear()
    switch (err.response.status) {
      case 400:

        err.message = '错误请求'
        break
      case 401:
        err.message = '登录信息失效，请重新登录'
        Dialog({
          message: err.message
        }).then(() => {
          router.replace({ path: "/login" })
        })
        break
      case 403:
        err.message = '拒绝访问'
        break
      case 404:
        err.message = '请求错误,未找到该资源'
        break
      case 405:
        err.message = '请求方法未允许'
        break
      case 408:
        err.message = '请求超时'
        break
      case 500:
        vue.$message.error(err.response.data.errorMsg);
        err.message = '服务器端出错'
        break
      case 501:
        err.message = '网络未实现'
        break
      case 502:
        err.message = '网络错误'
        break
      case 503:
        err.message = '服务不可用'
        break
      case 504:
        err.message = '网络超时'
        break
      case 505:
        err.message = 'http版本不支持该请求'
        break
      default:
        err.message = `连接错误${err.response.status}`
    }
  } else {
    err.message = "连接到服务器失败"
  }

  // 统一错误处理可以放这，例如页面提示错误...
  // vue.$dialog.toast({
  //   mes: err.message,
  //   timeout: 1500,
  //   icon: 'error'
  // });

  return Promise.reject(err)
})


export default axios;


