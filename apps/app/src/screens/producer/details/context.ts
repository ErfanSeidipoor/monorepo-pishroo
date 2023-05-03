import { GetProducerByIdAdminQuery } from "@app/gql/graphql";
import { createContext } from "react";

export interface IProducerContext {
  producer?: GetProducerByIdAdminQuery["getProducerByIdAdmin"];
  getProducerLoading: boolean;
  producerId: string;
  refetch: () => void;
}

export default createContext<IProducerContext>({
  producer: undefined,
  getProducerLoading: true,
  producerId: "",
  refetch: () => "",
});
