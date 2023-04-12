import { FC } from "react";

import {
  Main,
  Products,
  Projects,
  Partners,
  Certificates,
  NewsLetter,
} from "./components";
import { ProductSearchbox } from "@website/components/searchbox-product";

export const HomePage: FC = () => {
  return (
    <>
      <Main />
      <ProductSearchbox />
      <Products />
      <Projects />
      <Partners />
      <Certificates />
      <NewsLetter />
    </>
  );
};
