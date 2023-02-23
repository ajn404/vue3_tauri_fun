import http from '@/axios/http'
import { baseUrl } from '@/base/config'

export default {

  // 环检单确认接车
  bookingCheckReceive(param) {
    return http.post(`${baseUrl.dmsRepair}/bookingCheckInfo/bookingCheckReceive`, param)
  },

  // 环检单创建接车
  bookingCheckReceiveCreate(param) {
    return http.post(`${baseUrl.dmsRepair}/bookingCheckInfo/bookingCheckReceiveCreate`, param)
  },

  //  查询环检列表
  queryBookingCheck(param) {
    return http.get(`${baseUrl.dmsRepair}/bookingCheckInfo/queryBookingCheck`, { params: param })
  },
  //  环检单计数
  queryBookingCheckNumber(param) {
    return http.get(`${baseUrl.dmsRepair}/bookingCheckInfo/queryBookingCheckNumber`, { params: param })
  },
  //  查询环检单明细
  queryBookingCheckItem(param) {
    return http.get(`${baseUrl.dmsRepair}/bookingCheckInfo/queryBookingCheckItem`, { params: param })
  },
  // 环检单编辑
  bookingCheckSave(param) {
    return http.post(`${baseUrl.dmsRepair}/bookingCheckInfo/bookingCheckSave`, param)
  },

  // 环检取消
  bookingCheckCancel(param) {
    return http.post(`${baseUrl.dmsRepair}/bookingCheckInfo/bookingCheckObsolete`,param)
  }










}