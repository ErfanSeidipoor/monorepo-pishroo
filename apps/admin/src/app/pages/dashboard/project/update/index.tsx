import { FC } from "react";

import Details from "./components/details";
import Images from "./components/images";
import Context from "./context";
import useData from "./useDate";

export const ProjectUpdatePage: FC = () => {
  const { getProjectLoading, project, projectId, refetch } = useData();

  return (
    <Context.Provider
      value={{
        getProjectLoading,
        project,
        projectId,
        refetch,
      }}
    >
      <Details />
      <Images />
    </Context.Provider>
  );
};

export default ProjectUpdatePage;
