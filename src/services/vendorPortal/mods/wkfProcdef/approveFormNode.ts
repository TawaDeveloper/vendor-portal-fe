/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

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

export type approveFormNodeResponse = Promise<
  defs.vendorPortal.Response<boolean>
>;

/**
 * @desc approveFormNode
 */
export function request(
  params: approveFormNodeParam,
  options?: approveFormNodeOptions,
): approveFormNodeResponse {
  const host = getEnvHost();
  const url = host + '/vendorPortal/api/wkf/procdef/approveFormNode';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
