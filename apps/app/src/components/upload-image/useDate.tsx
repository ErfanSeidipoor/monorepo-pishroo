import { useEffect, useState } from "react";
import { ReactNativeFile } from "apollo-upload-client";
import { useMutation, useQuery } from "@apollo/client";
import { Alert } from "react-native";
import DocumentPicker from "react-native-document-picker";
import TEXTS from "@pishroo/texts";

import {
  GetFileByIdAdminQuery,
  GetFileByIdAdminQueryVariables,
  UploadFileMutation,
  UploadFileMutationVariables,
} from "@app/gql/graphql";

import { MUTATION_UPLOAD_FILE, QUERY_GET_FILE_BY_ID_ADMIN } from "./gql";

const useData = (onUploadComplete: (fileId: string) => void) => {
  const [openDialog, setOpenDialog] = useState(false);

  const [objectURL, setObjectURL] = useState("");
  const [file, setFile] = useState<ReactNativeFile>();

  const [uploadFile, { loading }] = useMutation<
    UploadFileMutation,
    UploadFileMutationVariables
  >(MUTATION_UPLOAD_FILE, {
    onError: (error) => {
      Alert.alert(error.message);
    },
    onCompleted: ({ uploadFile }) => {
      Alert.alert(TEXTS.PAGE_NEW_PRODUCT__SUCCESS);
      const { id } = uploadFile;
      onUploadComplete(id);
    },
  });

  const onUpload = () => {
    if (file) {
      uploadFile({ variables: { file } });
    }
  };

  const onAddFile = async () => {
    try {
      const document = await DocumentPicker.pickSingle();
      console.log({ document });
      setObjectURL(document.uri);
      setFile(new ReactNativeFile(document));
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log("picker canceled by user");
      } else {
        console.log({ error });
      }
    }
  };

  return {
    loading,
    openDialog,
    setOpenDialog,
    onUpload,
    objectURL,
    setObjectURL,
    file,
    setFile,
    onAddFile,
  };
};

export default useData;
