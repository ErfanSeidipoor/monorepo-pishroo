import { FC, useRef } from "react";
import AddPhotoAlternateTwoToneIcon from "@mui/icons-material/AddPhotoAlternateTwoTone";
import CloudUploadTwoToneIcon from "@mui/icons-material/CloudUploadTwoTone";
import OpenWithOutlinedIcon from "@mui/icons-material/OpenWithOutlined";
import {
  Card,
  CircularProgress,
  DialogContent,
  IconButton,
  Stack,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";

import useData from "./useDate";
import assets from "./assets";

export const UploadImage: FC<{
  onUploadComplete?: (fileId: string) => void;
}> = ({ onUploadComplete = () => "" }) => {
  const {
    loading,
    onUpload,
    openDialog,
    setOpenDialog,
    objectURL,
    file,
    setFile,
  } = useData(onUploadComplete);

  const inputRef = useRef<HTMLInputElement>(null);

  const renderDialog = () => {
    return (
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogContent>
          <img alt={file?.name} src={objectURL} width={500} />
        </DialogContent>
      </Dialog>
    );
  };

  const renderAction = () => {
    return (
      <>
        <input
          accept="image/*, .pdf"
          type={"file"}
          multiple={false}
          onChange={(event) => {
            setFile(event?.target?.files?.[0]);
          }}
          ref={inputRef}
          style={{ display: "none" }}
        />

        <Stack spacing={2} sx={{ p: 2 }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            spacing={2}
          >
            <IconButton
              disabled={loading}
              onClick={() => inputRef.current?.click()}
            >
              <AddPhotoAlternateTwoToneIcon color="success" />
            </IconButton>

            <IconButton disabled={loading || !file} onClick={onUpload}>
              <CloudUploadTwoToneIcon color={file ? "success" : "disabled"} />
            </IconButton>

            <IconButton
              onClick={() => setOpenDialog(true)}
              disabled={loading || !file}
            >
              <OpenWithOutlinedIcon color={file ? "success" : "disabled"} />
            </IconButton>

            {loading && <CircularProgress size={20} />}
          </Stack>
        </Stack>
      </>
    );
  };

  const renderImage = () => {
    return (
      <Stack direction="row" alignItems="center" justifyContent="center">
        <img
          alt={file?.name}
          src={file ? objectURL : assets.images.placeholder.src}
        />
      </Stack>
    );
  };

  return (
    <Card sx={{ maxWidth: 250 }}>
      {renderDialog()}
      {renderImage()}
      {renderAction()}
    </Card>
  );
};

export default UploadImage;
