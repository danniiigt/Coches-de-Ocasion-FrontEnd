import { Box, Stack } from "@mui/material";
import { useLocation } from "react-router-dom";

export const CarsWrapper = ({ children }) => {
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
        spacing={5}
        sx={{
          width: "90%",
          maxWidth: "1300px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 10,
          display: "flex",
        }}
      >
        {children}
      </Stack>
    </Box>
  );
};
