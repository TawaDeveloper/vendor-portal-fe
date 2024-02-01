class CommonReturn {
  /** data */
  data = undefined;

  /** errno */
  errno = undefined;

  /** msg */
  msg = '';
}

class ModelCreateParam {
  /** comment */
  comment = '';

  /** createBy */
  createBy = '';

  /** data */
  data = '';

  /** formList */
  formList = [];

  /** groupIds */
  groupIds = '';

  /** id */
  id = undefined;

  /** modelType */
  modelType = undefined;

  /** name */
  name = '';

  /** nodeList */
  nodeList = [];

  /** nodeRelationList */
  nodeRelationList = [];

  /** orgCode */
  orgCode = '';

  /** params */
  params = '';

  /** userIds */
  userIds = '';
}

class PermissionVO {
  /** 菜单列表 */
  menus = [];

  /** 组件列表 */
  points = [];
}

class Response {
  /** 状态码：0-成功 */
  code = undefined;

  /** 响应数据 */
  data = new CommonReturn();

  /** 状态描述 */
  message = '';

  /** success */
  success = false;

  /** traceId */
  traceId = '';
}

class UserInfoVO {
  /** 账号 */
  account = '';

  /** 头像 */
  avatar = '';

  /** 邮箱 */
  email = '';

  /** google SSO token */
  googleToken = '';

  /** 用户名 */
  name = '';

  /** 用户id */
  userId = undefined;
}

export const vendorPortal = {
  CommonReturn,
  ModelCreateParam,
  PermissionVO,
  Response,
  UserInfoVO,
};
