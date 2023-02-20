/* --------------------------------- public --------------------------------- */

export const PUBLIC_ROUTE = "";
export const PUBLIC_LOGIN_ROUTE = PUBLIC_ROUTE + "/login";
export const PUBLIC_NOT_FOUND_ROUTE = PUBLIC_ROUTE + "/404";

/* -------------------------------- dashboard ------------------------------- */

export const DASHBOARD_ROUTE = "/dashboard";

/* --------------------------------- product -------------------------------- */

export const DASHBOARD_PRODUCT_ROUTE = DASHBOARD_ROUTE + "/product";
export const DASHBOARD_PRODUCT_NEW_PRODUCT_ROUTE =
  DASHBOARD_PRODUCT_ROUTE + "/new-product";
export const DASHBOARD_PRODUCT_DETAILS =
  DASHBOARD_PRODUCT_ROUTE + "/:productId";

/* ---------------------------------- user ---------------------------------- */

export const DASHBOARD_USER_ROUTE = DASHBOARD_ROUTE + "/user";
export const DASHBOARD_USER_NEW_USER_ROUTE = DASHBOARD_USER_ROUTE + "/new-user";
export const DASHBOARD_USER_DETAILS = DASHBOARD_USER_ROUTE + "/:userId";

/* -------------------------------- province -------------------------------- */

export const DASHBOARD_PROVINCE_ROUTE = DASHBOARD_ROUTE + "/province";
export const DASHBOARD_PROVINCE_NEW_PROVINCE_ROUTE =
  DASHBOARD_PROVINCE_ROUTE + "/new-province";
export const DASHBOARD_PROVINCE_DETAILS =
  DASHBOARD_PROVINCE_ROUTE + "/:provinceId";

/* ---------------------------------- city ---------------------------------- */

export const DASHBOARD_CITY_ROUTE = DASHBOARD_ROUTE + "/city";
export const DASHBOARD_CITY_NEW_CITY_ROUTE = DASHBOARD_CITY_ROUTE + "/new-city";
export const DASHBOARD_CITY_DETAILS = DASHBOARD_CITY_ROUTE + "/:cityId";

/* --------------------------------- product -------------------------------- */

export const DASHBOARD_CUSTOMER_ROUTE = DASHBOARD_ROUTE + "/customer";
export const DASHBOARD_CUSTOMER_NEW_CUSTOMER_ROUTE =
  DASHBOARD_CUSTOMER_ROUTE + "/new-customer";
export const DASHBOARD_CUSTOMER_DETAILS =
  DASHBOARD_CUSTOMER_ROUTE + "/:customerId";
