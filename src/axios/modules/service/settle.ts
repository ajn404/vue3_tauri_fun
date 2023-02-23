import http from '@/axios/http'
import { baseUrl } from '@/base/config'

export default {

  // 查询结算单列表
  querySettleAccounts(param) {
    return http.get(`${baseUrl.dmsRepair}/settleAccountsInfo/querySettleAccounts`, { params: param })
  },

  //  结算单计数
  querySettleAccountsNumber(param) {
    return http.get(`${baseUrl.dmsRepair}/settleAccountsInfo/querySettleAccountsNumber`, { params: param })
  },

  //  查询收费对象
  querySettleAccountsChargeObject(param) {
    return http.get(`${baseUrl.dmsRepair}/settleAccountsInfo/querySettleAccountsChargeObject`, { params: param })
  },

  // 查询结算单明细
  querySettleAccountsItem(param) {
    return http.get(`${baseUrl.dmsRepair}/settleAccountsInfo/querySettleAccountsItem`, { params: param })
  },

  //结算-编辑保险类收费对象或者收费对象

  // 送车确认
  settleAccountsDeliveryConfirm(params) {
    return http.post(`${baseUrl.dmsRepair}/settleAccountsInfo/settleAccountsDeliveryConfirm`, params)
  },

  //收款确认
  settleAccountsPaymentConfirm(params) {
    return http.post(`${baseUrl.dmsRepair}/settleAccountsInfo/settleAccountsPaymentConfirm`, params)
  },

  //结算单编辑
  settleAccountsSave(params) {
    return http.post(`${baseUrl.dmsRepair}/settleAccountsInfo/settleAccountsSave`, params)
  },

  //自提确认
  settleAccountsSelfConfirm(params) {
    return http.post(`${baseUrl.dmsRepair}/settleAccountsInfo/settleAccountsSelfConfirm`, params)
  },
  
  //取消自提
  settleAccountsCancelSelfConfirm(params) {
    return http.post(`${baseUrl.dmsRepair}/settleAccountsInfo/settleAccountsCancelSelfConfirm`, params)
  },

  //查询监控工时&配附件
  monitorLabourPart(params) {
    return http.get(`${baseUrl.dmsRepair}/settleAccountsInfo/monitorLabourPart`, { params: params })
  },
  // 查询收费对象信息
  getCharge(params) {
    return http.get(`${baseUrl.dmsRepair}/pad/util/queryutil/getCharge`, { params: params })
  },
  // 查询工单送车单信息
  searchPickupOrder(params) {
    return http.get(`${baseUrl.dmsRepair}/settleAccountsInfo/searchPickupOrder`, { params: params })
  },

  // 创建上门取送车订单,供usp调用
  createPickupOrder(params) {
    return http.post(`${baseUrl.dmsInterface}/dmsInterface/osm/createPickupOrder`, params)
  },

  // 结算单冻结
  settleAccountRedeemFreeze(params) {
    return http.post(`${baseUrl.dmsRepair}/settleAccountsInfo/settleAccountRedeemFreeze`, params)
  },

  // 送车单取消
  cancelCarDelivery(params) {
    return http.post(`${baseUrl.dmsRepair}/settleAccountsInfo/cancelCarDelivery`, params)
  },

//  服务包权益
  queryServicePackageRights(params){
    return http.get(
        `${baseUrl.dmsRepair}/servicePackageRights/queryServicePackageRights`,
        {params:params})
  },


// 查询送车单详情
  carDeliveryDetails(params) {
    return http.get(`${baseUrl.dmsRepair}/settleAccountsInfo/carDeliveryDetails`,{params: params})
  },



}