import React from 'react';
import Link from 'next/link';
import { Box, Container, Typography, Grid, Button as MuiButton } from '@mui/material';
import { theme } from '@/lib/theme';
import { Facebook, Twitter, Instagram, Globe } from 'lucide-react';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: `1px solid #2A2A2A`,
        backgroundColor: theme.palette.background.default,
        py: 12,
      }}
    >
      <Container>
        <Grid container spacing={8} sx={{ mb: 8 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component={Link}
              href="/"
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                textDecoration: 'none', 
                color: 'inherit', 
                marginBottom: 2 
              }}
            >
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1,
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.5rem', color: theme.palette.text.primary }}>
                APOEL
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary, maxWidth: 400 }}>
              APOEL Football Club — Cyprus's most successful football club.
              Join us in celebrating our legacy and supporting our team.
            </Typography>
            <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box component={Globe} size={16} sx={{ color: theme.palette.text.secondary }} />
              <Box
                component="a"
                href="https://apoelfc.com.cy"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: 'none',
                  color: theme.palette.text.secondary,
                  fontSize: '0.875rem',
                  '&:hover': { color: theme.palette.primary.main },
                }}
              >
                apoelfc.com.cy
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: theme.palette.text.primary, mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box
                component={Link}
                href="/squad"
                sx={{
                  textDecoration: 'none',
                  color: theme.palette.text.secondary,
                  fontSize: '0.875rem',
                  '&:hover': { color: theme.palette.primary.main },
                }}
              >
                Squad
              </Box>
              <Box
                component={Link}
                href="/fixtures"
                sx={{
                  textDecoration: 'none',
                  color: theme.palette.text.secondary,
                  fontSize: '0.875rem',
                  '&:hover': { color: theme.palette.primary.main },
                }}
              >
                Fixtures
              </Box>
              <Box
                component={Link}
                href="/history"
                sx={{
                  textDecoration: 'none',
                  color: theme.palette.text.secondary,
                  fontSize: '0.875rem',
                  '&:hover': { color: theme.palette.primary.main },
                }}
              >
                History
              </Box>
              <Box
                component={Link}
                href="/stadium"
                sx={{
                  textDecoration: 'none',
                  color: theme.palette.text.secondary,
                  fontSize: '0.875rem',
                  '&:hover': { color: theme.palette.primary.main },
                }}
              >
                Stadium
              </Box>
              <Box
                component={Link}
                href="/news"
                sx={{
                  textDecoration: 'none',
                  color: theme.palette.text.secondary,
                  fontSize: '0.875rem',
                  '&:hover': { color: theme.palette.primary.main },
                }}
              >
                News
              </Box>
              <Box
                component={Link}
                href="/tickets"
                sx={{
                  textDecoration: 'none',
                  color: theme.palette.text.secondary,
                  fontSize: '0.875rem',
                  '&:hover': { color: theme.palette.primary.main },
                }}
              >
                Tickets
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: theme.palette.text.primary, mb: 2 }}>
              Official Site
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box
                component="a"
                href="https://apoelfc.com.cy"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: 'none',
                  color: theme.palette.text.secondary,
                  fontSize: '0.875rem',
                  '&:hover': { color: theme.palette.primary.main },
                }}
              >
                apoelfc.com.cy
              </Box>
              <MuiButton variant="outlined" size="small" sx={{ mt: 2 }}>
                Buy Tickets
              </MuiButton>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: theme.palette.text.primary, mb: 2 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box
                component="a"
                href="https://facebook.com/APOEL"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: 'none',
                  color: theme.palette.text.secondary,
                  fontSize: '0.875rem',
                  '&:hover': { color: theme.palette.primary.main },
                }}
              >
                Facebook
              </Box>
              <Box
                component="a"
                href="https://twitter.com/APOEL_FC"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: 'none',
                  color: theme.palette.text.secondary,
                  fontSize: '0.875rem',
                  '&:hover': { color: theme.palette.primary.main },
                }}
              >
                Twitter
              </Box>
              <Box
                component="a"
                href="https://instagram.com/APOEL_FC"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: 'none',
                  color: theme.palette.text.secondary,
                  fontSize: '0.875rem',
                  '&:hover': { color: theme.palette.primary.main },
                }}
              >
                Instagram
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: `1px solid #2A2A2A`,
            pt: 8,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
            © APOEL FC 1926–2026. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Box
              component="a"
              href="https://facebook.com/APOEL"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: theme.palette.text.secondary,
                '&:hover': { color: theme.palette.primary.main },
                textDecoration: 'none',
              }}
            >
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </Box>
            <Box
              component="a"
              href="https://twitter.com/APOEL_FC"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: theme.palette.text.secondary,
                '&:hover': { color: theme.palette.primary.main },
                textDecoration: 'none',
              }}
            >
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Box>
            <Box
              component="a"
              href="https://instagram.com/APOEL_FC"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: theme.palette.text.secondary,
                '&:hover': { color: theme.palette.primary.main },
                textDecoration: 'none',
              }}
            >
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
