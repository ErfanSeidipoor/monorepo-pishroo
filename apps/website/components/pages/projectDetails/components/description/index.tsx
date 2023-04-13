import { FC } from "react";
import cls from "classnames";

import { GetProjectByIdPublicProjectPageQuery } from "@website/gql/graphql";

import TEXTS from "@pishroo/texts";

export const Description: FC<{
  data: GetProjectByIdPublicProjectPageQuery;
}> = ({
  data: {
    getProjectByIdPublic: { description },
  },
}) => {
  return (
    <div className={cls("mt-10")}>
      <h1 className={cls("text-xl", "text-right")}>
        {TEXTS.WEBSITE_PAGE__PROJECT_DETAILS__DESCRIPTIOIN__TITLE}
      </h1>
      <p
        style={{ whiteSpace: "break-spaces" }}
        className={cls("text-lg", "text-gray-500", "mt-1")}
      >
        {description}
      </p>
    </div>
  );
};
