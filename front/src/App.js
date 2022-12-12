import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { routes } from "./routes";
import GlobalStyle from "./theme/globalStyle";
import { theme } from "./theme/theme";
import Login from "./pages/sign/Login";

const App = () => {
  const content = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {content}
    </ThemeProvider>
  );
};

export default App;
