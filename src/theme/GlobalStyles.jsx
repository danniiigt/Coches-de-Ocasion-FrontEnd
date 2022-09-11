import { Global } from "@emotion/react";
import { useSelector } from "react-redux";

export const GlobalStyles = ({ children }) => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <>
      <Global
        styles={{
          body: {
            margin: 0,
            backgroundColor: theme.bgPrimary,
            color: theme.textPrimary,
          },

          "*::-webkit-scrollbar": {
            width: "10px",
          },

          "*::-webkit-scrollbar-track": {
            backgroundColor: theme.bgPrimary,
          },
        }}
      />
      {children}
    </>
  );
};
