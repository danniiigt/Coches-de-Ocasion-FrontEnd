import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthRouter } from "../auth/router/AuthRouter";
import { LoadingApp } from "../components/LoadingApp";
import { HomePage, CarsPage, CarPage } from "../dashboard/pages";
import { useAuthStore } from "../hooks/useAuthStore";

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();
  console.log(status);

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") {
    return <LoadingApp />;
  }

  return (
    <>
      <Routes>
        {status === "not-authenticated" && (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/coches-segunda-mano" element={<CarsPage />} />
            <Route path="/coches-segunda-mano/:carId" element={<CarPage />} />
            <Route path="/*" element={<AuthRouter />} />
          </>
        )}
      </Routes>
    </>
  );
};
