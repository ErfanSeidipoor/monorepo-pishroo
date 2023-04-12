import { FC } from "react";
import cls from "classnames";

import {
  ImageSlider,
  ContactCard,
  Color,
  ProductProperty,
} from "@pishroo/website-components";

import TEXTS from "@pishroo/texts";

import { GetProductByIdPublicProductPageQuery } from "@website/gql/graphql";

import assets from "./assets";

export const General: FC<{
  data: GetProductByIdPublicProductPageQuery;
}> = ({
  data: {
    getProductByIdPublic: { fileUses, name, productColors, productProperties },
  },
}) => {
  const renderImages = () => {
    return (
      <div className={cls("w-full", "md:w-1/2", "lg:w-1/3", "mb-4")}>
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

  const renderDetails = () => {
    return (
      <div className={cls("flex-grow", "px-5", "mb-4")}>
        <h1 className={cls("text-4xl", "mt-3")}>{name}</h1>
        <h3 className={cls("text-lg", "mt-5")}>
          {TEXTS.WEBSITE_PAGE__PRODUCT_DETAILS__GENERAL__COLOR}
        </h3>
        <div>
          {productColors.map(({ color }) => (
            <Color key={color.id} value={"#" + color.value} />
          ))}
        </div>
        <h3 className={cls("text-lg", "mt-5")}>
          {TEXTS.WEBSITE_PAGE__PRODUCT_DETAILS__GENERAL__DETAILS}
        </h3>
        <div>
          {productProperties.slice(0, 6).map((productProperty) => (
            <div key={productProperty.id}>
              <ProductProperty
                title={productProperty.property.name}
                value={
                  productProperty.value + " " + productProperty.property.unit
                }
              />
            </div>
          ))}
        </div>
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
        "shadow"
      )}
    >
      {renderImages()}
      {renderDetails()}
      {renderContact()}
    </div>
  );
};
