import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/navigation/header';
import { Footer } from '@/components/layout/footer';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body className="min-h-screen bg-background text-text-primary">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
