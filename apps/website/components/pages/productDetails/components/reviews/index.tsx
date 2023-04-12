import cls from "classnames";
import { FC } from "react";

import { Review } from "@pishroo/website-components";
import TEXTS from "@pishroo/texts";

import { GetProductByIdPublicProductPageQuery } from "@website/gql/graphql";

import assets from "./assets";

export const Reviews: FC<{
  data: GetProductByIdPublicProductPageQuery;
}> = ({
  data: {
    getProductByIdPublic: { productReviews },
  },
}) => {
  return (
    <div className={cls("mb-4")}>
      <h3 className={cls("text-lg", "mt-5")}>
        {TEXTS.WEBSITE_PAGE__PRODUCT_DETAILS__REVIEWS__TITLE}
      </h3>
      <div>
        {productReviews.map(({ id, reviewer, text, fileUses }) => (
          <div key={id}>
            <Review
              image={
                (fileUses &&
                  fileUses.length &&
                  process.env["NX_BACK_URL"] +
                    "/api/file/" +
                    fileUses[0].file.filename) ||
                assets.images.placeholder.src
              }
              reviewer={reviewer}
              text={text}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
