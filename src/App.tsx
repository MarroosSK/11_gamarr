import { useEffect, useContext, useLayoutEffect } from "react";
import { Box, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { DarkModeContext } from "./context/DarkModeContext";
import { darkTheme, lightTheme } from "./theme/theme";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  Account,
  Cart,
  ErrorPage,
  FAQ,
  Feedback,
  Home,
  Login,
  Privacy,
  Store,
  TermsOfUse,
} from "./pages";
import {
  Articles,
  Footer,
  Navbar,
  SingleArticle,
  SingleStoreProduct,
} from "./components";
import { LoginContext } from "./context/LoginContext";

function App() {
  //context
  const darkContext = useContext(DarkModeContext);
  const loginContext = useContext(LoginContext);

  //scrollUp
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scroll({ top: 0, behavior: "auto" });
  }, [pathname]);

  //keeping loggedIn
  useEffect(() => {
    const storedNickname = localStorage.getItem("nickname");
    const storedPassword = localStorage.getItem("password");

    if (storedNickname && storedPassword) {
      loginContext.setLoginForm({
        nickname: storedNickname,
        password: storedPassword,
      });
      loginContext.setIsLoggedIn(true);
    }
  }, [loginContext]);

  return (
    <ThemeProvider theme={darkContext.darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box>
        {loginContext.isLoggedIn ? (
          <>
            <Navbar />
            <Box>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/account" element={<Account />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:id" element={<SingleArticle />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/store" element={<Store />} />
                <Route path="/terms-of-use" element={<TermsOfUse />} />
                <Route path="/privacy-policy" element={<Privacy />} />
                <Route path="/store/:id" element={<SingleStoreProduct />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/*" element={<ErrorPage />} />
              </Routes>
            </Box>
            <Footer />
          </>
        ) : (
          <Login />
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
