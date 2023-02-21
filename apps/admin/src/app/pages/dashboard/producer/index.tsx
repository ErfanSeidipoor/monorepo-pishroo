import { FC } from "react";
import { Outlet } from "react-router-dom";

export const DashboardProducerProvider: FC = () => {
  return <Outlet />;
};

export default DashboardProducerProvider;
