import { FC } from "react";

import Details from "./components/details";
import Images from "./components/images";
import useData from "./useDate";

export const ProjectUpdatePage: FC = () => {
  useData();

  return (
    <>
      <Details />
      <Images />
    </>
  );
};

export default ProjectUpdatePage;
