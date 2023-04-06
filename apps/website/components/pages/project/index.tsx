import { FC } from "react";

import { Searchbox, Projects } from "./components";

export const ProjectPage: FC = () => {
  return (
    <>
      <Searchbox />
      <Projects />
    </>
  );
};
