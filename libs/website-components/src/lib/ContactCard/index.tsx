import { FC } from "react";
import cls from "classnames";

import { PhoneIcon } from "./icons";
import "../tailwind-imports.css";

export type IContactCard = {
  image?: string;
  description?: string;
  phone?: string;
};

export const ContactCard: FC<IContactCard> = ({
  image = "",
  description = "Call for price and availability",
  phone = "981121",
}) => {
  const renderImage = () => {
    return (
      <div className={cls("w-52", "h-52")}>
        <img
          className={cls("w-full", "h-full")}
          src={image}
          alt={description}
        />
      </div>
    );
  };

  const renderName = () => {
    return (
      <div className={cls("m-2")}>
        <h3 className={cls("mb-2", "text-xl", "text-center")}>{description}</h3>
      </div>
    );
  };

  const renderPhone = () => {
    return (
      <div className={cls("m-2", "flex", "justify-center", "items-center")}>
        <h3 className={cls("mb-2", "text-xl", "text-center", "ml-2")}>
          {phone}
        </h3>
        <a href={`whatsapp://send?abid:${phone}&text=Hi`}>
          <PhoneIcon />
        </a>
      </div>
    );
  };

  return (
    <div
      className={cls(
        "bg-secondary",
        "text-white",
        "h-full",
        "rounded-l-3xl",
        "flex",
        "flex-col",
        "justify-between",
        "items-center",
        "p-8"
      )}
    >
      {renderImage()}
      {renderName()}
      {renderPhone()}
    </div>
  );
};

export default ContactCard;
