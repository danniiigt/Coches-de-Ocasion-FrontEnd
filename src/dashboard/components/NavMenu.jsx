import {
  AppBar,
  Button,
  Stack,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Tooltip,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LightModeIcon from "@mui/icons-material/LightMode";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import backSearch from "../../assets/backSearch.png";
import backSearch2 from "../../assets/backSearch2.png";
import backSearchDark from "../../assets/backSearchDark.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { BrandCarousel } from "./BrandCarousel";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, setLightMode } from "../../store/theme/themeSlice";
import Brightness3Icon from "@mui/icons-material/Brightness3";

export const NavMenu = ({ bgTransparent }) => {
  const { theme, type } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleSetLightMode = () => {
    dispatch(setLightMode());
  };

  const handleSetDarkMode = () => {
    dispatch(setDarkMode());
  };

  if (!bgTransparent) {
    return (
      <Box
        sx={{
          maxWidth: "1300px",
          width: "94%",
          padding: "15px 0 10px 0",
          margin: "0 0 10px 0",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: theme.bgPrimary,
          position: "sticky",
          top: 0,
          zIndex: 101,
        }}
      >
        <AppBar
          enableColorOnDark={true}
          position="sticky"
          color="primary"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "none",
            backgroundColor: "",
            backgroundImage: `url(${backSearch2})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: " 0 -120px",
            width: "100%",
            // marginTop: 1,
            // marginBottom: 4,
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
              {type === "dark" ? (
                <Tooltip title="Modo Dia">
                  <IconButton color="inherit" onClick={handleSetLightMode}>
                    <LightModeIcon />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title="Modo Noche">
                  <IconButton color="inherit" onClick={handleSetDarkMode}>
                    <Brightness3Icon />
                  </IconButton>
                </Tooltip>
              )}
              <Tooltip title="Notificaciones">
                <IconButton color="inherit">
                  <NotificationsNoneIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Perfil">
                <IconButton color="inherit">
                  <AccountCircleIcon />
                </IconButton>
              </Tooltip>
            </Stack>
          </Toolbar>
        </AppBar>
        {/* <BrandCarousel fullWidth /> */}
      </Box>
    );
  } else {
    return (
      <>
        <AppBar
          enableColorOnDark
          position="sticky"
          color="primary"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "none",
            paddingTop: 2,
            paddingBottom: 2,
            background: "transparent",
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
              {type === "dark" ? (
                <Tooltip title="Modo Dia">
                  <IconButton color="inherit" onClick={handleSetLightMode}>
                    <LightModeIcon />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title="Modo Noche">
                  <IconButton color="inherit" onClick={handleSetDarkMode}>
                    <Brightness4Icon />
                  </IconButton>
                </Tooltip>
              )}
              <Tooltip title="Notificaciones">
                <IconButton color="inherit">
                  <NotificationsNoneIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Perfil">
                <IconButton color="inherit">
                  <AccountCircleIcon />
                </IconButton>
              </Tooltip>
              <Button
                color="secondary"
                variant="contained"
                sx={{ boxShadow: "none" }}
              >
                <Link to="/coches-segunda-mano">VER COCHES</Link>
              </Button>
            </Stack>
          </Toolbar>
          <BrandCarousel />
        </AppBar>
      </>
    );
  }
};
