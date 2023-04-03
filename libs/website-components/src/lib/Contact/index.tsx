import { FC } from "react";
import cls from "classnames";

// import "../tailwind-imports.css";

export type IContact = {
  title?: string;
  value?: string;
  icon?: React.ReactNode;
};

export const Contact: FC<IContact> = ({ title = "", value = "", icon }) => {
  return (
    <div
      className={cls(
        "flex",
        "p-1",
        "flex-col",
        "justify-center",
        "items-center",
        "md:justify-start",
        "md:flex-row"
      )}
    >
      <div
        className={cls(
          "rounded-full",
          "p-2",
          "rounded-full",
          "bg-secondary",
          "mb-2",
          "md:mb-0",
          "flex",
          "items-center",
          "justify-center"
        )}
        style={{ width: "50px", height: "50px", minWidth: "50px" }}
      >
        {icon || ""}
      </div>
      <h3
        className={cls(
          "mb-1",
          "md:mb-0",
          "md:mr-2",
          "text-lg",
          "text-gray-500"
        )}
      >
        {title}
      </h3>
      <h3
        className={cls(
          "mb-1",
          "md:mb-0",
          "md:mr-2",
          "text-lg",
          "text-gray-900",
          "text-center"
        )}
      >
        {value}
      </h3>
    </div>
  );
};

export default Contact;
