import * as internalPermissionInterface from './internalPermission';
import * as internalRoleInterface from './internalRole';
import * as internalUserInterface from './internalUser';
import * as vendorPermissionInterface from './vendorPermission';
import * as wkfModelInterface from './wkfModel';
import * as wkfProcdefInterface from './wkfProcdef';

export const vendorPortal = {
  internalPermission: internalPermissionInterface,
  internalRole: internalRoleInterface,
  internalUser: internalUserInterface,
  vendorPermission: vendorPermissionInterface,
  wkfModel: wkfModelInterface,
  wkfProcdef: wkfProcdefInterface,
};
