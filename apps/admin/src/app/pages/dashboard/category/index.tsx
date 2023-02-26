import { FC } from "react";
import { Outlet } from "react-router-dom";

export const DashboardCategoryProvider: FC = () => {
  return <Outlet />;
};

export default DashboardCategoryProvider;
