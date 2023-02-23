

import http from '@/axios'
import { baseUrl } from '@/base/config'

export default {
  // 获取字典
  queryTcCode(params) {
    return http.get(`${baseUrl.login}/basedata/dicts`, { params: params })
  },

  // 获取App 版本信息
  getApkVersion() {
    return http.get(`${baseUrl.dcsManage}/getApkVersion`)
  },

  queryLaunchNotification(param){
    return http.get(`${baseUrl.login}/launchNotification/queryLaunchNotification`, { params: param })
  },

  saveLaunchNotification(param){
    return http.get(`${baseUrl.login}/launchNotification/saveLaunchNotification/${param.id}`)
  },

  //获取附件
  getAttachments(param){
    return http.post(`${baseUrl.login}/launchNotification/getAttachments/${param.id}`)
  },

  // 查看通知详情
  queryNotificationDetail(param){
    return http.post(`${baseUrl.login}/launchNotification/queryNotificationDetail/${param.id}`)
  },



}