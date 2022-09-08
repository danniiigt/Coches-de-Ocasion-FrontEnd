export const fetchCars = async (
  page = 1,
  limit = 15,
  brand = null,
  orderBy
) => {
  if (brand) {
    const res = await fetch(
      `${
        import.meta.env.VITE_RESTSERVER_URL
      }/api/cars/marca/${brand}?page=${page}&limit=${limit}&orderBy=${orderBy}`
    );
    const data = await res.json();
    return data;
  } else {
    const res = await fetch(
      `${
        import.meta.env.VITE_RESTSERVER_URL
      }/api/cars?page=${page}&limit=${limit}&orderBy=${orderBy}`
    );
    const data = await res.json();
    return data;
  }
};
