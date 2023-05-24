import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./Components/Signin/Signin";
import SignUp from "./Components/Signup/Signup";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children
  };
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, Arial, sans-serif",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <ProtectedRoute>
                  <Navbar />
                </ProtectedRoute>
              }
            />
            <Route path="login" element={<SignIn />} />
            <Route path="register" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
