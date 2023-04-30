import { FC } from "react";
import DeleteSweepTwoToneIcon from "@mui/icons-material/DeleteSweepTwoTone";
import OpenWithOutlinedIcon from "@mui/icons-material/OpenWithOutlined";
import DownloadIcon from "@mui/icons-material/Download";
import {
  Box,
  Card,
  CircularProgress,
  DialogContent,
  IconButton,
  Stack,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";

import useData from "./useDate";

export const Image: FC<
  {
    filename: string;
    fileId: string;
    onRemoveComplete?: () => void;
  } & React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
> = ({ filename, fileId, alt, onRemoveComplete = () => "", ...props }) => {
  const { loading, onRemove, openDialog, setOpenDialog } = useData(
    fileId,
    onRemoveComplete
  );

  const renderDialog = () => {
    return (
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogContent>
          <img
            alt={alt}
            {...props}
            src={process.env["NX_BACK_URL"] + "/api/file/" + filename}
            width={500}
          />
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <Card>
      {renderDialog()}
      <Box sx={{ position: "relative" }}>
        <img
          alt={alt}
          {...props}
          src={process.env["NX_BACK_URL"] + "/api/file/" + filename}
        />
      </Box>
      <Stack spacing={2} sx={{ p: 3 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          spacing={2}
        >
          <IconButton disabled={loading} onClick={onRemove}>
            <DeleteSweepTwoToneIcon color="error" />
          </IconButton>

          <IconButton onClick={() => setOpenDialog(true)} disabled={loading}>
            <OpenWithOutlinedIcon color="primary" />
          </IconButton>

          <IconButton
            href={process.env["NX_BACK_URL"] + "/api/file/" + filename}
            disabled={loading}
            LinkComponent={"a"}
            target="_blank"
          >
            <DownloadIcon color="primary" />
          </IconButton>

          {loading && <CircularProgress size={20} />}
        </Stack>
      </Stack>
    </Card>
  );
};

export default Image;
