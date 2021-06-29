/*
 * @Author: tangyu
 * @Date: 2021-06-21 16:25:50
 * @Company: orientsec.com.cn
 * @Description: app & web 入口
 */
import { getVersion } from "fastman3-common-helper";
import { nativePureLogin } from "./nativePureLogin";
import { AppAuthorize, oauth } from "fastman3-dfyjapp-jsbridge";
import { longLogin } from "fastman3-dfyjapp-longlogin";

/**
 * 纯资金账号-长登录
 * app端走 nativePureLogin；h5/小程序端走 LongLogin；
 */
export const pureLogin = () => {
  return AppAuthorize.isLongLogin().then((isLogin) => {
    // 未登录
    if (!isLogin) {
      console.log("当前用户未长登录或登录态过期222，正在唤起长登录页面");
      if (!getVersion()) {
        // 走 web，但不同处理回调，因为交互上 web 页面的返回会重新进行页面渲染和初始化
        return longLogin();
      } else {
        // 走 app
        return nativePureLogin().then(res => {
          console.log("app端的长登录回调成功，通过 oauth 再次同步恢复用户信息");
          // 调用 oauth 同步更新 AppAuthorize 对象
          return oauth().then(re => "ok");
        });
      }
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
