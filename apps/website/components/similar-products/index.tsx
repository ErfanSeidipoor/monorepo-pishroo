import cls from "classnames";
import { FC } from "react";

import { ProductCard, Slider } from "@pishroo/website-components";

import useData from "./useData";
import assets from "./assets";

export const SimilarProducts: FC = () => {
  const { products, onClickProduct } = useData();

  if (products.length)
    return (
      <Slider
        items={products.map(({ slug, name, fileUses }) => ({
          node: (
            <div key={name} className={cls("my-1", "mr-3")}>
              <ProductCard
                name={name}
                image={
                  (fileUses &&
                    fileUses.length &&
                    process.env["NX_BACK_URL"] +
                      "/api/file/" +
                      fileUses[0].file.filename) ||
                  assets.images.placeholder.src
                }
                responsive={false}
                onClick={() => onClickProduct(slug)}
              />
            </div>
          ),
          key: name,
          width: 266,
        }))}
      />
    );
};
