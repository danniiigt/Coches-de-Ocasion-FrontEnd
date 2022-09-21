import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LightModeIcon from "@mui/icons-material/LightMode";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import { Badge, Button, IconButton, Stack, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, setLightMode } from "../../store/theme/themeSlice";
import { Link } from "react-router-dom";
import { ProfileMenu } from "./";
import { useAuthStore } from "../../hooks/useAuthStore";

export const NavMenuIcons = ({ showCarsButton }) => {
  const { type } = useSelector((state) => state.theme);
  const { status } = useAuthStore();

  const dispatch = useDispatch();

  const handleSetLightMode = () => {
    dispatch(setLightMode());
  };

  const handleSetDarkMode = () => {
    dispatch(setDarkMode());
  };

  return (
    <Stack direction="row" spacing={3}>
      {status === "authenticated" && (
        <>
          <Tooltip title="Nuevo anuncio">
            <IconButton color="inherit">
              <AddIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Mensajes">
            <IconButton color="inherit">
              <Badge badgeContent={6} color="secondary">
                <InboxIcon />
              </Badge>
            </IconButton>
          </Tooltip>
        </>
      )}
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
      <ProfileMenu />

      {showCarsButton && (
        <Button
          color="secondary"
          variant="contained"
          sx={{ boxShadow: "none" }}
        >
          <Link to="/coches-segunda-mano">VER COCHES</Link>
        </Button>
      )}
    </Stack>
  );
};