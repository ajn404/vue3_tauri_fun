import http from '@/axios/http'
import { baseUrl } from '@/base/config'
export default {
  //  维修维修领料列表查询
  QueryRepairList(param) {
    return http.get(`${baseUrl.dmsPart}/repairPicking/qryRepairPicking`, { params: param })
  },
  // 维修领料列表查询对应头数量
  QueryRepairListCount(param) {
    return http.get(`${baseUrl.dmsPart}/repairPicking/queryRepairPickingNumber`, { params: param })
  },
  // 根据工单号查询维修领料对应的详情信息
  QueryRepairDetailInfo(param) {
    return http.get(`${baseUrl.dmsPart}/repairPicking/qryRepairPickingInfo/${param.roNo}`)
  },
  // 发送维修领料出库信息列表
  SendRepairOutInfo(param) {
    return http.post(`${baseUrl.dmsPart}/repairPicking/entryPartBuy`, param)
  },
  // 发送维修领料退料信息列表
  SendRepairBackInfo(param) {
    return http.post(`${baseUrl.dmsPart}/repairPicking/returnRepairPicking`, param)
  },

}