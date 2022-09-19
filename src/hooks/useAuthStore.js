import { useDispatch, useSelector } from "react-redux";
import { onLogin, onLogout } from "../store/auth/authSlice";
import { useFetch } from "./useFetch";

export const useAuthStore = () => {
  const dispatch = useDispatch();
  const { status, user, errorMessage } = useSelector((state) => state.auth);

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token || token.length === 0) return dispatch(onLogout());
    try {
      const res = await fetch(
        `${import.meta.env.VITE_RESTSERVER_URL}/api/auth`,
        {
          headers: { "x-token": token },
        }
      );
      const data = await (await res).json();

      if (data.ok) {
        localStorage.setItem("token", data.newToken);
        dispatch(onLogin(data.usuario));
      } else if (!data.ok) {
        localStorage.setItem("token", "");
        dispatch(onLogout());
      }
    } catch (error) {
      localStorage.setItem("token", "");
      dispatch(onLogout());
    }
  };

  const logout = () => {
    localStorage.setItem("token", "");
    dispatch(onLogout());
  };

  return {
    // PROPIEDADES
    status,
    user,
    errorMessage,

    // MÉTODOS
    checkAuthToken,
    logout,
  };
};
