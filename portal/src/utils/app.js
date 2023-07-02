import appEntry from "@/wujie-config/app.config"

/**
 * 获取注册子应用的入口地址
 * dev环境：http://xxxxx 格式
 * prod环境：/xxx 格式
 */
const getCurrentAppEntry = (appName) => {
  const { apps } = appEntry
  if(apps.length) {
    const currentApp = apps.filter(item => item.name == appName);
    return currentApp.length > 0 ? currentApp[0].entry: ''
  }
  return ''
}

export {
  getCurrentAppEntry
}