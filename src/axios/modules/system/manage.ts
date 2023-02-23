


import http from '../../http'
import { baseUrl } from '@/base/config'

export default {
  // 查询人员变更信息
  getUserApply(params) {
    return http.get(`${baseUrl.dcsManage}/manage/getUserApply`, { params: params })
  },
  // 查询人员变更信息头部信息
  getUserApplyNode(params) {
    return http.get(`${baseUrl.dcsManage}/manage/getUserApplyNode`, { params: params })
  },
  // 查询人员信息
  getUsers(params) {
    return http.get(`${baseUrl.dcsManage}/manage/getUsers`, { params: params })
  },

  getEmployee(params) {
    return http.get(`${baseUrl.dcsManage}/manage/getEmployee`, { params: params })
  },





  //查询人员详情
  getUserinfo(params) {
    return http.get(`${baseUrl.dcsManage}/manage/getUserinfo`, { params: params })
  },
  // 保存提交
  apply(params) {
    return http.post(`${baseUrl.dcsManage}/manage/apply`, params)
  },

  //查询容量变更信息
  getApplyCapation(params) {
    return http.get(`${baseUrl.dcsManage}/manage/getApplyCapation`, { params: params })
  },

  //查询容量信息
  getCapacity(params) {
    return http.get(`${baseUrl.dcsManage}/manage/getCapacity`, { params: params })
  },

  // 容量变更申请保存及提交
  saveCapacity(params) {
    return http.post(`${baseUrl.dcsManage}/manage/saveCapacity`, params)
  },
  // 查询经销商信息
  dealer(params) {
    return http.get(`${baseUrl.dcsManage}/manage/dealer`, { params: params })
  },
  // 查询附件
  getFile(params) {
    return http.get(`${baseUrl.dcsManage}/manage/getFile/${params.applyId}/${params.billType}`)
  },

  //查询工具设备检核
  queryEquipmentCheck(params) {
    return http.post(`${baseUrl.dmsRepair}/equipment/queryEquipmentCheck?sort=${params.sort||''}&order=${params.order||''}&limit=${params.limit}&offset=${params.offset}`, params)
  },

  //查询工具设备检核明细
  queryEquipmentCheckDetail(params) {
    return http.post(`${baseUrl.dmsRepair}/equipment/queryEquipmentCheckDetail`, params)
  },

  //保存工具设备检核
  saveEquipment(params) {
    return http.post(`${baseUrl.dmsRepair}/equipment/save`, params)
  },

  //提交工具设备检核
  submitEquipment(params) {
    return http.post(`${baseUrl.dmsRepair}/equipment/submit`, params)
  },

  





}