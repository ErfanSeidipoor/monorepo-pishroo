import { FC } from "react";
import { Outlet } from "react-router-dom";

export const DashboardCityProvider: FC = () => {
  return <Outlet />;
};

export default DashboardCityProvider;
