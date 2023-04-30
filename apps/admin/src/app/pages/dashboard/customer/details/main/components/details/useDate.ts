import { useMutation } from "@apollo/client";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  UpdateCustomerAdminMutation,
  UpdateCustomerAdminMutationVariables,
} from "@admin/gql/graphql";
import { useCustomerDetails } from "@admin/hooks";

import { UpdateCustomerAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";

import { MUTATION_UPDATE_CUSTOMER_ADMIN } from "./gql";

const useData = () => {
  const { getCustomerLoading, customerId, customer } = useCustomerDetails();
  const { enqueueSnackbar } = useSnackbar();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    setValue,
  } = useForm<UpdateCustomerAdminInputs>({
    resolver: classValidatorResolver(UpdateCustomerAdminInputs),
    mode: "onChange",
    defaultValues: {
      customerId,
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      phone: "",
      officePhone: "",
      cityId: "",
      isActive: false,
    },
  });

  useEffect(() => {
    if (customer) {
      const {
        firstName,
        lastName,
        email,
        isActive,
        jobTitle,
        phone,
        officePhone,
        cityId,
      } = customer;
      setValue("firstName", firstName);
      setValue("lastName", lastName || "");
      setValue("jobTitle", jobTitle || "");
      setValue("phone", phone || "");
      setValue("officePhone", officePhone || "");
      setValue("cityId", cityId || "");
      setValue("email", email || "");
      setValue("isActive", !!isActive);
    }
  }, [customer, setValue]);

  const [updateCustomerAdmin, { loading: updateCustomerLoading }] = useMutation<
    UpdateCustomerAdminMutation,
    UpdateCustomerAdminMutationVariables
  >(MUTATION_UPDATE_CUSTOMER_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: () => {
      enqueueSnackbar(TEXTS.PAGE_CUSTOMER_UPDATE__SUCCESS, {
        variant: "success",
      });
    },
  });

  const onSubmit: SubmitHandler<UpdateCustomerAdminInputs> = (
    updateCustomerAdminInputs
  ) => {
    updateCustomerAdmin({ variables: { updateCustomerAdminInputs } });
  };

  return {
    isValid,
    control,
    errors,
    handleSubmit,
    onSubmit,
    loading: updateCustomerLoading || getCustomerLoading,
  };
};

export default useData;
