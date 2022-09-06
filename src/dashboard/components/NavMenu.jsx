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
import SearchIcon from "@mui/icons-material/Search";
import backSearch from "../../assets/backSearch.png";
import { BrandCarousel } from "./BrandCarousel";
import { Link } from "react-router-dom";

export const NavMenu = ({ bgTransparent }) => {
  if (!bgTransparent) {
    return (
      <AppBar
        position="sticky"
        color="primary"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "none",
          backgroundColor: "",
          backgroundImage: `url(${backSearch})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: " 0 -40px",
          marginTop: 1,
          marginBottom: 1,
          maxWidth: "1300px",
          width: "93%",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: 3,
          top: 10,
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            p: "0 10px",
            boxSizing: "border-box",
            color: "#eeee",
          }}
        >
          <Typography variant="h4" color="white" flexGrow={1}>
            <Link to="/">Coches de Ocasión</Link>
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
      </AppBar>
    );
  } else {
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
            paddingTop: 2,
            paddingBottom: 2,
            backgroundColor: bgTransparent ? "transparent" : "",
            backgroundImage: bgTransparent ? "" : `url(${backSearch})`,
            backgroundSize: bgTransparent ? "" : "cover",
            backgroundRepeat: bgTransparent ? "" : "no-repeat",
            backgroundPosition: bgTransparent ? "" : " 0 -40px",
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
              <Link to="/">Coches de Ocasión</Link>
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
  }
};
