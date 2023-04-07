import { FC } from "react";
import cls from "classnames";

import TEXTS from "@pishroo/texts";

import { NotFoundIcon } from "./icons";

export const NotFoundPage: FC = () => {
  return (
    <div className={cls("flex", "flex-col", "justify-center", "items-center")}>
      <div
        className={cls(
          "flex-grow",
          "flex",
          "justify-center",
          "items-center",
          "h-96"
        )}
      >
        <NotFoundIcon />
      </div>
      <h3
        className={cls(
          "text-center",
          "text-2xl",
          "mt-4",
          "flex-grow",
          "text-primary"
        )}
      >
        {TEXTS.WEBSITE_PAGE__NOT_FOUND__MAIN_TITLE}
      </h3>
    </div>
  );
};
