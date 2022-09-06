import { Box, Stack } from "@mui/material";
import { useLocation } from "react-router-dom";

export const CarsWrapper = ({ children, noMarginTop }) => {
  const { pathname } = useLocation();

  return (
    <Box
      sx={{
        position: pathname.length > 1 ? "" : "absolute",
        top: "640px",
        width: "100%",
        paddingBottom: 7,
      }}
    >
      <Stack
        spacing={2}
        sx={{
          width: "93%",
          maxWidth: "1300px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: noMarginTop ? 0 : 10,
          display: "flex",
        }}
      >
        {children}
      </Stack>
    </Box>
  );
};
