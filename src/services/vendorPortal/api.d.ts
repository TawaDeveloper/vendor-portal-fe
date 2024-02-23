type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace vendorPortal {
    export class CommonReturn {
      /** data */
      data?: object;

      /** errno */
      errno?: number;

      /** msg */
      msg?: string;
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
