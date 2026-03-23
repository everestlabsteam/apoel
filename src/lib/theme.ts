import { createTheme, ThemeOptions } from '@mui/material/styles';

// APOEL FC Brand Colors
const primaryColor = '#F7941D'; // Orange
const secondaryColor = '#FFFFFF'; // White
const accentColor = '#000000'; // Black
const backgroundColor = '#0A0A0A'; // Dark charcoal
const surfaceColor = '#111111'; // Slightly lighter surface
const borderColor = '#2A2A2A'; // Subtle border

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: primaryColor,
      dark: '#D67D15',
      light: '#FFA53A',
    },
    secondary: {
      main: secondaryColor,
    },
    background: {
      default: backgroundColor,
      paper: surfaceColor,
    },
    success: {
      main: primaryColor,
    },
    warning: {
      main: '#FFA53A',
    },
    error: {
      main: '#FF5252',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: primaryColor,
          '&:hover': {
            backgroundColor: '#D67D15',
          },
        },
        outlinedPrimary: {
          borderColor: primaryColor,
          color: primaryColor,
          '&:hover': {
            backgroundColor: `${primaryColor}10`,
            borderColor: primaryColor,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: surfaceColor,
          borderColor: borderColor,
          borderWidth: 1,
          borderStyle: 'solid',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 24,
          paddingRight: 24,
        },
        maxWidthSm: {
          '@media (min-width: 600px)': {
            maxWidth: 600,
          },
        },
        maxWidthMd: {
          '@media (min-width: 900px)': {
            maxWidth: 900,
          },
        },
        maxWidthLg: {
          '@media (min-width: 1200px)': {
            maxWidth: 1200,
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: borderColor,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
  },
};

export const theme = createTheme(themeOptions);

export default theme;
