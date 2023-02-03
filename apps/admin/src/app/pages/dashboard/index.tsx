import { FC } from "react";
import { Outlet } from "react-router-dom";

import useGuard from "./useGuard";

export const Dashbaord: FC = () => {
  useGuard();

  return <Outlet />;
};

export default Dashbaord;
