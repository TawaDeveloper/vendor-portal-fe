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
