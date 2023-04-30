import { useMutation } from "@apollo/client";
import { Alert, Linking } from "react-native";

import TEXTS from "@pishroo/texts";

import {
  RemoveImageAdminMutation,
  RemoveImageAdminMutationVariables,
} from "@app/gql/graphql";

import { MUTATION_REMOVE_IMAGE_ADMIN } from "./gql";
import { useState } from "react";

const useData = (fileId: string, onRemoveComplete: () => void) => {
  const [openDialog, setOpenDialog] = useState(false);

  const [updateProductAdmin, { loading }] = useMutation<
    RemoveImageAdminMutation,
    RemoveImageAdminMutationVariables
  >(MUTATION_REMOVE_IMAGE_ADMIN, {
    onError: (error) => {
      Alert.alert(error.message);
    },
    onCompleted: () => {
      Alert.alert(TEXTS.COMPONENT_IMAGE_REMOVED_SUCCESS);
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
