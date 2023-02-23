import http from '@/axios/http'
import { baseUrl } from '@/base/config'
export default {
  //  配附件信息管理-查询
  accessoriesQuery(param) {
    return http.get(`${baseUrl.dmsPart}/partManagePad/accessoriesQuery`, { params: param })
  },
  // 配附件信息管理-明细
  accessoriesQueryInfo(param) {
    return http.get(`${baseUrl.dmsPart}/partManagePad/accessoriesQueryInfo/${param}`)
  },
  // 配附件信息修改
  updateAccessoriesQuery(param) {
    return http.post(`${baseUrl.dmsPart}/partManagePad/updateAccessoriesQuery`, param)
  },
  // 配附件信息新增
  addAccessoriesQuery(param) {
    return http.post(`${baseUrl.dmsPart}/partManagePad/addAccessoriesQuery`, param)
  },
  // 查询仓库定义数据
  query(param) {
    return http.get(`${baseUrl.dmsPart}/storageManage/mystore/query`, { params: param })
  },
  // 仓库定义新增
  addStore(param) {
    return http.post(`${baseUrl.dmsPart}/storageManage/mystore/addStore`, param)
  },
  // 仓库定义修改
  updateStore(param) {
    return http.post(`${baseUrl.dmsPart}/storageManage/mystore/updateStore`, param)
  },
  // 查询库位定义数据
  queryLocation(param) {
    return http.get(`${baseUrl.dmsPart}/storageManage/mystorageposition/queryLocation`, { params: param })
  },
  // 库位定义-新增
  addLocation(param) {
    return http.post(`${baseUrl.dmsPart}/storageManage/mystorageposition/addLocation`,param)
  },
  // 库位定义-修改
  updateLocation(param) {
    return http.post(`${baseUrl.dmsPart}/storageManage/mystorageposition/updateLocation`, param)
  },

  // 根据当前服务中心查询仓库数据
  queryWarehouse(param) {
    return http.get(`${baseUrl.dmsPart}/queryStockData/queryWarehouse`, { params: param })
  },
  // 查询单位数据
  queryCompany(param) {
    return http.get(`${baseUrl.dmsPart}/queryStockData/queryCompany`, { params: param })
  },
  // 查询当前登录服务中心所有的车型
  queryModel(param) {
    return http.get(`${baseUrl.dmsPart}/queryStockData/queryModel`, { params: param })
  },
  // 查询配附件名称
  queryPartData(param) {
    return http.get(`${baseUrl.dmsPart}/queryStockData/queryPartData`, { params: param })
  },
  // 查询当前服务中心的客户类型
  queryCustomerCategory(param) {
    return http.get(`${baseUrl.dmsPart}/queryStockData/queryCustomerCategory`, { params: param })
  },

  // 库存盘点删除
  dealerOrder(param) {
    return http.get(`${baseUrl.dmsPart}/partStockInventoryInfo/dealerOrder`, { params: param })
  },





  // 查询库存管理主数据
  mystoreManage(param) {
    return http.get(`${baseUrl.dmsPart}/mystoreManage/query`, { params: param })
  },
  // 查询库存管理主数据
  queryTotalData(param) {
    return http.get(`${baseUrl.dmsPart}/mystoreManage/queryTotalData`, { params: param })
  },
  // 查询库存管理明细数据
  queryPartStock(param) {
    return http.get(`${baseUrl.dmsPart}/mystoreManage/queryPartStock`, { params: param })
  },
  // 库存信息修改
  updateMyStore(param) {
    return http.post(`${baseUrl.dmsPart}/mystoreManage/updateMyStore`, param)
  },
  // 库存信息新增
  interMyStore(param) {
    return http.post(`${baseUrl.dmsPart}/mystoreManage/interMyStore`, param)
  },

  // 查询往来客户信息
  queryPartCustomer(param) {
    return http.get(`${baseUrl.dmsPart}/queryCustomer/queryPartCustomer`, { params: param })
  },
  // 往来客户信息新增
  insCustomer(param) {
    return http.post(`${baseUrl.dmsPart}/queryCustomer/insCustomer`, param)
  },
  // 查询往来客户明细信息
  queryPartCustomerInfo(param) {
    return http.get(`${baseUrl.dmsPart}/queryCustomer/queryPartCustomerInfo`, { params: param })
  },
  // 往来客户信息修改
  updateCustomer(param) {
    return http.post(`${baseUrl.dmsPart}/queryCustomer/updateCustomer`, param)
  },

  // 查询往来客户类型主数据信息
  customerCategoryQueryPart(param) {
    return http.get(`${baseUrl.dmsPart}/customerCategory/queryPartCustomer`, { params: param })
  },
  // 往来客户类别信息新增
  customerCategoryIns(param) {
    return http.post(`${baseUrl.dmsPart}/customerCategory/insCustomer`, param)
  },
  // 往来客户类别信息修改
  customerCategoryUpdate(param) {
    return http.post(`${baseUrl.dmsPart}/customerCategory/updateCustomer`, param)
  },

  // 查询计量单位主数据
  queryUnit(param) {
    return http.get(`${baseUrl.dmsPart}/tmUnit/queryUnit`, { params: param })
  },
  // 计量单位信息新增
  insUnit(param) {
    return http.post(`${baseUrl.dmsPart}/tmUnit/insUnit`, param)
  },
  // 计量单位信息修改
  updateUnit(param) {
    return http.post(`${baseUrl.dmsPart}/tmUnit/updateUnit`, param)
  },

  // 查询配附件库存盘点
  queryPartStockInventory(param) {
    return http.get(`${baseUrl.dmsPart}/partStockInventoryInfo/queryPartStockInventory`, { params: param })
  },
  // 查询配附件库存盘点计数
  queryPartStockInventoryNumber(param) {
    return http.get(`${baseUrl.dmsPart}/partStockInventoryInfo/queryPartStockInventoryNumber`, { params: param })
  },
  // 查询配附件库存盘点明细
  queryPartStockInventoryItem(param) {
    return http.get(`${baseUrl.dmsPart}/partStockInventoryInfo/queryPartStockInventoryItem`, { params: param })
  },
  // 配附件库存盘点编辑
  queryPartStockInventorySave(param) {
    return http.post(`${baseUrl.dmsPart}/partStockInventoryInfo/queryPartStockInventorySave`, param)
  },























































}