



import http from '@/http'
import appVersion from '../appVersion'
import AppUpdate from '@/components/app-update'
import Progress from '@/components/progress'
import { downloadFile } from '@/libs/file'


async function checkUpdateApk() {
  const res = await http.base.getApkVersion()
  const getVersion = res.data
  let localVersion = null
  switch (process.env.VUE_APP_MODE) {
    // case 'dev':
    //   localVersion = appVersion.sit
    //   break
    case 'uat':
      localVersion = appVersion.uat
      break
    // case 'sit':
    //   localVersion = appVersion.sit
    //   break

    case 'prd':
      localVersion = appVersion.prd
      break

  }

  if (localVersion && getVersion.BUILD_ID && getVersion.BUILD_ID * 1 > localVersion.buildVersion) {
    const AppUpdateObj = new AppUpdate({
      title: `检测到新版本v${getVersion.VERSION}`,
      content: getVersion.DESCRIPTION,
      apkPath: getVersion.APKPATH,
      submit: () => {
        AppUpdateObj.close();
        let proObj = new Progress()
        downloadFile({
          url: getVersion.APKPATH,
          name: "ford.apk",
          onprogress: (e) => {
            console.log(e)
            let temp = (e * 100).toFixed(1) * 1
            proObj.setPrgress(temp)
          },
          onsuccess: (res) => {
            console.log(res)
            proObj.close()
          }
        })
      }
    })
  }
}



// 升级App



checkUpdateApk();









