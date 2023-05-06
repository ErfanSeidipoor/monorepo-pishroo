import { FC } from "react";
import { Outlet } from "react-router-dom";

export const DashboardCallProvider: FC = () => {
  return <Outlet />;
};

export default DashboardCallProvider;
