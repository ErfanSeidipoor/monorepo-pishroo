import { FC } from "react";
import cls from "classnames";
import Image from "next/image";

import { Accordion } from "@pishroo/website-components";

import TEXTS from "@pishroo/texts";

import assets from "./assets";

export const FAQ: FC = () => {
  const renderItems = () => {
    return [
      {
        question: TEXTS.WEBSITE_PAGE__ABOUT_US__FAQ__ITEM_1_QUESTION,
        answer: TEXTS.WEBSITE_PAGE__ABOUT_US__FAQ__ITEM_1_ANSWER,
      },
      {
        question: TEXTS.WEBSITE_PAGE__ABOUT_US__FAQ__ITEM_2_QUESTION,
        answer: TEXTS.WEBSITE_PAGE__ABOUT_US__FAQ__ITEM_2_ANSWER,
      },
      {
        question: TEXTS.WEBSITE_PAGE__ABOUT_US__FAQ__ITEM_3_QUESTION,
        answer: TEXTS.WEBSITE_PAGE__ABOUT_US__FAQ__ITEM_3_ANSWER,
      },
    ].map(({ question, answer }) => (
      <div key={question} className={cls("my-4")}>
        <Accordion summary={question} description={answer} />
      </div>
    ));
  };
  return (
    <div className={cls("mt-16", "flex-col", "flex")}>
      <div
        className={cls(
          "absolute",
          "right-0",
          "bottom-10",
          "w-80",
          "h-80",
          "z-0",
          "hidden",
          "md:block",
          "opacity-80"
        )}
      >
        <Image
          src={assets.images.secondaryCircle.src}
          alt={assets.images.grayCircle.alt}
          layout="fill"
        />
      </div>
      <div
        className={cls(
          "absolute",
          "right-0",
          "bottom-0",
          "w-80",
          "h-80",
          "z-0",
          "hidden",
          "md:block"
        )}
      >
        <Image
          src={assets.images.grayCircle.src}
          alt={assets.images.grayCircle.alt}
          layout="fill"
        />
      </div>
      <h1 className={cls("text-xl", "text-center", "mb-12", "z-1", "relative")}>
        {TEXTS.WEBSITE_PAGE__ABOUT_US__FAQ__TITLE}
      </h1>
      <div className={cls("max-w-2xl", "self-center", "z-1", "relative")}>
        {renderItems()}
      </div>
    </div>
  );
};
