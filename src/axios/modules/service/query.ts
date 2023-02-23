import http from '@/axios/http'
import { baseUrl } from '@/base/config'
export default {
  //  维修查询列表
  QueryBookingList(param) {
    return http.get(`${baseUrl.dmsRepair}/bookingOrderInfo/queryBookingOrder`, { params: param })
  },
  // 工单查询
  queryRepairOrder(param) {
    return http.get(`${baseUrl.dmsRepair}/searchCommonInfo/queryRepairOrder`, { params: param })
  },
  // 附件安装工时对账查询
  queryPartInstallVerify(param){
    return http.get(`${baseUrl.dmsRepair}/partInstallVerify/verificationPad`, { params: param })
  }
  ,
  // 工单查询
  queryRepairOrderWithDelivery(param) {
    return http.get(`${baseUrl.dmsRepair}/searchCommonInfo/queryRepairOrderWithDelivery`, { params: param })
  },

  // 确认交车
  delivery(param) {
    return http.post(`${baseUrl.dmsRepair}/order/repair/delivery`, param)
  },

  //在修车辆信息查询
  queryRepairingVehicle(params){
    return http.get(`${baseUrl.dmsRepair}/repairingVehicle/queryRepairingVehicle`, { params: params })
  },

  // 出门证
  getHTML(param) {
    return http.get(`${baseUrl.dmsRepair}/order/repair/getHTML`, { params: param })
  },

  // 打印数据返回
  getPrintData(param) {
    return http.get(`${baseUrl.dmsRepair}/order/repair/getPrintData`, { params: param })
  },



  // 工时查询
  queryLabourInfo(param) {
    return http.get(`${baseUrl.dmsRepair}/searchCommonInfo/queryLabourInfo`, { params: param })
  },

  // 质检查询
  queryQualityInspection(param) {
    return http.get(`${baseUrl.dmsRepair}/searchCommonInfo/queryQualityInspection`, { params: param })
  },

  // 结算单查询
  querySettleAccounts(param) {
    return http.get(`${baseUrl.dmsRepair}/searchCommonInfo/querySettleAccounts`, { params: param })
  },

  // 车型查询
  getModels(param) {
    return http.get(`${baseUrl.dmsRepair}/searchCommonInfo/getModels`, { params: param })
  },

  // 套餐
  queryRepairPackageInfo(param) {
    return http.get(`${baseUrl.dmsRepair}/searchCommonInfo/queryRepairPackageInfo`, { params: param })
  },

  // 查询服务活动、服务活动信息
  queryActivity(param) {
    return http.get(`${baseUrl.dmsRepair}/searchCommonInfo/queryActivity`, { params: param })
  },

  // 查询营销活动
  queryMarketActivity(param) {
    return http.get(`${baseUrl.dmsRepair}/searchCommonInfo/queryMarketActivity`, { params: param })
  },

  // 环检单查询
  queryBookingCheck(param) {
    return http.get(`${baseUrl.dmsRepair}/searchCommonInfo/queryBookingCheck`, { params: param })
  },
  // 预约单查询
  queryBookingOrder(param) {
    return http.get(`${baseUrl.dmsRepair}/searchCommonInfo/queryBookingOrder`, { params: param })
  },
  // 维修历史查询
  queryRepairHistoryInfo(param) {
    return http.get(`${baseUrl.dmsRepair}/searchCommonInfo/queryRepairHistoryInfo`, { params: param })
  },
  // 车主车辆查询
  queryOwnerVehicleInfo(param) {
    return http.get(`${baseUrl.dmsRepair}/searchCommonInfo/queryOwnerVehicleInfo`, { params: param })
  },
  // 车主车辆详情
  queryOwnerVehicleDetail(param) {
    return http.get(`${baseUrl.dmsRepair}/ownerVehicleInfo/queryOwnerVehicleDetail/${param.vin}`)
  },
  // 收款明细查询
  queryPaymentDetailInfo(param) {
    return http.get(`${baseUrl.dmsRepair}/searchCommonInfo/queryPaymentDetailInfo`, { params: param })
  },

  // 查询维修工单信息
  searchRepairOrderInfo(param) {
    return http.get(`${baseUrl.dmsRepair}/maintenancePortfolioManage/searchRepairOrderInfo`, { params: param })
  },
  // 维修组合管理新增修改
  saveMaintenancePortfolioManage(param) {
    return http.post(`${baseUrl.dmsRepair}/maintenancePortfolioManage/saveMaintenancePortfolioManage`, param)
  },
  // 维修组合单提交
  submitMaintenancePortfolioManage(param) {
    return http.post(`${baseUrl.dmsRepair}/maintenancePortfolioManage/submitMaintenancePortfolioManage`, param)
  },
  // 查询维修组合管理明细
  queryMaintenancePortfolioManageInfo(param) {
    return http.get(`${baseUrl.dmsRepair}/maintenancePortfolioManage/queryMaintenancePortfolioManageInfo/${param}`)
  },
   // 查询维修组合管理明细
   queryMaintenancePortfolioManageInfos(param) {
    return http.get(`${baseUrl.dmsRepair}/maintenancePortfolioManage/queryMaintenancePortfolioManageInfos?${param}`)
  },
  // 车辆报警信息查询
  queryVehicleAlarm(param) {
    return http.get(`${baseUrl.dmsRepair}/searchCommonInfo/queryVehicleAlarm`, { params: param })
  },
  // 车辆报警明细信息查询
  queryVehicleAlarmInfo(param) {
    return http.get(`${baseUrl.dmsRepair}/searchCommonInfo/queryVehicleAlarmInfo/${param.id}`)
  },
  // 服务产品使用记录查询
  queryLegalRightRecord(param) {
    return http.get(`${baseUrl.dmsRepair}/serviceProductsInfo/queryLegalRightRecord`, { params: param })
  },
  // 服务产品使用记录导出
  bookingCheckExport(param) {
    return http.get(`${baseUrl.dmsRepair}/exportProductsInfo/bookingCheckExport`, { params: param })
  },
  // 取送车列表查询
  queryTakeSendVehicleMessagePadList(param) {
    return http.get(`${baseUrl.dmsRepair}/takeSendVehicleMessagePad/queryTakeSendVehicleMessagePadList`, { params: param })
  },
  // 取送车列表查询-明细
  queryTakeSendVehicleMessagePadDetail(param) {
    return http.get(`${baseUrl.dmsRepair}/takeSendVehicleMessagePad/queryTakeSendVehicleMessagePadDetail/${param.pickUpNo}`)
  },

  // 查询取送车信息查询的附件
  queryFilePicsPage(param) {
    return http.get(`${baseUrl.dmsRepair}/takeSendVehicleMessagePad/queryFilePicsPage`, { params: param })
  },
  // 附件订单查询
  queryAccessoryInstallInfo(param) {
    return http.get(`${baseUrl.dmsRepair}/accessoryInstallInfo/queryAccessoryInstallInfo`, { params: param })
  },

  // 车辆保险信息接口
  queryVehicleInsurance(param) {
    return http.get(`${baseUrl.dmsRepair}/ownerVehicleInfoPad/queryVehicleInsurance/${param.vin}`)
  },

  //保险公司名称查询接口
  queryInsuranceDeaerName(param){
    return http.get(`${baseUrl.dmsRepair}/ownerVehicleInfoPad/queryName`,{parmas:param})
  },

  //新增保险信息
  addInsurance(param){
    return http.post(`${baseUrl.dmsRepair}/ownerVehicleInfoPad/insert`, param)
  },

  //编辑保险信息
  editInsurance(param){
    return http.post(`${baseUrl.dmsRepair}/ownerVehicleInfoPad/updateInsuranceInformation`, param)
  },

  // 车交付礼品信息
  queryGifNotarize(param) {
    return http.get(`${baseUrl.dmsRepair}/giftNotarizePad/queryGifNotarize`, { params: param })
  },

  //车辆信息修改历史
  queryVehicleUpdateHisList(param) {
    return http.get(`${baseUrl.dmsRepair}/ownerVehicleInfoPad/queryVehicleUpdateHisList`, { params: param })
  },

  //查询工单折扣
  queryDiscount(param) {
    return http.get(`${baseUrl.dmsRepair}/discount/queryDiscount`, { params: param })
  },

  //新增工单折扣
  addDiscount(param) {
    return http.post(`${baseUrl.dmsRepair}/discount/saveDiscount`, param)
  },

  //工单折扣操作记录
  queryDiscountHis(param) {
    return http.get(`${baseUrl.dmsRepair}/discount/queryDiscountHis`,{ params: param })
  },

  //查询减免原因
  queryMitigate(param){
    return http.get(`${baseUrl.dmsRepair}/mitigate/queryMitigate`, { params: param })
  },

  //新增减免原因
  saveMitigate(param) {
    return http.post(`${baseUrl.dmsRepair}/mitigate/saveMitigate`, param)
  },

  //减免原因修改历史
  queryMitigateHis(param){
    return http.get(`${baseUrl.dmsRepair}/mitigate/queryMitigateHis`,{ params: param })
  },

  //车架号查询
  queryOwnerVehicleInfoThreePackage(param){
    return http.get(`${baseUrl.dmsRepair}/threePackageVoucher/queryOwnerVehicleInfo`,{ params: param })
  },

  //三包凭证补打信息查询
  queryThreePackageVoucher(param){
    return http.get(`${baseUrl.dmsRepair}/threePackageVoucher/queryThreePackageVoucher`,{ params: param })
  },

  //三包凭证补打新增或修改
  saveThreePackageVoucher(param){
    return http.post(`${baseUrl.dmsRepair}/threePackageVoucher/saveThreePackageVoucher`, param)
  },

  //三包提交
  submitThreePackageVoucher(param){
    return http.post(`${baseUrl.dmsRepair}/threePackageVoucher/submitThreePackageVoucher`, param)
  },

  //去向单位查询
  batteryDepartureInfoQuery(param){
    return http.get(`${baseUrl.dmsRepair}/vechicleBattery/BatteryDepartureInfoQuery`,{params:param});
  },

  //新增去向单位
  saveOldBatteryClassification(param){
    return http.post(`${baseUrl.dmsRepair}/vechicleBattery/saveOldBatteryClassification`, param);

  },


  //查询告知函
  queryCustomerInformNotice(param){
    return http.get(`${baseUrl.dmsRepair}/customerInformNotice/queryCustomerInformNotice`,{params:param});
  },

  //新增客户告知函
  saveCustomerInformNotice(param){
    return http.post(`${baseUrl.dmsRepair}/customerInformNotice/saveCustomerInformNotice`, param);
  },

  //告知函弹框提示签订
  judgeIsSignCustomerNotice(param){
    return http.post(`${baseUrl.dmsRepair}/customerInformNotice/judgeIsSignCustomerNotice`, param);
  },

  //查询车主车辆信息
  queryInformNoticeVehicleInfo(param){
    return http.get(`${baseUrl.dmsRepair}/customerInformNotice/queryInformNoticeVehicleInfo`,{params:param});
  },

  //查询活动车辆信息
  queryActivityVehicles(param){
    return http.get(`${baseUrl.dmsRepair}/searchCommonInfo/queryActivityVehicles`,{params:param});

  },
  //查询活动车辆邀约记录信息
  queryActivityVehiclesRecord(param){
    return http.get(`${baseUrl.dmsRepair}/searchCommonInfo/queryActivityVehiclesRecord`,{params:param});
  },
  //服务中心查询
  queryDealerInfoList(param){
    return http.get(`${baseUrl.dmsRepair}/searchCommonInfo/queryDealerInfoList`,{params:param});
  },



















































}