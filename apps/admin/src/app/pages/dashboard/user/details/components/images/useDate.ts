import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";

import {
  AddImageToUserAdminMutation,
  AddImageToUserAdminMutationVariables,
} from "@admin/gql/graphql";
import { useUserDetails } from "@admin/hooks";

import TEXTS from "@pishroo/texts";

import { MUTATION_ADD_IMAGE_TO_USER } from "./gql";

const useData = () => {
  const { getUserLoading, userId, refetch, user } = useUserDetails();
  const { enqueueSnackbar } = useSnackbar();

  const [addImageToUserAdmin, { loading: updateUserLoading }] = useMutation<
    AddImageToUserAdminMutation,
    AddImageToUserAdminMutationVariables
  >(MUTATION_ADD_IMAGE_TO_USER, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: () => {
      enqueueSnackbar(TEXTS.PAGE_USER_UPDATE__SUCCESS, {
        variant: "success",
      });
      refetch();
    },
  });

  const onSubmit = (fileId: string) => {
    addImageToUserAdmin({
      variables: { addImageToUserAdminInputs: { fileId, userId } },
    });
  };

  return {
    onSubmit,
    user,
    loading: updateUserLoading || getUserLoading,
    refetch,
  };
};

export default useData;
