<<<<<<< HEAD
=======
import baseUrl from "./baseUrl";
>>>>>>> 0823cf00a7d60d5f725518e35ca13ed6b7b70802
import axios from 'axios'
import { showLoadingToast } from 'vant';

//创建axios实例
let instance = axios.create({
<<<<<<< HEAD
  // baseURL: baseUrl,
//   baseURL:'http://shop.bufantec.com',
  timeout: 5000
})

let toast=null
=======
  //环境变化使用
  // baseURL: baseUrl,

  //固定基地址
  // baseURL: 'http://shop.bufantec.com',
  timeout: 5000
})

let toast = null
>>>>>>> 0823cf00a7d60d5f725518e35ca13ed6b7b70802

//请求拦截
instance.interceptors.request.use(function (config) {
  toast = showLoadingToast({
    message: '加载中...',
    forbidClick: true,
    duration: 0
  });
  if (config.method.toLowerCase() === 'get') {
    config.params = config.data
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});



//进行响应拦截
instance.interceptors.response.use(function (response) {
  toast.close()
  return response.data
}, function (error) {
<<<<<<< HEAD
=======
  toast.close()
>>>>>>> 0823cf00a7d60d5f725518e35ca13ed6b7b70802
  return Promise.reject(error)
})

//导出
export default instance