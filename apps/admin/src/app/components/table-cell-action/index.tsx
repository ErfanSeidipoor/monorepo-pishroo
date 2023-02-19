import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, MenuItem, Popover } from "@mui/material";
import { Stack } from "@mui/system";
import { FC, useRef, useState } from "react";

export const TableCellAction: FC<{
  actions: {
    label: string;
    icon: React.ReactNode;
    onClick: () => void;
  }[];
}> = ({ actions = [] }) => {
  const [open, setOpen] = useState(false);

  const inputRef = useRef(null);
  return (
    <>
      <IconButton
        size="large"
        color="inherit"
        onClick={() => setOpen(true)}
        ref={inputRef}
      >
        <MoreVertIcon />
      </IconButton>
      <Popover
        open={Boolean(open)}
        anchorEl={inputRef.current}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            "& .MuiMenuItem-root": {
              px: 1,
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        {actions.map(({ label, icon, onClick }) => (
          <MenuItem onClick={onClick} key={label}>
            <Stack
              spacing={2}
              gap={1}
              direction="row"
              justifyContent={"center"}
              alignItems={"center"}
            >
              {icon}
              {label}
            </Stack>
          </MenuItem>
        ))}
      </Popover>
    </>
  );
};

export default TableCellAction;
