import { FC } from "react";
import { Outlet } from "react-router-dom";

export const Public: FC = () => {
    return  (
      <Outlet />
    )
};

export default Public