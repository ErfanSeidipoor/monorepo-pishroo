import { FC } from "react";
import { useRouter } from "next/router";
import cls from "classnames";

import { url } from "@pishroo/utils";
import { ProductCard, Pagination } from "@pishroo/website-components";

import { PROJECT_DETAILS_ROUTE } from "@website/constants";

import useData from "./useDate";
import assets from "./assets";

export const Projects: FC = () => {
  const router = useRouter();

  const { projects, loading, pageInfo, onPageSelect } = useData();

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
        {projects.map(({ id, name, slug, fileUses }) => (
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
                  url.generate(PROJECT_DETAILS_ROUTE, {
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
      {loading ? renderLoading() : renderItems()}
      {renderPagination()}
    </div>
  );
};
