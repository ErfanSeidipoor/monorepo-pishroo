import { FC } from "react";

import {
  Main,
  Searchbox,
  Products,
  Projects,
  Partners,
  Certificates,
  NewsLetter,
} from "./components";

export const HomePage: FC = () => {
  return (
    <>
      <Main />
      <Searchbox />
      <Products />
      <Projects />
      <Partners />
      <Certificates />
      <NewsLetter />
    </>
  );
};
