import cls from "classnames";
import { FC } from "react";

import TEXTS from "@pishroo/texts";

import { GetProductByIdPublicProductPageQuery } from "@website/gql/graphql";

import { SimilarProjects } from "@website/components/similar-projects";

export const Projects: FC<{
  data: GetProductByIdPublicProductPageQuery;
}> = () => {
  return (
    <div className={cls("my-8")}>
      <h1 className={cls("text-xl", "text-center", "mb-6", "text-right")}>
        {TEXTS.WEBSITE_PAGE__PRODUCT_DETAILS__PROJECTS__TITLE}
      </h1>
      <SimilarProjects />
    </div>
  );
};
