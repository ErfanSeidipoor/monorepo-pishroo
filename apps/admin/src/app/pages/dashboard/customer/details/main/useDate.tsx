import { useEffect } from "react";

import TEXTS from "@pishroo/texts";

import { DASHBOARD_CUSTOMER_ROUTE, DASHBOARD_ROUTE } from "@admin/constants";
import { useDashboardLayout } from "@admin/hooks";

const useData = () => {
  const { setConfig } = useDashboardLayout();

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_CUSTOMER__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_CUSTOMER__CUSTOMER,
            href: DASHBOARD_CUSTOMER_ROUTE,
          },
          { label: TEXTS.PAGE_CUSTOMER_UPDATE__UPDATE_CUSTOMER },
        ],
      },
    });
  }, [setConfig]);
};

export default useData;
