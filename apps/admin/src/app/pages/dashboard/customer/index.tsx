import { FC } from "react";
import { Outlet } from "react-router-dom";

export const DashboardCustomerProvider: FC = () => {
  return <Outlet />;
};

export default DashboardCustomerProvider;
