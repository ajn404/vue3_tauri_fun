import http from '@/axios/http'
import { baseUrl } from '@/base/config'
export default {
  //  查询内部领用列表
  qryInnersOrders(param) {
    return http.get(`${baseUrl.dmsPart}/partinners/qryInnersOrders`, { params: param })
  },
  // 查询内部领用是否出库数量
  queryInnersNumber(param) {
    return http.get(`${baseUrl.dmsPart}/partinners/queryInnersNumber`, { params: param })
  },
  // 查询内部领用单明细
  qryInnersOrdersInfo(param) {
    return http.get(`${baseUrl.dmsPart}/partinners/qryInnersOrdersInfo/${param}`)
  },
  // 内部领用保存
  saveInnerOrder(param) {
    return http.post(`${baseUrl.dmsPart}/partinners/saveInnerOrder`, param)
  },
  // 内部领用入账
  entryInnerOrder(param) {
    return http.post(`${baseUrl.dmsPart}/partinners/entryInnerOrder`, param)
  },
  // 内部领用退料
  returnInnerOrder(param) {
    return http.post(`${baseUrl.dmsPart}/partinners/returnInnerOrder`, param)
  },
  // 删除内部领用单
  partinnersDealerOrder(param) {
    return http.get(`${baseUrl.dmsPart}/partinners/dealerOrder/${param}`)
  },




  //  查询借出登记
  queryLendRegistration(param) {
    return http.get(`${baseUrl.dmsPart}/lendRegistrationInfo/queryLendRegistration`, { params: param })
  },
  //  查询借出登记计数
  queryLendRegistrationNumber(param) {
    return http.get(`${baseUrl.dmsPart}/lendRegistrationInfo/queryLendRegistrationNumber`, { params: param })
  },
  // 借出登记编辑
  lendRegistrationSave(param) {
    return http.post(`${baseUrl.dmsPart}/lendRegistrationInfo/lendRegistrationSave`, param)
  },
  //  查询借出登记明细
  queryLendRegistrationItem(param) {
    return http.get(`${baseUrl.dmsPart}/lendRegistrationInfo/queryLendRegistrationItem`, { params: param })
  },


  // 删除借出登记单
  lendRegistDealerOrder(param) {
    return http.get(`${baseUrl.dmsPart}/lendRegistrationInfo/dealerOrder`, { params: param })
  },

  //  查询借进归还
  queryBorrowReturn(param) {
    return http.get(`${baseUrl.dmsPart}/borrowReturnInfo/queryBorrowReturn`, { params: param })
  },
  //  查询借进归还计数
  queryBorrowReturnNumber(param) {
    return http.get(`${baseUrl.dmsPart}/borrowReturnInfo/queryBorrowReturnNumber`, { params: param })
  },
  //  查询借进归还明细
  queryBorrowReturnItem(param) {
    return http.get(`${baseUrl.dmsPart}/borrowReturnInfo/queryBorrowReturnItem`, { params: param })
  },
  // 借进归还编辑
  borrowReturnSave(param) {
    return http.post(`${baseUrl.dmsPart}/borrowReturnInfo/borrowReturnSave`, param)
  },

  //  查询调拨出库列表
  qryAllocateOutOrders(param) {
    return http.get(`${baseUrl.dmsPart}/partAllocateOutPad/qryAllocateOutOrders`, { params: param })
  },
  //  查询调拨出库数量
  queryAllocateOutNumber(param) {
    return http.get(`${baseUrl.dmsPart}/partAllocateOutPad/queryAllocateOutNumber`, { params: param })
  },
  // 查询调拨出库单明细
  qryAllocateOutOrdersInfo(param) {
    return http.get(`${baseUrl.dmsPart}/partAllocateOutPad/qryAllocateOutOrdersInfo/${param}`)
  },
  // 调拨出库新增修改保存
  addPartOrderReceiptOut(param) {
    return http.post(`${baseUrl.dmsPart}/partAllocateOutPad/addPartOrderReceiptOut`, param)
  },
  // 调拨出库单入账
  recordedOut(param) {
    return http.post(`${baseUrl.dmsPart}/partAllocateOutPad/recordedOut`, param)
  },
  // 删除调拨出库单
  partAllDealerOrder(param) {
    return http.get(`${baseUrl.dmsPart}/partAllocateOutPad/dealerOrder/${param}`)
  },

  //  查询配附件移库列表
  qryPartMoveOrders(param) {
    return http.get(`${baseUrl.dmsPart}/partMove/qryPartMoveOrders`, { params: param })
  },
  //  查询配附件移库数量
  queryPartMoveNumber(param) {
    return http.get(`${baseUrl.dmsPart}/partMove/queryPartMoveNumber`, { params: param })
  },
  //  查询配附件移库单明细
  qryPartMoveOrdersInfo(param) {
    return http.get(`${baseUrl.dmsPart}/partMove/qryPartMoveOrdersInfo/${param}`)
  },
  // 配附件移库新增修改保存
  addPartMove(param) {
    return http.post(`${baseUrl.dmsPart}/partMove/addPartMove`, param)
  },
  // 配附件移库单移库
  relocation(param) {
    return http.post(`${baseUrl.dmsPart}/partMove/relocation`, param)
  },



  //  查询配附件报损
  queryPartLoss(param) {
    return http.get(`${baseUrl.dmsPart}/partLossInfo/queryPartLoss`, { params: param })
  },
  //  配附件报损计数
  queryPartLossNumber(param) {
    return http.get(`${baseUrl.dmsPart}/partLossInfo/queryPartLossNumber`, { params: param })
  },
  //  配附件报损明细
  queryPartLossItem(param) {
    return http.get(`${baseUrl.dmsPart}/partLossInfo/queryPartLossItem`, { params: param })
  },
  // 配附件报损编辑
  partLossSave(param) {
    return http.post(`${baseUrl.dmsPart}/partLossInfo/partLossSave`, param)
  },
  //  配附件报损删除
  partLosDealerOrder(param) {
    return http.get(`${baseUrl.dmsPart}/partLossInfo/dealerOrder`, { params: param })
  },































































}