import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LightModeIcon from "@mui/icons-material/LightMode";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import {
  Button,
  ButtonBase,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, setLightMode } from "../../store/theme/themeSlice";
import { Link } from "react-router-dom";
import { useState } from "react";

export const NavMenuIcons = ({ showCarsButton }) => {
  const { type } = useSelector((state) => state.theme);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();

  const handleSetLightMode = () => {
    dispatch(setLightMode());
  };

  const handleSetDarkMode = () => {
    dispatch(setDarkMode());
  };

  return (
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
        <IconButton color="inherit" onClick={handleClick}>
          <AccountCircleIcon />
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{ "&:hover": { backgroundColor: "inherit" } }}
        >
          <Button fullWidth variant="outlined">
            <Link to="/iniciar-sesion">INICIAR SESION</Link>
          </Button>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ "&:hover": { backgroundColor: "inherit" } }}
        >
          <Button variant="contained" fullWidth>
            <Link to="/registro">REGISTRARSE</Link>
          </Button>
        </MenuItem>
      </Menu>
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
