import { FC, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { ScrollToTop } from "@admin/components";

import { Routes } from "./routes";
import useUser from "./useUser";

export const Router: FC = () => {
  useUser();
  return (
    <BrowserRouter>
      <Suspense fallback={"Loading"}>
        <ScrollToTop />
        <Routes />
      </Suspense>
    </BrowserRouter>
  );
};
