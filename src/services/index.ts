import { order } from './order';
import { backoffice } from './backoffice';
import { account } from './account';
import { promotion } from './promotion';
import { product } from './product';
import { store } from './store';
import { search } from './search';
import { warehouse } from './warehouse';
import { message } from './message';
import { finance } from './finance';
import { bakery } from './bakery';
import { tawa } from './tawa';
import { vendorPortal } from './vendorPortal';
export const bakeryAPI = bakery;
export const orderAPI = order;
export const backofficeAPI = backoffice;
export const accountAPI = account;
export const promotionAPI = promotion;
export const productAPI = product;
export const storeAPI = store;
export const searchAPI = search;
export const warehouseAPI = warehouse;
export const messageAPI = message;
export const financeAPI = finance;
export const tawaAPI = tawa;
export const vendorPortalAPI = vendorPortal;
export default {
  order,
  backoffice,
  account,
  promotion,
  product,
  store,
  search,
  bakery,
  warehouse,
  message,
  finance,
  tawa,
  vendorPortal
};

