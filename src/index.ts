/*
 * @Author: tangyu
 * @Date: 2021-04-26 13:21:59
 * @Company: orientsec.com.cn
 * @Description: 小程序入口
 */
import { go, AppAuthorize } from "fastman3-dfyjapp-jsbridge";

/**
 * 长登录-纯资金账号登录
 * 小程序端通过打开一个 h5Webview 容器打开对应的一级登录h5页面
 */
export const pureLogin = () => {
  // 注：通过 postMessage 机制来同步更新 token 和设备号相关元信息
  return AppAuthorize.isLongLogin().then((isLogin) => {
    // 未登录
    if (!isLogin) {
      console.log("当前用户未长登录或登录态过期，正在唤起长登录页面");
      return new Promise<any>((resolve, reject) => {
        go({
          title: "账户登录",
          uri: process.env.APP_LONGLOGIN_URL!
        });
        // 未登录跳转至登录页，因此流程被终止
      });
    }
    // 已登录
    else {
      console.log("当前用户已长登录，不需要长登录");
      return Promise.resolve().then(() => {
        // 不需要 oauth，因为已经登录了，可直接通过 AppAuthorize 获取登录用户信息
        return "ok" as any;
      });
    }
  });
};
