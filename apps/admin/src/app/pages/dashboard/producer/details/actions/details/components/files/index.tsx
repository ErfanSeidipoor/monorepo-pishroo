import { FC } from "react";
import { Image, UploadImage } from "@admin/components";
import { Box, Grid, Typography } from "@mui/material";

import TEXTS from "@pishroo/texts";
import useData from "./useDate";

export const ProducerActionFiles: FC = () => {
  const { loading, onSubmit, producerAction, refetch } = useData();
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        {TEXTS.FILES}
      </Typography>

      {!loading && (
        <Box sx={{ mb: 2 }}>
          <UploadImage onUploadComplete={onSubmit} />
        </Box>
      )}

      <Grid container spacing={3}>
        {producerAction?.fileUses?.map(({ file }) => (
          <Grid key={file.id} item md={3}>
            <Image
              filename={file.filename}
              fileId={file.id}
              onRemoveComplete={refetch}
              alt={file.filename}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProducerActionFiles;
