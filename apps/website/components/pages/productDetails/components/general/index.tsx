import { FC } from "react";
import cls from "classnames";

import {
  ImageSlider,
  ContactCard,
  Color,
  ProductProperty,
} from "@pishroo/website-components";

import TEXTS from "@pishroo/texts";
import assets from "./assets";

export const General: FC = () => {
  const renderImages = () => {
    return (
      <div className={cls("w-full", "md:w-1/2", "lg:w-1/3", "mb-4")}>
        <ImageSlider
          items={[
            {
              src: "https://loremflickr.com/640/480/food",
              alt: "Gorgeous Plastic Chips",
            },
            {
              src: "https://loremflickr.com/640/480/animals",
              alt: "Electronic Bronze Car",
            },
            {
              src: "https://loremflickr.com/640/480/business",
              alt: "Tasty Wooden Table",
            },
            {
              src: "https://loremflickr.com/640/480/people",
              alt: "Unbranded Fresh Mouse",
            },
            {
              src: "https://loremflickr.com/640/480/city",
              alt: "Awesome Rubber Mouse",
            },
            {
              src: "https://loremflickr.com/640/480/fashion",
              alt: "Luxurious Steel Table",
            },
          ]}
        />
      </div>
    );
  };

  const renderDetails = () => {
    return (
      <div className={cls("flex-grow", "px-5", "mb-4")}>
        <h1 className={cls("text-4xl", "mt-3")}>{"Tasty Rubber Gloves"}</h1>
        <h3 className={cls("text-lg", "mt-5")}>
          {TEXTS.WEBSITE_PAGE__PRODUCT_DETAILS__GENERAL__COLOR}
        </h3>
        <div>
          <Color value="#050605" />
          <Color value="#B8BDC5" />
          <Color value="#D9D9D9" />
        </div>
        <h3 className={cls("text-lg", "mt-5")}>
          {TEXTS.WEBSITE_PAGE__PRODUCT_DETAILS__GENERAL__DETAILS}
        </h3>
        <div>
          <div>
            <ProductProperty title="Refined" value="Fresh" />
          </div>
          <div>
            <ProductProperty title="Recycled" value="Rubber" />
          </div>
          <div>
            <ProductProperty title="Electronic" value="Metal" />
          </div>
          <div>
            <ProductProperty title="Elegant" value="Fresh" />
          </div>
          <div>
            <ProductProperty title="Rustic" value="Bronze" />
          </div>
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
