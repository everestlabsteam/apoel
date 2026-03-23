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
  title: 'APOEL FC - Official Fan Portal | Θρύλος',
  description: 'APOEL Football Club — Cyprus\'s most successful football club. Join us in celebrating our legacy and supporting our team. 29 league titles, GSP Stadium, and the official fan portal.',
  keywords: ['APOEL', 'APOEL FC', 'Cyprus football', 'football club', 'GSP Stadium', 'Θρύλος', '29 titles'],
  authors: [{ name: 'APOEL FC' }],
  creator: 'APOEL FC',
  publisher: 'APOEL Football Club',
  metadataBase: new URL('https://apoel.everestlabs.dev'),
  openGraph: {
    title: 'APOEL FC - Official Fan Portal | Θρύλος',
    description: 'Cyprus\'s most successful football club. 29 league titles, GSP Stadium, and the official fan portal.',
    type: 'website',
    locale: 'en_US',
    url: 'https://apoel.everestlabs.dev',
    siteName: 'APOEL FC',
    images: [
      {
        url: 'https://apoel.everestlabs.dev/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'APOEL FC Fan Portal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'APOEL FC - Official Fan Portal',
    description: 'Cyprus\'s most successful football club',
    creator: '@APOEL_FC',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://apoel.everestlabs.dev',
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
