import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/navigation/header';
import { Footer } from '@/components/layout/footer';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'APOEL FC - Official Fan Portal',
  description: 'APOEL Football Club — Cyprus\'s most successful football club. Join us in celebrating our legacy and supporting our team.',
  keywords: ['APOEL', 'APOEL FC', 'Cyprus football', 'football club', 'GSP Stadium'],
  authors: [{ name: 'APOEL FC' }],
  openGraph: {
    title: 'APOEL FC - Official Fan Portal',
    description: 'Cyprus\'s most successful football club',
    type: 'website',
    locale: 'en_US',
  },
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#F7941D' },
    secondary: { main: '#FFFFFF' },
    background: { default: '#0A0A0A', paper: '#141414' },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
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
    MuiLink: {
      styleOverrides: {
        root: {
          color: 'inherit',
          textDecoration: 'none',
        },
      },
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body className="min-h-screen bg-[#0A0A0A] text-[#FFFFFF]">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
