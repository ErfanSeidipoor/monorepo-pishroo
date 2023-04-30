import { useEffect } from "react";

import TEXTS from "@pishroo/texts";

import { DASHBOARD_ROUTE, DASHBOARD_PRODUCER_ROUTE } from "@admin/constants";
import { useDashboardLayout } from "@admin/hooks";

const useData = () => {
  const { setConfig } = useDashboardLayout();

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_PRODUCER__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_PRODUCER__PRODUCER,
            href: DASHBOARD_PRODUCER_ROUTE,
          },
          { label: TEXTS.PAGE_PRODUCER_UPDATE__UPDATE_PRODUCER },
        ],
      },
    });
  }, [setConfig]);
};

export default useData;