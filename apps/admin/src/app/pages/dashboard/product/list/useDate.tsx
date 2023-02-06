import { useDashboardLayout } from "@admin/hooks";
import { useEffect } from "react";

import TEXTS from "@pishroo/texts";
import { DASHBOARD_ROUTE } from "@admin/constants";

const useData = () => {
  const { setConfig } = useDashboardLayout();

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_PRODUCT__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD },
          { label: TEXTS.PAGE_PRODUCT__PRODUCT, href: DASHBOARD_ROUTE },
        ],
      },
    });
  }, [setConfig]);

  return {};
};

export default useData;
