import { Alert } from "react-native";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useRoute } from "@react-navigation/native";
import { useMutation, useQuery } from "@apollo/client";
import { SubmitHandler, useForm } from "react-hook-form";
import { UpdateCallAdminInputs } from "libs/dto/src/admin/call/update-call.inputs";
import {
  GetCallByIdAdminQuery,
  GetCallByIdAdminQueryVariables,
  UpdateCallAdminMutation,
  UpdateCallAdminMutationVariables,
} from "@app/gql/graphql";

import { MUTATION_UPDATE_CALL_ADMIN, QUERY_GET_CALL_BY_ID_ADMIN } from "./gql";
import { useEffect } from "react";

const useData = () => {
  const route = useRoute<{ params: { callId: string } }>();
  const { callId } = route.params;

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    setValue,
  } = useForm<UpdateCallAdminInputs>({
    resolver: classValidatorResolver(UpdateCallAdminInputs),
    mode: "onChange",
    defaultValues: {
      callId,
      newPhone: "",
      description: "",
    },
  });

  const {
    loading: getCallLoading,
    data: call,
    refetch,
  } = useQuery<GetCallByIdAdminQuery, GetCallByIdAdminQueryVariables>(
    QUERY_GET_CALL_BY_ID_ADMIN,
    {
      fetchPolicy: "no-cache",
      variables: {
        callId: callId!,
      },
      onError: (error) => {
        Alert.alert(error.message);
      },
    }
  );

  useEffect(() => {
    if (call) {
      const {
        getCallByIdAdmin: { description, newPhone },
      } = call;
      setValue("description", description || "");
      setValue("newPhone", newPhone || "");
    }
  }, [callId, call, setValue]);

  const [updateCallAdmin, { loading: updateCallLoading }] = useMutation<
    UpdateCallAdminMutation,
    UpdateCallAdminMutationVariables
  >(MUTATION_UPDATE_CALL_ADMIN, {
    onError: (error) => {
      Alert.alert(error.message);
    },
    onCompleted: (res) => {
      ("");
    },
  });

  const onSubmit: SubmitHandler<UpdateCallAdminInputs> = (
    updateCallAdminInputs
  ) => {
    updateCallAdmin({
      variables: {
        updateCallAdminInputs,
      },
    });
  };

  return {
    handleSubmit,
    control,
    call: call?.getCallByIdAdmin,
    getCallLoading,
    callId: callId!,
    refetch,
    onSubmit,
    isValid,
    updateCallLoading,
  };
};

export default useData;
