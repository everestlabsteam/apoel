import { Hero } from '@/components/ui/hero';
import { MatchCard } from '@/components/ui/match-card';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { nextMatch, recentMatches } from '@/data/matches';
import Link from 'next/link';
import { Box, Container, Typography, Grid } from '@mui/material';
import type { Metadata } from 'next';

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

export default function HomePage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 8 } }}>
      {/* Hero Section */}
      <Hero
        title="APOEL FC"
        subtitle="Αθλητικός Ποδοσφαιρικός Όμιλος Ελλήνων Λευκωσίας"
        cta={[
          { label: 'Watch Highlights', href: '#' },
          { label: 'Buy Tickets', href: 'https://apoelfc.com.cy' },
        ]}
        className="py-12 md:py-20"
        showCrest={true}
        tagline="Θρύλος"
      />

      {/* Next Match Section */}
      <Box sx={{ py: { xs: 4, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 3 }}>
            Next Match
          </Typography>
          <MatchCard
            date={nextMatch.date}
            homeTeam={nextMatch.homeTeam}
            awayTeam={nextMatch.awayTeam}
            score={nextMatch.score}
            competition={nextMatch.competition}
            venue={nextMatch.venue}
            status={nextMatch.status}
          />
        </Container>
      </Box>

      {/* Recent Results Section */}
      <Box sx={{ py: { xs: 4, md: 8 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 3 }}>
            Recent Results
          </Typography>
          <Grid container spacing={4}>
            {recentMatches.map((match, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <MatchCard
                  date={match.date}
                  homeTeam={match.homeTeam}
                  awayTeam={match.awayTeam}
                  score={match.score}
                  competition={match.competition}
                  venue={match.venue}
                  status={match.status}
                  result={match.result}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Quick Links Section */}
      <Box sx={{ py: { xs: 4, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 3 }}>
            Quick Links
          </Typography>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Link href="/squad" style={{ textDecoration: 'none' }}>
                <Card hover className="cursor-pointer h-full">
                  <CardContent className="flex flex-col items-center justify-center py-4">
                    <Typography variant="h2" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                      25
                    </Typography>
                    <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: 'text.secondary' }}>
                      Players
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Link href="/history" style={{ textDecoration: 'none' }}>
                <Card hover className="cursor-pointer h-full">
                  <CardContent className="flex flex-col items-center justify-center py-4">
                    <Typography variant="h2" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                      29
                    </Typography>
                    <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: 'text.secondary' }}>
                      League Titles
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Link href="/stadium" style={{ textDecoration: 'none' }}>
                <Card hover className="cursor-pointer h-full">
                  <CardContent className="flex flex-col items-center justify-center py-4">
                    <Typography variant="h2" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                      22,859
                    </Typography>
                    <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: 'text.secondary' }}>
                      Capacity
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Link href="#" style={{ textDecoration: 'none' }}>
                <Card hover className="cursor-pointer h-full">
                  <CardContent className="flex flex-col items-center justify-center py-4">
                    <Typography variant="h2" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                      Forum
                    </Typography>
                    <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: 'text.secondary' }}>
                      Join Fan Forum
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
