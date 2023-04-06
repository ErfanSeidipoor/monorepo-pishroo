import { FC } from "react";
import cls from "classnames";

import TEXTS from "@pishroo/texts";

import { ABOUT_US_ROUTE, PRODUCT_ROUTE } from "@website/constants";

import { EquipmentsIcon } from "./icons";

export const Main: FC = () => {
  return (
    <div className={cls("flex", "flex-col", "md:flex-row", "justify-between")}>
      <div className={cls("max-w-2xl", "mb-10", "md:ml-10")}>
        <h1 className={cls("text-xl", "mt-11")}>
          {TEXTS.WEBSITE_PAGE__HOME__DESCRIPTIOIN__TITLE}
        </h1>
        <p className={cls("text-lg", "text-gray-500", "mt-1", "mt-11")}>
          {TEXTS.WEBSITE_PAGE__HOME__DESCRIPTIOIN__DESCRIPTION}
        </p>
        <div className={cls("mt-11", "flex")}>
          <a
            className={cls(
              "btn",
              "inline-block",
              "bg-primary",
              "rounded-lg",
              "p-3",
              "text-white"
            )}
            href={PRODUCT_ROUTE}
          >
            {TEXTS.WEBSITE_PAGE__HOME__DESCRIPTIOIN__PRODUCT}
          </a>
          <a
            className={cls(
              "btn",
              "inline-block",
              "rounded-lg",
              "p-3",
              "mr-10",
              "text-primary"
            )}
            href={ABOUT_US_ROUTE}
          >
            {TEXTS.WEBSITE_PAGE__HOME__DESCRIPTIOIN__MORE}
          </a>
        </div>
      </div>
      <div
        className={cls(
          "bg-secondary",
          "py-10",
          "flex",
          "justify-center",
          "items-center",
          "lg:w-1/3",
          "md:w-80",
          "w-full"
        )}
        style={{ borderRadius: " 0% 0% 20% 20%" }}
      >
        <EquipmentsIcon />
      </div>
    </div>
  );
};
