// /*
//  * @Author: tangyu
//  * @Date: 2021-04-24 10:32:25
//  * @Company: orientsec.com.cn
//  * @Description: 长登录（web端）
//  */
// import { showModal } from "@tarojs/taro";
// // import { LongLoginResponse } from "./types";

// /**
//  * 长登录（web端）
//  */
// export const webLongLogin = () => {
//   return new Promise<any>((resolve, reject) => {
//     showModal({
//       content: "由于您长时间没有登录，请重新登录",
//       success: (res) => {
//         if (res.confirm) {
//           resolve(
//             Promise.resolve().then(() => {
//               location.href = process.env.APP_LONGLOGIN_URL!;
//               return {} as any;
//             })
//           );
//         }
//       }
//     });
//   });
// };
