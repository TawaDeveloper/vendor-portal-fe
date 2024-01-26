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

      /** userIds */
      userIds?: string;
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
  }
}

declare namespace API {
  export namespace vendorPortal {
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
    }
  }
}
