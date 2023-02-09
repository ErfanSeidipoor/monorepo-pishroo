import { FC } from "react";

import useDate from "./useDate";
export const NewProductPage: FC = () => {
  useDate();
  return (
    <div>
      <h1>This is Dashboard Prodcut Page -- new</h1>
    </div>
  );
};

export default NewProductPage;
