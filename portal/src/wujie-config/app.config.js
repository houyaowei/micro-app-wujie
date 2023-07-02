/**
 * 生成app配置，在启动时注册，用来支持预加载
 */

/**
 * app的对象数组，元素为
 * {name: 'xxx', entry:'xxx'} 
 */
let _apps =[]; 

const buildAppconfig = ()=> {
  for(const _key in import.meta.env) {
    // console.log('_key:', _key)
    if(_key.includes('MICRO_APP_SUB_')) {
      const name = _key.split('MICRO_APP_SUB_')[1];
      const _name = name.replace(/\_/g, '-').toLowerCase()
      const obj = {
        name: _name,
        entry: import.meta.env[_key],
      };
      _apps.push(obj);
    }
  }
  console.log("app.config.js:", new Date().getTime(), ', apps:', _apps)

  return _apps
}

export default {
  apps: buildAppconfig()
}
