import { FC } from "react";

import {
  General,
  Products,
  Description,
  Reviews,
  Projects,
  More,
} from "./components";

export const ProjectDetailsPage: FC = () => {
  return (
    <>
      <General />
      <Description />
      <Reviews />
      <Projects />
      <Products />
      <More />
    </>
  );
};
