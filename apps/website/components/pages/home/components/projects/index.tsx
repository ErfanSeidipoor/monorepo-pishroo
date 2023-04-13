import TEXTS from "@pishroo/texts";
import cls from "classnames";
import { FC } from "react";

import { SimilarProjects } from "@website/components/similar-projects";

export const Projects: FC = () => {
  return (
    <div className={cls("my-8")}>
      <h1 className={cls("text-xl", "text-center", "mb-6")}>
        {TEXTS.WEBSITE_PAGE__HOME__PROJECTS__TITLE}
      </h1>
      <SimilarProjects />
    </div>
  );
};
