import { FC } from "react";

import Details from "./components/details";
import useData from "./useDate";

export const TransporterUpdatePage: FC = () => {
  useData();

  return <Details />;
};

export default TransporterUpdatePage;
