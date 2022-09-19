import backSearch2 from "../../assets/backSearch2.png";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { BrandCarousel } from "./BrandCarousel";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavMenuIcons } from "./NavMenuIcons";

export const NavMenu = ({ bgTransparent }) => {
  const { theme } = useSelector((state) => state.theme);

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
            <NavMenuIcons />
          </Toolbar>
        </AppBar>
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
            <NavMenuIcons showCarsButton />
          </Toolbar>
          <BrandCarousel />
        </AppBar>
      </>
    );
  }
};
