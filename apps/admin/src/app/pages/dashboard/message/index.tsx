import { FC } from "react";
import { Outlet } from "react-router-dom";

export const DashboardMessageProvider: FC = () => {
  return <Outlet />;
};

export default DashboardMessageProvider;
