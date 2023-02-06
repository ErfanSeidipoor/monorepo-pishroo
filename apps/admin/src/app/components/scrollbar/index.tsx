import { FC, memo } from "react";
import { StyledRootScrollbar, StyledScrollbar } from "./styles";

const Scrollbar: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <StyledRootScrollbar>
      <StyledScrollbar
        clickOnTrack={false}
        sx={{
          height: 1,
          "& .simplebar-content": {
            height: 1,
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {children}
      </StyledScrollbar>
    </StyledRootScrollbar>
  );
};

export default memo(Scrollbar);
