import cls from "classnames";
import { FC } from "react";

import { ProductProperty } from "@pishroo/website-components";

import TEXTS from "@pishroo/texts";

export const Properties: FC = () => {
  return (
    <div className={cls("mb-4")}>
      <h3 className={cls("text-lg", "mt-5", "mb-2")}>
        {TEXTS.WEBSITE_PAGE__PRODUCT_DETAILS__PRPERTIES__TITLE}
      </h3>
      <div>
        <div>
          <ProductProperty title="Refined" value="Fresh" />
        </div>
        <div>
          <ProductProperty title="Recycled" value="Rubber" />
        </div>
        <div>
          <ProductProperty title="Electronic" value="Metal" />
        </div>
        <div>
          <ProductProperty title="Elegant" value="Fresh" />
        </div>
        <div>
          <ProductProperty title="Rustic" value="Bronze" />
        </div>
        <div>
          <ProductProperty title="Refined" value="Fresh" />
        </div>
        <div>
          <ProductProperty title="Recycled" value="Rubber" />
        </div>
        <div>
          <ProductProperty title="Electronic" value="Metal" />
        </div>
        <div>
          <ProductProperty title="Elegant" value="Fresh" />
        </div>
        <div>
          <ProductProperty title="Rustic" value="Bronze" />
        </div>
      </div>
    </div>
  );
};
