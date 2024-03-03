class CheckPwdResetUsernameVO {
  /** 临时票据 */
  ticket = '';
}

class CommonReturn {
  /** data */
  data = undefined;

  /** errno */
  errno = undefined;

  /** msg */
  msg = '';
}

class EditHistoryItem {
  /** 操作列表 */
  actions = [];

  /** 编辑时间 */
  editTime = '';

  /** 更新人 */
  updater = '';
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

class ListOtpChannelDTO {
  /** 临时票据 */
  ticket = '';

  /** 用户名 */
  username = '';
}

class ListOtpChannelVO {
  /** 验证方式列表 */
  channels = [];

  /** 临时票据 */
  ticket = '';
}

class LoginDTO {
  /** 设备 */
  device = '';

  /** 密码 */
  password = '';

  /** 用户名 */
  username = '';
}

class LoginOtpDTO {
  /** 验证方式 */
  channel = 'EMAIL';

  /** OTP 验证码 */
  otpCode = '';

  /** 密码 */
  password = '';

  /** 临时票据 */
  ticket = '';

  /** 用户名 */
  username = '';
}

class LoginOtpVO {
  /** token 过期时间(s) */
  expireTime = undefined;

  /** 临时票据 */
  ticket = '';

  /** token */
  token = '';
}

class LoginTrustDeviceDTO {
  /** 设备 */
  device = '';

  /** 临时票据 */
  ticket = '';

  /** 是否：信任设备 */
  trustDevice = false;
}

class LoginVO {
  /** token 过期时间(s) */
  expireTime = undefined;

  /** 是否：需要 OTP 验证 */
  needVerifyOtp = false;

  /** 是否：登录成功 */
  success = false;

  /** 临时票据 */
  ticket = '';

  /** token */
  token = '';
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

class NodeApproveParam {
  /** approveState */
  approveState = undefined;

  /** approver */
  approver = '';

  /** comment */
  comment = '';

  /** createEntrance */
  createEntrance = false;

  /** creditApplicantsFile */
  creditApplicantsFile = undefined;

  /** formInstanceParams */
  formInstanceParams = [];

  /** groupId */
  groupId = '';

  /** isMarkedAsSpecial */
  isMarkedAsSpecial = undefined;

  /** isNextApproved */
  isNextApproved = undefined;

  /** modelId */
  modelId = undefined;

  /** modelType */
  modelType = undefined;

  /** nodeId */
  nodeId = undefined;

  /** otherFiles */
  otherFiles = [];

  /** procdefId */
  procdefId = undefined;

  /** retailCertificateFile */
  retailCertificateFile = undefined;

  /** strFormInstanceParams */
  strFormInstanceParams = '';

  /** taskId */
  taskId = undefined;

  /** userId */
  userId = '';

  /** vendorId */
  vendorId = undefined;

  /** w9File */
  w9File = undefined;
}

class PermissionTree {
  /** 子权限 */
  children = [];

  /** 编码 */
  code = '';

  /** id */
  id = undefined;

  /** 层级 */
  level = undefined;

  /** 名称 */
  name = '';

  /** 父 id */
  parentId = undefined;

  /** 排序 */
  sort = undefined;

  /** 类型 */
  type = 'MENU';
}

class PermissionVO {
  /** 菜单列表 */
  menus = [];

  /** 组件列表 */
  points = [];
}

class ProcdefCreateParam {
  /** contactEmail */
  contactEmail = '';

  /** contactName */
  contactName = '';

  /** data */
  data = '';

  /** extend */
  extend = '';

  /** formInstanceParams */
  formInstanceParams = [];

  /** legalBusinessName */
  legalBusinessName = '';

  /** modelId */
  modelId = undefined;

  /** modelType */
  modelType = undefined;

  /** name */
  name = '';

  /** orgCode */
  orgCode = '';

  /** procdefId */
  procdefId = undefined;

  /** userId */
  userId = '';

  /** userName */
  userName = '';

  /** vendorId */
  vendorId = undefined;
}

class PwdResetDTO {
  /** 密码 */
  password = '';

  /** 临时票据 */
  ticket = '';

  /** 用户名 */
  username = '';
}

class PwdResetOtpDTO {
  /** 验证方式 */
  channel = 'EMAIL';

  /** OTP 验证码 */
  otpCode = '';

  /** 临时票据 */
  ticket = '';

  /** 用户名 */
  username = '';
}

class PwdResetOtpVO {
  /** 临时票据 */
  ticket = '';
}

class Response {
  /** 状态码：0-成功 */
  code = undefined;

  /** 响应数据 */
  data = new CheckPwdResetUsernameVO();

  /** 状态描述 */
  message = '';

  /** success */
  success = false;

  /** traceId */
  traceId = '';
}

class RoleListDTO {
  /** 最大更新时间 */
  maxUpdateTime = '';

  /** 最小更新时间 */
  minUpdateTime = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 角色 id */
  roleId = undefined;

  /** 更新人 */
  updater = '';
}

class RoleListItem {
  /** 角色 id */
  id = undefined;

  /** 角色名称 */
  name = '';

  /** 权限数 */
  permissionCount = undefined;

  /** 更新时间 */
  updateTime = '';

  /** 更新人 */
  updater = '';

  /** 用户数 */
  userCount = undefined;
}

class RoleListOptionVO {
  /** 角色列表 */
  roles = [];
}

class RoleUserListDTO {
  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 角色 id */
  roleId = undefined;
}

class RoleUserListItem {
  /** 账号 */
  account = '';

  /** 上次登录时间 */
  lastLoginTime = '';

  /** 姓名 */
  name = '';

  /** 用户 id */
  userId = undefined;
}

class SaveRolePermissionDTO {
  /** 权限 id 列表 */
  permissionIds = [];

  /** 角色 id */
  roleId = undefined;
}

class SendOtpCodeDTO {
  /** 验证方式 */
  channel = 'EMAIL';

  /** 临时票据 */
  ticket = '';

  /** 用户名 */
  username = '';
}

class SendOtpCodeVO {
  /** 临时票据 */
  ticket = '';

  /** 等待时间（s） */
  waitTime = undefined;
}

class TmpLoginDTO {
  /** 密码 */
  password = '';

  /** 用户名 */
  username = '';
}

class TmpLoginVO {
  /** token 过期时间(s) */
  expireTime = undefined;

  /** 是否：登录成功 */
  success = false;

  /** token */
  token = '';
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

class VendorIntake {
  /** annualSalesRevenue */
  annualSalesRevenue = '';

  /** businessAddress */
  businessAddress = '';

  /** businessCity */
  businessCity = '';

  /** businessCountry */
  businessCountry = '';

  /** businessGeolocation */
  businessGeolocation = '';

  /** businessModel */
  businessModel = '';

  /** businessModelEtc */
  businessModelEtc = '';

  /** businessState */
  businessState = '';

  /** businessType */
  businessType = '';

  /** businessZipCode */
  businessZipCode = '';

  /** companyWebsite */
  companyWebsite = '';

  /** contactEmail */
  contactEmail = '';

  /** contactFirstName */
  contactFirstName = '';

  /** contactJobTitle */
  contactJobTitle = '';

  /** contactLastName */
  contactLastName = '';

  /** contactTel */
  contactTel = '';

  /** createdTime */
  createdTime = '';

  /** dba */
  dba = '';

  /** deleted */
  deleted = false;

  /** deliveryType */
  deliveryType = '';

  /** employeeCount */
  employeeCount = '';

  /** id */
  id = undefined;

  /** insuranceCarrier */
  insuranceCarrier = '';

  /** introduction */
  introduction = '';

  /** introductionFile */
  introductionFile = '';

  /** keyCustomers */
  keyCustomers = '';

  /** keyProducts */
  keyProducts = '';

  /** keyProductsFile */
  keyProductsFile = '';

  /** legalBusinessName */
  legalBusinessName = '';

  /** licenseAndPermit */
  licenseAndPermit = '';

  /** licenseAndPermitEtc */
  licenseAndPermitEtc = '';

  /** privateLabel */
  privateLabel = '';

  /** productCategory */
  productCategory = '';

  /** productCategoryEtc */
  productCategoryEtc = '';

  /** remark */
  remark = '';

  /** serviceRegion */
  serviceRegion = '';

  /** tbVendorId */
  tbVendorId = undefined;

  /** updatedBy */
  updatedBy = undefined;

  /** updatedTime */
  updatedTime = '';

  /** yearFounded */
  yearFounded = '';
}

class WkfApprovalHistoryVo {
  /** approvalResult */
  approvalResult = undefined;

  /** approver */
  approver = '';

  /** comment */
  comment = '';

  /** id */
  id = undefined;

  /** name */
  name = '';

  /** operateTime */
  operateTime = '';
}

class WkfForm {
  /** defaultValue */
  defaultValue = '';

  /** deleted */
  deleted = undefined;

  /** id */
  id = undefined;

  /** isRequire */
  isRequire = undefined;

  /** nodeId */
  nodeId = undefined;

  /** paramType */
  paramType = '';

  /** propertyDomain */
  propertyDomain = undefined;

  /** propertyKey */
  propertyKey = '';

  /** propertyName */
  propertyName = '';

  /** valueEnum */
  valueEnum = '';
}

class WkfFormCreateParam {
  /** defaultValue */
  defaultValue = '';

  /** domain */
  domain = undefined;

  /** isRequire */
  isRequire = undefined;

  /** nodeName */
  nodeName = '';

  /** paramType */
  paramType = '';

  /** propertyKey */
  propertyKey = '';

  /** propertyName */
  propertyName = '';

  /** valueEnum */
  valueEnum = '';
}

class WkfFormInstance {
  /** deleted */
  deleted = undefined;

  /** formId */
  formId = undefined;

  /** id */
  id = undefined;

  /** isCurrentUser */
  isCurrentUser = undefined;

  /** nodeId */
  nodeId = undefined;

  /** operateTime */
  operateTime = '';

  /** operator */
  operator = '';

  /** paramType */
  paramType = '';

  /** procdefId */
  procdefId = undefined;

  /** propertyComment */
  propertyComment = undefined;

  /** propertyKey */
  propertyKey = '';

  /** propertyName */
  propertyName = '';

  /** taskId */
  taskId = undefined;

  /** value */
  value = '';
}

class WkfFormInstanceCreateParam {
  /** domain */
  domain = undefined;

  /** formId */
  formId = undefined;

  /** paramType */
  paramType = '';

  /** propertyKey */
  propertyKey = '';

  /** propertyName */
  propertyName = '';

  /** value */
  value = '';
}

class WkfModelDetailVo {
  /** comment */
  comment = '';

  /** createBy */
  createBy = '';

  /** createById */
  createById = '';

  /** createTime */
  createTime = '';

  /** data */
  data = '';

  /** enable */
  enable = undefined;

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

  /** status */
  status = undefined;
}

class WkfNodeDetailVo {
  /** approvalTime */
  approvalTime = '';

  /** approveState */
  approveState = undefined;

  /** approveType */
  approveType = undefined;

  /** approver */
  approver = [];

  /** comment */
  comment = '';

  /** id */
  id = undefined;

  /** modelId */
  modelId = undefined;

  /** name */
  name = '';

  /** nodeForms */
  nodeForms = [];

  /** nodeParams */
  nodeParams = '';

  /** nodeType */
  nodeType = undefined;

  /** wkfTaskDetailVos */
  wkfTaskDetailVos = [];
}

class WkfNodeRelation {
  /** conditionExpression */
  conditionExpression = '';

  /** deleted */
  deleted = undefined;

  /** id */
  id = undefined;

  /** isDefault */
  isDefault = undefined;

  /** modelId */
  modelId = undefined;

  /** name */
  name = '';

  /** sourceNodeId */
  sourceNodeId = undefined;

  /** targetNodeId */
  targetNodeId = undefined;
}

class WkfNodeRelationCreateParam {
  /** conditionExpression */
  conditionExpression = '';

  /** id */
  id = undefined;

  /** isDefault */
  isDefault = undefined;

  /** name */
  name = '';

  /** sourceNodeName */
  sourceNodeName = '';

  /** targetNodeName */
  targetNodeName = '';
}

class WkfProcdefDetailVo {
  /** approvalHistoryVoList */
  approvalHistoryVoList = [];

  /** createBy */
  createBy = '';

  /** createTime */
  createTime = '';

  /** currentNodeId */
  currentNodeId = undefined;

  /** currentStatus */
  currentStatus = undefined;

  /** currentUserTask */
  currentUserTask = new WkfTask();

  /** data */
  data = '';

  /** endType */
  endType = undefined;

  /** extend */
  extend = '';

  /** id */
  id = undefined;

  /** isEnd */
  isEnd = undefined;

  /** isNextApproved */
  isNextApproved = undefined;

  /** modelDetail */
  modelDetail = new WkfModelDetailVo();

  /** modelType */
  modelType = undefined;

  /** name */
  name = '';

  /** updateBy */
  updateBy = '';

  /** vendorIntake */
  vendorIntake = new VendorIntake();
}

class WkfTask {
  /** approvalResult */
  approvalResult = undefined;

  /** approvalState */
  approvalState = undefined;

  /** approver */
  approver = '';

  /** comment */
  comment = '';

  /** groupId */
  groupId = '';

  /** historyFlag */
  historyFlag = undefined;

  /** id */
  id = undefined;

  /** nodeId */
  nodeId = undefined;

  /** operateTime */
  operateTime = '';

  /** operator */
  operator = '';

  /** procdefId */
  procdefId = undefined;

  /** taskType */
  taskType = undefined;

  /** userId */
  userId = '';
}

class WkfTaskDetailVo {
  /** approvalResult */
  approvalResult = undefined;

  /** approvalState */
  approvalState = undefined;

  /** approver */
  approver = '';

  /** comment */
  comment = '';

  /** formInstanceList */
  formInstanceList = [];

  /** groupId */
  groupId = '';

  /** historyFlag */
  historyFlag = undefined;

  /** id */
  id = undefined;

  /** nodeId */
  nodeId = undefined;

  /** operateTime */
  operateTime = '';

  /** operator */
  operator = '';

  /** operatorId */
  operatorId = '';

  /** procdefId */
  procdefId = undefined;

  /** taskType */
  taskType = undefined;

  /** userId */
  userId = '';
}

export const vendorPortal = {
  CheckPwdResetUsernameVO,
  CommonReturn,
  EditHistoryItem,
  IPage,
  ListOtpChannelDTO,
  ListOtpChannelVO,
  LoginDTO,
  LoginOtpDTO,
  LoginOtpVO,
  LoginTrustDeviceDTO,
  LoginVO,
  ModelCreateParam,
  NodeApproveParam,
  PermissionTree,
  PermissionVO,
  ProcdefCreateParam,
  PwdResetDTO,
  PwdResetOtpDTO,
  PwdResetOtpVO,
  Response,
  RoleListDTO,
  RoleListItem,
  RoleListOptionVO,
  RoleUserListDTO,
  RoleUserListItem,
  SaveRolePermissionDTO,
  SendOtpCodeDTO,
  SendOtpCodeVO,
  TmpLoginDTO,
  TmpLoginVO,
  UserInfoVO,
  UserListDTO,
  UserListItem,
  UserListOptionVO,
  VendorIntake,
  WkfApprovalHistoryVo,
  WkfForm,
  WkfFormCreateParam,
  WkfFormInstance,
  WkfFormInstanceCreateParam,
  WkfModelDetailVo,
  WkfNodeDetailVo,
  WkfNodeRelation,
  WkfNodeRelationCreateParam,
  WkfProcdefDetailVo,
  WkfTask,
  WkfTaskDetailVo,
};
