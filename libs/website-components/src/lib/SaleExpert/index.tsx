import { FC } from "react";
import cls from "classnames";

import { WhatsAppIcon, PhoneIcon, MailIcon } from "./icons";

export type ISaleExpert = {
  name: string;
  image: string;
  email: string;
  phone: string;
  provinces: string[];
};

export const SaleExpert: FC<ISaleExpert> = ({
  name = "",
  image = "",
  email = "",
  phone = "",
  provinces = [],
}) => {
  const renderImage = () => {
    return (
      <div
        className={cls(
          "bg-gray-200",
          "rounded-full",
          "w-24",
          "h-24",
          "ml-0",
          "md:ml-5",
          "mb-3",
          "md:mb-0"
        )}
      >
        <img
          className={cls("block", "rounded-full", "w-24", "h-24")}
          src={image}
          alt={name}
        />
      </div>
    );
  };

  const renderContanctInformation = () => {
    return (
      <div
        className={cls(
          "flex",
          "flex-col",
          "gap-1",
          "ml-0",
          "md:ml-5",
          "mb-3",
          "md:mb-0",
          "justify-items-center",
          "items-center"
        )}
      >
        <h3 className={cls("mb-1", "text-lg")}>{name}</h3>
        <h5 className={cls("mb-2", "text-sm", "font-normal")}>{phone}</h5>
        <div className={cls("flex")}>
          <a
            href={`whatsapp://send?abid:${phone}&text=Hi`}
            className={cls(
              "rounded-full",
              "p-2",
              "ml-2",
              "btn",
              "bg-green-500",
              "hover:bg-green-700"
            )}
          >
            {<WhatsAppIcon />}
          </a>
          <a
            href={`tel:${phone}`}
            className={cls(
              "rounded-full",
              "p-2",
              "ml-2",
              "btn",
              "bg-blue-500",
              "hover:bg-blue-700"
            )}
          >
            {<PhoneIcon />}
          </a>
          <a
            href={`mailto:${email}`}
            className={cls(
              "rounded-full",
              "p-2",
              "btn",
              "bg-orange-500",
              "hover:bg-orange-700"
            )}
          >
            {<MailIcon />}
          </a>
        </div>
      </div>
    );
  };

  const renderProvinces = () => {
    return (
      <div
        className={cls(
          "flex",
          "flex-grow",
          "flex-wrap",
          "max-w-none",
          "md:max-w-sm",
          "mr-0",
          "md:mr-auto",
          "flex-1",
          "justify-center",
          "gap-2"
        )}
      >
        {provinces.map((province) => (
          <p
            key={province}
            className={cls("border", "rounded-md", "px-2", "py-1", "mr-1")}
          >
            {province}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div
      className={cls(
        "border",
        "shadow",
        "shadow-gray-600/30",
        "rounded-lg",
        "border-t-8",
        "md:border-r-8",
        "md:border-t-0",
        "border-t-secondary",
        "md:border-r-secondary",
        "p-6",
        "flex",
        "flex-col",
        "justify-items-center",
        "items-center",
        "md:flex-row",
        "bg-white"
      )}
    >
      {renderImage()}
      {renderContanctInformation()}
      {renderProvinces()}
    </div>
  );
};

export default SaleExpert;
