import { FC, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { ScrollToTop } from "@admin/components";

import { Routes } from "./routes";

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={"Loading"}>
        <ScrollToTop />
        <Routes />
      </Suspense>
    </BrowserRouter>
  );
};
