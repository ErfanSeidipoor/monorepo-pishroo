import { FC, Suspense} from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";

// components
import {ScrollToTop} from "@admin/components"

export const Router: FC = () => {
    return  (
        <BrowserRouter>
            <Suspense fallback={"Loading"}>
                <ScrollToTop />
                <Routes />
            </Suspense>
        </BrowserRouter>
    )
};
