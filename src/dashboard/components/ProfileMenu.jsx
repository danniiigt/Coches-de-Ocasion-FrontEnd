import {
  Avatar,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Person2Icon from "@mui/icons-material/Person2";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { useAuthStore } from "../../hooks/useAuthStore";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";

export const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { status, logout, user } = useAuthStore();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (status === "not-authenticated") {
    return (
      <>
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
          <MenuItem onClick={handleClose}>
            <Person2Icon sx={{ mr: 1 }} /> Mi perfil
          </MenuItem>
          <Divider />
          <MenuItem
            onClick={handleClose}
            sx={{
              a: {
                display: "flex",
                alignItems: "center",
              },
            }}
          >
            <Link to="/iniciar-sesion">
              <LoginIcon sx={{ ml: -0.5, mr: 1.4 }} />
              Iniciar Sesion
            </Link>
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            sx={{
              a: {
                display: "flex",
                alignItems: "center",
              },
            }}
          >
            <Link to="/registro">
              <HowToRegIcon sx={{ mr: 1 }} />
              Registrarse
            </Link>
          </MenuItem>
        </Menu>
      </>
    );
  } else if (status === "authenticated") {
    return (
      <>
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
          <MenuItem onClick={handleClose}>
            <Person2Icon sx={{ mr: 1 }} /> Mi perfil
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <SettingsIcon sx={{ mr: 1.1 }} /> Ajustes
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <DirectionsCarIcon sx={{ mr: 1 }} /> Mis anuncios
          </MenuItem>
          <MenuItem onClick={logout}>
            <LogoutIcon sx={{ mr: 1 }} /> Cerrar sesión
          </MenuItem>
        </Menu>
      </>
    );
  }
};
