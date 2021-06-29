/*
 * @Author: tangyu
 * @Date: 2021-04-24 10:50:45
 * @Company: orientsec.com.cn
 * @Description: 长登录实体类型
 */
// /**
//  * 长登录返回类型
//  */
// export interface LongLoginResponse {
//   /**
//    * auth消息体，存放一些用户信息相关的数据
//    */
//   auth: Auth;

//   /**
//    * 服务授权凭证，获取登录成功后最新的
//    */
//   token: string;

//   /**
//    * 虚拟设备编号
//    */
//   vtDeviceId: string;

//   /**
//    * APP登录账号，登录的手机号或资金账号
//    */
//   loginAccount: string;

//   /**
//    * 登录模式
//    */
//   loginType: LoginType;
// }

// /**
//  * auth消息体
//  */
// export interface Auth {
//   /**
//   * 客户类型
//   */
//   clientType: ClientType;

//   /**
//    * 当前登录的资金账户的系统代码
//    */
//   bizSysId: BizSysId;

//   /**
//    * 客户名称
//    */
//   clientName: string;

//   /**
//    * 当前登录的资金账户
//    */
//   fundAccount: string;
// }

/**
 * 客户类型
 */
export enum ClientType {
  /**
   * 个人客户
   */
  personal = "0",
  /**
   * 机构客户
   */
  organ = "1"
}

/**
 * 账户系统编号
 */
export enum BizSysId {
  /**
   * 集中交易
   */
  trade = "3",
  /**
   * 融资融券
   */
  rong = "6",
  /**
   * 期权
   */
  option = "18"
}

/**
 * 登录模式
 */
 export enum LoginType {
  /**
   * 未登录
   */
  noLogin = "0",
  /**
   * 手机号登录
   */
  mobileLogin = "1",
  /**
   * 资金账户登录
   */
  fundAccountLogin = "2"
}
