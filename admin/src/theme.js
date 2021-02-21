import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
// import { useState } from "react";

// Create a theme instance.
// const [darkMode, setDarkMode] = useState(false);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#ff1744",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
