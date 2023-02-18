import { stringifyUrl } from "query-string";
import { generatePath, Params } from "react-router-dom";
import { instanceToPlain } from "class-transformer";

export const generate = <T>(baseUrl: string, params?: Params, query?: T) => {
  return stringifyUrl(
    {
      url: generatePath(baseUrl, params),
      query: instanceToPlain(query),
    },
    { arrayFormat: "none" }
  );
};
