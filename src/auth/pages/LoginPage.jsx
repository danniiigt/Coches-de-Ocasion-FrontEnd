import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { PageWrapper } from "../ui";
import { AuthButtons, AuthTitle } from "../components";
import { useAuthStore } from "../../hooks/useAuthStore";

export const LoginPage = () => {
  const { theme } = useSelector((state) => state.theme);
  const { loginUser } = useAuthStore();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const dataForm = {
      email: data.get("email"),
      password: data.get("password"),
    };
    loginUser(dataForm);
    console.log(dataForm);
  };

  return (
    <PageWrapper>
      <AuthTitle
        title="Iniciar Sesion"
        subtitle="¿Todavia no tienes cuenta?"
        cta={"Registrate"}
        link={"registro"}
      />

      <Divider sx={{ mt: 2 }} />

      <Stack
        sx={{ mt: 3.5 }}
        spacing={2}
        component="form"
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-basic"
          label="Email"
          sx={{ backgroundColor: theme.bgPrimary }}
          name="email"
        />
        <TextField
          name="password"
          type="password"
          id="outlined-basic"
          label="Contraseña"
          sx={{ backgroundColor: theme.bgPrimary }}
          autoComplete="new-password"
        />
        <Button variant="contained" fullWidth type="submit">
          INICIAR SESIÓN
        </Button>
      </Stack>

      <Divider sx={{ mt: 4, mb: 4 }}>or</Divider>

      <AuthButtons />
    </PageWrapper>
  );
};
