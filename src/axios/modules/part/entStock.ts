
import http from '@/axios/http'

import { baseUrl } from '@/base/config'

export default {

  // 查询调拨入库列表
  qryAllocateInOrders(param) {
    return http.get(`${baseUrl.dmsPart}/partAllocateInPad/qryAllocateInOrders`, { params: param })
  },
  // 查询调拨入库数量
  queryAllocateInNumber(param) {
    return http.get(`${baseUrl.dmsPart}/partAllocateInPad/queryAllocateInNumber`, { params: param })
  },
  // 调拨入库新增
  addPartOrderReceipt(param) {
    return http.post(`${baseUrl.dmsPart}/partAllocateInPad/addPartOrderReceipt`, param)
  },
  // 查询调拨入库单明细
  qryAllocateInOrdersInfo(param) {
    return http.get(`${baseUrl.dmsPart}/partAllocateInPad/qryAllocateInOrdersInfo/${param}`)
  },
  // 调拨入库修改保存
  savePartOrderReceipt(param) {
    return http.post(`${baseUrl.dmsPart}/partAllocateInPad/savePartOrderReceipt`, param)
  },
  // 调拨入库单入账
  recorded(param) {
    return http.post(`${baseUrl.dmsPart}/partAllocateInPad/recorded`, param)
  },
  // 删除调拨入库单
  partAllocateInDealerOrder(param) {
    return http.get(`${baseUrl.dmsPart}/partAllocateInPad/dealerOrder/${param}`)
  },


  // 根据仓库代码查询配附件信息
  queryPartMsg(param) {
    return http.get(`${baseUrl.dmsPart}/partAllocateInPad/queryPartMsg`, { params: param })
  },

  // 查询订单签收列表
  querypartOrderReceipt(param) {
    return http.get(`${baseUrl.dmsPart}/partOrderReceipt/querypartOrderReceipt`, { params: param })
  },
  // 查询订单签收数量
  queryNumber(param) {
    return http.get(`${baseUrl.dmsPart}/partOrderReceipt/queryNumber`, { params: param })
  },
  // 查询订单签收明细
  querypartOrderReceiptInfo(param) {
    return http.get(`${baseUrl.dmsPart}/partOrderReceipt/querypartOrderReceiptInfo/${param}`)
  },
  // 订单签收
  saveColor(param) {
    return http.post(`${baseUrl.dmsPart}/partOrderReceipt/saveColor`, param)
  },

  // 查询订单入库列表
  querypartOrderBuy(param) {
    return http.get(`${baseUrl.dmsPart}/stockmanage/partbuy/querypartOrderBuy`, { params: param })
  },
  // 查询订单入库数量
  queryBuyNumber(param) {
    return http.get(`${baseUrl.dmsPart}/stockmanage/partbuy/queryBuyNumber`, { params: param })
  },
  // 查询订单入库明细
  querypartOrderBuyInfo(param) {
    return http.get(`${baseUrl.dmsPart}/stockmanage/partbuy/querypartOrderBuyInfo/${param}`)
  },
  // 查询仓库代码查询库位数据
  queryLocation(param) {
    return http.get(`${baseUrl.dmsPart}/queryStockData/queryLocation`, { params: param })
  },
  // 订单入库保存
  savePartBuy(param) {
    return http.post(`${baseUrl.dmsPart}/stockmanage/partbuy/savePartBuy`, param)
  },
  // 订单入库入账
  entryPartBuy(param) {
    return http.post(`${baseUrl.dmsPart}/stockmanage/partbuy/entryPartBuy`, param)
  },

  // 查询外采入库列表
  qryOutsourcingOrders(param) {
    return http.get(`${baseUrl.dmsPart}/outsourcing/qryOutsourcingOrders`, { params: param })
  },
  // 查询外采入库数量
  queryOutsourcingNumber(param) {
    return http.get(`${baseUrl.dmsPart}/outsourcing/queryOutsourcingNumber`, { params: param })
  },

  // 外采入库新增
  insOutsourcingOrder(param) {
    return http.post(`${baseUrl.dmsPart}/outsourcing/insOutsourcingOrder`, param)
  },
  // 查询调拨入库单明细
  qryOutsourcingOrdersInfo(param) {
    return http.get(`${baseUrl.dmsPart}/outsourcing/qryOutsourcingOrdersInfo/${param}`)
  },
  // 外采入库编辑保存
  saveOutsourcingOrder(param) {
    return http.post(`${baseUrl.dmsPart}/outsourcing/saveOutsourcingOrder`, param)
  },
  // 外采入库入账
  entryOutsourcingOrder(param) {
    return http.post(`${baseUrl.dmsPart}/outsourcing/entryOutsourcingOrder`, param)
  },


  // 查询借进登记
  queryBorrowRegistration(param) {
    return http.get(`${baseUrl.dmsPart}/borrowRegistrationInfo/queryBorrowRegistration`, { params: param })
  },
  // 查询借进登记计数
  queryBorrowRegistrationNumber(param) {
    return http.get(`${baseUrl.dmsPart}/borrowRegistrationInfo/queryBorrowRegistrationNumber`, { params: param })
  },
  // 查询借进登记明细
  queryBorrowRegistrationItem(param) {
    return http.get(`${baseUrl.dmsPart}/borrowRegistrationInfo/queryBorrowRegistrationItem`, { params: param })
  },
  // 借进登记编辑
  borrowRegistrationSave(param) {
    return http.post(`${baseUrl.dmsPart}/borrowRegistrationInfo/borrowRegistrationSave`, param)
  },
  // 删除借进登记单
  borrowRegistDealerOrder(param) {
    return http.get(`${baseUrl.dmsPart}/borrowRegistrationInfo/dealerOrder`, { params: param })
  },

  //  查询借出归还
  queryLendReturn(param) {
    return http.get(`${baseUrl.dmsPart}/lendReturnInfo/queryLendReturn`, { params: param })
  },
  //  查询借出归还计数
  queryLendReturnNumber(param) {
    return http.get(`${baseUrl.dmsPart}/lendReturnInfo/queryLendReturnNumber`, { params: param })
  },
  //  查询借出归还明细
  queryLendReturnItem(param) {
    return http.get(`${baseUrl.dmsPart}/lendReturnInfo/queryLendReturnItem`, { params: param })
  },
  // 借出归还编辑
  lendReturnSave(param) {
    return http.post(`${baseUrl.dmsPart}/lendReturnInfo/lendReturnSave`, param)
  },





  //  查询配附件报溢
  queryPartProfit(param) {
    return http.get(`${baseUrl.dmsPart}/partProfitInfo/queryPartProfit`, { params: param })
  },
  //  查询配附件报溢计数
  queryPartProfitNumber(param) {
    return http.get(`${baseUrl.dmsPart}/partProfitInfo/queryPartProfitNumber`, { params: param })
  },
  //  查询配附件报溢明细
  queryPartProfitItem(param) {
    return http.get(`${baseUrl.dmsPart}/partProfitInfo/queryPartProfitItem`, { params: param })
  },
  // 配附件报溢编辑
  partProfitSave(param) {
    return http.post(`${baseUrl.dmsPart}/partProfitInfo/partProfitSave`, param)
  },
  //  配附件报溢删除
  partProfitDealerOrder(param) {
    return http.get(`${baseUrl.dmsPart}/partProfitInfo/dealerOrder`, { params: param })
  },



  //  查询配附件寄存入库列表
  queryPartDepositOrders(param) {
    return http.get(`${baseUrl.dmsPart}/partdeposit/queryPartDepositOrders`, { params: param })
  },
  //  查询配附件寄存入库数量
  queryPartdepositNumber(param) {
    return http.get(`${baseUrl.dmsPart}/partdeposit/queryPartdepositNumber`, { params: param })
  },
  // 查询配附件寄存入库单明细
  queryPartDepositOrdersInfo(param) {
    return http.get(`${baseUrl.dmsPart}/partdeposit/queryPartDepositOrdersInfo/${param}`)
  },
  // 配附件寄存入库新增修改保存
  addPartDeposit(param) {
    return http.post(`${baseUrl.dmsPart}/partdeposit/addPartDeposit`, param)
  },
  // 配附件寄存入库单入账
  partDepositWarehousing(param) {
    return http.post(`${baseUrl.dmsPart}/partdeposit/partDepositWarehousing`, param)
  },
  // 删除配附件寄存入库单
  partdepositDealerOrder(param) {
    return http.get(`${baseUrl.dmsPart}/partdeposit/dealerOrder/${param}`)
  },



  //  查询订单提报
  queryOrderReportInfo(param) {
    return http.get(`${baseUrl.dmsPart}/orderReportInfo/queryOrderReportInfo`, { params: param })
  },
  // 订单提报编辑/保存
  orderReportSave(param) {
    return http.post(`${baseUrl.dmsPart}/orderReportInfo/orderReportSave`, param)
  },
  // 订单提报删除
  deleteOrderReport(param) {
    return http.post(`${baseUrl.dmsPart}/orderReportInfo/deleteOrderReport`, param)
  },
  // 查询订单提报明细
  queryOrderReportItemInfo(param) {
    return http.get(`${baseUrl.dmsPart}/orderReportInfo/queryOrderReportItemInfo`, { params: param })
  },
  // 查询订单提报计数
  queryOrderReportNumber(param) {
    return http.get(`${baseUrl.dmsPart}/orderReportInfo/queryOrderReportNumber`, { params: param })
  },
  //查询替换肩膀
  queryReplacePartInfo(param){
    return http.post(`${baseUrl.dmsPart}/orderReportInfo/queryReplacePartInfo`, param)
  }








































}