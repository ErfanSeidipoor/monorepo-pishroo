import { FC, useState } from "react";
import cls from "classnames";
// import "../tailwind-imports.css";

export type IAccordion = {
  summary: string;
  description: string;
};

export const Accordion: FC<IAccordion> = ({ summary, description }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div
      className={cls(
        "p-1",
        "bg-white",
        "rounded-lg",
        "shadow",
        "shadow-gray-600/10",
        "hover:shadow-gray-600/30",
        "overflow-hidden",
        "cursor-pointer",
        "transition-all"
      )}
      onClick={() => setIsCollapsed(!isCollapsed)}
    >
      <h3 className="p-2"> - {summary}</h3>
      <div
        className={cls(
          "px-3",
          "text-xs",
          "leading-5",
          "overflow-hidden",
          "transition-all",
          isCollapsed
            ? ["max-h-0", "opacity-25", "py-0"]
            : ["max-h-max", "opacity-100", "py-2"]
        )}
      >
        {description}
      </div>
    </div>
  );
};

export default Accordion;
