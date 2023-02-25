import { useMutation, useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";

import TEXTS from "@pishroo/texts";

import {
  GetFileByIdAdminQuery,
  GetFileByIdAdminQueryVariables,
  UploadFileMutation,
  UploadFileMutationVariables,
} from "@admin/gql/graphql";

import { useEffect, useState } from "react";
import { MUTATION_UPLOAD_FILE, QUERY_GET_FILE_BY_ID_ADMIN } from "./gql";

const useData = (
  fileId: string,
  onUploadComplete: (fileId: string) => void
) => {
  const { enqueueSnackbar } = useSnackbar();

  const [openDialog, setOpenDialog] = useState(false);
  const [fileName, setFileName] = useState("");

  const [objectURL, setObjectURL] = useState("");
  const [file, setFile] = useState<File>();

  useEffect(() => {
    setObjectURL(file ? URL.createObjectURL(file) : "");
  }, [file]);

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
      enqueueSnackbar(error.message, { variant: "error" });
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
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: ({ uploadFile }) => {
      enqueueSnackbar(TEXTS.PAGE_NEW_PRODUCT__SUCCESS, {
        variant: "success",
      });
      const { id } = uploadFile;
      onUploadComplete(id);
    },
  });

  const onUpload = () => {
    if (file) {
      uploadFile({ variables: { file } });
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
  };
};

export default useData;
