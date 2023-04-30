import { FC } from "react";

import Details from "./components/details";
import useData from "./useDate";

export const CustomerUpdatePage: FC = () => {
  useData();

  return <Details />;
};

export default CustomerUpdatePage;
