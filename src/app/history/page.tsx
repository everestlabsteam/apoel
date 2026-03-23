import { Hero } from '@/components/ui/hero-mui';
import { TimelineItem } from '@/components/ui/timeline-item-mui';
import { Box, Typography, Container, Grid, Card, CardContent, Button as MuiButton } from '@mui/material';
import { theme } from '@/lib/theme';
import { historyEras } from '@/data/history';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'History | APOEL FC Fan Portal',
  description: 'From 1926 to 29 league titles — the story of APOEL FC. Join us in celebrating our legacy and rich football history.',
};

export default function HistoryPage() {
  // Flatten history eras for timeline
  const timelineItems = historyEras.flatMap(era =>
    era.items.map((item, index) => ({
      ...item,
      eraTitle: era.title,
      index: index,
    }))
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Hero
        title="A Legacy of Excellence"
        subtitle="From 1926 to 29 league titles — the story of APOEL FC"
        className="py-12 md:py-20"
      />

      {/* Quick Stats */}
      <Box component="section" sx={{ py: 12, backgroundColor: theme.palette.background.default }}>
        <Container>
          <Grid container spacing={4}>
            <Grid size={{ md: 4 }}>
              <Card sx={{ backgroundColor: theme.palette.background.paper, textAlign: 'center' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h2" sx={{ fontWeight: 700, color: theme.palette.primary.main, mb: 1 }}>
                    1926
                  </Typography>
                  <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: theme.palette.text.secondary }}>
                    Founded
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ md: 4 }}>
              <Card sx={{ backgroundColor: theme.palette.background.paper, textAlign: 'center' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h2" sx={{ fontWeight: 700, color: theme.palette.primary.main, mb: 1 }}>
                    29
                  </Typography>
                  <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: theme.palette.text.secondary }}>
                    League Titles
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ md: 4 }}>
              <Card sx={{ backgroundColor: theme.palette.background.paper, textAlign: 'center' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h2" sx={{ fontWeight: 700, color: theme.palette.primary.main, mb: 1 }}>
                    Quarter-Finals
                  </Typography>
                  <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: theme.palette.text.secondary }}>
                    Champions League
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Timeline */}
      <Box component="section" sx={{ py: 12, backgroundColor: theme.palette.background.paper }}>
        <Container>
          <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 700, color: theme.palette.text.primary, mb: 12 }}>
            29 League Titles Timeline
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {timelineItems.map((item, index) => (
              <TimelineItem
                key={`${item.eraTitle}-${item.date}`}
                title={item.eraTitle}
                date={item.date}
                description={item.description}
                eraTitle={item.eraTitle}
                index={index}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Champions League Journey */}
      <Box component="section" sx={{ py: 12, backgroundColor: theme.palette.background.default }}>
        <Container>
          <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 700, color: theme.palette.text.primary, mb: 8 }}>
            European Glory
          </Typography>
          <Card sx={{ backgroundColor: theme.palette.background.paper }}>
            <CardContent sx={{ p: 8 }}>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 8 }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h3" sx={{ fontSize: '1.5rem', fontWeight: 700, color: theme.palette.text.primary, mb: 4 }}>
                    2011–12 UEFA Champions League
                  </Typography>
                  <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mb: 6 }}>
                    APOEL made history by becoming the first Cypriot club to reach the
                    quarter-finals of the UEFA Champions League. Our journey included
                    memorable victories over Rosenborg, Panathinaikos, and Real Madrid
                    in the Round of 32.
                  </Typography>
                  <MuiButton variant="contained" sx={{ backgroundColor: theme.palette.primary.main, color: '#FFFFFF', '&:hover': { backgroundColor: '#d67c0d' } }}>
                    Read Full Story
                  </MuiButton>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Box sx={{ backgroundColor: `${theme.palette.primary.main}10`, borderRadius: '0.5rem', p: 6, textAlign: 'center' }}>
                    <Typography variant="h1" sx={{ fontWeight: 700, color: theme.palette.primary.main, mb: 2 }}>
                      8
                    </Typography>
                    <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: theme.palette.text.secondary }}>
                      Matches Played
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Club Stats */}
      <Box component="section" sx={{ py: 12, backgroundColor: theme.palette.background.default }}>
        <Container>
          <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 700, color: theme.palette.text.primary, mb: 8 }}>
            Club Statistics
          </Typography>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Card sx={{ backgroundColor: theme.palette.background.paper, textAlign: 'center' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h2" sx={{ fontWeight: 700, color: theme.palette.primary.main, mb: 1 }}>
                    29
                  </Typography>
                  <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: theme.palette.text.secondary }}>
                    League Titles
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Card sx={{ backgroundColor: theme.palette.background.paper, textAlign: 'center' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h2" sx={{ fontWeight: 700, color: theme.palette.primary.main, mb: 1 }}>
                    21
                  </Typography>
                  <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: theme.palette.text.secondary }}>
                    Cups
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Card sx={{ backgroundColor: theme.palette.background.paper, textAlign: 'center' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h2" sx={{ fontWeight: 700, color: theme.palette.primary.main, mb: 1 }}>
                    13
                  </Typography>
                  <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: theme.palette.text.secondary }}>
                    Super Cups
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Card sx={{ backgroundColor: theme.palette.background.paper, textAlign: 'center' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h2" sx={{ fontWeight: 700, color: theme.palette.primary.main, mb: 1 }}>
                    1
                  </Typography>
                  <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: theme.palette.text.secondary }}>
                    CL Quarter-Finals
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
