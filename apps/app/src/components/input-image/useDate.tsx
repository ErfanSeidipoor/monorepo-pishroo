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

const useData = (
  fileId: string,
  onUploadComplete: (fileId: string) => void
) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [fileName, setFileName] = useState("");

  const [objectURL, setObjectURL] = useState("");
  const [file, setFile] = useState<ReactNativeFile>();

  const { loading: getFileLoading, refetch } = useQuery<
    GetFileByIdAdminQuery,
    GetFileByIdAdminQueryVariables
  >(QUERY_GET_FILE_BY_ID_ADMIN, {
    fetchPolicy: "standby",
    errorPolicy: "all",
    notifyOnNetworkStatusChange: true,
    variables: {
      fileId,
    },
    onCompleted: ({ getFileByIdAdmin }) => {
      if (getFileByIdAdmin) {
        setFileName(getFileByIdAdmin.filename);
      }
    },
    onError: (error) => {
      Alert.alert(error.message);
    },
  });

  useEffect(() => {
    if (fileId) {
      refetch({ fileId });
    }
  }, [fileId, refetch]);

  const [uploadFile, { loading: uploadLoading }] = useMutation<
    UploadFileMutation,
    UploadFileMutationVariables
  >(MUTATION_UPLOAD_FILE, {
    onError: (error) => {
      console.log({ error });

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
    loading: uploadLoading || getFileLoading,
    openDialog,
    setOpenDialog,
    onUpload,
    objectURL,
    setObjectURL,
    file,
    setFile,
    fileName,
    onAddFile,
  };
};

export default useData;
