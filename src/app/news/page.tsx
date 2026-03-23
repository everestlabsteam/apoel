import { Hero } from '@/components/ui/hero-mui';
import { Box, Typography, Container, Grid, Card, CardContent, Button as MuiButton, CardMedia } from '@mui/material';
import Link from 'next/link';
import { theme } from '@/lib/theme';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News | APOEL FC Fan Portal',
  description: 'Stay updated with the latest APOEL FC news and announcements. Squad signings, stadium updates, and club news.',
};

export default function NewsPage() {
  const news = [
    {
      title: 'APOEL FC Announces 2025–26 Squad Signings',
      excerpt: 'The club makes three key additions to the squad ahead of the new season.',
      date: 'March 15, 2026',
      image: '/news/squad-signings.jpg',
    },
    {
      title: 'GSP Stadium Renovation Complete',
      excerpt: 'Modern upgrades to fan facilities and VIP areas for the upcoming season.',
      date: 'March 10, 2026',
      image: '/news/stadium-renovation.jpg',
    },
    {
      title: 'APOEL FC Foundation Launches Youth Program',
      excerpt: 'New initiative to nurture the next generation of Cypriot football talent.',
      date: 'March 5, 2026',
      image: '/news/youth-program.jpg',
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Hero
        title="Latest News"
        subtitle="Stay updated with the latest APOEL FC news and announcements"
        className="py-12 md:py-20"
      />

      {/* News Grid */}
      <Box component="section" sx={{ py: 12, backgroundColor: theme.palette.background.default }}>
        <Container>
          <Grid container spacing={8}>
            {news.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: theme.palette.background.paper,
                    '&:hover': {
                      boxShadow: 4,
                      transform: 'translateY(-4px)',
                      transition: 'all 0.3s ease',
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 180,
                      backgroundColor: `${theme.palette.primary.main}10`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                    }}
                  >
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      Image {index + 1}
                    </Typography>
                  </Box>
                  <CardContent sx={{ p: 4, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="caption" sx={{ color: theme.palette.primary.main, fontWeight: 700, mb: 2 }}>
                      {item.date}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                        mb: 2,
                        '&:hover': {
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 4, flex: 1 }}>
                      {item.excerpt}
                    </Typography>
                    <MuiButton
                      variant="text"
                      sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        p: 0,
                        '&:hover': {
                          backgroundColor: 'transparent',
                        },
                      }}
                    >
                      Read More →
                    </MuiButton>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Archive Section */}
      <Box component="section" sx={{ py: 12, backgroundColor: theme.palette.background.paper }}>
        <Container sx={{ textAlign: 'center' }}>
          <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 700, color: theme.palette.text.primary, mb: 4 }}>
            News Archive
          </Typography>
          <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mb: 8 }}>
            Browse our complete archive of news articles, press releases, and
            announcements.
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
            View All News
          </MuiButton>
        </Container>
      </Box>
    </Box>
  );
}
