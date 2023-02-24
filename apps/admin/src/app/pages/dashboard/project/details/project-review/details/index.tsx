import { FC } from "react";

import Details from "./components/details";
import Context from "./context";
import useData from "./useDate";

export const ProjectReviewUpdatePage: FC = () => {
  const { getProjectReviewLoading, projectReview, projectReviewId, refetch } =
    useData();

  return (
    <Context.Provider
      value={{
        getProjectReviewLoading,
        projectReview,
        projectReviewId,
        refetch,
      }}
    >
      <Details />
    </Context.Provider>
  );
};

export default ProjectReviewUpdatePage;
