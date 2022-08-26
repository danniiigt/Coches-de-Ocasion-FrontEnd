import { Routes, Route } from "react-router-dom";
import { AuthRouter } from "../auth/router/AuthRouter";
import { HomePage } from "../dashboard/pages";

export const AppRouter = () => {
  const status = "not-authenticated";

  return (
    <>
      <Routes>
        {status === "not-authenticated" && (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/*" element={<AuthRouter />} />
          </>
        )}
      </Routes>
    </>
  );
};
