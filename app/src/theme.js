import {createMuiTheme} from "@material-ui/core/styles/index";

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#a8caed',
      main: '#2196f3',
      dark: '#3f50b5',
      contrastText: '#fff',
    },
    secondary: {
      light: "#ff4081",
      main: "#f50057",
      dark: "#c51162",
      contrastText: "#fff"
    }
  }
});