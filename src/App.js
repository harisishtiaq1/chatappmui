import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Layout from "./Components/Layout/Layout";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, Arial, sans-serif",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
