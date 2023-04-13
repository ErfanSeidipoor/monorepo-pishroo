import cls from "classnames";
import { FC, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { LeftIcon, RightIcon } from "./icons";

export type IImageSlider = {
  items: {
    src: string;
    alt: string;
  }[];
};

export const ImageSlider: FC<IImageSlider> = ({ items = [] }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showDialog, setShowDialog] = useState(false);

  const onClickLeft = () => {
    if (selectedIndex === items.length - 1) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const onClickRight = () => {
    if (selectedIndex === 0) {
      setSelectedIndex(items.length - 1);
    } else {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const renderSelectedImage = () => {
    return (
      <div
        className={cls(
          "items-center",
          "flex",
          "lg:justify-start",
          "justify-center",
          "pt-14",
          "pb-14"
        )}
      >
        {selectedIndex < items.length && (
          <img
            className={cls(
              "aspect-square",
              "block",
              "h-72",
              "object-cover",
              "rounded-xl",
              "cursor-pointer"
            )}
            src={items[selectedIndex].src}
            alt={items[selectedIndex].alt}
            onClick={() => setShowDialog(true)}
          />
        )}
      </div>
    );
  };

  const renderImages = () => {
    if (items.length === 0) return;

    return (
      <div className={cls("flex", "mt-1", "overflow-auto", "flex-nowrap")}>
        {items.map(({ src, alt }, index) => (
          <div
            key={alt}
            className={cls(
              "block",
              "border",
              "w-20",
              "h-20",
              "min-w-20",
              "object-cover",
              "border",
              "ml-3",
              "rounded-xl",
              "relative",
              "overflow-hidden",
              "flex-shrink-0",
              "box-border"
            )}
          >
            <Skeleton
              className={cls("absolute", "h-full", "w-full")}
              style={{ lineHeight: "unset" }}
            />
            <img
              src={src}
              alt={alt}
              onClick={() => {
                setSelectedIndex(index);
                setShowDialog(true);
              }}
              className={cls(
                "absolute",
                "h-full",
                "w-full",
                "object-cover",
                "top-0",
                "cursor-pointer",
                "z-10"
              )}
            />
          </div>
        ))}
      </div>
    );
  };

  const renderDialog = () => {
    if (!showDialog) return;
    return (
      <div
        className={cls(
          "fixed",
          "h-screen",
          "w-screen",
          "items-center",
          "flex",
          "flex-wrap",
          "justify-center",
          "z-50",
          "top-0",
          "left-0"
        )}
      >
        <div
          className={cls(
            "absolute",
            "h-screen",
            "w-screen",
            "items-center",
            "flex",
            "justify-center",
            "bg-slate-200",
            "opacity-95",
            "border",
            "border-red-700"
          )}
          onClick={() => setShowDialog(false)}
        />
        <button
          className={cls(
            "btn",
            "bg-primary",
            "w-10",
            "h-10",
            "rounded-full",
            "items-center",
            "flex",
            "justify-center",
            "z-40",
            "order-2",
            "md:order-1",
            "ml-4",
            selectedIndex === 0 && "opacity-0"
          )}
          onClick={onClickRight}
        >
          <RightIcon />
        </button>
        <img
          className={cls(
            "block",
            "object-cover",
            "rounded-xl",
            "cursor-pointer",
            "z-40",
            "mx-2",
            "md:w-1/2",
            "w-full",
            "order-1",
            "md:order-2"
          )}
          style={{ maxHeight: "90%" }}
          src={items[selectedIndex].src}
          alt={items[selectedIndex].alt}
        />
        <button
          className={cls(
            "btn",
            "bg-primary",
            "w-10",
            "h-10",
            "rounded-full",
            "items-center",
            "flex",
            "justify-center",
            "z-40",
            "order-3",
            "md:order-3",
            "mr-4",
            selectedIndex === items.length - 1 && "opacity-0"
          )}
          onClick={onClickLeft}
        >
          <LeftIcon />
        </button>
      </div>
    );
  };

  return (
    <>
      {renderDialog()}
      <div>
        {renderSelectedImage()}
        {renderImages()}
      </div>
    </>
  );
};

export default ImageSlider;
