import { Box, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export const AuthButtons = () => {
  const { theme, type } = useSelector((state) => state.theme);

  return (
    <Stack direction="row" spacing={3}>
      <Box
        spacing={0}
        sx={{
          width: "100%",
          p: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          backgroundColor: theme.bgPrimary,
          border: `1px solid ${theme.borderColor}`,
          borderRadius: 1.5,

          "&:hover": {
            backgroundColor: type === "light" ? "#dedede" : "#292929",
            border: type === "light" ? `1px solid #b5b5b5` : "1px solid black",
          },
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/2875/2875404.png"
          alt=""
          height={"24px"}
          width={"24px"}
        />
        {/* <GoogleIcon color="primary" /> */}
      </Box>
      <Box
        spacing={0}
        sx={{
          width: "100%",
          p: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          backgroundColor: theme.bgPrimary,
          border: `1px solid ${theme.borderColor}`,
          borderRadius: 1.5,

          "&:hover": {
            backgroundColor: type === "light" ? "#dedede" : "#292929",
            border: type === "light" ? `1px solid #b5b5b5` : "1px solid black",
          },
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
          height={"24px"}
          width={"24px"}
        />
        {/* <FacebookIcon color="primary" /> */}
      </Box>
      <Box
        spacing={0}
        sx={{
          width: "100%",
          p: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          backgroundColor: theme.bgPrimary,
          border: `1px solid ${theme.borderColor}`,
          borderRadius: 1.5,

          "&:hover": {
            backgroundColor: type === "light" ? "#dedede" : "#292929",
            border: type === "light" ? `1px solid #b5b5b5` : "1px solid black",
          },
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
          alt=""
          height={"20px"}
          width={"24px"}
        />
        {/* <TwitterIcon color="primary" /> */}
      </Box>
    </Stack>
  );
};
