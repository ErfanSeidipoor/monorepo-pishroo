import { FC } from "react";
import { Outlet } from "react-router-dom";

export const DashboardTransporterProvider: FC = () => {
  return <Outlet />;
};

export default DashboardTransporterProvider;
