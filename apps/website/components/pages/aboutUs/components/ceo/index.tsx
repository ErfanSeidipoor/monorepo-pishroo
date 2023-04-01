import { FC } from "react";
import cls from "classnames";
import Image from "next/image";

import TEXTS from "@pishroo/texts";

import assets from "./assets";

export const CEO: FC = () => {
  return (
    <div className={cls("mt-16", "flex-col", "flex")}>
      <div className={cls("m-auto")}>
        <Image src={assets.images.ceo.src} alt="" width={216} height={216} />
      </div>
      <h1 className={cls("text-xl", "text-center")}>
        {TEXTS.WEBSITE_PAGE__ABOUT_US__CEO__TITLE}
      </h1>
      <h1 className={cls("mt-4", "text-xl", "text-center")}>
        {TEXTS.WEBSITE_PAGE__ABOUT_US__CEO__NAME}
      </h1>
      <p
        className={cls(
          "text-lg",
          "text-gray-500",
          "mt-1",
          "text-center",
          "max-w-2xl",
          "self-center"
        )}
      >
        {TEXTS.WEBSITE_PAGE__ABOUT_US__CEO__DESCRIPTION}
      </p>
    </div>
  );
};
