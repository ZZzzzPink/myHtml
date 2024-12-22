//设置基地址

let baseURL = ""
if (process.env.NODE_ENV === 'development') {
  // 开发环境
  baseURL = "http://shop.bufantec.com"
} else if (process.env.NODE_ENV === 'production') {
  // 生产模式
  baseURL = "http://shop.bufantec.com"
}

export default baseURL
