import { createContext, Dispatch, SetStateAction } from "react";

export type PAGE =
  | "Home"
  | "Product"
  | "Product Details"
  | "Project"
  | "Project Details"
  | "Partners"
  | "About Us"
  | "Not Found"
  | "Contact Us";

export interface ILayoutContext {
  page: PAGE;
  setPage: Dispatch<SetStateAction<PAGE>>;
  pageTitle: string;
  setPageTitle: Dispatch<SetStateAction<string>>;
}

export default createContext<ILayoutContext>({
  page: "Home",
  setPage: () => "",
  pageTitle: "Pishroo",
  setPageTitle: () => "",
});
