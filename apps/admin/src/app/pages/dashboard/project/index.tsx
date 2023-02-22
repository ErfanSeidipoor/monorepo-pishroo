import { FC } from "react";
import { Outlet } from "react-router-dom";

export const DashboardProjectProvider: FC = () => {
  return <Outlet />;
};

export default DashboardProjectProvider;
