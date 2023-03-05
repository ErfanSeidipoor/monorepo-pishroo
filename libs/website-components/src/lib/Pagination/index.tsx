import { FC, useEffect, useState } from "react";
import cls from "classnames";

import "../tailwind-imports.css";

export type IPagination = {
  count?: number;
  page?: number;
  disabled?: boolean;
  onClick?: (page: number) => void;
};

export const Pagination: FC<IPagination> = ({
  count = 1,
  page = 1,
  disabled = false,
  onClick = () => ({}),
}) => {
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    const items = [];
    for (let pageNumber = 1; pageNumber <= count; pageNumber++) {
      if (pageNumber === 1 || pageNumber === count) {
        items.push(pageNumber);
      } else if (Math.abs(page - pageNumber) <= 1) {
        items.push(pageNumber);
      } else if (items[items.length - 1] !== 0) {
        items.push(0);
      }
    }
    setItems(items);
  }, [page, count]);

  const renderItem = (item: number) => {
    return (
      <button
        className={cls(
          "btn",
          "px-4",
          "py-2",
          "mx-1",
          "min-w-3",
          "rounded-lg",
          item ? "bg-primary" : "bg-white",
          item ? "text-white" : "text-primary",
          item === page && "bg-secondary"
        )}
        disabled={item === page || item === 0 || disabled}
        onClick={() => onClick(item)}
      >
        {item || "..."}
      </button>
    );
  };

  const renderIncrease = () => {
    return (
      <button
        className={cls(
          "btn",
          "px-4",
          "py-2",
          "mx-1",
          "min-w-3",
          "rounded-lg",
          "bg-primary",
          "text-white"
        )}
        disabled={count === page || disabled}
        onClick={() => onClick(page + 1)}
      >
        {">"}
      </button>
    );
  };

  const renderDecrease = () => {
    return (
      <button
        className={cls(
          "btn",
          "px-4",
          "py-2",
          "mx-1",
          "min-w-3",
          "rounded-lg",
          "bg-primary",
          "text-white"
        )}
        disabled={1 === page || disabled}
        onClick={() => onClick(page - 1)}
      >
        {"<"}
      </button>
    );
  };
  return (
    <div className={cls("inline-flex")}>
      {renderDecrease()}
      {items.map(renderItem)}
      {renderIncrease()}
    </div>
  );
};

export default Pagination;
