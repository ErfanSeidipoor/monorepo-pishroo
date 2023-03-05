import { FC } from "react";
import cls from "classnames";

import "../tailwind-imports.css";

export type ICertificate = {
  image?: string;
  title?: string;
  onClick?: () => void;
};

export const Certificate: FC<ICertificate> = ({
  image = "",
  title = "",
  onClick = () => ({}),
}) => {
  return (
    <div
      onClick={onClick}
      className={cls(
        "flex",
        "shadow",
        "shadow-gray-600/30",
        "hover:shadow-gray-600/60",
        "rounded-lg",
        "h-80",
        "w-60",
        "p-1",
        "flex",
        "flex-row",
        "justify-start",
        "items-center",
        "inline-flex",
        "cursor-pointer"
      )}
    >
      <img
        src={image}
        className={cls(
          "w-full",
          "h-full",
          "rounded-lg",
          "object-cover",
          "bg-gray-200"
        )}
        alt={title}
      />
    </div>
  );
};

export default Certificate;
