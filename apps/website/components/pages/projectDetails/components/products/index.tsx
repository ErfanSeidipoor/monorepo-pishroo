import cls from "classnames";
import { FC } from "react";

import TEXTS from "@pishroo/texts";

import { SimilarProducts } from "@website/components/similar-products";
import { GetProjectByIdPublicProjectPageQuery } from "@website/gql/graphql";

export const Products: FC<{
  data: GetProjectByIdPublicProjectPageQuery;
}> = ({ data }) => {
  return (
    <div className={cls("my-8")}>
      <h1 className={cls("text-xl", "text-center", "mb-6", "text-right")}>
        {TEXTS.WEBSITE_PAGE__PROJECT_DETAILS__PRODUCTS__TITLE}
      </h1>
      <SimilarProducts />
    </div>
  );
};
