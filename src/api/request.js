import axios from "axios"
import { showLoadingToast } from "vant"

//创建axios实例
let instance = axios.create({
    // baseURL: baseUrl,
    //   baseURL:'http://shop.bufantec.com',
    timeout: 5000,
})

let toast = null

//请求拦截
instance.interceptors.request.use(
    function (config) {
        toast = showLoadingToast({
            message: "加载中...",
            forbidClick: true,
            duration: 0,
        })
        if (config.method.toLowerCase() === "get") {
            config.params = config.data
        }
        const timer = setTimeout(() => {
            toast.close()
            clearTimeout(timer)
        }, 5000)
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

//进行响应拦截
instance.interceptors.response.use(
    function (response) {
        toast.close()
        return response.data
    },
    function (error) {
        return Promise.reject(error)
    }
)

//导出
export default instance
