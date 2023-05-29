import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import "./App.css";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./Components/Signin/Signin";
import SignUp from "./Components/Signup/Signup";
import { useContext, useEffect } from "react";
import { AuthContext } from "./Context/AuthContext";

function App() {
  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      //generate Token
      const token = await getToken(messaging, {
        vapidKey:
          "BL9O8g7Ti48-dCPJ2G_XsYC8yG-CUWjF8qGER0GHWKGA-Z5n8RvrxLwkDJLkvz9eLEJa1WsYHUIfK8htYW-UhM0",
      });
      console.log("token", token);
    } else if (permission === "denied") {
      alert("Permission Denied");
    }
  }
  useEffect(() => {
    requestPermission();
  }, []);

  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
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
