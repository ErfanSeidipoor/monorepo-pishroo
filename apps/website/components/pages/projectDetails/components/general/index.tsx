import { FC } from "react";
import cls from "classnames";

import { ImageSlider, ContactCard } from "@pishroo/website-components";
import TEXTS from "@pishroo/texts";

import { GetProjectByIdPublicProjectPageQuery } from "@website/gql/graphql";

import assets from "./assets";

export const General: FC<{
  data: GetProjectByIdPublicProjectPageQuery;
}> = ({
  data: {
    getProjectByIdPublic: { name, fileUses },
  },
}) => {
  const renderImages = () => {
    return (
      <div className={cls("w-full", "md:flex-grow", "mb-4", "md:mr-4")}>
        <h1 className={cls("text-4xl", "m-3", "text-center", "lg:text-right")}>
          {name}
        </h1>
        <ImageSlider
          items={fileUses.map((fileUse) => ({
            src:
              process.env["NX_BACK_URL"] + "/api/file/" + fileUse.file.filename,
            alt: name,
          }))}
        />
      </div>
    );
  };

  const renderContact = () => {
    return (
      <div className={cls("ContactCard", "md:hidden", "lg:block")}>
        <ContactCard
          image={assets.images.contact.src}
          description={
            TEXTS.WEBSITE_PAGE__PRODUCT_DETAILS__GENERAL__CONTACT_DESCRIPTION
          }
          phone={TEXTS.WEBSITE_PAGE__PRODUCT_DETAILS__GENERAL__CONTACT_PHONE}
        />
      </div>
    );
  };

  return (
    <div
      className={cls(
        "flex",
        "flex-col",
        "md:flex-row",
        "rounded-xl",
        "bg-white",
        "shadow-t-sm"
      )}
    >
      {renderImages()}
      {renderContact()}
    </div>
  );
};
