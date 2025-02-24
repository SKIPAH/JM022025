import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import App from "./App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3065e3",
    },
    secondary: {
      main: "#2e74c9",
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </ThemeProvider>
);
