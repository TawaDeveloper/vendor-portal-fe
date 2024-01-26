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

export const vendorPortal = {
  CommonReturn,
  ModelCreateParam,
  Response,
};
