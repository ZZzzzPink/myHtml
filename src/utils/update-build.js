/*
 * @Description: 自动更新
 */

// const timeData = 60 * 1000 // 检查间隔时间
const timeData = 20 * 1000 // 检查间隔时间
let hidden = false // 页面是否隐藏
let setTimeoutId
let needTip = true // 默认开启提示

let oldScript = []
let newScript = []

const getHtml = async () => {
    const html = await fetch("/").then((res) => res.text()) //读取index html
    return html
}

// const scriptReg = /<script.*src=["'](?<src>[^"']+)/gm

const parserScript = (html) => {
    const reg = new RegExp(/<script(?:\s+[^>]*)?>(.*?)<\/script\s*>/gi) //script正则
    return html.match(reg) //匹配script标签
}

const init = async () => {
    const html = await getHtml()
    // console.log("🚀 ~ file: auto-update.js:31 ~ init ~ html:", html)
    oldScript = parserScript(html)
    console.log("🚀 ~ file: auto-update.js:30 ~ init ~ oldScript:", oldScript)
}

const compareScript = async (oldArr, newArr) => {
    console.log("***************compareScript**************")
    console.log("🚀 ~ file: auto-update.js:37 ~ compareScript ~ oldArr, newArr:", oldArr, newArr)
    const base = oldArr.length
    console.log("🚀 ~ file: auto-update.js:36 ~ compareScript ~ base:", base)
    // 去重
    const arr = Array.from(new Set(oldArr.concat(newArr)))
    console.log("🚀 ~ file: auto-update.js:39 ~ compareScript ~ arr:", arr, arr.length)
    let needRefresh = false
    // 如果新旧length 一样无更新
    // 否则通知更新
    if (arr.length !== base) {
        console.warn("更新了!!!!!!, arr.length !== base", arr.length !== base)
        needRefresh = true
    }
    // for (let i = 0; i < oldArr.length; i++) {
    //   if (oldArr[i] !== arr[i]) {
    //     needRefresh = true
    //     console.warn('更新了!!!!!!, 值不等')
    //     break
    //   }
    // }
    return needRefresh
}

// 自动更新
const autoUpdate = async () => {
    setTimeoutId = setTimeout(async () => {
        const newHtml = await getHtml()
        // console.log("🚀 ~ file: auto-update.js:89 ~ newHtml:", newHtml)
        newScript = parserScript(newHtml)
        console.log("🚀 ~ file: auto-update.js:79 ~ newScript:", newScript)

        // 页面隐藏了就不检查更新
        if (!hidden) {
            const willRefresh = await compareScript(oldScript, newScript)
            console.log(
                "🚀 ~ file: auto-update.js:85 ~ setTimeoutId=setTimeout ~ willRefresh:",
                willRefresh
            )

            if (willRefresh && needTip) {
                // 延时更新，防止部署未完成用户就刷新空白
                setTimeout(() => {
                    // ----弹框确认---先简单点弹框确认，可以用注释内的，跳过右下角通知的内容（Step2、3）
                    // const result = confirm('发现新版本，点击确定更新')
                    // if (result) {
                    //   sessionStorage.setItem('version', version)
                    //   location.reload() // 刷新当前页
                    // }
                    // --------------

                    //*****右下角通知提示 */
                    window.dispatchEvent(
                        new CustomEvent("onmessageUpdate", {
                            detail: {
                                msg: "发现系统版本更新，请刷新页面~",
                                version: version,
                            },
                        })
                    )
                    //******************* */
                }, 10000)
                needTip = false // 关闭更新提示，防止重复提醒
            }
        }
        console.log("🚀 ~ file: auto-update.js:90 ~ autoUpdate ~ needTip: ", needTip)
        if (needTip) {
            console.warn("needTip autoUpdate")
            autoUpdate()
        }
    }, timeData)
}

// 停止检测更新
const stop = () => {
    if (setTimeoutId) {
        clearTimeout(setTimeoutId)
        setTimeoutId = ""
    }
}

// 开始检查更新
const start = async () => {
    init()
    console.log("start0000000000")
    autoUpdate()
    console.log("start1111111111")
    // 监听页面是否隐藏
    document.addEventListener("visibilitychange", () => {
        hidden = document.hidden
        console.log(
            "🚀 ~ file: auto-update.js:64 ~ document.addEventListener ~ hidden, needTip:",
            hidden,
            needTip
        )
        // 页面隐藏了就不检查更新。或者已经有一个提示框了，防止重复提示。
        if (!hidden && needTip) {
            console.log("!!!checkupdate", "222222222")
            autoUpdate()
        } else {
            stop()
        }
    })
}

export default { start }
