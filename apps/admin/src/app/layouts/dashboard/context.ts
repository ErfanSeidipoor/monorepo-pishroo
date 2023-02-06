import { createContext } from "react";

import { IBreadcrumbs } from "@pishroo/admin-components";

export interface IConfig {
  pageName: string;
  breadcrumbs: IBreadcrumbs;
}

export interface IPublicRouteContext {
  config: IConfig;
  setConfig: React.Dispatch<React.SetStateAction<IConfig>>;
}

export default createContext<IPublicRouteContext>({
  config: { pageName: "", breadcrumbs: { links: [] } },
  setConfig: () => {
    ("");
  },
});
