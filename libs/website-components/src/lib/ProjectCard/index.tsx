import { FC } from "react";
import cls from "classnames";

import "../tailwind-imports.css";

export type IProjectCard = {
  image?: string;
  name?: string;
  description?: string;
  onClick?: () => void;
};

export const ProjectCard: FC<IProjectCard> = ({
  name = "",
  image = "",
  description = "",
  onClick = () => ({}),
}) => {
  const renderImage = () => {
    return (
      <div className={cls("bg-gray-200", "w-full", "h-48")}>
        <img
          className={cls("block", "w-full", "h-full", "object-cover")}
          src={image}
          alt={name}
        />
      </div>
    );
  };

  const renderInformations = () => {
    return (
      <div
        className={cls(
          "m-2",
          "flex",
          "flex-col",
          "justify-center",
          "items-center",
          "flex-col",
          "h-32"
        )}
      >
        <h3 className={cls("mb-2", "text-lg", "text-center")}>{name}</h3>
        <h5
          className={cls(
            "p",
            "text-sm",
            "font-normal",
            "text-center",
            "text-gray-500"
          )}
        >
          {description}
        </h5>
      </div>
    );
  };

  return (
    <div
      className={cls(
        "border",
        "shadow",
        "shadow-gray-600/30",
        "rounded-3xl",
        "flex",
        "flex-col",
        "justify-items-center",
        "items-center",
        "overflow-hidden",
        "md:max-w-xs",
        "cursor-pointer",
        "hover:shadow-gray-800/70",
        "transition-all"
      )}
      onClick={onClick}
    >
      {renderImage()}
      {renderInformations()}
    </div>
  );
};

export default ProjectCard;
