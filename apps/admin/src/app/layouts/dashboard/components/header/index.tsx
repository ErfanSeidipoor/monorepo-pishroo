import { Box } from "@mui/material";

import AccountPopover from "../account-popover";
import { StyledRoot, StyledToolbar } from "./style";

export default function Header() {
  return (
    <StyledRoot>
      <StyledToolbar>
        <Box sx={{ flexGrow: 1 }} />
        <AccountPopover />
      </StyledToolbar>
    </StyledRoot>
  );
}
