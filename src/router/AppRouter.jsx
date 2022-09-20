import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthRouter } from "../auth/router/AuthRouter";
import { LoadingApp } from "../components/LoadingApp";
import { DashboardRouter } from "../dashboard/router/DashboardRouter";
import { useAuthStore } from "../hooks/useAuthStore";

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") {
    return <LoadingApp />;
  }

  return (
    <>
      <Routes>
        {status === "not-authenticated" ? (
          <Route path="/*" element={<AuthRouter />} />
        ) : (
          <>
            <Route path="/*" element={<DashboardRouter />} />
          </>
        )}
      </Routes>
    </>
  );
};
