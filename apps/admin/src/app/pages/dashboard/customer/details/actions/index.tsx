import { FC } from "react";
import { Outlet } from "react-router-dom";

export const DashboardCustomerActionProvider: FC = () => {
  return <Outlet />;
};

export default DashboardCustomerActionProvider;
