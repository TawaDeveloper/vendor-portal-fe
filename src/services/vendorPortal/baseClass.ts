class CommonReturn {
  /** data */
  data = undefined;

  /** errno */
  errno = undefined;

  /** msg */
  msg = '';
}

class IPage {
  /** current */
  current = undefined;

  /** pages */
  pages = undefined;

  /** records */
  records = [];

  /** size */
  size = undefined;

  /** total */
  total = undefined;
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

  /** updateBy */
  updateBy = '';

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

class UserListDTO {
  /** 组织 id */
  departmentId = undefined;

  /** 邮件 */
  email = '';

  /** 姓名 */
  name = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 角色 id */
  roleId = undefined;

  /** 最大更新时间 */
  updatedAtEnd = '';

  /** 最小更新时间 */
  updatedAtStart = '';
}

class UserListItem {
  /** 组织名称列表 */
  departmentNameList = [];

  /** 邮件 */
  email = '';

  /** id */
  id = undefined;

  /** 姓名 */
  name = '';

  /** 角色名称列表 */
  rolNameList = [];

  /** 更新时间 */
  updatedTime = '';
}

class UserListOptionVO {
  /** 组织列表（树） */
  organizations = [];

  /** 角色列表 */
  roles = [];
}

export const vendorPortal = {
  CommonReturn,
  IPage,
  ModelCreateParam,
  PermissionVO,
  Response,
  UserInfoVO,
  UserListDTO,
  UserListItem,
  UserListOptionVO,
};
