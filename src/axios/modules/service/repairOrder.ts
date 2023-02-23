

import { baseUrl } from '@/base/config'

import http from '@/axios/http'


export default {

  // 获取是否要提交的状态
  conformStatus(params) {
    return http.get(`${baseUrl.dmsRepair}/order/repair/conformStatus`, { params: params })
  },

  // 查询附件
  queryFilePics(params) {
    return http.get(`${baseUrl.dmsRepair}/pad/util/queryutil/queryFilePics`, { params: params })
  },

  // 查询车主车辆信息
  getVehicleInfo(params) {
    return http.get(`${baseUrl.dmsRepair}/pad/util/queryutil/pad/getVehicleInfo`, { params: params })
  },

  //osm检查
  checkPushOsm(roNo){
    return http.get(`${baseUrl.dmsRepair}/order/repair/checkPushOsm/${roNo}`)
  },

  // 查询人员信息
  getUsers(params) {
    return http.get(`${baseUrl.dmsRepair}/pad/util/queryutil/getUsers`, { params: params })
  },

  // 创建快速工单
  newWorkOrder(params) {
    return http.post(`${baseUrl.dmsRepair}/order/repair/newWorkOrder`, params)
  },

  // 查询工单列表节点数据统计
  queryNodeCount(params) {
    return http.get(`${baseUrl.dmsRepair}/order/repair/queryNodeCount`, { params: params })
  },

  queryDeliverCount(params) {
    return http.get(`${baseUrl.dmsRepair}/pad/util/queryutil/queryDeliverCount`, { params: params })
  },

  // 查询工单列表
  queryRepairOrder(params) {
    return http.get(`${baseUrl.dmsRepair}/order/repair/queryRepairOrder`, { params: params })
  },



  // 查询工时树性结构
  queryLabourTree(params) {
    return http.get(`${baseUrl.dmsRepair}/pad/util/queryutil/queryLabourTree`, { params: params })
  },


  // 查询工时主数据
  queryLabourCode(params) {
    return http.get(`${baseUrl.dmsRepair}/pad/util/queryutil/queryLabourCode`, { params: params })
  },

  // 查询仓储
  queryStorage(params) {
    return http.get(`${baseUrl.dmsRepair}/pad/util/queryutil/queryStorage`, { params: params })
  },

  // 查询配件
  queryPartInfo(params) {
    return http.get(`${baseUrl.dmsRepair}/pad/util/queryutil/queryPartInfo`, { params: params })
  },

  // 查询工时下配件信息
  queryLabourPart(params) {
    return http.get(`${baseUrl.dmsRepair}/pad/util/queryutil/queryLabourPart`, { params: params })
  },

  // 查询其他费用信息
  queryOtherFee(params) {
    return http.get(`${baseUrl.dmsRepair}/pad/util/queryutil/queryOtherFee`, { params: params })
  },

  // 根据工单号查询维修项目
  queryRoLabour(params) {
    return http.get(`${baseUrl.dmsRepair}/order/repair/queryRoLabour/${params.roNo}`)
  },

  // 根据工单号查询增项申请
  queryRoApplyInfo(params) {
    return http.get(`${baseUrl.dmsRepair}/order/repair/queryRoApplyInfo/${params.roNo}`)
  },

  // 根据工单号查询其他费用信息
  queryRoOther(params) {
    return http.get(`${baseUrl.dmsRepair}/order/repair/queryRoOther/${params.roNo}`)
  },

  // 根据工单号查询配件信息
  queryRoPart(params) {
    return http.get(`${baseUrl.dmsRepair}/order/repair/queryRoPart/${params.roNo}`)
  },

  // 查询维修套餐信息
  queryRepairPackage(params) {
    return http.get(`${baseUrl.dmsRepair}/pad/util/queryutil/queryRepairPackage`, { params: params })
  },

  //查询保养套餐信息
  queryMaintainPackage(params) {
    return http.get(`${baseUrl.dmsRepair}/pad/util/queryutil/queryMaintainPackage`, { params: params })
  },

  // 查询增减项变更历史
  queryRepairOrderHis(params) {
    return http.get(`${baseUrl.dmsRepair}/order/repair/queryRepairOrderHis`, { params: params })
  },

  // 查询维修历史
  getRepairHistoryInfo(params) {
    return http.get(`${baseUrl.dmsRepair}/order/repair/getRepairHistoryInfo`, { params: params })
  },

  //查询漆面公式
  queryPaintRepairLabour(params){
    return http.get(`${baseUrl.dmsRepair}/paintRepairLabour/queryPaintRepairLabour`, { params: params })
  },


  // 工单保存
  save(params) {
    return http.post(`${baseUrl.dmsRepair}/order/repair/save`, params)
  },

  // 工单提交
  submit(params) {
    return http.post(`${baseUrl.dmsRepair}/order/repair/submit`, params)
  },

  // 查询电池的去向单位
  queryDeparture(params) {
    return http.get(`${baseUrl.dmsRepair}/order/repair/queryDeparture`, { params: params })
  },

  // 获取电池信息
  queryPowerInfo(params) {
    return http.get(`${baseUrl.dmsRepair}/order/repair/queryPowerInfo`, { params: params })
  },


  // 查询服务活动、服务活动信息
  queryActivity(params) {
    return http.get(`${baseUrl.dmsRepair}/pad/util/queryutil/queryActivity`, { params: params })
  },

  // 查询营销活动
  queryMarketActivity(param) {
    return http.get(`${baseUrl.dmsRepair}/pad/util/queryutil/queryMarketActivity`, { params: param })
  },

  // 获取工单服务活动提醒
  queryRecallInfo(params) {
    return http.get(`${baseUrl.dmsRepair}/pad/util/queryutil/queryRecallInfo`, { params: params })
  },

  // 查询派工列表
  queryDispatch(params) {
    return http.get(`${baseUrl.dmsRepair}/order/repair/queryDispatch`, { params: params })
  },

  // 查询派工列表数据统计
  queryDispatchCount(params) {
    return http.get(`${baseUrl.dmsRepair}/order/repair/queryDispatchCount`, { params: params })
  },

  // 派工，改派，删除派工信息
  dispatchTechnicianSave(params) {
    return http.post(`${baseUrl.dmsRepair}/order/repair/dispatchTechnicianSave`, params)
  },

  // 查询技师维修信息
  techQueryRoLabour(params) {
    return http.get(`${baseUrl.dmsRepair}/tech/queryRoLabour/${params.roNo}`)
  },

  // 维修技师开工
  startSave(params) {
    return http.post(`${baseUrl.dmsRepair}/tech/startSave`, params)
  },

  // 技师增项申请
  techSave(params) {
    return http.post(`${baseUrl.dmsRepair}/tech/techSave`, params)
  },

  // 维修技师完工
  completeSave(params) {
    return http.post(`${baseUrl.dmsRepair}/tech/completeSave`, params)
  },

  // 查询维修列表
  queryMaintainInfo(params) {
    return http.get(`${baseUrl.dmsRepair}/tech/queryMaintainInfo`, { params: params })
  },

  // 查询维修列表节点数据统计
  queryMaintainNodeCount(params) {
    return http.get(`${baseUrl.dmsRepair}/tech/queryMaintainNodeCount`, { params: params })
  },

  // 质检查询
  queryQualityInspection(params) {
    return http.get(`${baseUrl.dmsRepair}/qualityInspectionInfo/queryQualityInspection`, { params: params })
  },

  // 质检计数
  queryQualityInspectionNumber(params) {
    return http.get(`${baseUrl.dmsRepair}/qualityInspectionInfo/queryQualityInspectionNumber`, { params: params })
  },

  // 质检明细查询
  queryQualityInspectionItem(params) {
    return http.get(`${baseUrl.dmsRepair}/qualityInspectionInfo/queryQualityInspectionItem`, { params: params })
  },

  // 质检编辑
  qualityInspectionSave(params) {
    return http.post(`${baseUrl.dmsRepair}/qualityInspectionInfo/qualityInspectionSave`, params)
  },

  // 查询各个节点数据
  queryAllNodeCount() {
    return http.get(`${baseUrl.dmsRepair}/pad/util/queryutil/queryNodeCount`)
  },

  // 根据工单号查询工单信息
  queryRepairOrderInfo(params) {
    return http.get(`${baseUrl.dmsRepair}/order/repair/queryRepairOrderInfo/${params.roNo}`)
  },

  //根据工单号查询保养期状态
  maintenancePeriod(params){
    return http.get(`${baseUrl.dmsRepair}/order/repair/maintenancePeriod/${params.roNo}`)
  },

  // 维修组合管理列表查询
  QueryRepairMaintenanceList(param) {
    return http.get(`${baseUrl.dmsRepair}/maintenancePortfolioManage/queryMaintenancePortfolioManage`, { params: param })
  },

  // 检查表信息展示
  async queryInventory(param) {
    // 调用第三方接口获取剩余电量与车辆里程，并赋值

    // const getElectricMileageInfo = await http.get(`${baseUrl.dmsRepair}/dcspInfo/getElectricMileageInfo`, { params: param })
    // 检查表排序
    const res = await http.get(`${baseUrl.dmsRepair}/order/repair/queryInventory`, { params: param })
    try {
      res.data = res.data.sort((a, b) => {
        return a.oneCode * 1 - b.oneCode * 1
      })
      res.data = res.data.map(item => {
        item.twoList = item.twoList.sort((a, b) => {
          return a.twoCode * 1 - b.twoCode * 1
        })
        // .map(arr => {
        //   if (arr.twoCode == 4002 && !arr.unitValue && getElectricMileageInfo.data.electricCharge) {
        //     arr.unitValue = getElectricMileageInfo.data.electricCharge
        //   }
        //   if (arr.twoCode == 4001 && !arr.unitValue && getElectricMileageInfo.data.inMileage) {
        //     arr.unitValue = getElectricMileageInfo.data.inMileage
        //   }
        //   return arr
        // })
        return item
      })

      return res
    } catch (error) {
      return error
    }

  },

  // 检查表保存
  inventorySave(params) {
    return http.post(`${baseUrl.dmsRepair}/order/repair/inventorySave`, params)
  },

  // 检查表历史-工单
  queryHistory(param) {
    return http.get(`${baseUrl.dmsRepair}/order/repair/queryHistory`, { params: param })
  },

  // 检查表历史
  queryInventoryHistory(param) {
    return http.get(`${baseUrl.dmsRepair}/order/repair/queryInventoryHistory`, { params: param })
  },



  // 查询是否存在再修工单
  searchRepairOrder(param) {
    return http.get(`${baseUrl.dmsRepair}/pad/util/queryutil/pad/searchRepairOrder`, { params: param })
  },


  // 三包预警信息提醒 / 三包预警信息提醒PAD后台
  queryWarnPad(param) {
    return http.post(`${baseUrl.dcsVehicle}/ruleApplication/queryWarnPad?vin=${param.vin}`)
  },

  // 附件订单查询
  queryAccessoryInstallInfo(param) {
    return http.get(`${baseUrl.dmsRepair}/accessoryInstallInfo/queryAccessoryInstallInfo`, { params: param })
  },

  // 附件订单明细查询
  queryAccessoryInstallItemInfo(param) {
    return http.get(`${baseUrl.dmsRepair}/accessoryInstallInfo/queryAccessoryInstallItemInfo`, { params: param })
  },

  //可用产能-查询
  queryAvailableCapacity(param) {
    return http.get(`${baseUrl.dmsRepair}/capacityInfo/queryAvailableCapacity`, { params: param })
  },

  // 撤回
  withdraw(params) {
    return http.post(`${baseUrl.dmsRepair}/order/repair/withdraw`, params)
  },


  //工单作废
  invalidRepair(params){
    return http.post(`${baseUrl.dmsRepair}/order/repair/invalid`, params)
  },

  //  车主车辆信息修改
  updateVehicleInfo(params){
    return http.post(`${baseUrl.dmsRepair}/ownerVehicleInfoPad/updateVehicleInfo`, params)
  },

  //工单确认确认
  selfConfirm(params){
    return http.post(`${baseUrl.dmsRepair}/order/repair/selfConfirm`,params)
  },

  //工单确认历史记录查询
  queryConfirmRecord(param){
    return http.get(`${baseUrl.dmsRepair}/order/repair/queryConfirmRecord`, { params: param })
  },

  //上报邀约结果
  uploadVbookingStatus(params){
    return http.post(`${baseUrl.dmsRepair}/bookingOrderInfo/uploadVbookingStatus`,params)
  },

}



