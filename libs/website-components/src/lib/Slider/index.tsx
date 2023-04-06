import { FC, ReactNode } from "react";
import cls from "classnames";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { LeftIcon, RightIcon } from "./icons";

export type ISlider = {
  items: { key: string; node: ReactNode; width: number }[];
};

export const Slider: FC<ISlider> = ({ items }) => {
  return (
    <div className={cls("w-full", "px-8")}>
      <AliceCarousel
        autoWidth
        mouseTracking
        touchTracking
        disableDotsControls
        renderPrevButton={({ isDisabled }) => (
          <button
            className={cls(
              "flex",
              "justify-center",
              "items-center",
              "absolute",
              isDisabled && "opacity-5",
              "bg-white",
              "rounded-lg"
            )}
            style={{
              height: "30px",
              width: "30px",
              top: "calc( 50% - 15px )",
              left: "-15px",
            }}
          >
            <LeftIcon />
          </button>
        )}
        renderNextButton={({ isDisabled }) => (
          <button
            className={cls(
              "flex",
              "justify-center",
              "items-center",

              "absolute",
              isDisabled && "opacity-5",
              "bg-white",
              "rounded-lg"
            )}
            style={{
              height: "30px",
              width: "30px",
              top: "calc( 50% - 20px )",
              right: "-15px",
            }}
          >
            <RightIcon />
          </button>
        )}
        items={items.map(({ key, width, node }, index) => (
          <div key={key} style={{ width }} className={cls("item")}>
            {node}
          </div>
        ))}
      />
    </div>
  );
};

export default Slider;
