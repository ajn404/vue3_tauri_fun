



// 请求地址
const configIp = {
  uat: 'https://uat.usp.ford.com.cn',
  sit: 'http://119.45.27.47',
  prd: 'https://usp.ford.com.cn'
};

// 高德key
const amapKey = {
  prd: 'cf989572bd86fb361aa851960499c48a',
  // dev: '5242b0e2c3b8427f04137cd588f85ed6',
  dev: 'cf989572bd86fb361aa851960499c48a'
}

// 登录iframe地址
const getLoginIframe = () => {
  switch (VUE_APP_MODE) {
    case 'prd':
      return {
        origin: 'https://prod.portal.salestool.ford.com.cn',
        urlLink: 'https://prod.portal.salestool.ford.com.cn/salestool-h5/#/login?targetOrigin=*'
      }
    default:
      return {
        origin: 'https://stage.portal.salestool.ford.com.cn',
        urlLink: 'https://stage.portal.salestool.ford.com.cn/salestool-h5/#/login?targetOrigin=*'
      }
  }
}

// 文件上传地址
const filePath = '/pad/fileUpload';
// 文件删除地址
const deleteFilePath = '/pad/fileUpload/delete';
// ocr识别地址
const imgPath = '/ocr'

const getBaseUrl = () => {
  switch (VUE_APP_MODE) {
    case 'dev':
      // return {
      //   login: `${configIp.uat}/api/v1/login-service`,
      //   dcsManage: `${configIp.uat}/api/v1/dcs-manage-service`,
      //   dcsRepair: `${configIp.uat}/api/v1/dcs-repair-service`,
      //   dcsPart: `${configIp.uat}/api/v1/dcs-part-service`,
      //   dcsVehicle: `${configIp.uat}/api/v1/dcs-vehicle-service`,
      //   dmsRepair: `${configIp.uat}/api/v1/dms-repair-service`,
      //   dmsPart: `${configIp.uat}/api/v1/dms-part-service`,
      //   dmsInterface: `${configIp.uat}/api/v1/dms-interface-service`
      // }
      return {
        login: `${configIp.sit}/api/v1/login-service`,
        dcsManage: `${configIp.sit}/api/v1/dcs-manage-service`,
        dcsRepair: `${configIp.sit}/api/v1/dcs-repair-service`,
        dcsPart: `${configIp.sit}/api/v1/dcs-part-service`,
        dcsVehicle: `${configIp.sit}/api/v1/dcs-vehicle-service`,
        dmsRepair: `${configIp.sit}/api/v1/dms-repair-service`,
        dmsPart: `${configIp.sit}/api/v1/dms-part-service`,
        dmsInterface: `${configIp.sit}/api/v1/dms-interface-service`
      }
    // return {
    //   login: "login",
    //   dcsManage: "dcsManage",
    //   dcsRepair: "dcsRepair",
    //   dcsPart: "dcsPart",
    //   dcsVehicle: "dcsVehicle",
    //   dmsRepair: "dmsRepair",
    //   dmsPart: "dmsPart",
    //   dmsInterface: "dmsInterface",
    // }
    case 'uat':

      return {
        login: `${configIp.uat}/api/v1/login-service`,
        dcsManage: `${configIp.uat}/api/v1/dcs-manage-service`,
        dcsRepair: `${configIp.uat}/api/v1/dcs-repair-service`,
        dcsPart: `${configIp.uat}/api/v1/dcs-part-service`,
        dcsVehicle: `${configIp.uat}/api/v1/dcs-vehicle-service`,
        dmsRepair: `${configIp.uat}/api/v1/dms-repair-service`,
        dmsPart: `${configIp.uat}/api/v1/dms-part-service`,
        dmsInterface: `${configIp.uat}/api/v1/dms-interface-service`
      }

    case 'sit':

      return {
        login: `${configIp.sit}/api/v1/login-service`,
        dcsManage: `${configIp.sit}/api/v1/dcs-manage-service`,
        dcsRepair: `${configIp.sit}/api/v1/dcs-repair-service`,
        dcsPart: `${configIp.sit}/api/v1/dcs-part-service`,
        dcsVehicle: `${configIp.sit}/api/v1/dcs-vehicle-service`,
        dmsRepair: `${configIp.sit}/api/v1/dms-repair-service`,
        dmsPart: `${configIp.sit}/api/v1/dms-part-service`,
        dmsInterface: `${configIp.sit}/api/v1/dms-interface-service`
      }

    case 'prd':
      return {
        login: `${configIp.prd}/api/v1/login-service`,
        dcsManage: `${configIp.prd}/api/v1/dcs-manage-service`,
        dcsRepair: `${configIp.prd}/api/v1/dcs-repair-service`,
        dcsPart: `${configIp.prd}/api/v1/dcs-part-service`,
        dcsVehicle: `${configIp.prd}/api/v1/dcs-vehicle-service`,
        dmsRepair: `${configIp.prd}/api/v1/dms-repair-service`,
        dmsPart: `${configIp.prd}/api/v1/dms-part-service`,
        dmsInterface: `${configIp.prd}/api/v1/dms-interface-service`
      }
  }
}


export const baseUrl = getBaseUrl()
export const loginIframe = getLoginIframe()
export const fileUrl = baseUrl.dcsRepair + filePath;
export const deletFileUrl = baseUrl.dcsRepair + deleteFilePath;
export const imgOcr = baseUrl.dcsRepair + imgPath;
export { amapKey, configIp };

