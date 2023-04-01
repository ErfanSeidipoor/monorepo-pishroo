import { useState } from "react";
import { PAGE } from "./context";

const useData = () => {
  const [page, setPage] = useState<PAGE>("Home");
  const [pageTitle, setPageTitle] = useState("Pishroo");

  return {
    page,
    setPage,
    pageTitle,
    setPageTitle,
  };
};

export default useData;
