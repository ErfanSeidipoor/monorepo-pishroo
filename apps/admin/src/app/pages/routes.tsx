import { lazy, Suspense } from "react";
import { useRoutes, useLocation } from "react-router-dom";

// routes
import {
  PUBLIC_ROUTE,
  PUBLIC_LOGIN_ROUTE,
  PUBLIC_NOT_FOUND_ROUTE,
  DASHBOARD_ROUTE,
  DASHBOARD_PRODUCT_ROUTE,
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
          element: <ProductPage />,
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

/* --------------------------------- Public --------------------------------- */

const PublicProvider = Loadable(lazy(() => import("./public")));
const PublicPage = Loadable(lazy(() => import("./public/main")));
const PublicLoginPage = Loadable(lazy(() => import("./public/login")));
const PublicNotFoundPage = Loadable(lazy(() => import("./public/not-found")));

/* ------------------------------- Dashboard -------------------------------- */

const DashboardProvider = Loadable(lazy(() => import("./dashboard")));
const ProductPage = Loadable(lazy(() => import("./dashboard/product")));
const DashboardPage = Loadable(lazy(() => import("./dashboard/main")));
