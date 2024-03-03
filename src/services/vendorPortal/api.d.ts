type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace vendorPortal {
    export class CheckPwdResetUsernameVO {
      /** 临时票据 */
      ticket?: string;
    }

    export class CommonReturn {
      /** data */
      data?: object;

      /** errno */
      errno?: number;

      /** msg */
      msg?: string;
    }

    export class EditHistoryItem {
      /** 操作列表 */
      actions?: Array<defs.vendorPortal.RoleActionItem>;

      /** 编辑时间 */
      editTime?: string;

      /** 更新人 */
      updater?: string;
    }

    export class IPage<T0 = any> {
      /** current */
      current?: number;

      /** pages */
      pages?: number;

      /** records */
      records?: Array<T0>;

      /** size */
      size?: number;

      /** total */
      total?: number;
    }

    export class ListOtpChannelDTO {
      /** 临时票据 */
      ticket?: string;

      /** 用户名 */
      username?: string;
    }

    export class ListOtpChannelVO {
      /** 验证方式列表 */
      channels?: Array<defs.vendorPortal.OtpChannel>;

      /** 临时票据 */
      ticket?: string;
    }

    export class LoginDTO {
      /** 设备 */
      device?: string;

      /** 密码 */
      password?: string;

      /** 用户名 */
      username?: string;
    }

    export class LoginOtpDTO {
      /** 验证方式 */
      channel?: 'EMAIL' | 'SMS' | 'VOICE';

      /** OTP 验证码 */
      otpCode?: string;

      /** 密码 */
      password?: string;

      /** 临时票据 */
      ticket?: string;

      /** 用户名 */
      username?: string;
    }

    export class LoginOtpVO {
      /** token 过期时间(s) */
      expireTime?: number;

      /** 临时票据 */
      ticket?: string;

      /** token */
      token?: string;
    }

    export class LoginTrustDeviceDTO {
      /** 设备 */
      device?: string;

      /** 临时票据 */
      ticket?: string;

      /** 是否：信任设备 */
      trustDevice?: boolean;
    }

    export class LoginVO {
      /** token 过期时间(s) */
      expireTime?: number;

      /** 是否：需要 OTP 验证 */
      needVerifyOtp?: boolean;

      /** 是否：登录成功 */
      success?: boolean;

      /** 临时票据 */
      ticket?: string;

      /** token */
      token?: string;
    }

    export class ModelCreateParam {
      /** comment */
      comment?: string;

      /** createBy */
      createBy?: string;

      /** data */
      data?: string;

      /** formList */
      formList?: Array<defs.vendorPortal.WkfFormCreateParam>;

      /** groupIds */
      groupIds?: string;

      /** id */
      id?: number;

      /** modelType */
      modelType?: number;

      /** name */
      name?: string;

      /** nodeList */
      nodeList?: Array<defs.vendorPortal.NodeCreateParam>;

      /** nodeRelationList */
      nodeRelationList?: Array<defs.vendorPortal.WkfNodeRelationCreateParam>;

      /** orgCode */
      orgCode?: string;

      /** params */
      params?: string;

      /** updateBy */
      updateBy?: string;

      /** userIds */
      userIds?: string;
    }

    export class NodeApproveParam {
      /** approveState */
      approveState?: number;

      /** approver */
      approver?: string;

      /** comment */
      comment?: string;

      /** createEntrance */
      createEntrance?: boolean;

      /** creditApplicantsFile */
      creditApplicantsFile?: File;

      /** formInstanceParams */
      formInstanceParams?: Array<defs.vendorPortal.WkfFormInstanceCreateParam>;

      /** groupId */
      groupId?: string;

      /** isMarkedAsSpecial */
      isMarkedAsSpecial?: number;

      /** isNextApproved */
      isNextApproved?: number;

      /** modelId */
      modelId?: number;

      /** modelType */
      modelType?: number;

      /** nodeId */
      nodeId?: number;

      /** otherFiles */
      otherFiles?: Array<File>;

      /** procdefId */
      procdefId?: number;

      /** retailCertificateFile */
      retailCertificateFile?: File;

      /** strFormInstanceParams */
      strFormInstanceParams?: string;

      /** taskId */
      taskId?: number;

      /** userId */
      userId?: string;

      /** vendorId */
      vendorId?: number;

      /** w9File */
      w9File?: File;
    }

    export class PermissionTree {
      /** 子权限 */
      children?: Array<defs.vendorPortal.PermissionTree>;

      /** 编码 */
      code?: string;

      /** id */
      id?: number;

      /** 层级 */
      level?: number;

      /** 名称 */
      name?: string;

      /** 父 id */
      parentId?: number;

      /** 排序 */
      sort?: number;

      /** 类型 */
      type?: 'MENU' | 'PAGE' | 'POINT';
    }

    export class PermissionVO {
      /** 菜单列表 */
      menus?: Array<defs.vendorPortal.Menu>;

      /** 组件列表 */
      points?: Array<defs.vendorPortal.Point>;
    }

    export class ProcdefCreateParam {
      /** contactEmail */
      contactEmail?: string;

      /** contactName */
      contactName?: string;

      /** data */
      data?: string;

      /** extend */
      extend?: string;

      /** formInstanceParams */
      formInstanceParams?: Array<defs.vendorPortal.WkfFormInstanceCreateParam>;

      /** legalBusinessName */
      legalBusinessName?: string;

      /** modelId */
      modelId?: number;

      /** modelType */
      modelType?: number;

      /** name */
      name?: string;

      /** orgCode */
      orgCode?: string;

      /** procdefId */
      procdefId?: number;

      /** userId */
      userId?: string;

      /** userName */
      userName?: string;

      /** vendorId */
      vendorId?: number;
    }

    export class PwdResetDTO {
      /** 密码 */
      password?: string;

      /** 临时票据 */
      ticket?: string;

      /** 用户名 */
      username?: string;
    }

    export class PwdResetOtpDTO {
      /** 验证方式 */
      channel?: 'EMAIL' | 'SMS' | 'VOICE';

      /** OTP 验证码 */
      otpCode?: string;

      /** 临时票据 */
      ticket?: string;

      /** 用户名 */
      username?: string;
    }

    export class PwdResetOtpVO {
      /** 临时票据 */
      ticket?: string;
    }

    export class Response<T0 = any> {
      /** 状态码：0-成功 */
      code?: number;

      /** 响应数据 */
      data?: T0;

      /** 状态描述 */
      message?: string;

      /** success */
      success?: boolean;

      /** traceId */
      traceId?: string;
    }

    export class RoleListDTO {
      /** 最大更新时间 */
      maxUpdateTime?: string;

      /** 最小更新时间 */
      minUpdateTime?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 角色 id */
      roleId?: number;

      /** 更新人 */
      updater?: string;
    }

    export class RoleListItem {
      /** 角色 id */
      id?: number;

      /** 角色名称 */
      name?: string;

      /** 权限数 */
      permissionCount?: number;

      /** 更新时间 */
      updateTime?: string;

      /** 更新人 */
      updater?: string;

      /** 用户数 */
      userCount?: number;
    }

    export class RoleListOptionVO {
      /** 角色列表 */
      roles?: Array<defs.vendorPortal.OptionVO>;
    }

    export class RoleUserListDTO {
      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 角色 id */
      roleId?: number;
    }

    export class RoleUserListItem {
      /** 账号 */
      account?: string;

      /** 上次登录时间 */
      lastLoginTime?: string;

      /** 姓名 */
      name?: string;

      /** 用户 id */
      userId?: number;
    }

    export class SaveRolePermissionDTO {
      /** 权限 id 列表 */
      permissionIds?: Array<number>;

      /** 角色 id */
      roleId?: number;
    }

    export class SendOtpCodeDTO {
      /** 验证方式 */
      channel?: 'EMAIL' | 'SMS' | 'VOICE';

      /** 临时票据 */
      ticket?: string;

      /** 用户名 */
      username?: string;
    }

    export class SendOtpCodeVO {
      /** 临时票据 */
      ticket?: string;

      /** 等待时间（s） */
      waitTime?: number;
    }

    export class TmpLoginDTO {
      /** 密码 */
      password?: string;

      /** 用户名 */
      username?: string;
    }

    export class TmpLoginVO {
      /** token 过期时间(s) */
      expireTime?: number;

      /** 是否：登录成功 */
      success?: boolean;

      /** token */
      token?: string;
    }

    export class UserInfoVO {
      /** 账号 */
      account?: string;

      /** 头像 */
      avatar?: string;

      /** 邮箱 */
      email?: string;

      /** google SSO token */
      googleToken?: string;

      /** 用户名 */
      name?: string;

      /** 用户id */
      userId?: number;
    }

    export class UserListDTO {
      /** 组织 id */
      departmentId?: number;

      /** 邮件 */
      email?: string;

      /** 姓名 */
      name?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 角色 id */
      roleId?: number;

      /** 最大更新时间 */
      updatedAtEnd?: string;

      /** 最小更新时间 */
      updatedAtStart?: string;
    }

    export class UserListItem {
      /** 组织名称列表 */
      departmentNameList?: Array<string>;

      /** 邮件 */
      email?: string;

      /** id */
      id?: number;

      /** 姓名 */
      name?: string;

      /** 角色名称列表 */
      rolNameList?: Array<string>;

      /** 更新时间 */
      updatedTime?: string;
    }

    export class UserListOptionVO {
      /** 组织列表（树） */
      organizations?: Array<defs.vendorPortal.OrganizationTree>;

      /** 角色列表 */
      roles?: Array<defs.vendorPortal.OptionVO>;
    }

    export class VendorIntake {
      /** annualSalesRevenue */
      annualSalesRevenue?: string;

      /** businessAddress */
      businessAddress?: string;

      /** businessCity */
      businessCity?: string;

      /** businessCountry */
      businessCountry?: string;

      /** businessGeolocation */
      businessGeolocation?: string;

      /** businessModel */
      businessModel?: string;

      /** businessModelEtc */
      businessModelEtc?: string;

      /** businessState */
      businessState?: string;

      /** businessType */
      businessType?: string;

      /** businessZipCode */
      businessZipCode?: string;

      /** companyWebsite */
      companyWebsite?: string;

      /** contactEmail */
      contactEmail?: string;

      /** contactFirstName */
      contactFirstName?: string;

      /** contactJobTitle */
      contactJobTitle?: string;

      /** contactLastName */
      contactLastName?: string;

      /** contactTel */
      contactTel?: string;

      /** createdTime */
      createdTime?: string;

      /** dba */
      dba?: string;

      /** deleted */
      deleted?: boolean;

      /** deliveryType */
      deliveryType?: string;

      /** employeeCount */
      employeeCount?: string;

      /** id */
      id?: number;

      /** insuranceCarrier */
      insuranceCarrier?: string;

      /** introduction */
      introduction?: string;

      /** introductionFile */
      introductionFile?: string;

      /** keyCustomers */
      keyCustomers?: string;

      /** keyProducts */
      keyProducts?: string;

      /** keyProductsFile */
      keyProductsFile?: string;

      /** legalBusinessName */
      legalBusinessName?: string;

      /** licenseAndPermit */
      licenseAndPermit?: string;

      /** licenseAndPermitEtc */
      licenseAndPermitEtc?: string;

      /** privateLabel */
      privateLabel?: string;

      /** productCategory */
      productCategory?: string;

      /** productCategoryEtc */
      productCategoryEtc?: string;

      /** remark */
      remark?: string;

      /** serviceRegion */
      serviceRegion?: string;

      /** tbVendorId */
      tbVendorId?: number;

      /** updatedBy */
      updatedBy?: number;

      /** updatedTime */
      updatedTime?: string;

      /** yearFounded */
      yearFounded?: string;
    }

    export class WkfApprovalHistoryVo {
      /** approvalResult */
      approvalResult?: number;

      /** approver */
      approver?: string;

      /** comment */
      comment?: string;

      /** id */
      id?: number;

      /** name */
      name?: string;

      /** operateTime */
      operateTime?: string;
    }

    export class WkfForm {
      /** defaultValue */
      defaultValue?: string;

      /** deleted */
      deleted?: number;

      /** id */
      id?: number;

      /** isRequire */
      isRequire?: number;

      /** nodeId */
      nodeId?: number;

      /** paramType */
      paramType?: string;

      /** propertyDomain */
      propertyDomain?: number;

      /** propertyKey */
      propertyKey?: string;

      /** propertyName */
      propertyName?: string;

      /** valueEnum */
      valueEnum?: string;
    }

    export class WkfFormCreateParam {
      /** defaultValue */
      defaultValue?: string;

      /** domain */
      domain?: number;

      /** isRequire */
      isRequire?: number;

      /** nodeName */
      nodeName?: string;

      /** paramType */
      paramType?: string;

      /** propertyKey */
      propertyKey?: string;

      /** propertyName */
      propertyName?: string;

      /** valueEnum */
      valueEnum?: string;
    }

    export class WkfFormInstance {
      /** deleted */
      deleted?: number;

      /** formId */
      formId?: number;

      /** id */
      id?: number;

      /** isCurrentUser */
      isCurrentUser?: number;

      /** nodeId */
      nodeId?: number;

      /** operateTime */
      operateTime?: string;

      /** operator */
      operator?: string;

      /** paramType */
      paramType?: string;

      /** procdefId */
      procdefId?: number;

      /** propertyComment */
      propertyComment?: number;

      /** propertyKey */
      propertyKey?: string;

      /** propertyName */
      propertyName?: string;

      /** taskId */
      taskId?: number;

      /** value */
      value?: string;
    }

    export class WkfFormInstanceCreateParam {
      /** domain */
      domain?: number;

      /** formId */
      formId?: number;

      /** paramType */
      paramType?: string;

      /** propertyKey */
      propertyKey?: string;

      /** propertyName */
      propertyName?: string;

      /** value */
      value?: string;
    }

    export class WkfModelDetailVo {
      /** comment */
      comment?: string;

      /** createBy */
      createBy?: string;

      /** createById */
      createById?: string;

      /** createTime */
      createTime?: string;

      /** data */
      data?: string;

      /** enable */
      enable?: number;

      /** id */
      id?: number;

      /** modelType */
      modelType?: number;

      /** name */
      name?: string;

      /** nodeList */
      nodeList?: Array<defs.vendorPortal.WkfNodeDetailVo>;

      /** nodeRelationList */
      nodeRelationList?: Array<defs.vendorPortal.WkfNodeRelation>;

      /** status */
      status?: number;
    }

    export class WkfNodeDetailVo {
      /** approvalTime */
      approvalTime?: string;

      /** approveState */
      approveState?: number;

      /** approveType */
      approveType?: number;

      /** approver */
      approver?: Array<string>;

      /** comment */
      comment?: string;

      /** id */
      id?: number;

      /** modelId */
      modelId?: number;

      /** name */
      name?: string;

      /** nodeForms */
      nodeForms?: Array<defs.vendorPortal.WkfForm>;

      /** nodeParams */
      nodeParams?: string;

      /** nodeType */
      nodeType?: number;

      /** wkfTaskDetailVos */
      wkfTaskDetailVos?: Array<defs.vendorPortal.WkfTaskDetailVo>;
    }

    export class WkfNodeRelation {
      /** conditionExpression */
      conditionExpression?: string;

      /** deleted */
      deleted?: number;

      /** id */
      id?: number;

      /** isDefault */
      isDefault?: number;

      /** modelId */
      modelId?: number;

      /** name */
      name?: string;

      /** sourceNodeId */
      sourceNodeId?: number;

      /** targetNodeId */
      targetNodeId?: number;
    }

    export class WkfNodeRelationCreateParam {
      /** conditionExpression */
      conditionExpression?: string;

      /** id */
      id?: number;

      /** isDefault */
      isDefault?: number;

      /** name */
      name?: string;

      /** sourceNodeName */
      sourceNodeName?: string;

      /** targetNodeName */
      targetNodeName?: string;
    }

    export class WkfProcdefDetailVo {
      /** approvalHistoryVoList */
      approvalHistoryVoList?: Array<defs.vendorPortal.WkfApprovalHistoryVo>;

      /** createBy */
      createBy?: string;

      /** createTime */
      createTime?: string;

      /** currentNodeId */
      currentNodeId?: number;

      /** currentStatus */
      currentStatus?: number;

      /** currentUserTask */
      currentUserTask?: defs.vendorPortal.WkfTask;

      /** data */
      data?: string;

      /** endType */
      endType?: number;

      /** extend */
      extend?: string;

      /** id */
      id?: number;

      /** isEnd */
      isEnd?: number;

      /** isNextApproved */
      isNextApproved?: number;

      /** modelDetail */
      modelDetail?: defs.vendorPortal.WkfModelDetailVo;

      /** modelType */
      modelType?: number;

      /** name */
      name?: string;

      /** updateBy */
      updateBy?: string;

      /** vendorIntake */
      vendorIntake?: defs.vendorPortal.VendorIntake;
    }

    export class WkfTask {
      /** approvalResult */
      approvalResult?: number;

      /** approvalState */
      approvalState?: number;

      /** approver */
      approver?: string;

      /** comment */
      comment?: string;

      /** groupId */
      groupId?: string;

      /** historyFlag */
      historyFlag?: number;

      /** id */
      id?: number;

      /** nodeId */
      nodeId?: number;

      /** operateTime */
      operateTime?: string;

      /** operator */
      operator?: string;

      /** procdefId */
      procdefId?: number;

      /** taskType */
      taskType?: number;

      /** userId */
      userId?: string;
    }

    export class WkfTaskDetailVo {
      /** approvalResult */
      approvalResult?: number;

      /** approvalState */
      approvalState?: number;

      /** approver */
      approver?: string;

      /** comment */
      comment?: string;

      /** formInstanceList */
      formInstanceList?: Array<defs.vendorPortal.WkfFormInstance>;

      /** groupId */
      groupId?: string;

      /** historyFlag */
      historyFlag?: number;

      /** id */
      id?: number;

      /** nodeId */
      nodeId?: number;

      /** operateTime */
      operateTime?: string;

      /** operator */
      operator?: string;

      /** operatorId */
      operatorId?: string;

      /** procdefId */
      procdefId?: number;

      /** taskType */
      taskType?: number;

      /** userId */
      userId?: string;
    }
  }
}

declare namespace API {
  export namespace vendorPortal {
    /**
     * Internal 权限
     */
    export namespace internalPermission {
      /**
       * 查询操作权限
       * /internal/permission/permission
       */
      export namespace getPermissions {
        export type getPermissionsOptions = Record<string, any>;
        export type getPermissionsResponse =
          defs.vendorPortal.Response<defs.vendorPortal.PermissionVO>;
        export type request = (
          options?: getPermissionsOptions,
        ) => getPermissionsResponse;
      }

      /**
       * 查询用户信息
       * /internal/permission/user/info
       */
      export namespace getUserInfo {
        export type getUserInfoOptions = Record<string, any>;
        export type getUserInfoResponse =
          defs.vendorPortal.Response<defs.vendorPortal.UserInfoVO>;
        export type request = (
          options?: getUserInfoOptions,
        ) => getUserInfoResponse;
      }
    }

    /**
     * Internal 角色管理
     */
    export namespace internalRole {
      /**
       * 查询角色编辑历史
       * /internal/role/edit/history
       */
      export namespace getRoleEditHistory {
        export type getRoleEditHistoryParam = {
          /** roleId */
          roleId: number;
        };
        export type getRoleEditHistoryOptions = Record<string, any>;
        export type getRoleEditHistoryResponse = defs.vendorPortal.Response<
          Array<defs.vendorPortal.EditHistoryItem>
        >;
        export type request = (
          params: getRoleEditHistoryParam,
          options?: getRoleEditHistoryOptions,
        ) => getRoleEditHistoryResponse;
      }

      /**
       * 查询角色列表条件选项
       * /internal/role/list/option
       */
      export namespace getRoleListOption {
        export type getRoleListOptionOptions = Record<string, any>;
        export type getRoleListOptionResponse =
          defs.vendorPortal.Response<defs.vendorPortal.RoleListOptionVO>;
        export type request = (
          options?: getRoleListOptionOptions,
        ) => getRoleListOptionResponse;
      }

      /**
       * 查询角色列表
       * /internal/role/list/page
       */
      export namespace getRoleListForPage {
        export type getRoleListForPageBody = defs.vendorPortal.RoleListDTO;
        export type getRoleListForPageOptions = Record<string, any>;
        export type getRoleListForPageResponse = defs.vendorPortal.Response<
          defs.vendorPortal.IPage<defs.vendorPortal.RoleListItem>
        >;
        export type request = (
          body: getRoleListForPageBody,
          options?: getRoleListForPageOptions,
        ) => getRoleListForPageResponse;
      }

      /**
       * 查询角色权限（子节点 id 列表）
       * /internal/role/permission/ids
       */
      export namespace getRolePermissionIds {
        export type getRolePermissionIdsParam = {
          /** roleId */
          roleId: number;
        };
        export type getRolePermissionIdsOptions = Record<string, any>;
        export type getRolePermissionIdsResponse = defs.vendorPortal.Response<
          Array<number>
        >;
        export type request = (
          params: getRolePermissionIdsParam,
          options?: getRolePermissionIdsOptions,
        ) => getRolePermissionIdsResponse;
      }

      /**
       * 保存角色权限
       * /internal/role/permission/save
       */
      export namespace saveRolePermissionIds {
        export type saveRolePermissionIdsBody =
          defs.vendorPortal.SaveRolePermissionDTO;
        export type saveRolePermissionIdsOptions = Record<string, any>;
        export type saveRolePermissionIdsResponse =
          defs.vendorPortal.Response<void>;
        export type request = (
          body: saveRolePermissionIdsBody,
          options?: saveRolePermissionIdsOptions,
        ) => saveRolePermissionIdsResponse;
      }

      /**
       * 查询所有权限树
       * /internal/role/permission/tree
       */
      export namespace getAllPermissionTree {
        export type getAllPermissionTreeOptions = Record<string, any>;
        export type getAllPermissionTreeResponse = defs.vendorPortal.Response<
          Array<defs.vendorPortal.PermissionTree>
        >;
        export type request = (
          options?: getAllPermissionTreeOptions,
        ) => getAllPermissionTreeResponse;
      }

      /**
       * 查询角色用户列表
       * /internal/role/user/list/page
       */
      export namespace getRoleUserList {
        export type getRoleUserListBody = defs.vendorPortal.RoleUserListDTO;
        export type getRoleUserListOptions = Record<string, any>;
        export type getRoleUserListResponse = defs.vendorPortal.Response<
          defs.vendorPortal.IPage<defs.vendorPortal.RoleUserListItem>
        >;
        export type request = (
          body: getRoleUserListBody,
          options?: getRoleUserListOptions,
        ) => getRoleUserListResponse;
      }
    }

    /**
     * Internal 用户管理
     */
    export namespace internalUser {
      /**
       * 查询用户列表条件选项
       * /internal/user/list/option
       */
      export namespace getUserListOption {
        export type getUserListOptionOptions = Record<string, any>;
        export type getUserListOptionResponse =
          defs.vendorPortal.Response<defs.vendorPortal.UserListOptionVO>;
        export type request = (
          options?: getUserListOptionOptions,
        ) => getUserListOptionResponse;
      }

      /**
       * 查询用户列表
       * /internal/user/list/page
       */
      export namespace getUserListForPage {
        export type getUserListForPageBody = defs.vendorPortal.UserListDTO;
        export type getUserListForPageOptions = Record<string, any>;
        export type getUserListForPageResponse = defs.vendorPortal.Response<
          defs.vendorPortal.IPage<defs.vendorPortal.UserListItem>
        >;
        export type request = (
          body: getUserListForPageBody,
          options?: getUserListForPageOptions,
        ) => getUserListForPageResponse;
      }
    }

    /**
     * Vendor 权限
     */
    export namespace vendorPermission {
      /**
       * 登录 - 正式用户
       * /vendor/permission/login
       */
      export namespace login {
        export type loginBody = defs.vendorPortal.LoginDTO;
        export type loginOptions = Record<string, any>;
        export type loginResponse =
          defs.vendorPortal.Response<defs.vendorPortal.LoginVO>;
        export type request = (
          body: loginBody,
          options?: loginOptions,
        ) => loginResponse;
      }

      /**
       * 登录 - 选择信任设备
       * /vendor/permission/login/device/trust
       */
      export namespace trustLoginDevice {
        export type trustLoginDeviceBody =
          defs.vendorPortal.LoginTrustDeviceDTO;
        export type trustLoginDeviceOptions = Record<string, any>;
        export type trustLoginDeviceResponse = defs.vendorPortal.Response<void>;
        export type request = (
          body: trustLoginDeviceBody,
          options?: trustLoginDeviceOptions,
        ) => trustLoginDeviceResponse;
      }

      /**
       * 登录 - 提交 OTP 验证码
       * /vendor/permission/login/opt/code/check
       */
      export namespace checkLoginOtpCode {
        export type checkLoginOtpCodeBody = defs.vendorPortal.LoginOtpDTO;
        export type checkLoginOtpCodeOptions = Record<string, any>;
        export type checkLoginOtpCodeResponse =
          defs.vendorPortal.Response<defs.vendorPortal.LoginOtpVO>;
        export type request = (
          body: checkLoginOtpCodeBody,
          options?: checkLoginOtpCodeOptions,
        ) => checkLoginOtpCodeResponse;
      }

      /**
       * 退出 - 正式用户
       * /vendor/permission/logout
       */
      export namespace logout {
        export type logoutOptions = Record<string, any>;
        export type logoutResponse = defs.vendorPortal.Response<void>;
        export type request = (options?: logoutOptions) => logoutResponse;
      }

      /**
       * OTP - 查询验证方式
       * /vendor/permission/otp/channels
       */
      export namespace getOptChannels {
        export type getOptChannelsBody = defs.vendorPortal.ListOtpChannelDTO;
        export type getOptChannelsOptions = Record<string, any>;
        export type getOptChannelsResponse =
          defs.vendorPortal.Response<defs.vendorPortal.ListOtpChannelVO>;
        export type request = (
          body: getOptChannelsBody,
          options?: getOptChannelsOptions,
        ) => getOptChannelsResponse;
      }

      /**
       * OTP - 发送验证码
       * /vendor/permission/otp/code/send
       */
      export namespace sendOtpCode {
        export type sendOtpCodeBody = defs.vendorPortal.SendOtpCodeDTO;
        export type sendOtpCodeOptions = Record<string, any>;
        export type sendOtpCodeResponse =
          defs.vendorPortal.Response<defs.vendorPortal.SendOtpCodeVO>;
        export type request = (
          body: sendOtpCodeBody,
          options?: sendOtpCodeOptions,
        ) => sendOtpCodeResponse;
      }

      /**
       * 重置密码
       * /vendor/permission/pwd/reset
       */
      export namespace restPwd {
        export type restPwdBody = defs.vendorPortal.PwdResetDTO;
        export type restPwdOptions = Record<string, any>;
        export type restPwdResponse = defs.vendorPortal.Response<void>;
        export type request = (
          body: restPwdBody,
          options?: restPwdOptions,
        ) => restPwdResponse;
      }

      /**
       * 重置密码 - 提交 OTP 验证码
       * /vendor/permission/pwd/reset/otp/code/check
       */
      export namespace checkPwdResetOptCode {
        export type checkPwdResetOptCodeBody = defs.vendorPortal.PwdResetOtpDTO;
        export type checkPwdResetOptCodeOptions = Record<string, any>;
        export type checkPwdResetOptCodeResponse =
          defs.vendorPortal.Response<defs.vendorPortal.PwdResetOtpVO>;
        export type request = (
          body: checkPwdResetOptCodeBody,
          options?: checkPwdResetOptCodeOptions,
        ) => checkPwdResetOptCodeResponse;
      }

      /**
       * 重置密码 - 验证用户名
       * /vendor/permission/pwd/reset/username/check
       */
      export namespace checkPwdResetUsername {
        export type checkPwdResetUsernameParam = {
          /** username */
          username: string;
        };
        export type checkPwdResetUsernameOptions = Record<string, any>;
        export type checkPwdResetUsernameResponse =
          defs.vendorPortal.Response<defs.vendorPortal.CheckPwdResetUsernameVO>;
        export type request = (
          params: checkPwdResetUsernameParam,
          options?: checkPwdResetUsernameOptions,
        ) => checkPwdResetUsernameResponse;
      }

      /**
       * 登录 - 临时用户
       * /vendor/permission/tmp/login
       */
      export namespace tmpLogin {
        export type tmpLoginBody = defs.vendorPortal.TmpLoginDTO;
        export type tmpLoginOptions = Record<string, any>;
        export type tmpLoginResponse =
          defs.vendorPortal.Response<defs.vendorPortal.TmpLoginVO>;
        export type request = (
          body: tmpLoginBody,
          options?: tmpLoginOptions,
        ) => tmpLoginResponse;
      }

      /**
       * 退出 - 临时用户
       * /vendor/permission/tmp/logout
       */
      export namespace tmpLogout {
        export type tmpLogoutOptions = Record<string, any>;
        export type tmpLogoutResponse = defs.vendorPortal.Response<void>;
        export type request = (options?: tmpLogoutOptions) => tmpLogoutResponse;
      }
    }

    /**
     * Approval工单模板
     */
    export namespace wkfModel {
      /**
       * 创建工单模板
       * /api/wkf/model/create
       */
      export namespace createModel {
        export type createModelBody = defs.vendorPortal.ModelCreateParam;
        export type createModelOptions = Record<string, any>;
        export type createModelResponse =
          defs.vendorPortal.Response<defs.vendorPortal.CommonReturn>;
        export type request = (
          body: createModelBody,
          options?: createModelOptions,
        ) => createModelResponse;
      }

      /**
       * getDetail
       * /api/wkf/model/getDetail
       */
      export namespace getDetail {
        export type getDetailParam = {
          /** modelId */
          modelId: number;
        };
        export type getDetailOptions = Record<string, any>;
        export type getDetailResponse = defs.vendorPortal.Response<ObjectMap>;
        export type request = (
          params: getDetailParam,
          options?: getDetailOptions,
        ) => getDetailResponse;
      }

      /**
       * search
       * /api/wkf/model/search
       */
      export namespace search {
        export type searchParam = {
          /** beginTime */
          beginTime?: string;

          /** endTime */
          endTime?: string;

          /** name */
          name?: string;

          /** pageNumber */
          pageNumber?: number;

          /** pageSize */
          pageSize?: number;

          /** userId */
          userId?: string;
        };
        export type searchOptions = Record<string, any>;
        export type searchResponse = defs.vendorPortal.Response<
          ObjectMap<string, ObjectMap>
        >;
        export type request = (
          params: searchParam,
          options?: searchOptions,
        ) => searchResponse;
      }

      /**
       * 更新工单模板
       * /api/wkf/model/update
       */
      export namespace updateModel {
        export type updateModelBody = defs.vendorPortal.ModelCreateParam;
        export type updateModelOptions = Record<string, any>;
        export type updateModelResponse = defs.vendorPortal.Response<boolean>;
        export type request = (
          body: updateModelBody,
          options?: updateModelOptions,
        ) => updateModelResponse;
      }
    }

    /**
     * Approval工单流程
     */
    export namespace wkfProcdef {
      /**
       * approveFormNode
       * /api/wkf/procdef/approveFormNode
       */
      export namespace approveFormNode {
        export type approveFormNodeParam = {
          /** approveState */
          approveState?: number;

          /** approver */
          approver?: string;

          /** comment */
          comment?: string;

          /** createEntrance */
          createEntrance?: boolean;

          /** creditApplicantsFile */
          creditApplicantsFile?: File;

          /** domain */
          domain?: number;

          /** formId */
          formId?: number;

          /** paramType */
          paramType?: string;

          /** propertyKey */
          propertyKey?: string;

          /** propertyName */
          propertyName?: string;

          /** value */
          value?: string;

          /** groupId */
          groupId?: string;

          /** isMarkedAsSpecial */
          isMarkedAsSpecial?: number;

          /** isNextApproved */
          isNextApproved?: number;

          /** modelId */
          modelId?: number;

          /** modelType */
          modelType?: number;

          /** nodeId */
          nodeId?: number;

          /** otherFiles */
          otherFiles?: Array<File>;

          /** procdefId */
          procdefId?: number;

          /** retailCertificateFile */
          retailCertificateFile?: File;

          /** strFormInstanceParams */
          strFormInstanceParams?: string;

          /** taskId */
          taskId?: number;

          /** userId */
          userId?: string;

          /** vendorId */
          vendorId?: number;

          /** w9File */
          w9File?: File;
        };
        export type approveFormNodeOptions = Record<string, any>;
        export type approveFormNodeResponse =
          defs.vendorPortal.Response<boolean>;
        export type request = (
          params: approveFormNodeParam,
          options?: approveFormNodeOptions,
        ) => approveFormNodeResponse;
      }

      /**
       * approveNode
       * /api/wkf/procdef/approveNode
       */
      export namespace approveNode {
        export type approveNodeBody = defs.vendorPortal.NodeApproveParam;
        export type approveNodeOptions = Record<string, any>;
        export type approveNodeResponse = defs.vendorPortal.Response<boolean>;
        export type request = (
          body: approveNodeBody,
          options?: approveNodeOptions,
        ) => approveNodeResponse;
      }

      /**
       * create
       * /api/wkf/procdef/create
       */
      export namespace create {
        export type createBody = defs.vendorPortal.ProcdefCreateParam;
        export type createOptions = Record<string, any>;
        export type createResponse = defs.vendorPortal.Response<number>;
        export type request = (
          body: createBody,
          options?: createOptions,
        ) => createResponse;
      }

      /**
       * getDetail
       * /api/wkf/procdef/getDetail
       */
      export namespace getDetail {
        export type getDetailParam = {
          /** procdefId */
          procdefId: number;
        };
        export type getDetailOptions = Record<string, any>;
        export type getDetailResponse =
          defs.vendorPortal.Response<defs.vendorPortal.WkfProcdefDetailVo>;
        export type request = (
          params: getDetailParam,
          options?: getDetailOptions,
        ) => getDetailResponse;
      }

      /**
       * 单流程审批流查看
       * /api/wkf/procdef/getTaskRecord
       */
      export namespace getTaskRecord {
        export type getTaskRecordParam = {
          /** beginTime */
          beginTime?: string;

          /** endTime */
          endTime?: string;

          /** nodeId */
          nodeId?: number;

          /** operator */
          operator?: string;

          /** procdefId */
          procdefId?: number;

          /** taskType */
          taskType?: number;
        };
        export type getTaskRecordOptions = Record<string, any>;
        export type getTaskRecordResponse =
          defs.vendorPortal.Response<defs.vendorPortal.CommonReturn>;
        export type request = (
          params: getTaskRecordParam,
          options?: getTaskRecordOptions,
        ) => getTaskRecordResponse;
      }

      /**
       * search
       * /api/wkf/procdef/search
       */
      export namespace search {
        export type searchParam = {
          /** beginTime */
          beginTime?: string;

          /** createTime */
          createTime?: string;

          /** endTime */
          endTime?: string;

          /** isEnd */
          isEnd?: number;

          /** modelType */
          modelType?: number;

          /** name */
          name?: string;

          /** pageNumber */
          pageNumber?: number;

          /** pageSize */
          pageSize?: number;

          /** status */
          status?: number;

          /** type */
          type: number;
        };
        export type searchOptions = Record<string, any>;
        export type searchResponse = defs.vendorPortal.Response<
          ObjectMap<string, ObjectMap>
        >;
        export type request = (
          params: searchParam,
          options?: searchOptions,
        ) => searchResponse;
      }
    }
  }
}
