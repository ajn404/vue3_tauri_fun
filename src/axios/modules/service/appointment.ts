
import http from '@/axios/http'
import { baseUrl } from '@/base/config'

export default {
  //  查询预约单列表
  queryBookingOrder(param) {
    return http.get(`${baseUrl.dmsRepair}/bookingOrderInfo/queryBookingOrder`, { params: param })
  },
  //  预约单计数
  queryBookingOrderNumber(param) {
    return http.get(`${baseUrl.dmsRepair}/bookingOrderInfo/queryBookingOrderNumber`, { params: param })
  },
  //  查询预约单明细
  queryBookingOrderItem(param) {
    return http.get(`${baseUrl.dmsRepair}/bookingOrderInfo/queryBookingOrderItem`, { params: param })
  },
  // 预约单编辑
  bookingOrderSave(param) {
    return http.post(`${baseUrl.dmsRepair}/bookingOrderInfo/bookingOrderSave`, param)
  },
  // 预约确认
  bookingOrderConfirm(param) {
    return http.post(`${baseUrl.dmsRepair}/bookingOrderInfo/bookingOrderConfirm`, param)
  },
  // 申请分配
  applyAllocation(param) {
    return http.post(`${baseUrl.dmsRepair}/bookingOrderInfo/applyAllocation`, param)
  },
  //  用户权益
  bookingOrderRightsInfo(param) {
    return http.get(`${baseUrl.dmsRepair}/bookingOrderInfo/bookingOrderRightsInfo`, { params: param })
  },
  // 服务顾问分配
  serviceAdvisorAllocate(param) {
    return http.post(`${baseUrl.dmsRepair}/bookingOrderInfo/serviceAdvisorAllocate`, param)
  },
  // 预约单取消
  bookingOrderCancel(param) {
    return http.post(`${baseUrl.dmsRepair}/bookingOrderInfo/bookingOrderCancel`, param)
  },

  // 工单的用户权益
  queryRightsInfo(param) {
    return http.get(`${baseUrl.dmsRepair}/order/repair/queryRightsInfo`, { params: param })
  },








  // 根据预授权ID查询基本信息
  QueryPreLicenBaseInfoById(param) {
    return http.get(`${baseUrl.dmsRepair}/maintainPreLicensing/queryMaintainPreLicensingInfo/${param}`)
  },
  // 查询预授权信息列表
  queryPreLicenInfoList(params) {
    return http.get(`${baseUrl.dmsRepair}/maintainPreLicensing/queryMaintainPreLicensing`, { params: params })
  },
  // 查询预授权信息列表-删除
  queryMaintainDealer(params) {
    return http.get(`${baseUrl.dmsRepair}/maintainPreLicensing/queryMaintainDealer`, { params: params })
  },
  // 预授权审核历史
  queryAuditHistoryInfo(params) {
    return http.get(`${baseUrl.dmsRepair}/maintainPreLicensing/queryAuditHistoryInfo`, { params: params })
  },
  // 发送保存预授权单信息到后台
  SendSavePreLicenInfo(params) {
    return http.post(`${baseUrl.dmsRepair}/maintainPreLicensing/saveMaintainPreLicensing`, params )
  },
  // 发送提交预授权单信息到后台
  SendSubmitPreLicenInfo(params) {
    return http.post(`${baseUrl.dmsRepair}/maintainPreLicensing/submitMaintainPreLicensing`, params)
  },
  // 查询车主车辆信息
  QueryPreLicenInfoByVin(param) {
    return http.get(`${baseUrl.dmsRepair}/maintainPreLicensing/searchOwnerVehicleInfo`, { params: param })
  },
  // 查询维修工单信息
  QueryPreLicenInfoByRoNo(params) {
    return http.get(`${baseUrl.dmsRepair}/maintainPreLicensing/searchRepairOrderInfo`, { params: params })
  },
  // 预授权申请打印
  queryPrint(param) {
    return http.get(`${baseUrl.dmsRepair}/maintainPreLicensing/queryPrint/${param}`)
  },




  // 查询善意索赔列表
  goodwill(param) {
    return http.get(`${baseUrl.dmsRepair}/goodwill`, { params: param })
  },
  // 查询善意索赔列表-删除
  goodwillDealer(param) {
    return http.get(`${baseUrl.dcsRepair}/goodwill/goodwillDealer`, { params: param })
  },
  // 善意索赔审核历史
  goodwillAuditHistoryInfo(params) {
    return http.get(`${baseUrl.dcsRepair}/goodwill/goodwillAuditHistoryInfo`, { params: params })
  },
  // 根据id查询善意索赔
  goodwillDetail(param) {
    return http.get(`${baseUrl.dmsRepair}/goodwill/${param}`)
  },
  // 根据id查询明细附件
  goodwillDetailFile(param) {
    return http.get(`${baseUrl.dmsRepair}/goodwill/list/${param}`)
  },
  // 善意索赔保存
  goodwillSave(params) {
    return http.post(`${baseUrl.dmsRepair}/goodwill/save`, params )
  },
  // 善意索赔提交
  goodwillSubmit(params) {
    return http.post(`${baseUrl.dmsRepair}/goodwill/submit`, params )
  },


  // 查询保修对账录入列表
  queryCacuPayobj(param) {
    return http.get(`${baseUrl.dmsRepair}/cacuPayobj/queryCacuPayobj`, { params: param })
  },
  // 提交
  submitCacuPayobj(params) {
    return http.post(`${baseUrl.dmsRepair}/cacuPayobj/submitCacuPayobj`, params )
  },

  // 配附件主页面的消息提醒接口
  goodwillQuery(param) {
    return http.get(`${baseUrl.dmsRepair}/goodwill/searchRepairOrderInfo/query`, { params: param })
  },

   // 查询配件的接口-预授权申请
  querymaintainPreLicensingPartInfo(param) {
    return http.get(`${baseUrl.dmsRepair}/maintainPreLicensing/querymaintainPreLicensingPartInfo`, { params: param })
  },

  // 查询工单配件数据
  queryRoNoPartInfo(param) {
    return http.get(`${baseUrl.dmsRepair}/maintainPreLicensing/queryRoNoPartInfo`, { params: param })
  },
  // 查询工单工时数据
  queryRepairOrderLabourInfo(param) {
    return http.get(`${baseUrl.dmsRepair}/maintainPreLicensing/queryRepairOrderLabourInfo`, { params: param })
  },
  // 查询电量和里程
  getElectricMileageInfo(param) {
    return http.get(`${baseUrl.dmsRepair}/dcspInfo/getElectricMileageInfo`, { params: param })
  },


  // 保修对账查询导出数据接口路径
  caCuPayObjDownload(param) {
    return http.get(`${baseUrl.dmsRepair}/cacuPayobj/caCuPayObjDownload`, { params: param })
  },
  // 根据工单号，查询工时，配件，其他费用明细信息

  queryRoNoPart(param) {
    return http.get(`${baseUrl.dmsRepair}/order/repair/queryRoNoPart`, { params: param })
  },

















}