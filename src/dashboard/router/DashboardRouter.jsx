import { Routes, Route, Navigate } from "react-router-dom";
import { BrandPage, CarPage, CarsPage, HomePage } from "../../dashboard/pages";

export const DashboardRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
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
