import { Routes, Route } from "react-router-dom";
import { AuthRouter } from "../auth/router/AuthRouter";
import { HomePage } from "../dashboard/pages";
import { BrandPage } from "../dashboard/pages/BrandPage";

export const AppRouter = () => {
  const status = "not-authenticated";

  return (
    <>
      <Routes>
        {status === "not-authenticated" && (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/:brand" element={<BrandPage />} />
            <Route path="/*" element={<AuthRouter />} />
          </>
        )}
      </Routes>
    </>
  );
};
