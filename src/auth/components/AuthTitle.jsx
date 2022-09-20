import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

export const AuthTitle = ({ title, subtitle, cta, link }) => {
  const { type } = useSelector((state) => state.theme);

  return (
    <>
      <Typography variant="h4" fontWeight={500}>
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: type === "light" ? "#555555" : "#cccccc",
          span: {
            cursor: "pointer",
            "&:hover": {
              opacity: 0.85,
            },
            a: {
              textDecoration: "2px underline #2462FD",
            },
          },
        }}
      >
        {subtitle}{" "}
        <span>
          <Link to={`/${link}`}>{cta}</Link>
        </span>
      </Typography>
    </>
  );
};
