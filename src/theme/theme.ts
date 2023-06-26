import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6f7071",
    },
    secondary: {
      main: "#ff5f10",
    },
    text: {
      primary: "#6f7071",
      secondary: "#ff5f10",
    },
    background: {
      default: "#1a1a1b",
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
});
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      // main: "#44d62c",
      main: "#9b9b9b",
    },
    secondary: {
      main: "#ff5f10",
    },
    text: {
      primary: "#9b9b9b",
      secondary: "#ff5f10",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
});
