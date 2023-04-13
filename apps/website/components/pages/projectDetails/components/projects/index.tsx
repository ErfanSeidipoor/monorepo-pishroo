import cls from "classnames";
import { FC } from "react";

import TEXTS from "@pishroo/texts";

import { SimilarProjects } from "@website/components/similar-projects";
import { GetProjectByIdPublicProjectPageQuery } from "@website/gql/graphql";

export const Projects: FC<{
  data: GetProjectByIdPublicProjectPageQuery;
}> = ({ data }) => {
  return (
    <div className={cls("my-8")}>
      <h1 className={cls("text-xl", "text-center", "mb-6", "text-right")}>
        {TEXTS.WEBSITE_PAGE__PROJECT_DETAILS__PROJECTS__TITLE}
      </h1>
      <SimilarProjects />
    </div>
  );
};
