import { FC } from "react";
import { useRouter } from "next/router";
import cls from "classnames";

import { ProductCard, Filter, Pagination } from "@pishroo/website-components";
import { url } from "@pishroo/utils";

import { PRODUCT_DETAILS_ROUTE } from "@website/constants";

import useData from "./useDate";
import assets from "./assets";

export const Products: FC = () => {
  const router = useRouter();
  const {
    products,
    loading,
    catergories,
    queryArgs,
    onSubmitFilter,
    pageInfo,
    onPageSelect,
  } = useData();

  const renderLoading = () => {
    return (
      <div
        className={cls("flex", "justify-center", "items-center", "flex-wrap")}
      >
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <div key={item} className={cls("my-4", "m-3", "w-full", "md:w-64")}>
            <ProductCard responsive loading />
          </div>
        ))}
      </div>
    );
  };

  const renderItems = () => {
    return (
      <div
        className={cls("flex", "justify-center", "items-center", "flex-wrap")}
      >
        {products.map(({ id, name, slug, fileUses }) => (
          <div key={id} className={cls("my-4", "m-3", "w-full", "md:w-64")}>
            <ProductCard
              name={name}
              responsive
              image={
                (fileUses &&
                  fileUses.length &&
                  process.env["NX_BACK_URL"] +
                    "/api/file/" +
                    fileUses[0].file.filename) ||
                assets.images.placeholder.src
              }
              onClick={() =>
                router.push(
                  url.generate(PRODUCT_DETAILS_ROUTE, {
                    slugProduct: slug,
                  })
                )
              }
            />
          </div>
        ))}
      </div>
    );
  };

  const renderFilters = () => {
    if (catergories.length)
      return (
        <div className={cls("mb-6", "max-w-4xl", "m-auto")}>
          <Filter
            items={catergories.map(({ name }) => ({
              label: name,
              selected: queryArgs && name === queryArgs.categoryIdentity,
              onClick: () => onSubmitFilter({ categoryIdentity: name }),
            }))}
          />
        </div>
      );
  };

  const renderPagination = () => {
    if (!loading)
      return (
        <div className={cls("inline-block", "flex", "justify-center", "my-4")}>
          <Pagination
            page={pageInfo?.currentPage}
            count={pageInfo?.totalPages}
            onClick={onPageSelect}
          />
        </div>
      );
  };

  return (
    <div className={cls("my-8")}>
      {renderFilters()}
      {loading ? renderLoading() : renderItems()}
      {renderPagination()}
    </div>
  );
};
