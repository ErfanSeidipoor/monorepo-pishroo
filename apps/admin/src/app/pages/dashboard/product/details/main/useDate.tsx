import { useEffect } from "react";

import TEXTS from "@pishroo/texts";

import { DASHBOARD_PRODUCT_ROUTE, DASHBOARD_ROUTE } from "@admin/constants";
import { useDashboardLayout } from "@admin/hooks";

const useData = () => {
  const { setConfig } = useDashboardLayout();

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_PRODUCT__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_PRODUCT__PRODUCT,
            href: DASHBOARD_PRODUCT_ROUTE,
          },
          { label: TEXTS.PAGE_PRODUCT_UPDATE__UPDATE_PRODUCT },
        ],
      },
    });
  }, [setConfig]);
};

export default useData;
