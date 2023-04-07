import { FC } from "react";
import cls from "classnames";

export type IColor = {
  value: string;
};

export const Color: FC<IColor> = ({ value }) => {
  return (
    <div
      className={cls(
        "rounded-full",
        "p-1",
        "w-8",
        "h-8",
        "inline-block",
        "m-1"
      )}
      style={{ backgroundColor: value }}
    />
  );
};

export default Color;
