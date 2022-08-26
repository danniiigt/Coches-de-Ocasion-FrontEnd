import {
  AppBar,
  Button,
  Stack,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { BrandCarousel } from "./BrandCarousel";

export const NavMenu = () => {
  return (
    <>
      <AppBar
        position="sticky"
        color="primary"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "none",
          backgroundColor: "transparent",
          paddingTop: 2,
          //   paddingRight: 4,
          //   paddingLeft: 4,
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "1300px",
            width: "90%",
            color: "#eeee",
            mb: 2,
          }}
        >
          <Typography variant="h4" color="white" flexGrow={1}>
            Coches de Ocasión
          </Typography>
          <Stack direction="row" spacing={3}>
            <IconButton color="inherit">
              <HelpOutlineRoundedIcon />
            </IconButton>
            <IconButton color="inherit">
              <NotificationsNoneIcon />
            </IconButton>
            <Button
              color="secondary"
              variant="contained"
              sx={{ boxShadow: "none" }}
            >
              REGISTRATE
            </Button>
          </Stack>
        </Toolbar>
        <BrandCarousel />
      </AppBar>
    </>
  );
};
