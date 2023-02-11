import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";

import TEXTS from "@pishroo/texts";

import {
  UploadFileMutation,
  UploadFileMutationVariables,
} from "@admin/gql/graphql";

import { useEffect, useState } from "react";
import { MUTATION_UPLOAD_FILE } from "./gql";

const useData = (onUploadComplete: (fileId: string) => void) => {
  const { enqueueSnackbar } = useSnackbar();

  const [openDialog, setOpenDialog] = useState(false);

  const [objectURL, setObjectURL] = useState("");
  const [file, setFile] = useState<File>();

  useEffect(() => {
    setObjectURL(file ? URL.createObjectURL(file) : "");
  }, [file]);

  const [uploadFile, { loading }] = useMutation<
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
    loading,
    openDialog,
    setOpenDialog,
    onUpload,
    objectURL,
    setObjectURL,
    file,
    setFile,
  };
};

export default useData;
