import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";

import TEXTS from "@pishroo/texts";

import {
  RemoveImageAdminMutation,
  RemoveImageAdminMutationVariables,
} from "@admin/gql/graphql";

import { MUTATION_REMOVE_IMAGE_ADMIN } from "./gql";
import { useState } from "react";

const useData = (fileId: string, onRemoveComplete: () => void) => {
  const { enqueueSnackbar } = useSnackbar();

  const [openDialog, setOpenDialog] = useState(false);

  const [updateProductAdmin, { loading }] = useMutation<
    RemoveImageAdminMutation,
    RemoveImageAdminMutationVariables
  >(MUTATION_REMOVE_IMAGE_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: () => {
      enqueueSnackbar(TEXTS.COMPONENT_IMAGE_REMOVED_SUCCESS, {
        variant: "success",
      });
      onRemoveComplete();
    },
  });

  const onRemove = () => {
    updateProductAdmin({ variables: { removeImageAdmin: { fileId } } });
  };

  return {
    loading,
    onRemove,
    openDialog,
    setOpenDialog,
  };
};

export default useData;
