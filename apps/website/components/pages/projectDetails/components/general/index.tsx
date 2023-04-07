import { FC } from "react";
import cls from "classnames";

import { ImageSlider, ContactCard } from "@pishroo/website-components";

import TEXTS from "@pishroo/texts";
import assets from "./assets";

export const General: FC = () => {
  const renderImages = () => {
    return (
      <div className={cls("w-full", "md:flex-grow", "mb-4")}>
        <h1 className={cls("text-4xl", "m-3", "text-center", "lg:text-right")}>
          {"Tasty Rubber Gloves"}
        </h1>
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
