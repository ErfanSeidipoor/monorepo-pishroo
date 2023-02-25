import { GetProjectReviewByIdAdminQuery } from "@admin/gql/graphql";
import { createContext } from "react";

export interface IProjectReviewContext {
  projectReview?: GetProjectReviewByIdAdminQuery["getProjectReviewByIdAdmin"];
  getProjectReviewLoading: boolean;
  projectReviewId: string;
  refetch: () => void;
}

export default createContext<IProjectReviewContext>({
  projectReview: undefined,
  getProjectReviewLoading: true,
  projectReviewId: "",
  refetch: () => "",
});
