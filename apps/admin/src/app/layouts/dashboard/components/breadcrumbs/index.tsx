import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { Stack } from "@mui/material";

import { useDashboardLayout } from "@admin/hooks/useDashboardLayout";
import { Breadcrumbs } from "@pishroo/admin-components";

const DashboardBreadcrumbs: FC = () => {
  const {
    config: { breadcrumbs, pageName },
  } = useDashboardLayout();
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      mb={3}
    >
      <Helmet>
        <title> {pageName} </title>
      </Helmet>
      <Breadcrumbs {...breadcrumbs} />
    </Stack>
  );
};

export default DashboardBreadcrumbs;
