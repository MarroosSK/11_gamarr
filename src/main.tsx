import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { DarkModeContextProvider } from "./context/DarkModeContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { LoginContextProvider } from "./context/LoginContext.tsx";
import { ShoppingCartContextProvider } from "./context/ShoppingCartContext.tsx";
import { MyGamesContextProvider } from "./context/MyGamesContext.tsx";
import { StoreContextProvider } from "./context/StoreContext.tsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <DarkModeContextProvider>
    <LoginContextProvider>
      <StoreContextProvider>
        <ShoppingCartContextProvider>
          <MyGamesContextProvider>
            <BrowserRouter>
              <App />
              <ToastContainer />
            </BrowserRouter>
          </MyGamesContextProvider>
        </ShoppingCartContextProvider>
      </StoreContextProvider>
    </LoginContextProvider>
  </DarkModeContextProvider>
);
