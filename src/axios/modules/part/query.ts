import http from '@/axios/http'
import { baseUrl } from '@/base/config'
export default {
  //  查询配附件出入库明细列表
  qryPartReportOrders(param) {
    return http.get(`${baseUrl.dmsPart}/partReport/qryPartReportOrders`, { params: param })
  },

  //  配附件出入库明细列表导出
  download(param) {
    return http.get(`${baseUrl.dmsPart}/partReport/download`, { params: param })
  },



}