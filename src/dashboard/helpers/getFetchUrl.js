import { useLocation } from "react-router-dom";

export const getFetchUrl = (brandPage, pagination) => {
  let brandName = null;

  if (brandPage) {
    const { pathname } = useLocation();
    brandName = pathname.replace("/", "");
    let fetchUrl = `${
      import.meta.env.VITE_RESTSERVER_URL
    }/api/cars/${brandName}`;

    return { brandName, fetchUrl };
  } else {
    let fetchUrl = `${
      import.meta.env.VITE_RESTSERVER_URL
    }/api/cars?page=${pagination}&limit=${import.meta.env.VITE_CARS_LIMIT}`;

    return { fetchUrl };
  }
};
