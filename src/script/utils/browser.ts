export const getBrowserVersion = (): { browser: String; version: String } => {
  const userAgent = navigator.userAgent;
  const res = {
    version: '',
    browser: '',
  };
  // 判断浏览器类型，并从 User-Agent 字符串中提取版本信息
  if (userAgent.indexOf('Firefox') > -1) {
    res.version = userAgent.match(/Firefox\/(\d+\.\d+)/)![1];
    res.browser = 'firefox';
  } else if (userAgent.indexOf('Chrome') > -1) {
    res.version = userAgent.match(/Chrome\/(\d+\.\d+)/)![1];
    res.browser = 'chrome';
  } else if (userAgent.indexOf('Edge') > -1) {
    res.version = userAgent.match(/Edge\/(\d+\.\d+)/)![1];
    res.browser = 'edge';
  } else if (userAgent.indexOf('Safari') > -1) {
    res.version = userAgent.match(/Version\/(\d+\.\d+)/)![1];
    res.browser = 'safari';
  }

  return res;
};
