import { FC } from "react";
import cls from "classnames";

import { Certificate } from "@pishroo/website-components";
import TEXTS from "@pishroo/texts";

import assets from "./assets";

export const Certificates: FC = () => {
  return (
    <div id="certificates" className={cls("my-8")}>
      <h1 className={cls("text-xl", "text-center", "mb-6")}>
        {TEXTS.WEBSITE_PAGE__HOME__CERTIFICATES__TITLE}
      </h1>
      <div
        className={cls(
          "mb-6",
          "m-auto",
          "flex",
          "items-center",
          "justify-center",
          "flex-wrap"
        )}
      >
        {[
          {
            image: assets.images.certificates_1.src,
            title: assets.images.certificates_1.alt,
          },
          {
            image: assets.images.certificates_2.src,
            title: assets.images.certificates_2.alt,
          },
          {
            image: assets.images.certificates_3.src,
            title: assets.images.certificates_3.alt,
          },
          {
            image: assets.images.certificates_4.src,
            title: assets.images.certificates_4.alt,
          },
        ].map(({ title, image }) => (
          <div key={title} className={cls("my-1", "mx-2")}>
            <Certificate title={title} image={image} />
          </div>
        ))}
      </div>
    </div>
  );
};
