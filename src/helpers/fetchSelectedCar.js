export const fetchSelectedCar = async (uid) => {
  const res = await fetch(
    `${import.meta.env.VITE_RESTSERVER_URL}/api/cars/${uid}`
  );
  const car = await res.json();

  return car;
};
