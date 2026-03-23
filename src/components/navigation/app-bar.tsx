'use client';

import React from 'react';
import { AppBar, Toolbar, Typography, Box, Container, Grid } from '@mui/material';
import Link from 'next/link';
import { MobileMenu } from '@/components/navigation/mobile-menu';

interface AppBarProps {
  className?: string;
}

export function AppBarComponent({ className }: AppBarProps) {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Squad', href: '/squad' },
    { label: 'Fixtures', href: '/fixtures' },
    { label: 'History', href: '/history' },
    { label: 'Stadium', href: '/stadium' },
    { label: 'News', href: '/news' },
    { label: 'Tickets', href: '/tickets' },
  ];

  const headerStyle = {
    backgroundColor: '#0A0A0A',
    color: '#FFFFFF',
    boxShadow: 'none',
    borderBottom: '1px solid #2A2A2A',
  };

  const toolbarStyle = {
    minHeight: 64,
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    color: '#FFFFFF',
    textDecoration: 'none',
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

  const navLinksStyle = {
    display: { xs: 'none', md: 'flex' },
    alignItems: 'center',
    gap: 32,
  };

  const navLinkStyle = {
    color: '#FFFFFF',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '0.875rem',
    transition: 'color 0.2s ease',
    '&:hover': {
      color: '#F7941D',
    },
  };

  const mobileMenuContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  };

  return (
    <AppBar position="sticky" sx={headerStyle} className={className}>
      <Toolbar sx={toolbarStyle}>
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid size={{ xs: 'auto', md: 'auto' }}>
              <Link href="/" style={logoStyle}>
                <Box sx={logoIconStyle} />
                <Typography variant="h6" sx={logoTextStyle}>
                  APOEL
                </Typography>
              </Link>
            </Grid>

            <Grid size={{ xs: 'auto', md: 'auto' }}>
              <Box sx={navLinksStyle}>
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} style={navLinkStyle as any}>
                    {item.label}
                  </Link>
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 'auto', md: 'auto' }}>
              <Box sx={mobileMenuContainerStyle}>
                <MobileMenu />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
