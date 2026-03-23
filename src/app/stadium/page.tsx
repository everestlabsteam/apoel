import { Hero } from '@/components/ui/hero-mui';
import { Box, Typography, Container, Grid, Card, CardContent, Button as MuiButton } from '@mui/material';
import { stadiumInfo } from '@/data/stadium';
import { theme } from '@/lib/theme';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GSP Stadium | APOEL FC Fan Portal',
  description: 'The home of APOEL FC — Nicosia\'s iconic football arena. Visit us for unforgettable match days.',
};

export default function StadiumPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Hero
        title="GSP Stadium"
        subtitle="The home of APOEL FC — Nicosia's iconic football arena"
        className="py-12 md:py-20"
      />

      {/* Stadium Info */}
      <Box component="section" sx={{ py: 12, backgroundColor: theme.palette.background.default }}>
        <Container>
          <Grid container spacing={8}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ backgroundColor: theme.palette.background.paper }}>
                <CardContent sx={{ p: 8 }}>
                  <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 700, color: theme.palette.text.primary, mb: 6 }}>
                    Stadium Facts
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid #2A2A2A`, pb: 4 }}>
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                        Capacity
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
                        {stadiumInfo.capacity.toLocaleString()}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid #2A2A2A`, pb: 4 }}>
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                        Opened
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
                        {stadiumInfo.opened}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid #2A2A2A`, pb: 4 }}>
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                        Location
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
                        {stadiumInfo.location}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid #2A2A2A`, pb: 4 }}>
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                        Home To
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
                        {stadiumInfo.homeTo.join(' & ')}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ backgroundColor: theme.palette.background.paper }}>
                <CardContent sx={{ p: 8 }}>
                  <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 700, color: theme.palette.text.primary, mb: 6 }}>
                    Visit Us
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <Box>
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 1 }}>
                        Address
                      </Typography>
                      <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
                        Stadium Avenue
                      </Typography>
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                        Nicosia, Cyprus
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 1 }}>
                        Parking
                      </Typography>
                      <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
                        Available on match days
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 1 }}>
                        Public Transport
                      </Typography>
                      <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
                        Bus lines 171, 172, 173
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stadium Gallery */}
      <Box component="section" sx={{ py: 12, backgroundColor: theme.palette.background.paper }}>
        <Container>
          <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 700, color: theme.palette.text.primary, mb: 8 }}>
            Stadium Gallery
          </Typography>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box sx={{ aspectRatio: '16/9', backgroundColor: `${theme.palette.primary.main}10`, borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                  Match Day Atmosphere
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box sx={{ aspectRatio: '16/9', backgroundColor: `${theme.palette.primary.main}10`, borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                  Pitch View
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box sx={{ aspectRatio: '16/9', backgroundColor: `${theme.palette.primary.main}10`, borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                  Stadium Exterior
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Ticket Info */}
      <Box component="section" sx={{ py: 12, backgroundColor: theme.palette.background.default }}>
        <Container>
          <Card sx={{ backgroundColor: theme.palette.background.paper }}>
            <CardContent sx={{ p: 8, textAlign: 'center' }}>
              <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 700, color: theme.palette.text.primary, mb: 4 }}>
                Plan Your Visit
              </Typography>
              <Typography variant="body1" sx={{ color: theme.palette.text.secondary, maxWidth: '48rem', mx: 'auto', mb: 8 }}>
                Experience the roar of 22,859 fans at GSP Stadium. Ticket sales open
                7 days before each match. Arrive early to enjoy the pre-match atmosphere.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 4, justifyContent: 'center' }}>
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
                  Buy Tickets
                </MuiButton>
                <MuiButton
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    px: 6,
                    py: 1.5,
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: `${theme.palette.primary.main}10`,
                      borderColor: theme.palette.primary.main,
                    },
                  }}
                >
                  Group Bookings
                </MuiButton>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </Box>
  );
}
