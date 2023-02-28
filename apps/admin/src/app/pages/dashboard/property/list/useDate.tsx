import { useDashboardLayout } from "@admin/hooks";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useMutation, useQuery } from "@apollo/client";

import TEXTS from "@pishroo/texts";
import { GetPropertiesAdminArgs } from "@pishroo/dto";
import { url } from "@pishroo/utils";

import {
  DASHBOARD_PROPERTY_DETAILS,
  DASHBOARD_PROPERTY_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  PropertyUnitEnum,
  GetPropertiesAdminArgsGql,
  GetPropertiesAdminQuery,
  GetPropertiesAdminQueryVariables,
  PaginationArgsGql,
  UpdatePropertyActivationAdminMutation,
  UpdatePropertyActivationAdminMutationVariables,
} from "@admin/gql/graphql";

import {
  QUERY_GET_PROPERTIES_ADMIN,
  MUTATION_UPDATE_PROPERTY_ACTIVATION_ADMIN,
} from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { enqueueSnackbar } = useSnackbar();
  const [rows, setRows] = useState<
    GetPropertiesAdminQuery["getPropertiesAdmin"]["edges"]
  >([]);

  const [activationItem, setActivationItem] = useState<typeof rows[0]>();

  const convertSearchParamsToArgs = (searchParams: URLSearchParams) => {
    return {
      name: searchParams.get("name") || "",
      units: (searchParams.getAll("units") || []) as PropertyUnitEnum[],
      isActive: searchParams.has("isActive")
        ? searchParams.get("isActive") === "true"
        : true,
    };
  };

  const [pageInfo, setPageInfo] =
    useState<GetPropertiesAdminQuery["getPropertiesAdmin"]["pageInfo"]>();

  const [queryArgs, setQueryArgs] = useState<GetPropertiesAdminArgsGql>({
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
  } = useForm<GetPropertiesAdminArgs>({
    resolver: classValidatorResolver(GetPropertiesAdminArgs),
    mode: "onChange",
    defaultValues: {
      name: queryArgs.name || "",
      isActive: !!queryArgs.isActive,
      units: (queryArgs.units || []) as [],
    },
  });

  const { loading } = useQuery<
    GetPropertiesAdminQuery,
    GetPropertiesAdminQueryVariables
  >(QUERY_GET_PROPERTIES_ADMIN, {
    variables: {
      getPropertiesAdminArgs: queryArgs,
      paginationArgs: paginationArgs,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: ({ getPropertiesAdmin }) => {
      setRows(getPropertiesAdmin?.edges);
      setPageInfo(getPropertiesAdmin?.pageInfo);
    },
  });

  const [
    updatePropertyActivationAdmin,
    { loading: updatePropertyActivaitonLoading },
  ] = useMutation<
    UpdatePropertyActivationAdminMutation,
    UpdatePropertyActivationAdminMutationVariables
  >(MUTATION_UPDATE_PROPERTY_ACTIVATION_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: (res) => {
      setActivationItem(undefined);
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
      pageName: TEXTS.PAGE_PROPERTY__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          { label: TEXTS.PAGE_PROPERTY__PROPERTY },
        ],
      },
    });
  }, [setConfig]);

  const onSubmitFilter: SubmitHandler<GetPropertiesAdminArgs> = (
    getPropertiesAdminArgs
  ) => {
    navigate(
      url.generate(DASHBOARD_PROPERTY_ROUTE, {}, getPropertiesAdminArgs)
    );
  };

  const onPageSelect = (page: number) => {
    navigate(
      url.generate(DASHBOARD_PROPERTY_ROUTE, {}, { ...paginationArgs, page })
    );
  };

  const onClearFilter = () => {
    reset({
      name: "",
      units: [],
      isActive: true,
    });
    navigate(url.generate(DASHBOARD_PROPERTY_ROUTE, {}, {}));
  };

  const onEdit = (propertyId: string) => {
    navigate(url.generate(DASHBOARD_PROPERTY_DETAILS, { propertyId }));
  };

  const onUpdatePropertyActivation = () => {
    if (activationItem)
      updatePropertyActivationAdmin({
        variables: {
          updatePropertyActivationAdminInputs: {
            isActive: !activationItem?.isActive,
            propertyId: activationItem?.id,
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
    activationItem,
    setActivationItem,
    updatePropertyActivaitonLoading,
    onUpdatePropertyActivation,
  };
};

export default useData;
