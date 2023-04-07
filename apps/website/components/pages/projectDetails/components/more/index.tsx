import cls from "classnames";
import Link from "next/link";
import { FC } from "react";

import { PROJECT_ROUTE } from "@website/constants";
import TEXTS from "@pishroo/texts";

export const More: FC = () => {
  return (
    <div className={cls("mb-4", "flex", "justify-center")}>
      <Link href={PROJECT_ROUTE} passHref>
        <button
          className={cls("bg-primary", "p-3", "text-white", "rounded-lg")}
        >
          {TEXTS.WEBSITE_PAGE__PROJECT_DETAILS__MORE__TITLE}
        </button>
      </Link>
    </div>
  );
};
