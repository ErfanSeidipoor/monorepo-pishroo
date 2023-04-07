import { FC } from "react";
import cls from "classnames";

export type IReview = {
  reviewer: string;
  image: string;
  text: string;
};

export const Review: FC<IReview> = ({
  reviewer = "",
  text = "",
  image = "",
}) => {
  const renderImage = () => {
    return (
      <div className={cls("bg-gray-200", "rounded-full", "w-11", "h-11")}>
        <img
          className={cls("block", "rounded-full")}
          src={image}
          alt={reviewer}
        />
      </div>
    );
  };

  const renderInformations = () => {
    return (
      <div className={cls("flex-1", "mr-2.5")}>
        <h3
          className={cls(
            "text-sm",
            "h-11",
            "flex",
            "justify-srat",
            "items-center",
            "text-gray-500",
            "border-b",
            "border-gray-200"
          )}
        >
          {reviewer}
        </h3>
        <p
          className={cls(
            "text-sm",
            "flex",
            "py-2",
            "justify-srat",
            "items-center",
            "text-gray-800"
          )}
        >
          {text}
        </p>
      </div>
    );
  };

  return (
    <div className={cls("p-1", "flex", "flex-row")}>
      {renderImage()}
      {renderInformations()}
    </div>
  );
};

export default Review;
