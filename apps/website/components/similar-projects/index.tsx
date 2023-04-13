import cls from "classnames";
import { FC } from "react";

import { ProductCard, Slider } from "@pishroo/website-components";

import useData from "./useData";
import assets from "./assets";

export const SimilarProjects: FC = () => {
  const { projects, onClickProject } = useData();

  if (projects.length)
    return (
      <Slider
        items={projects.map(({ slug, name, fileUses }) => ({
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
                onClick={() => onClickProject(slug)}
              />
            </div>
          ),
          key: name,
          width: 266,
        }))}
      />
    );
};
