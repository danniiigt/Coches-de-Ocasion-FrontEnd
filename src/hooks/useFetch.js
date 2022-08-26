import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [dataState, setDataState] = useState({
    data: [],
    isLoading: true,
    hasError: false,
  });

  const getFetch = async () => {
    setDataState({
      ...dataState,
      isLoading: true,
    });

    const res = await fetch(url);
    const data = await res.json();

    setDataState({
      data: data,
      isLoading: false,
      hasError: false,
    });
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: dataState.data,
    isLoading: dataState.isLoading,
    hasError: dataState.hasError,
  };
};
