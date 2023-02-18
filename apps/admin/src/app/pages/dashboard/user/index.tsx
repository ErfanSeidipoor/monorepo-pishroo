import { FC } from "react";
import { Outlet } from "react-router-dom";

export const DashboardUserProvider: FC = () => {
  return <Outlet />;
};

export default DashboardUserProvider;
