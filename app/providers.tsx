'use client';

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#F7941D' },
    secondary: { main: '#FFFFFF' },
    background: { default: '#1A1A1A', paper: '#1A1A1A' },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", sans-serif',
    h1: { fontWeight: 700, letterSpacing: '-0.02em' },
    h2: { fontWeight: 700, letterSpacing: '-0.015em' },
    h3: { fontWeight: 700, letterSpacing: '-0.01em' },
    h4: { fontWeight: 600, letterSpacing: '-0.005em' },
    h5: { fontWeight: 600, letterSpacing: '-0.005em' },
    h6: { fontWeight: 600, letterSpacing: '-0.005em' },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: { color: 'inherit', textDecoration: 'none' },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 600 },
        containedPrimary: {
          backgroundColor: '#F7941D',
          color: '#FFFFFF',
          '&:hover': { backgroundColor: '#FFB04D' },
        },
        outlinedPrimary: {
          borderColor: '#F7941D',
          color: '#F7941D',
          '&:hover': { backgroundColor: '#F7941D', color: '#FFFFFF' },
        },
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
