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

    export class PermissionVO {
      /** 菜单列表 */
      menus?: Array<defs.vendorPortal.Menu>;

      /** 组件列表 */
      points?: Array<defs.vendorPortal.Point>;
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
  }
}
