import { FC } from "react";
import { Outlet } from "react-router-dom";

export const DashboardProducerActionProvider: FC = () => {
  return <Outlet />;
};

export default DashboardProducerActionProvider;
