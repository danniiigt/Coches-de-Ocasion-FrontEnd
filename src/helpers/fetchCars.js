export const fetchCars = async (
  page = 1,
  limit = 15,
  brand = null,
  orderBy = "recent",
  filterQuery
) => {
  if (brand) {
    const res = await fetch(
      `${
        import.meta.env.VITE_RESTSERVER_URL
      }/api/cars/marca/${brand}?page=${page}&limit=${limit}&orderBy=${orderBy}`,
      {
        method: "POST",
        body: JSON.stringify(filterQuery),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } else {
    const res = await fetch(
      `${
        import.meta.env.VITE_RESTSERVER_URL
      }/api/cars?page=${page}&limit=${limit}&orderBy=${orderBy}`,
      {
        method: "POST",
        body: JSON.stringify(filterQuery),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  }
};
