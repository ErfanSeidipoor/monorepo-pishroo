import { FC, useState } from "react";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import CloseIcon from "@mui/icons-material/Close";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import TEXTS from "@pishroo/texts";

import Scrollbar from "../scrollbar";

export const FilterSidebar: FC<{
  children: React.ReactNode;
  onFilterClick?: () => void;
  onClearClick?: () => void;
  onSubmit?: () => void;
  disabled?: boolean;
  isValid?: boolean;
}> = ({
  children,
  onFilterClick = () => "",
  onClearClick = () => "",
  onSubmit = () => "",
  disabled = false,
  isValid = true,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        disableRipple
        endIcon={<FilterListIcon />}
        onClick={() => setOpen(true)}
        size="small"
        color="secondary"
      >
        {TEXTS.FILTER}
      </Button>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: { width: 280, border: "none", overflow: "hidden" },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 1, py: 2 }}
        >
          <Typography variant="subtitle1" sx={{ ml: 1 }} color="secondary">
            {TEXTS.FILTER}
          </Typography>
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <Divider />

        <Scrollbar>
          <form onSubmit={onSubmit}>
            <Stack spacing={3} sx={{ p: 3 }}>
              {children}
            </Stack>

            <Box sx={{ p: 2 }}>
              <Stack spacing={1}>
                <Button
                  fullWidth
                  size="large"
                  type="submit"
                  color="secondary"
                  variant="outlined"
                  startIcon={<FilterListIcon />}
                  disabled={disabled || !isValid}
                  onClick={onFilterClick}
                >
                  {TEXTS.FILTER}
                </Button>
                <Button
                  fullWidth
                  size="large"
                  color="inherit"
                  variant="outlined"
                  startIcon={<ClearAllIcon />}
                  disabled={disabled}
                  onClick={onClearClick}
                >
                  {TEXTS.CLEAR_ALL}
                </Button>
              </Stack>
            </Box>
          </form>
        </Scrollbar>
      </Drawer>
    </>
  );
};

export default FilterSidebar;
