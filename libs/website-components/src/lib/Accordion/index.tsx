import { FC, useState } from "react";
import cls from "classnames";
import "../tailwind-imports.css";
import { border } from "@mui/system";

export type IAccordion = {
  summary: string;
  description: string;
};

export const Accordion: FC<IAccordion> = ({ summary, description }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={cls(
        "p-1",
        "rounded-lg",
        "shadow",
        "shadow-gray-600/10",
        "shadow-gray-600/10",
        "overflow-hidden",
        "cursor-pointer"
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
