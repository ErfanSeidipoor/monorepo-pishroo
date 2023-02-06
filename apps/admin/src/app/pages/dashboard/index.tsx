import { FC } from "react";
import { Outlet } from "react-router-dom";

import Layout from "@admin/layouts/dashboard";

import useGuard from "./useGuard";

export const Dashbaord: FC = () => {
  useGuard();

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default Dashbaord;
