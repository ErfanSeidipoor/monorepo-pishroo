import { FC } from "react";
import cls from "classnames";

export type IPartner = {
  title?: string;
  image?: string;
};

export const Partner: FC<IPartner> = ({ title = "", image = "" }) => {
  return (
    <div
      className={cls(
        "flex",
        "shadow",
        "shadow-gray-600/30",
        "rounded-lg",
        "h-14",
        "py-1",
        "px-3",
        "flex",
        "flex-row",
        "justify-start",
        "items-center",
        "inline-flex"
      )}
    >
      <img src={image} className={cls("w-10", "h-10", "md:mb-0")} alt={title} />
      <h3 className={cls("mr-3", "text-lg", "text-gray-600")}>{title}</h3>
    </div>
  );
};

export default Partner;
