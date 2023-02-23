


import http from '@/axios/http'


export default {
  // 查询预约单列表
  queryBookingOrder(param) {
    return http.get("/bookingOrderInfo/queryBookingOrder", { params: param })
  },
   // 查询环检列表
   queryBookingCheck(param) {
    return http.get("/bookingCheckInfo/queryBookingCheck", { params: param })
  },
   // 预约确认
   bookingOrderConfirm(param) {
    return http.post("/bookingOrderInfo/bookingOrderConfirm", { params: param })
  },
}


