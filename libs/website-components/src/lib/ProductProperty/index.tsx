import { FC } from "react";
import cls from "classnames";

export type IProductProperty = {
  title?: string;
  value?: string;
};

export const ProductProperty: FC<IProductProperty> = ({
  title = "",
  value = "",
}) => {
  return (
    <div
      className={cls(
        "border-b-1",
        "inline-flex",
        "p-1",
        "justify-center",
        "items-center",
        "border-b",
        "border-b-secondary/30"
      )}
    >
      <div
        className={cls("rounded-sm", "bg-primary", "w-3", "h-3", "md:mb-0")}
      />
      <h3 className={cls("mx-2", "text-m", "text-gray-600")}>{title}</h3> :
      <h3 className={cls("mr-2", "text-m", "text-gray-900")}>{value}</h3>
    </div>
  );
};

export default ProductProperty;
