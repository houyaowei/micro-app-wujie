
import axios from 'axios'
import { Toast } from 'antd-mobile'

const _axios = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  withCredentials: false,
  timeout: 30000,
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh_CN'
  }
})

_axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    Toast('服务端异常！')
    return Promise.reject(res)
  }
  if (res.data) {
    return Promise.resolve(res.data)
  }else {
    return Promise.reject(new Error('error'))
  }
  // if (res.status != 200) {
  //   if (res.data.msg){
  //     Toast(res.data.msg)
  //   }
  //   return Promise.reject(res.data)
  // }
  //
  // return Promise.resolve(res.data)
})

export default _axios
