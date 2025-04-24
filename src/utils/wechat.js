import wx from 'weixin-js-sdk'

// 初始化微信JSSDK
function initWechatSDK(config) {
  return new Promise((resolve, reject) => {
    wx.config({
      debug: process.env.NODE_ENV === 'development', // 开发环境开启调试模式
      appId: config.appId,
      timestamp: config.timestamp,
      nonceStr: config.nonceStr,
      signature: config.signature,
      jsApiList: [
        'updateAppMessageShareData', // 分享给朋友
        'updateTimelineShareData', // 分享到朋友圈
        'onMenuShareWeibo', // 分享到微博
        'chooseImage', // 拍照或从手机相册中选图
        'previewImage', // 预览图片
        'uploadImage', // 上传图片
        'downloadImage', // 下载图片
        'getLocation', // 获取地理位置
        'openLocation', // 使用微信内置地图查看位置
        'scanQRCode' // 扫一扫
      ]
    })

    wx.ready(() => {
      resolve(wx)
    })

    wx.error((err) => {
      reject(err)
    })
  })
}

// 微信分享配置
function setWechatShare(shareData) {
  wx.ready(() => {
    wx.updateAppMessageShareData(shareData)
    wx.updateTimelineShareData(shareData)
  })
}

// 获取微信签名
async function getWechatSignature(apiUrl) {
  try {
    const response = await fetch(`${apiUrl}/wechat/signature?url=${encodeURIComponent(window.location.href.split('#')[0])}`)
    return await response.json()
  } catch (error) {
    console.error('获取微信签名失败:', error)
    throw error
  }
}

// 微信登录
function wechatLogin(redirectUri) {
  return new Promise((resolve, reject) => {
    const appId = process.env.VITE_WECHAT_APPID
    const state = Math.random().toString(36).substring(2)
    const authUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=snsapi_userinfo&state=${state}#wechat_redirect`
    
    // 跳转微信授权页面
    window.location.href = authUrl
  })
}

// 获取微信用户信息
async function getWechatUserInfo(code) {
  try {
    const apiUrl = process.env.VITE_API_URL || 'https://api.example.com'
    const response = await fetch(`${apiUrl}/wechat/userinfo?code=${code}`)
    return await response.json()
  } catch (error) {
    console.error('获取微信用户信息失败:', error)
    throw error
  }
}

// 微信分享配置
function setWechatShare(shareData) {
  wx.ready(() => {
    const defaultShareData = {
      title: '默认分享标题',
      desc: '默认分享描述',
      link: window.location.href,
      imgUrl: 'https://example.com/logo.png'
    }
    
    const finalShareData = {
      ...defaultShareData,
      ...shareData
    }

    // 分享给朋友
    wx.updateAppMessageShareData(finalShareData)
    
    // 分享到朋友圈
    wx.updateTimelineShareData(finalShareData)
    
    // 分享到QQ
    wx.onMenuShareQQ(finalShareData)
    
    // 分享到微博
    wx.onMenuShareWeibo(finalShareData)
    
// 分享到QQ空间
    wx.onMenuShareQZone(finalShareData)
  })
}

// 统一导出
export {
  initWechatSDK,
  setWechatShare,
  getWechatSignature,
  wechatLogin,
  getWechatUserInfo
}
