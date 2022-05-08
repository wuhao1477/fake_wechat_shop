// import { Tips } from '../../utils/util.js'

const errorCodes = {
    500: "请求错误(500)，请重试",
    400: "请求错误(400)，请重试",
    403: "请求错误(403)，请重试",
    404: "请求错误(404)，请重试",
    1001: "登录失败(1001)，请重试",
    1003: "登录失败(1003)，请重试",
    1004: "未找到订单或状态不正确",
    1005: "优惠券未找到或状态不正确",
    1006: "商品超过限购限制",
    1007: "商品编码未找到",
    1008: "非绑定礼品卡或礼品卡余额不足"
}

export default function on_error_code(error_code) {
    if (errorCodes[error_code] !== undefined) {
        console.error("[Error]" + error_code + " ==> " + errorCodes[error_code])
        Tips({ title: errorCodes[error_code] })
    } else if (error_code !== 401) {  //其他未知错误码
        console.error("[Error]" + error_code)
        Tips({title: 'Code: ' + error_code})
    }
}