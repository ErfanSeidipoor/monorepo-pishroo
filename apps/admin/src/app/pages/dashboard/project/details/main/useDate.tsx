import { useEffect } from "react";

import TEXTS from "@pishroo/texts";

import { DASHBOARD_PROJECT_ROUTE, DASHBOARD_ROUTE } from "@admin/constants";
import { useDashboardLayout } from "@admin/hooks";

const useData = () => {
  const { setConfig } = useDashboardLayout();

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_PROJECT__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_PROJECT__PROJECT,
            href: DASHBOARD_PROJECT_ROUTE,
          },
          { label: TEXTS.PAGE_PROJECT_UPDATE__UPDATE_PROJECT },
        ],
      },
    });
  }, [setConfig]);
};

export default useData;
