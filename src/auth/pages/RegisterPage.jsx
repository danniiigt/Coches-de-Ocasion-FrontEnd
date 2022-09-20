import { Button, Divider, Stack, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { PageWrapper } from "../ui";
import { AuthButtons, AuthTitle } from "../components";
import { useAuthStore } from "../../hooks/useAuthStore";

export const RegisterPage = () => {
  const { theme } = useSelector((state) => state.theme);
  const { registerUser } = useAuthStore();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const dataForm = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
      password2: data.get("password2"),
    };
    registerUser(dataForm);
  };

  return (
    <PageWrapper bigger>
      <AuthTitle
        title="Registro"
        subtitle="¿Ya tienes cuenta?"
        cta={"Inicia Sesion"}
        link={"iniciar-sesion"}
      />

      <Divider sx={{ mt: 2 }} />

      <Stack
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 3.5 }}
        spacing={2}
      >
        <Stack spacing={2} direction="row">
          <TextField
            id="firstName"
            name="firstName"
            label="Nombre"
            sx={{ backgroundColor: theme.bgPrimary }}
            fullWidth
            autoComplete="given-name"
          />
          <TextField
            id="lastName"
            name="lastName"
            label="Apellidos"
            sx={{ backgroundColor: theme.bgPrimary }}
            fullWidth
            autoComplete="family-name"
          />
        </Stack>
        <TextField
          id="email"
          name="email"
          label="Email"
          sx={{ backgroundColor: theme.bgPrimary }}
        />
        <TextField
          id="password"
          name="password"
          type="password"
          label="Contraseña"
          sx={{ backgroundColor: theme.bgPrimary }}
          autoComplete="new-password"
        />
        <TextField
          id="password2"
          name="password2"
          type="password"
          label="Confirmar contraseña"
          sx={{ backgroundColor: theme.bgPrimary }}
          autoComplete="new-password"
        />
        <Button variant="contained" fullWidth type="submit">
          REGISTRARSE
        </Button>
      </Stack>

      <Divider sx={{ mt: 4, mb: 4 }}>or</Divider>

      <AuthButtons />
    </PageWrapper>
  );
};
