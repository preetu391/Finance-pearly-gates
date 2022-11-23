import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#29ffd6',
          light: '#B9FFF8',
        },
        secondary: {
          main: '#F55C47',
        },
        background: {
          default: '#000000',
          paper: '#195056',
        },
        text: {
          primary: '#F1F1F1',
          secondary: '#EEEEEE',
          disabled: 'rgba(187,180,180,0.38)',
          hint: 'rgba(177,169,169,0.38)',
        },
      },
      typography: {
        fontFamily: 'Open Sans',
        fontSize: 14,
        fontWeightRegular: 400,
      },
  });

export default theme