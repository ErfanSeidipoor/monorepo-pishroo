import { useEffect } from "react";

import TEXTS from "@pishroo/texts";

import { DASHBOARD_ROUTE, DASHBOARD_TRANSPORTER_ROUTE } from "@admin/constants";
import { useDashboardLayout } from "@admin/hooks";

const useData = () => {
  const { setConfig } = useDashboardLayout();

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_TRANSPORTER__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_TRANSPORTER__TRANSPORTER,
            href: DASHBOARD_TRANSPORTER_ROUTE,
          },
          { label: TEXTS.PAGE_TRANSPORTER_UPDATE__UPDATE_TRANSPORTER },
        ],
      },
    });
  }, [setConfig]);
};

export default useData;
