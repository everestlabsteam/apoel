import { Hero } from '@/components/ui/hero-mui';
import { PlayerCard } from '@/components/ui/player-card-mui';
import { squad } from '@/data/squad';
import { Box, Typography, Container, Grid, Button as MuiButton } from '@mui/material';
import { theme } from '@/lib/theme';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '2025–26 Squad | APOEL FC Fan Portal',
  description: 'Meet the players who make history every season. Full 2025–26 APOEL FC squad with jersey numbers and positions.',
};

export default function SquadPage() {
  const positions = ['goalkeepers', 'defenders', 'midfielders', 'forwards'];
  const positionLabels = {
    goalkeepers: 'Goalkeepers',
    defenders: 'Defenders',
    midfielders: 'Midfielders',
    forwards: 'Forwards',
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Hero
        title="2025–26 Squad"
        subtitle="Meet the players who make history every season"
        className="py-12 md:py-20"
      />

      {/* Squad Section */}
      <Box component="section" sx={{ py: 12, backgroundColor: theme.palette.background.default }}>
        <Container>
          {positions.map((position) => (
            <Box key={position} sx={{ mb: 12 }}>
              <Typography 
                variant="h2" 
                sx={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 700, 
                  color: theme.palette.primary.main,
                  mb: 4,
                }}
              >
                {positionLabels[position as keyof typeof positionLabels]}
              </Typography>
              <Grid container spacing={4}>
                {squad[position as keyof typeof squad].map((player) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={player.number}>
                    <PlayerCard
                      number={player.number}
                      name={player.name}
                      position={player.position}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Container>
      </Box>

      {/* Fan Shop Section */}
      <Box component="section" sx={{ py: 12, backgroundColor: theme.palette.background.paper }}>
        <Container sx={{ textAlign: 'center' }}>
          <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 700, color: theme.palette.text.primary, mb: 4 }}>
            Buy Your Jersey
          </Typography>
          <Typography variant="body1" sx={{ color: theme.palette.text.secondary, maxWidth: '48rem', mx: 'auto', mb: 8 }}>
            Show your support for the club with our official 2025–26 replica jerseys.
            Available for all squad members.
          </Typography>
          <a href="https://orangeshop.com.cy" style={{ textDecoration: 'none' }}>
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
              Buy Jersey
            </MuiButton>
          </a>
        </Container>
      </Box>
    </Box>
  );
}
