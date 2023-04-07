import { FC } from "react";
import cls from "classnames";

import TEXTS from "@pishroo/texts";

export const Description: FC = () => {
  return (
    <div className={cls("mt-10")}>
      <h1 className={cls("text-xl", "text-right")}>
        {TEXTS.WEBSITE_PAGE__PROJECT_DETAILS__DESCRIPTIOIN__TITLE}
      </h1>
      <p className={cls("text-lg", "text-gray-500", "mt-1")}>
        {TEXTS.WEBSITE_PAGE__PROJECT_DETAILS__DESCRIPTIOIN__DESCRIPTION}
      </p>
    </div>
  );
};
