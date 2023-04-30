import { FC } from "react";

import Details from "./components/details";
import useData from "./useDate";

export const ProducerUpdatePage: FC = () => {
  useData();

  return <Details />;
};

export default ProducerUpdatePage;
