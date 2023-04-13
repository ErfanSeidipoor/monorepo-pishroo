import { FC } from "react";
import cls from "classnames";

import { Filter } from "@pishroo/website-components";
import TEXTS from "@pishroo/texts";

import { SimilarProducts } from "@website/components/similar-products";

import useData from "./useDate";

export const Products: FC = () => {
  const { catergories, onClickCategory } = useData();

  const renderFilters = () => {
    if (catergories.length)
      return (
        <div className={cls("mb-6", "max-w-4xl", "m-auto")}>
          <Filter
            items={catergories.map(({ name }) => ({
              label: name,
              selected: false,
              onClick: () => onClickCategory({ categoryIdentity: name }),
            }))}
          />
        </div>
      );
  };

  return (
    <div className={cls("my-8")}>
      <h1 className={cls("text-xl", "text-center", "mb-6")}>
        {TEXTS.WEBSITE_PAGE__HOME__PRODUCTS__TITLE}
      </h1>
      {renderFilters()}
      <SimilarProducts />
    </div>
  );
};
