


import { baseUrl } from '@/base/config'
import http from '@/axios/http'

export default {
  // 产能- 编辑
  capacityInfoSave(params) {
    return http.post(`${baseUrl.dmsRepair}/capacityInfo/capacityInfoSave`, params)
  },

  // 产能明细-编辑
  capacityItemInfoSave(params) {
    return http.post(`${baseUrl.dmsRepair}/capacityInfo/capacityItemInfoSave`, params)
  },

  // 产能-查询
  queryCapacityInfo(params) {
    return http.get(`${baseUrl.dmsRepair}/capacityInfo/queryCapacityInfo`, { params: params })
  },

  // 产能明细-查询
  queryCapacityInfoItem(params) {
    return http.get(`${baseUrl.dmsRepair}/capacityInfo/queryCapacityInfoItem`, { params: params })
  },
  
  // 营业时间-查询
  queryDealerBusinessTime(params) {
    return http.get(`${baseUrl.dmsRepair}/capacityInfo/queryDealerBusinessTime`, { params: params })
  },
}


