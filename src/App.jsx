import { AppRouter } from "./router/AppRouter";
import { GlobalStyles } from "./theme/GlobalStyles";

export const App = () => {
  return (
    <>
      <GlobalStyles>
        <AppRouter />
      </GlobalStyles>
    </>
  );
};
