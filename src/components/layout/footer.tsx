'use client';

import React from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  Link as MuiLink,
  Button
} from '@mui/material';
import Link from 'next/link';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerStyle = {
    backgroundColor: '#0A0A0A',
    borderTop: '1px solid #2A2A2A',
    color: '#FFFFFF',
    py: { xs: 4, sm: 6 },
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    color: '#FFFFFF',
    textDecoration: 'none',
    marginBottom: 16,
  };

  const logoIconStyle = {
    width: 32,
    height: 32,
    backgroundColor: '#F7941D',
    borderRadius: 4,
  };

  const logoTextStyle = {
    fontWeight: 700,
    fontSize: '1.5rem',
    color: '#FFFFFF',
  };

  const descriptionStyle = {
    color: '#B0B0B0',
    fontSize: '0.875rem',
    maxWidth: 400,
  };

  const sectionTitleStyle = {
    fontWeight: 700,
    fontSize: '1rem',
    color: '#FFFFFF',
    marginBottom: 16,
  };

  const linkStyle = {
    color: '#B0B0B0',
    textDecoration: 'none',
    fontSize: '0.875rem',
    transition: 'color 0.2s ease',
    display: 'block',
    marginBottom: 8,
    '&:hover': {
      color: '#F7941D',
    },
  };

  const socialLinkStyle = {
    color: '#B0B0B0',
    textDecoration: 'none',
    fontSize: '0.875rem',
    transition: 'color 0.2s ease',
    '&:hover': {
      color: '#F7941D',
    },
  };

  const bottomSectionStyle = {
    borderTop: '1px solid #2A2A2A',
    paddingTop: { xs: 3, sm: 4 },
    marginTop: { xs: 4, sm: 6 },
  };

  const copyrightStyle = {
    color: '#B0B0B0',
    fontSize: '0.875rem',
    marginBottom: { xs: 2, sm: 0 },
  };

  const socialContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  };

  const quickLinks = [
    { label: 'Squad', href: '/squad' },
    { label: 'Fixtures', href: '/fixtures' },
    { label: 'History', href: '/history' },
    { label: 'Stadium', href: '/stadium' },
    { label: 'News', href: '/news' },
    { label: 'Tickets', href: '/tickets' },
  ];

  return (
    <footer className={className} style={footerStyle}>
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Link href="/" style={logoStyle}>
              <Box sx={logoIconStyle} />
              <Typography variant="h5" sx={logoTextStyle}>
                APOEL
              </Typography>
            </Link>
            <Typography variant="body2" sx={descriptionStyle}>
              APOEL Football Club — Cyprus's most successful football club.
              Join us in celebrating our legacy and supporting our team.
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <Typography variant="subtitle1" sx={sectionTitleStyle}>
              Quick Links
            </Typography>
            <Box>
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} style={linkStyle}>
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Official Site Section */}
          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <Typography variant="subtitle1" sx={sectionTitleStyle}>
              Official Site
            </Typography>
            <Box>
              <MuiLink
                href="https://apoelfc.com.cy"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                apoelfc.com.cy
              </MuiLink>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  width: '100%',
                  mt: 1,
                  borderColor: '#2A2A2A',
                  color: '#FFFFFF',
                  '&:hover': {
                    borderColor: '#F7941D',
                    backgroundColor: 'rgba(247, 148, 29, 0.08)',
                  },
                }}
              >
                Buy Tickets
              </Button>
            </Box>
          </Grid>

          {/* Social Links Section */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="subtitle1" sx={sectionTitleStyle}>
              Follow Us
            </Typography>
            <Box sx={socialContainerStyle}>
              <MuiLink href="#" style={socialLinkStyle}>
                Facebook
              </MuiLink>
              <MuiLink href="#" style={socialLinkStyle}>
                Twitter / X
              </MuiLink>
              <MuiLink href="#" style={socialLinkStyle}>
                Instagram
              </MuiLink>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box sx={bottomSectionStyle}>
          <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
            <Grid size={{ xs: 12, md: 'auto' }}>
              <Typography variant="body2" sx={copyrightStyle}>
                © {currentYear} APOEL Football Club. All rights reserved.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 'auto' }}>
              <Box sx={socialContainerStyle}>
                <MuiLink href="#" style={socialLinkStyle}>
                  Facebook
                </MuiLink>
                <MuiLink href="#" style={socialLinkStyle}>
                  Twitter / X
                </MuiLink>
                <MuiLink href="#" style={socialLinkStyle}>
                  Instagram
                </MuiLink>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </footer>
  );
}
