import { FC } from "react";
import cls from "classnames";

import { SaleExpert } from "@pishroo/website-components";
import TEXTS from "@pishroo/texts";
import { useQuery } from "@apollo/client";

import {
  GetUsersPublicQuery,
  GetUsersPublicQueryVariables,
} from "@website/gql/graphql";

import { QUERY_GET_USERS_PUBLIC } from "./gql";
import assets from "./assets";

export const SaleExperts: FC = () => {
  const { data, error } = useQuery<
    GetUsersPublicQuery,
    GetUsersPublicQueryVariables
  >(QUERY_GET_USERS_PUBLIC, {
    variables: {
      getUsersPublicArgs: {},
      paginationArgs: {},
    },
  });

  const renderItems = () => {
    if (error) return "";

    return data.getUsersPublic.edges.map(
      ({ id, email, phone, firstName, lastName, provinceUsers, fileUses }) => (
        <div key={id} className={cls("my-4", "relative", "z-10")}>
          <SaleExpert
            email={email}
            phone={phone}
            name={firstName + " " + lastName}
            provinces={provinceUsers.map(
              (provinceUser) => provinceUser.province.name
            )}
            image={
              (fileUses &&
                fileUses.length &&
                process.env["NX_BACK_URL"] +
                  "/api/file/" +
                  fileUses[0].file.filename) ||
              assets.images.avatar.src
            }
          />
        </div>
      )
    );
  };

  return (
    <div className={cls("my-8")}>
      <h1 className={cls("text-xl")}>
        {TEXTS.WEBSITE_PAGE__CONTACT_US__SALEEXPERTS__TITLE}
      </h1>
      {renderItems()}
    </div>
  );
};
