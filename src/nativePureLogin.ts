/*
 * @Author: tangyu
 * @Date: 2021-04-26 13:43:20
 * @Company: orientsec.com.cn
 * @Description: 长登录(原生端）
 */
// @ts-nocheck
import { onRequest } from "fastman3-dfyjapp-jsbridge";
import { compareVersion } from "fastman3-common-helper";
import { LongLoginResponse } from "./types";

/**
 * 长登录(原生端）
 * 纯资金账号登录
 */
export const nativePureLogin = () => {
  return new Promise<any>((resolve, reject) => {
    onRequest(
      "1",
      { type: "1" },
      res => {
        // 用户未登录或取消了登录的操作时
        if (!res?.isLogin) {
          reject({
            code: 10,
            info: "用户取消了登录",
          });
        } else {
           // 务必刷新下 oauth，以保持登录后的状态同步（如token）
           resolve("ok");
        }
      },
      res => {
        if (res.info) {
          reject({
            code: -1,
            info: res.info,
          });
        } else {
          reject({
            code: -2,
            info: "原生端登录组件(request2)发生未知异常",
          });
        }
      }
    );
  });
};
