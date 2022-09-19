import { Routes, Route, Navigate } from "react-router-dom";
import { BrandPage, CarPage, CarsPage } from "../../dashboard/pages";
import { LoginPage, RegisterPage, VerifyPage } from "../pages";

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/iniciar-sesion" element={<LoginPage />} />
      <Route path="/registro" element={<RegisterPage />} />
      <Route path="/verify" element={<VerifyPage />} />
      <Route path="/coches-segunda-mano" element={<CarsPage />} />
      <Route path="/coches-segunda-mano/:carId" element={<CarPage />} />
      <Route
        path="/coches-segunda-mano/marcas/:brand"
        element={<BrandPage />}
      />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
