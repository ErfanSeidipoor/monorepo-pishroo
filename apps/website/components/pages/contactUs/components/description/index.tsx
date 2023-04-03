import { FC } from "react";
import cls from "classnames";

import TEXTS from "@pishroo/texts";

export const Description: FC = () => {
  return (
    <div>
      <h1 className={cls("text-xl")}>
        {TEXTS.WEBSITE_PAGE__ABOUT_US__DESCRIPTIOIN__TITLE}
      </h1>
      <p className={cls("text-lg", "text-gray-500", "mt-1")}>
        {TEXTS.WEBSITE_PAGE__CONTACT_US__DESCRIPTIOIN__DESCRIPTION}
      </p>
    </div>
  );
};
