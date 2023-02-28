import { FC } from "react";
import { Outlet } from "react-router-dom";

export const DashboardProductPropertyProvider: FC = () => {
  return <Outlet />;
};

export default DashboardProductPropertyProvider;
