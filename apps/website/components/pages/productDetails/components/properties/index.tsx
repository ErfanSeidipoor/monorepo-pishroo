import cls from "classnames";
import { FC } from "react";

import { ProductProperty } from "@pishroo/website-components";
import TEXTS from "@pishroo/texts";

import { GetProductByIdPublicProductPageQuery } from "@website/gql/graphql";

export const Properties: FC<{
  data: GetProductByIdPublicProductPageQuery;
}> = ({
  data: {
    getProductByIdPublic: { productProperties },
  },
}) => {
  return (
    <div className={cls("mb-4")}>
      <h3 className={cls("text-lg", "mt-5", "mb-2")}>
        {TEXTS.WEBSITE_PAGE__PRODUCT_DETAILS__PRPERTIES__TITLE}
      </h3>
      <div>
        {productProperties.map((productProperty) => (
          <div key={productProperty.id}>
            <ProductProperty
              title={productProperty.property.name}
              value={
                productProperty.value + " " + productProperty.property.unit
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};
