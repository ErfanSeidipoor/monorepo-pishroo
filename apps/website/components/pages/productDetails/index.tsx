import { FC } from "react";

import {
  General,
  Products,
  Description,
  Properties,
  Reviews,
  Projects,
  More,
} from "./components";

export const ProductDetailsPage: FC = () => {
  return (
    <>
      <General />
      <Description />
      <Properties />
      <Reviews />
      <Projects />
      <Products />
      <More />
    </>
  );
};
