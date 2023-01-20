import { FC, Suspense} from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";

export const Router: FC = () => {
    return  (
        <BrowserRouter>
            <Suspense fallback={"Loading"}>
                <Routes />
            </Suspense>
        </BrowserRouter>
    )
};
