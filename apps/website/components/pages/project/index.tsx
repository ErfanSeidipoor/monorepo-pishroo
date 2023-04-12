import { FC } from "react";

import { Projects } from "./components";
import { ProjectSearchbox } from "@website/components/searchbox-project";

export const ProjectPage: FC = () => {
  return (
    <>
      <ProjectSearchbox />
      <Projects />
    </>
  );
};
