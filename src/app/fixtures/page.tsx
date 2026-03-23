import { Hero } from '@/components/ui/hero-mui';
import { MatchCard } from '@/components/ui/match-card-mui';
import { Box, Typography, Container, Card, CardContent, Button as MuiButton } from '@mui/material';
import { theme } from '@/lib/theme';
import { nextMatch, recentMatches } from '@/data/matches';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fixtures & Results | APOEL FC Fan Portal',
  description: 'Follow APOEL FC through every match of the 2025–26 season. Check fixtures, results, and league standings.',
};

export default function FixturesPage() {
  const upcomingMatches = nextMatch ? [nextMatch] : [];
  const allMatches = [...recentMatches];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Hero
        title="Fixtures & Results"
        subtitle="Follow APOEL FC through every match of the 2025–26 season"
        className="py-12 md:py-20"
      />

      {/* Next Match */}
      <Box component="section" sx={{ py: 12, backgroundColor: theme.palette.background.default }}>
        <Container>
          <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 700, color: theme.palette.text.primary, mb: 8 }}>
            Next Match
          </Typography>
          <Box sx={{ maxWidth: '48rem', mx: 'auto' }}>
            {upcomingMatches.map((match, index) => (
              <MatchCard
                key={index}
                date={match.date}
                homeTeam={match.homeTeam}
                awayTeam={match.awayTeam}
                score={match.score}
                competition={match.competition}
                venue={match.venue}
                status={match.status}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Recent Results */}
      <Box component="section" sx={{ py: 12, backgroundColor: theme.palette.background.paper }}>
        <Container>
          <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 700, color: theme.palette.text.primary, mb: 8 }}>
            Recent Results
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {allMatches.map((match, index) => (
              <MatchCard
                key={index}
                date={match.date}
                homeTeam={match.homeTeam}
                awayTeam={match.awayTeam}
                score={match.score}
                competition={match.competition}
                venue={match.venue}
                status={match.status}
                result={match.result}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Season Calendar */}
      <Box component="section" sx={{ py: 12, backgroundColor: theme.palette.background.default }}>
        <Container>
          <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 700, color: theme.palette.text.primary, mb: 8 }}>
            Season Calendar
          </Typography>
          <Card sx={{ backgroundColor: theme.palette.background.paper }}>
            <CardContent sx={{ p: 8 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mb: 6 }}>
                  Download the full 2025–26 season calendar and never miss a match.
                </Typography>
                <MuiButton
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: '#FFFFFF',
                    px: 6,
                    py: 1.5,
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: '#d67c0d',
                    },
                  }}
                >
                  Download Calendar
                </MuiButton>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </Box>
  );
}
