import { lazy, Suspense } from "react";
import { useRoutes, useLocation } from "react-router-dom";

// routes
import {
  PUBLIC_ROUTE,
  PUBLIC_LOGIN_ROUTE,
  PUBLIC_NOT_FOUND_ROUTE,
  DASHBOARD_ROUTE,
  DASHBOARD_PRODUCT_ROUTE,
  DASHBOARD_PRODUCT_NEW_PRODUCT_ROUTE,
  DASHBOARD_PRODUCT_DETAILS,
  DASHBOARD_USER_ROUTE,
  DASHBOARD_USER_NEW_USER_ROUTE,
  DASHBOARD_USER_DETAILS,
  DASHBOARD_PROVINCE_ROUTE,
  DASHBOARD_PROVINCE_NEW_PROVINCE_ROUTE,
  DASHBOARD_PROVINCE_DETAILS,
  DASHBOARD_CITY_ROUTE,
  DASHBOARD_CITY_NEW_CITY_ROUTE,
  DASHBOARD_CITY_DETAILS,
  DASHBOARD_CUSTOMER_ROUTE,
  DASHBOARD_CUSTOMER_NEW_CUSTOMER_ROUTE,
  DASHBOARD_CUSTOMER_DETAILS,
} from "@admin/constants";

/* --------------------------------- Routes --------------------------------- */

export const Routes = () =>
  useRoutes([
    {
      path: PUBLIC_ROUTE,
      element: <PublicProvider />,
      children: [
        {
          path: PUBLIC_LOGIN_ROUTE,
          element: <PublicLoginPage />,
        },
        {
          path: PUBLIC_NOT_FOUND_ROUTE,
          element: <PublicNotFoundPage />,
        },
        {
          path: PUBLIC_ROUTE,
          element: <PublicPage />,
        },
      ],
    },
    {
      path: DASHBOARD_ROUTE,
      element: <DashboardProvider />,
      children: [
        {
          path: DASHBOARD_PRODUCT_ROUTE,
          element: <ProductProvider />,
          children: [
            {
              path: DASHBOARD_PRODUCT_NEW_PRODUCT_ROUTE,
              element: <ProductNewPage />,
            },
            {
              path: DASHBOARD_PRODUCT_DETAILS,
              element: <ProductUpdatePage />,
            },
            {
              path: DASHBOARD_PRODUCT_ROUTE,
              element: <ProductListPage />,
            },
          ],
        },
        {
          path: DASHBOARD_USER_ROUTE,
          element: <UserProvider />,
          children: [
            {
              path: DASHBOARD_USER_NEW_USER_ROUTE,
              element: <UserNewPage />,
            },
            {
              path: DASHBOARD_USER_DETAILS,
              element: <UserUpdatePage />,
            },
            {
              path: DASHBOARD_USER_ROUTE,
              element: <UserListPage />,
            },
          ],
        },
        {
          path: DASHBOARD_PROVINCE_ROUTE,
          element: <ProvinceProvider />,
          children: [
            {
              path: DASHBOARD_PROVINCE_NEW_PROVINCE_ROUTE,
              element: <ProvinceNewPage />,
            },
            {
              path: DASHBOARD_PROVINCE_DETAILS,
              element: <ProvinceUpdatePage />,
            },
            {
              path: DASHBOARD_PROVINCE_ROUTE,
              element: <ProvinceListPage />,
            },
          ],
        },
        {
          path: DASHBOARD_CITY_ROUTE,
          element: <CityProvider />,
          children: [
            {
              path: DASHBOARD_CITY_NEW_CITY_ROUTE,
              element: <CityNewPage />,
            },
            {
              path: DASHBOARD_CITY_DETAILS,
              element: <CityUpdatePage />,
            },
            {
              path: DASHBOARD_CITY_ROUTE,
              element: <CityListPage />,
            },
          ],
        },
        {
          path: DASHBOARD_CUSTOMER_ROUTE,
          element: <CustomerProvider />,
          children: [
            {
              path: DASHBOARD_CUSTOMER_NEW_CUSTOMER_ROUTE,
              element: <CustomerNewPage />,
            },
            {
              path: DASHBOARD_CUSTOMER_DETAILS,
              element: <CustomerUpdatePage />,
            },
            {
              path: DASHBOARD_CUSTOMER_ROUTE,
              element: <CustomerListPage />,
            },
          ],
        },
        {
          path: DASHBOARD_ROUTE,
          element: <DashboardPage />,
        },
      ],
    },
    {
      path: "/*",
      element: <PublicNotFoundPage />,
    },
  ]);

const Loadable = (Component: ReturnType<typeof lazy>) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes(DASHBOARD_ROUTE);

  return (
    <Suspense fallback={isDashboard ? "isDashboard Loading" : "loading"}>
      <Component {...props} />
    </Suspense>
  );
};

/* --------------------------------- public --------------------------------- */

const PublicProvider = Loadable(lazy(() => import("./public")));
const PublicPage = Loadable(lazy(() => import("./public/main")));
const PublicLoginPage = Loadable(lazy(() => import("./public/login")));
const PublicNotFoundPage = Loadable(lazy(() => import("./public/not-found")));

/* ------------------------------- dashboard -------------------------------- */

const DashboardProvider = Loadable(lazy(() => import("./dashboard")));
const DashboardPage = Loadable(lazy(() => import("./dashboard/main")));

/* ---------------------------- dashboard product --------------------------- */
const ProductProvider = Loadable(lazy(() => import("./dashboard/product")));
const ProductListPage = Loadable(
  lazy(() => import("./dashboard/product/list"))
);
const ProductNewPage = Loadable(
  lazy(() => import("./dashboard/product/new-product"))
);
const ProductUpdatePage = Loadable(
  lazy(() => import("./dashboard/product/update"))
);

/* ---------------------------- dashboard user --------------------------- */
const UserProvider = Loadable(lazy(() => import("./dashboard/user")));
const UserListPage = Loadable(lazy(() => import("./dashboard/user/list")));
const UserNewPage = Loadable(lazy(() => import("./dashboard/user/new-user")));
const UserUpdatePage = Loadable(lazy(() => import("./dashboard/user/update")));

/* -------------------------- dashboard province ------------------------- */
const ProvinceProvider = Loadable(lazy(() => import("./dashboard/province")));
const ProvinceListPage = Loadable(
  lazy(() => import("./dashboard/province/list"))
);
const ProvinceNewPage = Loadable(
  lazy(() => import("./dashboard/province/new-province"))
);
const ProvinceUpdatePage = Loadable(
  lazy(() => import("./dashboard/province/update"))
);

/* ----------------------------- dashboard city ----------------------------- */
const CityProvider = Loadable(lazy(() => import("./dashboard/city")));
const CityListPage = Loadable(lazy(() => import("./dashboard/city/list")));
const CityNewPage = Loadable(lazy(() => import("./dashboard/city/new-city")));
const CityUpdatePage = Loadable(lazy(() => import("./dashboard/city/update")));

/* --------------------------- dashboard customer --------------------------- */
const CustomerProvider = Loadable(lazy(() => import("./dashboard/customer")));
const CustomerListPage = Loadable(
  lazy(() => import("./dashboard/customer/list"))
);
const CustomerNewPage = Loadable(
  lazy(() => import("./dashboard/customer/new-customer"))
);
const CustomerUpdatePage = Loadable(
  lazy(() => import("./dashboard/customer/update"))
);
