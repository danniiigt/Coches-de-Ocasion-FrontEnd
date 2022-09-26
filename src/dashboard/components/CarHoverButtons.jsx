import { IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { useSelector } from "react-redux";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export const CarHoverButtons = ({ hoverCar }) => {
  const { status, user } = useSelector((state) => state.auth);

  return (
    <>
      {hoverCar && user?.role !== "ADMIN_ROLE" && (
        <>
          <Tooltip title="Chat">
            <IconButton
              className="animate__animated animate__fadeIn"
              sx={{
                borderRadius: 2,
                "&:hover": { svg: { color: "primary.main" } },
              }}
            >
              <Link to={`/`}>
                <ChatOutlinedIcon
                  fontSize="small"
                  sx={{
                    color: "#7c7c7ced",
                  }}
                />
              </Link>
            </IconButton>
          </Tooltip>
          <Tooltip title="Telefono">
            <IconButton
              className="animate__animated animate__fadeIn"
              sx={{
                borderRadius: 2,
                "&:hover": { svg: { color: "primary.main" } },
              }}
            >
              <Link to={`/`}>
                <LocalPhoneOutlinedIcon
                  fontSize="small"
                  sx={{
                    color: "#7c7c7ced",
                  }}
                />
              </Link>
            </IconButton>
          </Tooltip>
        </>
      )}
      {hoverCar && user?.role === "ADMIN_ROLE" && (
        <>
          <Tooltip title="Editar">
            <IconButton
              className="animate__animated animate__fadeIn"
              sx={{
                borderRadius: 2,
                "&:hover": { svg: { color: "primary.main" } },
              }}
            >
              <Link to={`/`}>
                <EditOutlinedIcon
                  fontSize="small"
                  sx={{
                    color: "#7c7c7ced",
                  }}
                />
              </Link>
            </IconButton>
          </Tooltip>
          <Tooltip title="Borrar">
            <IconButton
              className="animate__animated animate__fadeIn"
              sx={{
                borderRadius: 2,
                "&:hover": { svg: { color: "error.main" } },
              }}
            >
              <Link to={`/`}>
                <DeleteOutlinedIcon
                  fontSize="small"
                  sx={{
                    color: "#7c7c7ced",
                  }}
                />
              </Link>
            </IconButton>
          </Tooltip>
        </>
      )}
    </>
  );
};
