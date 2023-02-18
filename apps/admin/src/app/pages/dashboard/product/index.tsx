import { FC } from "react";
import { Outlet } from "react-router-dom";

export const DashboardProductProvider: FC = () => {
  return <Outlet />;
};

export default DashboardProductProvider;
