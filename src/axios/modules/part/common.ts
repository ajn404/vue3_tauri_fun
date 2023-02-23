import http from '@/axios/http'
import { baseUrl } from '@/base/config'
export default {
  // 配附件查询公共方法
  queryPartData(param) {
    return http.get(`${baseUrl.dmsPart}/queryStockData/queryPartData`, { params: param })
  },
  //配附件查询原厂件方法
  queryPartInfo(param){
    return http.get(`${baseUrl.dmsPart}/orderReportInfo/queryPartInfo`, { params: param })
  },


  queryPartDataAll(param) {
    return http.get(`${baseUrl.dmsPart}/queryStockData/queryPartDataAll`, { params: param })
  },
  // 根据客户名称/客户代码查询客户信息
  findPartCustomer(param) {
    return http.get(`${baseUrl.dmsPart}/queryStockData/findPartCustomer`, { params: param })
  },
  // 查询当前服务中心的用户
  queryDealerUser(param) {
    return http.get(`${baseUrl.dmsPart}/queryStockData/queryDealerUser`, { params: param })
  },

  // 报溢/报损盘点列表
  queryInventoryProfitLoss(param) {
    return http.get(`${baseUrl.dmsPart}/partStockInventoryInfo/queryInventoryProfitLoss`, { params: param })
  },

  // 查询配件
  queryStockManagePart(param) {
    return http.get(`${baseUrl.dmsPart}/queryStockData/queryStockManagePart`, { params: param })
  },

  // 判断两个仓库是否同类型
  equalsStorageType(param) {
    return http.get(`${baseUrl.dmsPart}/queryStockData/equalsStorageType`, { params: param })
  },


  // 配附件主页面的消息提醒接口
  queryStockDataNumber(param) {
    return http.get(`${baseUrl.dmsPart}/queryStockData/queryNumber`, { params: param })
  },






























}