import { useDashboardLayout, useProductDetails } from "@admin/hooks";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useMutation, useQuery } from "@apollo/client";

import TEXTS from "@pishroo/texts";
import { GetProductReviewsAdminArgs } from "@pishroo/dto";
import { url } from "@pishroo/utils";

import {
  DASHBOARD_PRODUCT_DETAILS,
  DASHBOARD_PRODUCT_REVIEW_DETAILS,
  DASHBOARD_PRODUCT_REVIEW_NEW_PRODUCT_REVIEW_ROUTE,
  DASHBOARD_PRODUCT_REVIEW_ROUTE,
  DASHBOARD_PRODUCT_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  GetProductReviewsAdminArgsGql,
  GetProductReviewsAdminQuery,
  GetProductReviewsAdminQueryVariables,
  PaginationArgsGql,
  DeleteProductReviewAdminMutation,
  DeleteProductReviewAdminMutationVariables,
} from "@admin/gql/graphql";

import {
  QUERY_GET_PRODUCT_REVIEWS_ADMIN,
  MUTATION_DELETE_PRODUCT_REVIEW_ADMIN,
} from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { productId, product } = useProductDetails();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { enqueueSnackbar } = useSnackbar();
  const [rows, setRows] = useState<
    GetProductReviewsAdminQuery["getProductReviewsAdmin"]["edges"]
  >([]);

  const [deleteItem, setDeleteItem] = useState<typeof rows[0]>();

  const convertSearchParamsToArgs = (searchParams: URLSearchParams) => {
    return {
      reviewer: searchParams.get("reviewer") || "",
      text: searchParams.get("text") || "",
      productId,
    };
  };

  const [pageInfo, setPageInfo] =
    useState<
      GetProductReviewsAdminQuery["getProductReviewsAdmin"]["pageInfo"]
    >();

  const [queryArgs, setQueryArgs] = useState<GetProductReviewsAdminArgsGql>({
    ...convertSearchParamsToArgs(searchParams),
  });

  const [paginationArgs, setPaginationArgs] = useState<PaginationArgsGql>({
    page: Number(searchParams.get("page")) || 1,
  });

  const {
    handleSubmit: handleSubmitFilter,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<GetProductReviewsAdminArgs>({
    resolver: classValidatorResolver(GetProductReviewsAdminArgs),
    mode: "onChange",
    defaultValues: {
      reviewer: queryArgs.reviewer || "",
      text: queryArgs.text || "",
      productId,
    },
  });

  const { loading } = useQuery<
    GetProductReviewsAdminQuery,
    GetProductReviewsAdminQueryVariables
  >(QUERY_GET_PRODUCT_REVIEWS_ADMIN, {
    variables: {
      getProductReviewsAdminArgs: queryArgs,
      paginationArgs: paginationArgs,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: ({ getProductReviewsAdmin }) => {
      setRows(getProductReviewsAdmin?.edges);
      setPageInfo(getProductReviewsAdmin?.pageInfo);
    },
  });

  const [deleteProductReviewAdmin, { loading: deleteProductReviewLoading }] =
    useMutation<
      DeleteProductReviewAdminMutation,
      DeleteProductReviewAdminMutationVariables
    >(MUTATION_DELETE_PRODUCT_REVIEW_ADMIN, {
      onError: (error) => {
        enqueueSnackbar(error.message, { variant: "error" });
      },
      onCompleted: (res) => {
        setDeleteItem(undefined);
      },
    });

  useEffect(() => {
    setPaginationArgs({
      page: Number(searchParams.get("page")) || 1,
    });
    setQueryArgs({
      ...convertSearchParamsToArgs(searchParams),
    });
  }, [searchParams]);

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_PRODUCT_REVIEW__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_PRODUCT__PRODUCT,
            href: DASHBOARD_PRODUCT_ROUTE,
          },
          {
            label: product
              ? product?.name
              : TEXTS.PAGE_PRODUCT_UPDATE__UPDATE_PRODUCT,
            href: product
              ? url.generate(DASHBOARD_PRODUCT_DETAILS, {
                  productId: product?.id,
                })
              : DASHBOARD_PRODUCT_ROUTE,
          },
          { label: TEXTS.PAGE_PRODUCT_REVIEW__PRODUCT_REVIEW },
        ],
      },
    });
  }, [setConfig, product, productId]);

  const onSubmitFilter: SubmitHandler<GetProductReviewsAdminArgs> = (
    getProductReviewsAdminArgs
  ) => {
    const { reviewer, text } = getProductReviewsAdminArgs;

    navigate(
      url.generate(
        DASHBOARD_PRODUCT_REVIEW_ROUTE,
        { productId },
        { reviewer, text }
      )
    );
  };

  const onPageSelect = (page: number) => {
    navigate(
      url.generate(
        DASHBOARD_PRODUCT_REVIEW_ROUTE,
        {},
        { ...paginationArgs, page }
      )
    );
  };

  const onClearFilter = () => {
    reset({
      text: "",
      reviewer: "",
    });
    navigate(url.generate(DASHBOARD_PRODUCT_REVIEW_ROUTE, { productId }, {}));
  };

  const onEdit = (productReviewId: string) => {
    navigate(
      url.generate(DASHBOARD_PRODUCT_REVIEW_DETAILS, {
        productId,
        productReviewId,
      })
    );
  };

  const onNew = () => {
    navigate(
      url.generate(DASHBOARD_PRODUCT_REVIEW_NEW_PRODUCT_REVIEW_ROUTE, {
        productId,
      })
    );
  };

  const onDeleteProductReview = () => {
    if (deleteItem)
      deleteProductReviewAdmin({
        variables: {
          deleteProductReviewAdmin: {
            productReviewId: deleteItem?.id,
          },
        },
      });
  };
  return {
    pageInfo,
    rows,
    navigate,
    loading,
    paginationArgs,
    handleSubmitFilter,
    onSubmitFilter,
    onClearFilter,
    control,
    errors,
    isValid,
    onPageSelect,
    onEdit,
    onNew,
    deleteItem,
    setDeleteItem,
    deleteProductReviewLoading,
    onDeleteProductReview,
  };
};

export default useData;
