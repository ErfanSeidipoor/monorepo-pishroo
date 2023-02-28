import { FC } from "react";
import { Outlet } from "react-router-dom";

export const DashboardPropertyProvider: FC = () => {
  return <Outlet />;
};

export default DashboardPropertyProvider;
