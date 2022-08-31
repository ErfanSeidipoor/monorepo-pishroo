import { PaginationArgs } from "@pishroo/dto";
import { PageInfo } from "@pishroo/models";
import { SelectQueryBuilder } from "typeorm";

export const paginate = async <T>(
  queryBuilder: SelectQueryBuilder<T>,
  paginationArgs: PaginationArgs
): Promise<{
  edges: T[];
  pageInfo: PageInfo;
}> => {
  const { limit, page } = paginationArgs;

  const edgesAndCount = await queryBuilder
    .take(limit)
    .skip((page - 1) * limit)
    .getManyAndCount();

  const totalEdges = edgesAndCount[1];

  const edgeCount = edgesAndCount[0].length;
  const totalPages = Math.ceil(totalEdges / limit);

  const pageInfo = new PageInfo();
  Object.assign(pageInfo, {
    totalEdges,
    edgeCount,
    edgesPerPage: Number(limit),
    totalPages,
    currentPage: Number(page),
  });

  return {
    edges: edgesAndCount[0],
    pageInfo,
  };
};
