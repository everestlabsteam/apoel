import React from 'react';
import { Box, Container, Typography, Button as MuiButton } from '@mui/material';
import { theme } from '@/lib/theme';

interface HeroProps {
  title?: string;
  subtitle?: string;
  cta?: {
    label: string;
    href: string;
  }[];
  image?: string;
  className?: string;
  showCrest?: boolean;
  crestAlt?: string;
  tagline?: string;
}

export function Hero({ 
  title, 
  subtitle, 
  cta, 
  image, 
  className,
  showCrest = true,
  crestAlt = 'APOEL FC Crest',
  tagline = 'Θρύλος'
}: HeroProps) {
  return (
    <Box 
      sx={{ 
        position: 'relative', 
        overflow: 'hidden', 
        backgroundColor: theme.palette.background.default,
        className,
      }}
    >
      {image && (
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <img
            src={image}
            alt="Hero background"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.3,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(10,10,10,0.5), rgba(10,10,10,1))',
            }}
          />
        </Box>
      )}
      <Container 
        sx={{ 
          position: 'relative', 
          zIndex: 1, 
          py: { xs: 6, md: 12 },
          px: { xs: 2, md: 4 },
        }}
      >
        <Box sx={{ maxWidth: '60rem', mx: 'auto', textAlign: 'center' }}>
          {showCrest && (
            <Box sx={{ mb: 4, display: 'inline-block', p: 4, backgroundColor: '#111111', borderRadius: '50%' }}>
              <svg 
                viewBox="0 0 100 100" 
                fill="none"
                style={{
                  width: '4rem',
                  height: '4rem',
                  color: theme.palette.primary.main,
                }}
              >
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" />
                <path d="M50 20V80M20 50H80" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" />
                <path d="M50 35V65M35 50H65" stroke="currentColor" strokeWidth="1" strokeOpacity={0.5} />
              </svg>
            </Box>
          )}
          {tagline && (
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 700, 
                color: theme.palette.primary.main, 
                mb: 4, 
                letterSpacing: '0.2em', 
                textTransform: 'uppercase',
                fontSize: { xs: '1rem', md: '1.25rem' }
              }}
            >
              {tagline}
            </Typography>
          )}
          {title && (
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 700, 
                mb: 6, 
                color: theme.palette.text.primary,
                fontSize: { xs: '2.5rem', md: '3.75rem' },
                letterSpacing: '-0.02em',
              }}
            >
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography 
              variant="h5" 
              sx={{ 
                color: theme.palette.text.secondary, 
                mb: 8,
                fontSize: { xs: '1.25rem', md: '1.5rem' }
              }}
            >
              {subtitle}
            </Typography>
          )}
          {cta && (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
              {cta.map((item, index) => (
                <MuiButton 
                  key={index} 
                  variant="contained" 
                  size="large"
                  sx={{ 
                    backgroundColor: theme.palette.primary.main,
                    '&:hover': {
                      backgroundColor: theme.palette.primary.dark,
                    },
                  }}
                  href={item.href}
                >
                  {item.label}
                </MuiButton>
              ))}
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}
