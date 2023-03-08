import { FC } from "react";
import cls from "classnames";

import "../tailwind-imports.css";

export type IFilter = {
  items: { label: string; onClick: () => void; selected: boolean }[];
};

export const Filter: FC<IFilter> = ({ items = [] }) => {
  return (
    <div
      className={cls(
        "overflow-auto",
        "flex",
        "bg-gray-300",
        "rounded-md",
        "p-1",
        "flex-nowrap"
      )}
    >
      {items.map(({ label, onClick, selected }) => (
        <button
          onClick={onClick}
          className={cls(
            "border-transparent",
            "rounded-md",
            "flex-grow",
            "border-2",
            "py-0.5",
            "px-4",
            "ml-1",
            "btn",
            selected ? "text-white" : "text-black",
            selected ? "bg-primary" : "bg-gray-300"
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Filter;
