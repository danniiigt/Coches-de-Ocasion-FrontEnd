import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SelectedCarImages,
  NavMenu,
  CarDataWrapper,
  CarData,
} from "../components";
import { useLocation } from "react-router-dom";
import { setLoadingSelectedCar, setSelectedCar } from "../../store/cars";

export const CarPage = () => {
  const { selectedCar: car } = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  const location = useLocation();
  const carId = location.pathname.split("/")[2];

  window.scrollTo({
    top: 0,
  });

  const fetchCar = async () => {
    if (car) return;

    const res = await fetch(
      `${import.meta.env.VITE_RESTSERVER_URL}/api/cars/${carId}`
    );
    const data = await res.json();
    await dispatch(setSelectedCar(data));
    // dispatch(setSelectedCar(data));
  };

  useEffect(() => {
    fetchCar();
  }, [location]);

  if (car) {
    return (
      <>
        <NavMenu />
        <CarDataWrapper>
          <SelectedCarImages />
          <CarData />
        </CarDataWrapper>
      </>
    );
  }
};
