import { FC } from "react";

import Context from "./context";
import { Layout } from "./layout";
import useData from "./useDate";

const LayoutProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const data = useData();

  return (
    <Context.Provider value={data}>
      <Layout>{children}</Layout>
    </Context.Provider>
  );
};

export default LayoutProvider;
