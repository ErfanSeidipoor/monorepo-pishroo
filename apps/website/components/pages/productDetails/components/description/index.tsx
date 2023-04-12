import { FC } from "react";
import cls from "classnames";

import TEXTS from "@pishroo/texts";

import { GetProductByIdPublicProductPageQuery } from "@website/gql/graphql";

export const Description: FC<{
  data: GetProductByIdPublicProductPageQuery;
}> = ({
  data: {
    getProductByIdPublic: { text },
  },
}) => {
  return (
    <div className={cls("mt-10")}>
      <h1 className={cls("text-xl", "text-right")}>
        {TEXTS.WEBSITE_PAGE__PRODUCT_DETAILS__DESCRIPTIOIN__TITLE}
      </h1>
      <p
        className={cls("text-lg", "text-gray-500", "mt-1")}
        style={{ whiteSpace: "break-spaces" }}
      >
        {text}
      </p>
    </div>
  );
};
